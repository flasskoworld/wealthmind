import React, { useState } from 'react';
import { TrendingUp, DollarSign } from 'lucide-react';

const InvestmentSimulator: React.FC = () => {
  const [portfolio, setPortfolio] = useState({
    cash: 10000,
    stocks: { AAPL: 0, GOOGL: 0, AMZN: 0 },
  });

  const [stockPrices, setStockPrices] = useState({
    AAPL: 150,
    GOOGL: 2800,
    AMZN: 3300,
  });

  const buyStock = (symbol: keyof typeof portfolio.stocks) => {
    if (portfolio.cash >= stockPrices[symbol]) {
      setPortfolio(prev => ({
        ...prev,
        cash: prev.cash - stockPrices[symbol],
        stocks: {
          ...prev.stocks,
          [symbol]: prev.stocks[symbol] + 1,
        },
      }));
    }
  };

  const sellStock = (symbol: keyof typeof portfolio.stocks) => {
    if (portfolio.stocks[symbol] > 0) {
      setPortfolio(prev => ({
        ...prev,
        cash: prev.cash + stockPrices[symbol],
        stocks: {
          ...prev.stocks,
          [symbol]: prev.stocks[symbol] - 1,
        },
      }));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <TrendingUp className="mr-2" /> Investment Simulator
      </h2>
      <div className="mb-4">
        <p className="text-xl font-semibold">Cash: ${portfolio.cash.toFixed(2)}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(stockPrices).map(([symbol, price]) => (
          <div key={symbol} className="border p-4 rounded">
            <h3 className="text-lg font-semibold">{symbol}</h3>
            <p className="mb-2">Price: ${price}</p>
            <p className="mb-2">Owned: {portfolio.stocks[symbol as keyof typeof portfolio.stocks]}</p>
            <div className="flex space-x-2">
              <button onClick={() => buyStock(symbol as keyof typeof portfolio.stocks)} className="bg-green-500 text-white px-3 py-1 rounded">Buy</button>
              <button onClick={() => sellStock(symbol as keyof typeof portfolio.stocks)} className="bg-red-500 text-white px-3 py-1 rounded">Sell</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentSimulator;
