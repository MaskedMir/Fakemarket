// src/redux/reducers/productsReducer.ts
import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from 'C:/Users/maske/OneDrive/Рабочий стол/Веб/fakestore/src/redux/actions/productActions.ts'; // Проверьте правильность пути

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default productsSlice.reducer;
