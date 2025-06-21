
import React from 'react';
import { ArrowDown, ArrowUp, FileText } from 'lucide-react';

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Payment Dashboard</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Balance Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Stablecoin Balance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">UC</span>
                    </div>
                    <span className="font-medium">USDC</span>
                  </div>
                  <span className="font-bold text-lg">$12,450.00</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-teal-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">UT</span>
                    </div>
                    <span className="font-medium">USDT</span>
                  </div>
                  <span className="font-bold text-lg">$8,730.50</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-xl hover:opacity-90 transition-opacity">
                  <ArrowUp size={20} />
                  <span>Send Payment</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 py-3 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all">
                  <ArrowDown size={20} />
                  <span>Request Payment</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Transaction History */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Recent Transactions</h3>
                <button className="text-blue-600 hover:text-blue-800 transition-colors">View All</button>
              </div>
              
              <div className="space-y-4">
                {[
                  { id: 1, type: 'sent', amount: '$2,500.00', to: 'merchant@example.com', status: 'completed', time: '2 min ago' },
                  { id: 2, type: 'received', amount: '$1,200.00', from: 'client@company.com', status: 'completed', time: '1 hour ago' },
                  { id: 3, type: 'sent', amount: '$850.00', to: 'supplier@global.com', status: 'processing', time: '3 hours ago' },
                  { id: 4, type: 'received', amount: '$3,200.00', from: 'partner@international.com', status: 'completed', time: '1 day ago' },
                ].map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'sent' ? 'bg-red-100' : 'bg-green-100'
                      }`}>
                        {tx.type === 'sent' ? (
                          <ArrowUp className="text-red-600" size={20} />
                        ) : (
                          <ArrowDown className="text-green-600" size={20} />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">
                          {tx.type === 'sent' ? `Sent to ${tx.to}` : `Received from ${tx.from}`}
                        </p>
                        <p className="text-sm text-gray-500">{tx.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${tx.type === 'sent' ? 'text-red-600' : 'text-green-600'}`}>
                        {tx.type === 'sent' ? '-' : '+'}{tx.amount}
                      </p>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        tx.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {tx.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
