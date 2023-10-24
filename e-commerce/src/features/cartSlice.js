import { createSlice } from "@reduxjs/toolkit";

const loadCartState = () => {
  const cartState = localStorage.getItem("cart");
  return cartState ? JSON.parse(cartState) : [];
};

const saveCartState = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartState(),
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image } = action.payload;
      const existingProduct = state.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({
          id,
          title,
          price,
          image,
          quantity: 1,
        });
      }

      saveCartState(state);
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      return state.filter((product) => product.id !== productId);
    },

    clearCart: (state) => {
      state = [];
      saveCartState(state);
    },
  },
});

export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
