import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 bg-[#100a3d]">
      <h1 className="text-3xl text-white font-bold text-center mb-6">About Fresher's 2024</h1>
      <div className="bg-[#100a3d] rounded-lg shadow-lg p-6">
        <p className="text-gray-300 text-lg mb-4">
          Fresher's 2024 is an exciting event organized to welcome new students to our college community.
          This celebration is a wonderful opportunity for freshers to meet their peers, interact with faculty members, 
          and participate in various fun activities and performances.
        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">Event Highlights:</h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Engaging dance performances</li>
          <li>Singing competitions</li>
          <li>Stand-up comedy acts</li>
          <li>Networking opportunities</li>
          <li>Refreshments and more!</li>
        </ul>
        <h2 className="text-2xl font-semibold text-white mb-4">Why Join Us?</h2>
        <p className="text-gray-300 mb-4">
          Joining the Fresher's party is not just about the performances; it's about building friendships, 
          creating memories, and embracing the college spirit. We encourage all new students to participate, 
          have fun, and make the most of this unforgettable experience.
        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">Event Details:</h2>
        <p className="text-gray-300 mb-2"><strong>Date:</strong> [Insert Date Here]</p>
        <p className="text-gray-300 mb-2"><strong>Time:</strong> [Insert Time Here]</p>
        <p className="text-gray-300 mb-2"><strong>Venue:</strong> [Insert Venue Here]</p>
        <h2 className="text-2xl font-semibold text-white mb-4">Get Involved!</h2>
        <p className="text-gray-300">
          Are you ready to shine on stage? Register for our events and showcase your talents! 
          Join us for a night full of laughter, music, and dance!
        </p>
      </div>
    </div>
  );
};

export default About;
