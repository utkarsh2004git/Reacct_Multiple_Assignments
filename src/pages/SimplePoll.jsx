import  { useState, useEffect } from 'react';

const pollData = {
  id: 'poll_001',
  question: 'What’s your favorite programming language?',
  options: ['JavaScript', 'Python', 'Java', 'C++', 'Go']
};

const SimplePoll = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  const [results, setResults] = useState({});

  useEffect(() => {
    
  }, []);

  const handleVote = () => {
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{pollData.question}</h2>

        {!hasVoted ? (
          <div>
            <ul className="space-y-3 mb-6">
              {pollData.options.map((option, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="poll"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor={`option-${index}`} className="text-gray-700">{option}</label>
                </li>
              ))}
            </ul>

            <button
              onClick={handleVote}
              disabled={!selectedOption}
              className={`w-full py-2 rounded text-white transition ${
                selectedOption ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Vote
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Results:</h3>
            <ul className="space-y-2">
              {pollData.options.map((option, index) => {
                const percent = results[option] || 0;
                return (
                  <li key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{option}</span>
                      <span className="text-gray-600">{percent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full transition-all"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimplePoll;
