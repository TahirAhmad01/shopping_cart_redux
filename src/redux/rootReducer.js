import { combineReducers } from "redux";
import productReducer from "./products/productReducer";

const rootReducer = combineReducers({
  priceReducer: productReducer,
});

export default rootReducer;
