import React from 'react';
import { TrendingUp } from 'lucide-react';

const InvestmentOpportunities: React.FC = () => {
  const opportunities = [
    { name: "Green Energy ETF", potential: "+12% annual return", risk: "Moderate" },
    { name: "AI & Robotics Fund", potential: "+18% annual return", risk: "High" },
    { name: "Emerging Markets Bond", potential: "+8% annual return", risk: "Low" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <TrendingUp className="mr-2" /> Investment Opportunities
      </h2>
      <ul className="space-y-4">
        {opportunities.map((opportunity, index) => (
          <li key={index} className="border-b pb-2 last:border-b-0">
            <h3 className="font-semibold text-blue-600">{opportunity.name}</h3>
            <p className="text-sm text-gray-600">Potential: {opportunity.potential}</p>
            <p className="text-sm text-gray-600">Risk: {opportunity.risk}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentOpportunities;