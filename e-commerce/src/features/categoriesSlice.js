import { createSlice } from "@reduxjs/toolkit";
import api from "../services/api"; // Import your API module

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoriesLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    categoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = null;
    },
    categoriesError: (state, action) => {
      state.loading = false;
      state.categories = [];
      state.error = action.payload;
    },
  },
});

export const fetchCategories = () => async (dispatch) => {
  dispatch(categoriesLoading());

  try {
    const response = await api.get("/products/categories");
    dispatch(categoriesSuccess(response.data));
  } catch (error) {
    dispatch(categoriesError("Failed to fetch categories."));
  }
};

export const { categoriesLoading, categoriesSuccess, categoriesError } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
