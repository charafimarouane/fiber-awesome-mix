import { useState } from "react";


const StarRating = ({ totalStars = 5, filledStars }) => {
    return (
      <div className="flex space-x-1">
        {Array.from({ length: totalStars }, (_, index) => {
          const starNumber = index + 1;
          return (
            <svg
              key={starNumber}
              xmlns="http://www.w3.org/2000/svg"
              fill={starNumber <= filledStars ? "gold" : "none"}
              viewBox="0 0 24 24"
              stroke="gold"
              strokeWidth={2}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1L12 2z"
              />
            </svg>
          );
        })}
      </div>
    );
  };
  
  export default StarRating;
