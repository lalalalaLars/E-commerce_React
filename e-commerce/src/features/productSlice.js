import { createSlice } from "@reduxjs/toolkit";
import api from "../services/api"; // Import your API module

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    productsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    },
    productsError: (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;
    },
  },
});

export const fetchProducts = () => async (dispatch) => {
  dispatch(productsLoading());

  try {
    const response = await api.get("/products"); // Replace with your API endpoint
    dispatch(productsSuccess(response.data));
  } catch (error) {
    dispatch(productsError("Failed to fetch products."));
  }
};

export const { productsLoading, productsSuccess, productsError } =
  productSlice.actions;
export default productSlice.reducer;
