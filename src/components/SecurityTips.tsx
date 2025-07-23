import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

interface SecurityTipsProps {
  theme: 'light' | 'dark';
}

const SecurityTips: React.FC<SecurityTipsProps> = ({ theme }) => {
  const tips = [
    {
      icon: Lock,
      title: 'Use Strong, Unique Passwords',
      description: 'Create complex passwords with a mix of letters, numbers, and symbols. Use a different password for each account.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Enable Two-Factor Authentication',
      description: 'Add an extra layer of security by enabling 2FA on all your important accounts.',
      color: 'green'
    },
    {
      icon: Eye,
      title: 'Use a Password Manager',
      description: 'Let a password manager generate and store strong, unique passwords for all your accounts.',
      color: 'purple'
    },
    {
      icon: AlertTriangle,
      title: 'Monitor Your Accounts',
      description: 'Regularly check your accounts for suspicious activity and sign up for breach notifications.',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30',
      green: 'text-green-600 bg-green-100 dark:bg-green-900/30',
      purple: 'text-purple-600 bg-purple-100 dark:bg-purple-900/30',
      orange: 'text-orange-600 bg-orange-100 dark:bg-orange-900/30'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className={`rounded-xl p-6 ${
      theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } border shadow-lg`}>
      <div className="flex items-center mb-6">
        <Shield className="w-6 h-6 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold">Security Best Practices</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <div key={index} className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${getColorClasses(tip.color)}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className={`mt-6 p-4 rounded-lg ${
        theme === 'dark' ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'
      } border`}>
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-blue-800 dark:text-blue-300">Stay Informed</p>
            <p className="text-blue-600 dark:text-blue-400">
              Regularly check your email addresses and update passwords for any compromised accounts. 
              Consider using services like Have I Been Pwned for ongoing monitoring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityTips;