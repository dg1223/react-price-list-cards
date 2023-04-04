import React, { useEffect, useState } from "react";
import Pricecard from "../Pricecard/Pricecard";

const Pricelist = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    <div className="mx-12">
      <h2 className="text-2xl md:text-6xl bg-purple-300 font-bold p-4 text-center text-purple-950">
        Awesome Affordable Prices
      </h2>
      <div className="grid md:grid-cols-3 gap-3">
        {prices.map((price) => (
          <Pricecard key={price.id} price={price}></Pricecard>
        ))}
      </div>
    </div>
  );
};

export default Pricelist;
