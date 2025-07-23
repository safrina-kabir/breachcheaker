import React from 'react';
import { AlertTriangle, CheckCircle, Calendar, Database, Users, Shield } from 'lucide-react';

interface ResultsDisplayProps {
  results: any;
  theme: 'light' | 'dark';
  type: 'email' | 'password';
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results, theme, type }) => {
  if (type === 'email') {
    return (
      <div className="space-y-4">
        {results.breaches && results.breaches.length > 0 ? (
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
                {results.breaches.length} Breach{results.breaches.length !== 1 ? 'es' : ''} Found
              </h3>
            </div>
            
            <div className="space-y-4">
              {results.breaches.map((breach: any, index: number) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-red-900/20 border-red-700' 
                    : 'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-lg">{breach.Name}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(breach.BreachDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {breach.Description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span>{breach.PwnCount?.toLocaleString() || 'Unknown'} accounts</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Database className="w-4 h-4 text-gray-500" />
                      <span>{breach.DataClasses?.join(', ') || 'Various data types'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={`p-6 rounded-lg text-center ${
            theme === 'dark' 
              ? 'bg-green-900/20 border-green-700' 
              : 'bg-green-50 border-green-200'
          } border`}>
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
              No Breaches Found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your email address was not found in any known data breaches. Keep using strong, unique passwords!
            </p>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="space-y-4">
        {results.isPwned ? (
          <div className={`p-6 rounded-lg ${
            theme === 'dark' 
              ? 'bg-red-900/20 border-red-700' 
              : 'bg-red-50 border-red-200'
          } border`}>
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
                Password Compromised
              </h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This password has been found in <strong>{results.count.toLocaleString()}</strong> data breaches.
              You should change this password immediately.
            </p>
            
            <div className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h4 className="font-semibold mb-2">Recommendations:</h4>
              <ul className="text-sm space-y-1">
                <li>• Change this password immediately</li>
                <li>• Use a unique password for each account</li>
                <li>• Consider using a password manager</li>
                <li>• Enable two-factor authentication where possible</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className={`p-6 rounded-lg text-center ${
            theme === 'dark' 
              ? 'bg-green-900/20 border-green-700' 
              : 'bg-green-50 border-green-200'
          } border`}>
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
              Password Secure
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              This password was not found in any known data breaches. However, always use unique passwords for each account.
            </p>
          </div>
        )}
      </div>
    );
  }
};

export default ResultsDisplay;