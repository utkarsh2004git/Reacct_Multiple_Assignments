import  { useState } from 'react';

const BugReportTool = () => {
  const [category, setCategory] = useState('');
  const [steps, setSteps] = useState('');
  const [screenshot, setScreenshot] = useState(null);

  const handleSend = () => {
    // Empty: handle form submission and file upload here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Bug Report</h2>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 mb-2">Category</label>
          <select
            id="category"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="UI Bug">UI Bug</option>
            <option value="Crash">Crash</option>
            <option value="Slow">Slow</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 mb-2">Steps to Reproduce</label>
          <textarea
            id="steps"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Describe how to reproduce the issue..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="screenshot" className="block text-gray-700 mb-2">Attach Screenshot (optional)</label>
          <input
            id="screenshot"
            type="file"
            accept="image/*"
            onChange={(e) => setScreenshot(e.target.files[0])}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <button
          onClick={handleSend}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Send Report
        </button>
      </div>
    </div>
  );
};

export default BugReportTool;
