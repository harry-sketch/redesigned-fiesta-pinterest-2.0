import React from "react";

const Pin = ({ pin }) => {
  return (
    <div className="">
      {
        <img
          src={pin.urls.regular}
          alt={pin.id}
          className="rounded-lg object-cover mb-4"
        />
      }
    </div>
  );
};

export default Pin;
