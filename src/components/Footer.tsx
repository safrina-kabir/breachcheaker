import React from 'react';
import { Shield, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`border-t ${
      theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    } mt-16`}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-lg">BreachChecker</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A secure tool for checking email and password breaches using the Have I Been Pwned database.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://haveibeenpwned.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1"
                >
                  <span>Have I Been Pwned</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.troyhunt.com/ive-just-launched-pwned-passwords-version-2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1"
                >
                  <span>About Pwned Passwords</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.troyhunt.com/understanding-have-i-been-pwneds-use-of-sha-1-and-k-anonymity/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1"
                >
                  <span>K-Anonymity Explained</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Privacy</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• No data is stored or logged</li>
              <li>• Passwords are hashed locally</li>
              <li>• Only hash prefixes are sent to API</li>
              <li>• HTTPS encryption throughout</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for cybersecurity awareness</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;