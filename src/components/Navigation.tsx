
import React from 'react';
import { ArrowDown, ArrowUp, FileText } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Flash</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">Dashboard</a>
              <a href="#send" className="text-gray-700 hover:text-blue-600 transition-colors">Send</a>
              <a href="#receive" className="text-gray-700 hover:text-blue-600 transition-colors">Receive</a>
              <a href="#analytics" className="text-gray-700 hover:text-blue-600 transition-colors">Analytics</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
