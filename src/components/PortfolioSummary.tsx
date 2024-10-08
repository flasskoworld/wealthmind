import React from 'react';
import { PieChart, DollarSign, TrendingUp } from 'lucide-react';

const PortfolioSummary: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <PieChart className="mr-2" /> Portfolio Summary
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Value:</span>
          <span className="text-xl font-bold text-green-600">$125,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Daily Change:</span>
          <span className="text-lg font-semibold text-green-500">+$1,250 (1.01%)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Top Performing Asset:</span>
          <span className="text-lg font-semibold text-blue-600">AAPL +3.5%</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;