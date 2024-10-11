import React, { useState } from 'react';

const SeatBooking = () => {
  const [seats] = useState(
    Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      booked: false,
    }))
  );
  const [bookedSeats, setBookedSeats] = useState([]);

  const handleSeatSelection = (seatId) => {
    if (bookedSeats.includes(seatId)) {
      setBookedSeats(bookedSeats.filter(id => id !== seatId)); // Unselect the seat
    } else {
      setBookedSeats([...bookedSeats, seatId]); // Select the seat
    }
  };

  const handleBooking = () => {
    if (bookedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }

    alert(`Seats booked successfully: ${bookedSeats.join(', ')}`);
    setBookedSeats([]); // Clear the selection after booking
  };

  return (
    <div className="container mx-auto p-4 bg-[#100a3d] min-h-screen">
      <h1 className="text-3xl text-white font-bold text-center mb-6">Seat Booking</h1>
      <div className="flex flex-wrap justify-center">
        {seats.map(seat => (
          <div key={seat.id} className="flex flex-col items-center m-4">
            <div
              className={`w-16 h-16 flex items-center justify-center border rounded cursor-pointer 
                ${bookedSeats.includes(seat.id) ? 'bg-red-500' : 'bg-green-500'} 
                ${bookedSeats.includes(seat.id) ? 'border-yellow-500' : 'border-gray-300'}`}
              onClick={() => !seat.booked && handleSeatSelection(seat.id)}
            >
              <span className="text-white font-bold">{seat.id}</span>
            </div>
            <span className={`mt-2 text-sm font-semibold text-white`}>
              {bookedSeats.includes(seat.id) ? 'Booked' : 'Available'}
            </span>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button 
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded"
          onClick={handleBooking}
        >
          Book Selected Seats
        </button>
      </div>
      <div className="text-center mt-4 text-white">
        {bookedSeats.length > 0 && <p>Selected Seats: {bookedSeats.join(', ')}</p>}
      </div>
    </div>
  );
};

export default SeatBooking;
