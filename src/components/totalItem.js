import React from "react";
import { useSelector } from "react-redux";

function TotalItem() {
  const totalItem = useSelector((state) => state.priceReducer.totalItem);
  console.log(totalItem);
  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-xl font-semibold">
        <p>Total Item</p>
        <p className="text-5xl">{totalItem}</p>
      </div>
    </div>
  );
}

export default TotalItem;
