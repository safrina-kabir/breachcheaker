import React, { useState } from 'react';
import { Mail, Search, AlertTriangle, CheckCircle, Download, Loader2 } from 'lucide-react';
import { validateEmail } from '../utils/validation';
import { mockEmailCheck } from '../utils/mockApi';
import ResultsDisplay from './ResultsDisplay';
import LoadingSpinner from './LoadingSpinner';

interface EmailCheckerProps {
  theme: 'light' | 'dark';
}

const EmailChecker: React.FC<EmailCheckerProps> = ({ theme }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResults(null);

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    
    try {
      // In a real app, this would call your Flask backend
      // const response = await fetch('/api/check-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      // Mock API call for demonstration
      const mockResults = await mockEmailCheck(email);
      setResults(mockResults);
    } catch (err) {
      setError('Unable to check email. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const downloadResults = () => {
    if (!results) return;
    
    const dataStr = JSON.stringify(results, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `breach-check-${email}-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className={`rounded-xl p-6 ${
      theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } border shadow-lg`}>
      <div className="flex items-center mb-6">
        <Mail className="w-6 h-6 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold">Email Address Check</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Enter your email address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
              placeholder="example@email.com"
              disabled={loading}
            />
            <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
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
          disabled={loading || !email}
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
              <span>Check Email</span>
            </>
          )}
        </button>
      </form>
      
      {loading && <LoadingSpinner />}
      
      {results && (
        <div className="mt-6 space-y-4">
          <ResultsDisplay results={results} theme={theme} type="email" />
          
          {results.breaches && results.breaches.length > 0 && (
            <button
              onClick={downloadResults}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Download Results</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default EmailChecker;