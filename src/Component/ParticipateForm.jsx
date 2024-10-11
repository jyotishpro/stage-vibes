import React, { useState } from 'react';
import axios from 'axios'; // If you plan to submit data to an API
import { useNavigate } from 'react-router-dom';

const ParticipateForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [eventType, setEventType] = useState('dance'); // Default selection
  const [submitted, setSubmitted] = useState(false); // State to track submission
  const [error, setError] = useState(''); // State to track errors

  const handleSubmit = async (e) => {
    e.preventDefault();

    const participantData = {
      name,
      class: className,
      rollNo,
      email,
      mobileNo,
      eventType,
    };

    try {
      // Example POST request (you can adjust the URL as necessary)
      await axios.post('/api/participants', participantData);
      setSubmitted(true); // Set submitted to true on successful submission
      setError(''); // Clear any previous error
    } catch (error) {
      console.error('Error submitting the form:', error);
      setError('Failed to submit. Please try again.'); // Set error message on failure
    }
  };

  // Render message if submitted
  if (submitted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Congrats for participation in {eventType} event!</h2>
          <p className="text-white">Best of luck for your performance!</p>
          <button
            className="mt-4 py-2 px-4 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
            onClick={() => navigate('/performance')} // Redirect to performance page
          >
            Back to Performance
          </button>
        </div>
      </div>
    );
  }

  function submitform() {
    setSubmitted(!submitted)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Participation Form</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-indigo-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Class"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-indigo-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Roll No"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-indigo-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-indigo-500 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Mobile No"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-indigo-500 focus:outline-none"
          />
          {/* Event Type Selection */}
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-indigo-500 focus:outline-none"
          >
            <option value="Dance">Dance</option>
            <option value="Singing">Singing</option>
            <option value="Comedy">Comedy</option>
            <option value="Any Other">Any Other</option>
          </select>
          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white font-semibold bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition duration-300 ease-in-out`}
          onClick={()=>submitform()}
          >
            Participate
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error if exists */}
        </form>
      </div>
    </div>
  );
};

export default ParticipateForm;
