import { DECREMENT, INCREMENT } from "./actionTypes";

const initialValue = {
  totalPrice: 0,
  totalItem: 0,
  product: [
    {
      id: 1,
      available: 20,
      quantity: 0,
    },
    {
      id: 2,
      available: 35,
      quantity: 0,
    },
    {
      id: 3,
      available: 72,
      quantity: 0,
    },
  ],
};

const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload.itemPrice,
        totalItem: state.totalItem + 1,
        product: {
          ...state.product,
          [action.payload.priceId]: {
            ...state.product.asus,
            id: 1,
            available: state.product[action.payload.priceId].available - 1,
            quantity: state.product[action.payload.priceId].quantity + 1,
          },
        },
      };

    case DECREMENT:
      return {
        totalPrice: state.totalPrice - action.payload.itemPrice,
        totalItem: state.totalItem - 1,
        product: {
          ...state.product,
          [action.payload.priceId]: {
            ...state.product[action.payload.priceId],
            id: 1,
            available: state.product[action.payload.priceId].available + 1,
            quantity: state.product[action.payload.priceId].quantity - 1,
          },
        },
      };

    default:
      return state;
  }
};

export default productReducer;
