import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./../redux/products/action";

function ProductQuantity({ productPrice, productName, productId }) {
  const availableProduct = useSelector(
    (state) => state.priceReducer.product[productId].available
  );

  const productQuantity = useSelector(
    (state) => state.priceReducer.product[productId].quantity
  );
  const dispatch = useDispatch();

  const incrementHandler = (priceValue, productId) => {
    dispatch(availableProduct === 0 ? "" : increment(priceValue, productId));
  };

  const decrementHandler = (priceValue, productId) => {
    dispatch(productQuantity > 0 ? decrement(priceValue, productId) : "");
  };

  return (
    <div className="flex justify-between border-b-2 mb-2">
      <div className="text-lg py-2">
        <p>{productName}</p>
      </div>
      <div className="text-lg py-2">
        <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
          <button
            className={` font-bold py-1 px-1 rounded-full inline-flex items-center ${
              productQuantity !== 0
                ? "focus:outline-none bg-purple-700 hover:bg-purple-800 text-white"
                : "focus:outline-none bg-gray-400 text-white"
            }`}
            onClick={() => decrementHandler(productPrice, productId)}
            disabled={productQuantity === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          </button>
          <p>{productQuantity}</p>
          <button
            className={`font-bold py-1 px-1 rounded-full inline-flex items-center ${
              availableProduct !== 0
                ? "focus:outline-none bg-purple-700 hover:bg-purple-800 text-white"
                : "focus:outline-none bg-gray-400 text-white"
            }`}
            onClick={() => incrementHandler(productPrice, productId)}
            disabled={availableProduct === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductQuantity;
