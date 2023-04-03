import React from "react";

const Pricecard = ({ price }) => {
  return (
    <div>
      <h2>
        <span className="text-purple-400 text-5xl font-extrabold">
          {price.price}
        </span>
        <span className="text-2xl">/mon</span>
      </h2>

      <h5 className="text-2xl font-bold">{price.name}</h5>
    </div>
  );
};

export default Pricecard;
