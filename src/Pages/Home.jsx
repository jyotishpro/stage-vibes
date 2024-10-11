
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#100a3d] to-[#100a3d] text-white min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-5xl font-bold mb-4">Welcome to Fresher's 2024</h1>
      <p className="text-lg mb-8">Multiple Universes, One Extravaganza.</p>

      {/* Use Link instead of a */}
      <Link
        to="/events"
        className="bg-white text-blue-900 px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-200 transition duration-300"
      >
        Register for Events
      </Link>

      <div className="mt-12">
        <p className="text-sm font-light">Nalanda College, Biharsharif</p>
      </div>

      <div className="mt-16">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hxSTvARmfVCxBh_luaBPPAAAAA%26pid%3DApi&f=1&ipt=52ce077316182f741dcad6206ac5a8d85ea47bb5e946df3b0e315799c4c5827a&ipo=images" // Replace with actual image source
          alt="Nalanda College"
          className="mx-auto w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Home;
