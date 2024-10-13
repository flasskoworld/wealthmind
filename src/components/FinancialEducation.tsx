import React, { useState } from 'react';
import { BookOpen, Award } from 'lucide-react';

const FinancialEducation: React.FC = () => {
  const [progress, setProgress] = useState(30);
  const [currentLesson, setCurrentLesson] = useState("Understanding Credit Scores");

  const lessons = [
    "Budgeting Basics",
    "Understanding Credit Scores",
    "Investment Fundamentals",
    "Tax Planning Strategies",
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <BookOpen className="mr-2" /> Financial Education
      </h2>
      <div className="mb-4">
        <p className="text-gray-700 mb-2">Current Lesson: {currentLesson}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <h3 className="font-semibold mb-2">Upcoming Lessons:</h3>
      <ul className="space-y-2">
        {lessons.map((lesson, index) => (
          <li key={index} className="flex items-center">
            <Award className="mr-2 text-yellow-500" />
            <span className="text-gray-700">{lesson}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialEducation;
