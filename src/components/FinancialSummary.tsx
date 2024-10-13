import React from 'react';
import { PieChart, DollarSign, TrendingUp } from 'lucide-react';

const FinancialSummary: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <PieChart className="mr-2" /> Financial Summary
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Assets:</span>
          <span className="text-xl font-bold text-green-600">$75,250</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Monthly Savings:</span>
          <span className="text-lg font-semibold text-blue-500">$1,250</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Expense Optimization:</span>
          <span className="text-lg font-semibold text-green-500">-$350 this month</span>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;
