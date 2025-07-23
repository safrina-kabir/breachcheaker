import React, { useState } from 'react';
import { Moon, Sun, Shield, Mail, Lock, AlertTriangle, CheckCircle, Download, Info } from 'lucide-react';
import Header from './components/Header';
import EmailChecker from './components/EmailChecker';
import PasswordChecker from './components/PasswordChecker';
import SecurityTips from './components/SecurityTips';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'email' | 'password'>('email');

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            BreachChecker
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check if your email addresses or passwords have been compromised in data breaches using the Have I Been Pwned database.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className={`inline-flex rounded-lg p-1 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <button
              onClick={() => setActiveTab('email')}
              className={`inline-flex items-center px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'email'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Check
            </button>
            <button
              onClick={() => setActiveTab('password')}
              className={`inline-flex items-center px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'password'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              <Lock className="w-5 h-5 mr-2" />
              Password Check
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {activeTab === 'email' ? (
            <EmailChecker theme={theme} />
          ) : (
            <PasswordChecker theme={theme} />
          )}
          
          <SecurityTips theme={theme} />
        </div>
      </main>

      <Footer theme={theme} />
    </div>
  );
}

export default App;