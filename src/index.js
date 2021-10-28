import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import countryReducer from "./features/CountrySlice";
import CartReducer from "./features/CartSlice";
import ThemeReducer from "./features/themeSlice";

const store = configureStore({
  reducer: {
    country: countryReducer,
    cart: CartReducer,
    theme: ThemeReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
