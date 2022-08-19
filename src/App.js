import React from "react";
import { Provider } from "react-redux";
import ProductQuantity from "./components/productQuantity";
import ProductsList from "./components/productsList";
import TotalItem from "./components/totalItem";
import TotalPrice from "./components/totalPrice";
import store from "./redux/store";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <div className="bg-gray-50 h-full md:h-screen">
          <div className="grid place-items-center">
            <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
              Shopping Cart
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
              <ProductsList
                productName={"Asus Vivobook X515MA"}
                productPrice={35500}
                productId={0}
              />
              <ProductsList
                productName={"Dell E1916HV 18.5 Inch"}
                productPrice={9300}
                productId={1}
              />
              <ProductsList
                productName={"Canon Eos 4000D 18MP "}
                productPrice={36500}
                productId={2}
              />
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
              <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                <ProductQuantity
                  productPrice={35500}
                  productName={"Asus Vivobook X515MA"}
                  productId={0}
                />
                <ProductQuantity
                  productPrice={9300}
                  productName={"Dell E1916HV 18.5 Inch"}
                  productId={1}
                />
                <ProductQuantity
                  productPrice={36500}
                  productName={"Canon Eos 4000D 18MP "}
                  productId={2}
                />
                <TotalItem />
              </div>
              <TotalPrice />
            </div>
          </div>
        </div>
      </Provider>
    </React.Fragment>
  );
}

export default App;
