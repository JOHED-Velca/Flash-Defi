
import React, { useState } from 'react';

const SendPayment = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [currency, setCurrency] = useState('USDC');

  return (
    <section id="send" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Send Payment</h2>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recipient Address/Email
                </label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="0x... or email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <div className="flex">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="px-4 py-3 border border-l-0 border-gray-300 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  >
                    <option value="USDC">USDC</option>
                    <option value="USDT">USDT</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Add a note for the recipient"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Send Payment
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">AI Route Optimization</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Fee:</span>
                  <span className="font-medium">$0.12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Settlement Time:</span>
                  <span className="font-medium text-green-600">~0.65 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Exchange Rate:</span>
                  <span className="font-medium">1 USDC = 1.00 USD</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    🧠 AI has selected the optimal route through Aptos native stablecoins 
                    for minimal fees and maximum speed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendPayment;
