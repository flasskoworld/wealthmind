import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const MindsetChatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! I'm your financial mindset coach. How are you feeling about your finances today?", isUser: false },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "That's a great perspective! Remember, every financial decision is an opportunity to grow. What small step can you take today to improve your financial situation?", isUser: false }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <MessageCircle className="mr-2" /> Mindset Coach
      </h2>
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.isUser ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border rounded-l-lg p-2"
          placeholder="Type your message..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Send</button>
      </div>
    </div>
  );
};

export default MindsetChatbot;
