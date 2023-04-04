import React from "react";
import Feature from "../Feature/Feature";

const Pricecard = ({ price }) => {
  return (
    <div className="bg-indigo-100 mt-2 mb-2 rounded-md p-4 flex flex-col">
      <h2 className="text-center">
        <span className="text-purple-400 text-5xl font-extrabold">
          {price.price}
        </span>
        <span className="text-2xl font-bold text-gray-400">/mon</span>
      </h2>

      <h5 className="text-2xl my-6 font-bold text-center">{price.name}</h5>
      <p className="underline font-bold">Features:</p>
      {price.features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="mt-auto w-full bg-green-500 hover:bg-green-700 py-2 rounded-md text-white">
        Buy Now
      </button>
    </div>
  );
};

export default Pricecard;
