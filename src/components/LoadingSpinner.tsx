import React from 'react';
import { Loader2, Shield } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Shield className="w-6 h-6 text-blue-600" />
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Checking security databases...
      </p>
    </div>
  );
};

export default LoadingSpinner;