import React from 'react';
import PortfolioSummary from './PortfolioSummary';
import AIInsights from './AIInsights';
import InvestmentOpportunities from './InvestmentOpportunities';

const Dashboard: React.FC = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Financial Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PortfolioSummary />
        <AIInsights />
        <InvestmentOpportunities />
      </div>
    </main>
  );
};

export default Dashboard;