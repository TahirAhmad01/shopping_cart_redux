import { DECREMENT, INCREMENT } from "./actionTypes";

export function increment(priceValue, priceId) {
  return {
    type: INCREMENT,
    payload: {
      itemPrice: priceValue,
      priceId: priceId,
    },
  };
}

export function decrement(priceValue, priceId) {
  return {
    type: DECREMENT,
    payload: {
      itemPrice: priceValue,
      priceId: priceId,
    },
  };
}
