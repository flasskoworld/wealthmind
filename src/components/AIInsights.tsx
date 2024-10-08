import React from 'react';
import { Brain } from 'lucide-react';

const AIInsights: React.FC = () => {
  const insights = [
    "Based on your risk profile, consider increasing your exposure to emerging markets like crypto, tokenized assets, and DePIN.",
    "Your portfolio's tech allocation is overweight. Consider rebalancing into oil, or energy for better diversification.",
    "Upcoming earnings reports for your top holdings suggest potential volatility. Stay alert.",
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Brain className="mr-2" /> AI Insights
      </h2>
      <ul className="space-y-4">
        {insights.map((insight, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <p className="text-gray-700">{insight}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AIInsights;