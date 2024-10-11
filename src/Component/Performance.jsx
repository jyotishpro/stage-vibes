// Performance.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Performance() {
  const navigate = useNavigate(); // Initialize useNavigate

  const events = [
    {
      name: 'Dance Performance',
      description: 'Join our energetic dance event and showcase your moves!',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsparkpr.in%2Fwp-content%2Fuploads%2F2019%2F07%2FIMG-3-1.jpg&f=1&nofb=1&ipt=b669e228fb603379ec6a2ceb21c8ce15c35fdad3cefd7492973fb3de34b13c71&ipo=images'
    },
    {
      name: 'Singing Competition',
      description: 'Participate in the singing competition and let your voice be heard.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vvfwhRhJpScq2MpT5kT4ZAHaE8%26pid%3DApi&f=1&ipt=08694fc6f9666d94ebe92e0ca28362ad976b0c7e148d79d8f574d9f840fa1584&ipo=images'
    },
    {
      name: 'Comedy Show',
      description: 'Make people laugh by performing in our comedy show!',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100083363689469&f=1&nofb=1&ipt=c2808f5a3e8c40aaa4c734c879008402e6ec8471405187f1c6d1662521e890b9&ipo=images'
    },
    {
      name: 'Any Other',
      description: 'Any other event that you want to perform, then also you can participate.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.freeimages.com%2Fimages%2Flarge-previews%2F01e%2Fdifferent-1163379.jpg&f=1&nofb=1&ipt=c05bb6d3500e6ce0bfe82f23e6baaaa77c44b423c1ff3d0e04dc0054efcdfde8&ipo=images'
    }
  ];

  const handleParticipate = () => {
    // Navigate to the participation form on a new page
    navigate('/performance/participate');
  };

  return (
    <div className="container mx-auto p-4 bg-[#100a3d]">
      <h1 className="text-3xl text-white font-bold text-center mb-6">Upcoming Events</h1>
      <div className="flex flex-wrap justify-center">
        {events.map((event, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-600">
            <img className="w-full h-48 object-cover" src={event.image} alt={event.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">{event.name}</div>
              <p className="text-gray-300 text-base">
                {event.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button
                className="bg-[#010365] hover:bg-[#100a3d] text-white font-bold py-2 px-4 rounded"
                onClick={handleParticipate} // Trigger navigation to the form page
              >
                Participate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Performance;
