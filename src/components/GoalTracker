import React from 'react';
import { Target } from 'lucide-react';

const GoalTracker: React.FC = () => {
  const goals = [
    { name: "Emergency Fund", target: 10000, current: 5000 },
    { name: "Vacation Savings", target: 3000, current: 1500 },
    { name: "Debt Repayment", target: 15000, current: 10000 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Target className="mr-2" /> Goal Tracker
      </h2>
      <div className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">{goal.name}</span>
              <span className="text-gray-600">${goal.current} / ${goal.target}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${(goal.current / goal.target) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalTracker;
