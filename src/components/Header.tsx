import React from 'react';
import { TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-8 w-8" />
          <span className="text-xl font-bold">WealthMind Dashboard</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-200">Dashboard</a></li>
            <li><a href="#" className="hover:text-blue-200">Investments</a></li>
            <li><a href="#" className="hover:text-blue-200">AI Insights</a></li>
            <li><a href="#" className="hover:text-blue-200">Profile</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;