
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Flash
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Instant Cross-Border
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Settlements
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Next-generation payment infrastructure powered by Aptos blockchain. 
            Sub-second settlements, minimal fees, and AI-optimized routing for global payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all transform hover:scale-105">
              Start Sending
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
              View Documentation
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sub-Second Settlement</h3>
            <p className="text-gray-600">Leverage Aptos's 19.2K TPS for instant global payments</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">💰</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Minimal Fees</h3>
            <p className="text-gray-600">Up to 90% cost reduction vs traditional banking rails</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">🧠</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Optimized</h3>
            <p className="text-gray-600">Machine learning determines optimal settlement paths</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
