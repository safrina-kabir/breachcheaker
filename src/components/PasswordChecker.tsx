import React, { useState } from 'react';
import { Lock, Search, AlertTriangle, CheckCircle, Eye, EyeOff, Loader2 } from 'lucide-react';
import { sha1Hash } from '../utils/crypto';
import { mockPasswordCheck } from '../utils/mockApi';
import ResultsDisplay from './ResultsDisplay';
import LoadingSpinner from './LoadingSpinner';

interface PasswordCheckerProps {
  theme: 'light' | 'dark';
}

const PasswordChecker: React.FC<PasswordCheckerProps> = ({ theme }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResults(null);

    if (password.length < 1) {
      setError('Please enter a password');
      return;
    }

    setLoading(true);
    
    try {
      // Hash the password using SHA-1 for k-anonymity
      const hashedPassword = await sha1Hash(password);
      const hashPrefix = hashedPassword.substring(0, 5);
      
      // In a real app, this would call your Flask backend
      // const response = await fetch('/api/check-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ hashPrefix })
      // });
      
      // Mock API call for demonstration
      const mockResults = await mockPasswordCheck(hashedPassword);
      setResults(mockResults);
    } catch (err) {
      setError('Unable to check password. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`rounded-xl p-6 ${
      theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } border shadow-lg`}>
      <div className="flex items-center mb-6">
        <Lock className="w-6 h-6 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold">Password Security Check</h2>
      </div>
      
      <div className={`p-4 rounded-lg mb-6 ${
        theme === 'dark' ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'
      } border`}>
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-blue-800 dark:text-blue-300">Privacy Protected</p>
            <p className="text-blue-600 dark:text-blue-400">
              Your password is hashed locally using SHA-1 before checking. Only the first 5 characters of the hash are sent to the API using k-anonymity.
            </p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Enter your password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 pr-12 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
              placeholder="Enter password to check"
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {error && (
          <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm">{error}</span>
          </div>
        )}
        
        <button
          type="submit"
          disabled={loading || !password}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Checking...</span>
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              <span>Check Password</span>
            </>
          )}
        </button>
      </form>
      
      {loading && <LoadingSpinner />}
      
      {results && (
        <div className="mt-6">
          <ResultsDisplay results={results} theme={theme} type="password" />
        </div>
      )}
    </div>
  );
};

export default PasswordChecker;