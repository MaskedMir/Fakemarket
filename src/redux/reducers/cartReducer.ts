// src/redux/reducers/cartReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';
import { addToCart, removeFromCart } from 'C:/fakestore/src/redux/actions/cartAction.ts';

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart, (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    });
    builder.addCase(removeFromCart, (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    });
  },
});

export default cartSlice.reducer;
