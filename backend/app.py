"""
Flask Backend for BreachChecker Application
This file demonstrates how the backend would be implemented with Flask.

Note: This cannot run in WebContainer due to Python package limitations.
For production, deploy this to a platform like Heroku, Render, or Railway.
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import hashlib
import time
import os
import re
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuration
HIBP_API_KEY = os.getenv('HIBP_API_KEY')
HIBP_API_BASE = 'https://haveibeenpwned.com/api/v3'
HIBP_PASSWORD_API = 'https://api.pwnedpasswords.com/range'
RATE_LIMIT_DELAY = 1.5  # HIBP requires 1500ms between requests

def validate_email(email):
    """Validate email format"""
    pattern = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
    return re.match(pattern, email) is not None

def sanitize_input(input_str):
    """Basic input sanitization"""
    if not isinstance(input_str, str):
        return ''
    return input_str.strip()

@app.route('/api/check-email', methods=['POST'])
def check_email():
    """Check if email has been compromised in breaches"""
    try:
        data = request.json
        if not data or 'email' not in data:
            return jsonify({'error': 'Email is required'}), 400
        
        email = sanitize_input(data['email']).lower()
        
        if not validate_email(email):
            return jsonify({'error': 'Invalid email format'}), 400
        
        headers = {
            'User-Agent': 'BreachChecker-App',
            'hibp-api-key': HIBP_API_KEY
        }
        
        # Make request to HIBP API
        response = requests.get(
            f'{HIBP_API_BASE}/breachedaccount/{email}',
            headers=headers,
            timeout=10
        )
        
        # Rate limiting
        time.sleep(RATE_LIMIT_DELAY)
        
        if response.status_code == 200:
            breaches = response.json()
            return jsonify({'breaches': breaches})
        elif response.status_code == 404:
            return jsonify({'breaches': []})
        elif response.status_code == 429:
            return jsonify({'error': 'Rate limit exceeded. Please try again later.'}), 429
        else:
            return jsonify({'error': 'API request failed'}), 500
            
    except requests.exceptions.RequestException as e:
        return jsonify({'error': 'Service unavailable'}), 503
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/check-password', methods=['POST'])
def check_password():
    """Check if password has been pwned using k-anonymity"""
    try:
        data = request.json
        if not data or 'hashPrefix' not in data:
            return jsonify({'error': 'Hash prefix is required'}), 400
        
        hash_prefix = sanitize_input(data['hashPrefix']).upper()
        
        # Validate hash prefix format
        if not re.match(r'^[A-F0-9]{5}$', hash_prefix):
            return jsonify({'error': 'Invalid hash prefix format'}), 400
        
        # Get full hash for comparison (sent from frontend)
        full_hash = data.get('fullHash', '').upper()
        if not full_hash or len(full_hash) != 40:
            return jsonify({'error': 'Invalid full hash'}), 400
        
        # Make request to HIBP Password API
        response = requests.get(
            f'{HIBP_PASSWORD_API}/{hash_prefix}',
            timeout=10
        )
        
        if response.status_code == 200:
            # Parse response to find matching hash
            lines = response.text.strip().split('\n')
            hash_suffix = full_hash[5:]  # Remove the prefix
            
            for line in lines:
                if ':' in line:
                    suffix, count = line.split(':', 1)
                    if suffix.strip() == hash_suffix:
                        return jsonify({
                            'isPwned': True,
                            'count': int(count.strip())
                        })
            
            return jsonify({'isPwned': False, 'count': 0})
        else:
            return jsonify({'error': 'Password check failed'}), 500
            
    except requests.exceptions.RequestException as e:
        return jsonify({'error': 'Service unavailable'}), 503
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'service': 'BreachChecker API'})

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Endpoint not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)