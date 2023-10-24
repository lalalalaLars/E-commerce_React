import { configureStore } from "@reduxjs/toolkit";

import {
  authReducer,
  cartReducer,
  categoriesReducer,
  productReducer,
} from "../features";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});

export default store;
