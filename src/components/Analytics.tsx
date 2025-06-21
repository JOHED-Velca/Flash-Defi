
import React from 'react';

const Analytics = () => {
  return (
    <section id="analytics" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Network Analytics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.4M</div>
            <div className="text-sm text-gray-600">Total Volume (24h)</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1,247</div>
            <div className="text-sm text-gray-600">Transactions (24h)</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">0.65s</div>
            <div className="text-sm text-gray-600">Avg Settlement Time</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">$0.08</div>
            <div className="text-sm text-gray-600">Avg Transaction Fee</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Settlement Performance</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Success Rate</span>
                <span className="text-green-600 font-bold">99.97%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full w-[99.97%]"></div>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <span className="text-gray-600">Average Speed</span>
                <span className="text-blue-600 font-bold">0.65s</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-[95%]"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Global Reach</h3>
            <div className="space-y-3">
              {[
                { country: 'United States', volume: '$1.2M', percentage: 50 },
                { country: 'United Kingdom', volume: '$480K', percentage: 20 },
                { country: 'Singapore', volume: '$360K', percentage: 15 },
                { country: 'Germany', volume: '$240K', percentage: 10 },
                { country: 'Others', volume: '$120K', percentage: 5 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
                    <span className="text-sm font-medium">{item.country}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{item.volume}</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
