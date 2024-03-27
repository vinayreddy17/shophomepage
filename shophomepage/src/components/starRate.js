import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRate() {
  const [rating, setRating] = useState(4);
  const [ratecolor, setRatecolor] = useState(null);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <>
            <label>
              <input
                type="radio"
                name="rate"
                value={currentRate}
                onClick={() => setRating(currentRate)}
              />

              <FaStar className='star'
                size={30}
                color={currentRate <= (ratecolor || rating) ? "yellow" : "grey"}
              />
            </label>
          </>
        );
      })}
    </>
  );
}

export default StarRate;
