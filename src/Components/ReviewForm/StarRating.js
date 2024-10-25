import React, { useState } from 'react';
import './StarRating.css'; // Optional: for styling

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
      <p>Rating: {rating} {rating === 1 ? 'star' : 'stars'}</p>
    </div>
  );
};

export default StarRating;