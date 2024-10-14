import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import submitsucces from './Success'
const ParticipateForm = () => {
  const [name, setName] = useState('');
  const [clas, setClas] = useState('');
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [event, setEvent] = useState('');

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const saveUser = () => {
    const userData = { name, clas, roll, email, mobile, event };

    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then((result) => result.json())
    .then(() => {
      setName('');
      setClas('');
      setRoll('');
      setEmail('');
      setMobile('');
      setEvent('');

     navigate('/Success')
      
    });
  };

  const getList = () => {
    fetch('http://localhost:3000/')
      .then((result) => result.json())
      .then((resp) => {
        setData(resp);
        console.log(resp);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <form onSubmit={handleForm} className="bg-gray-600 p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-center">Participate in Events</h2>
        <input 
          type="text" 
          placeholder="Enter your name" 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          className="w-full p-2 border border-gray-300 bg-gray-600 text-white rounded focus:outline-none " 
        />
        <input 
          type="text" 
          placeholder="Enter your class" 
          onChange={(e) => setClas(e.target.value)} 
          value={clas} 
          className="w-full p-2 border border-gray-300  bg-gray-600 text-white rounded focus:outline-none focus:ring focus:ring-blue-300" 
        />
        <input 
          type="text" 
          placeholder="Enter your roll" 
          onChange={(e) => setRoll(e.target.value)} 
          value={roll} 
          className="w-full p-2 border border-gray-300  bg-gray-600 text-white rounded focus:outline-none focus:ring focus:ring-blue-300" 
        />
        <input 
          type="email" 
          placeholder="Enter your Gmail" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          className="w-full p-2 border border-gray-300  bg-gray-600 text-white rounded focus:outline-none focus:ring focus:ring-blue-300" 
        />
        <input 
          type="tel" 
          placeholder="Enter your mobile" 
          onChange={(e) => setMobile(e.target.value)} 
          value={mobile} 
          className="w-full p-2 border border-gray-300  bg-gray-600 text-white rounded focus:outline-none focus:ring focus:ring-blue-300" 
        />
        <select 
          onChange={(e) => setEvent(e.target.value)} 
          className="w-full p-2 border border-gray-300  bg-gray-600 text-white rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="Dance">Dance</option>
          <option value="Song">Song</option>
          <option value="Comedy">Comedy</option>
          <option value="Anyother">AnyOther</option>
        </select>
        <button 
          type="submit" 
          onClick={saveUser} 
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ParticipateForm;
