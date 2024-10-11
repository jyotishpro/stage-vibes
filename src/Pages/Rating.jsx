import React, { useState } from 'react';
import '../index.css';

const Rating = ({ maxRating = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex space-x-2">
      {[...Array(maxRating)].map((_, index) => {
        const value = index + 1;
        return (
          <span
            key={index}
            className={`text-4xl cursor-pointer transition-colors duration-200 ${
              value <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-300'
            }`}
            onClick={() => handleClick(value)}
            onMouseEnter={() => handleMouseEnter(value)}
            onMouseLeave={handleMouseLeave}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
