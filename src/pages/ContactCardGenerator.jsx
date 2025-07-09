import  { useState } from 'react';

const ContactCardGenerator = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Empty: handle contact saving here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Create Contact Card</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Software Engineer"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="+1234567890"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="john@example.com"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Save Contact Card
          </button>
        </div>

        {/* Live Preview */}
        <div className="bg-white p-6 rounded shadow flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Card Preview</h2>
          <div className="border border-gray-300 rounded w-full max-w-xs p-4 text-center bg-gray-50">
            <h3 className="text-xl font-bold text-gray-900">{name || 'Full Name'}</h3>
            <p className="text-gray-600 mb-2">{title || 'Job Title'}</p>
            <p className="text-gray-700 text-sm">{phone || 'Phone Number'}</p>
            <p className="text-gray-700 text-sm">{email || 'email@example.com'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCardGenerator;
