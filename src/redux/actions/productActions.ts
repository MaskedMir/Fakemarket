// src/redux/actions/productsActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});
export const getProduct = createAsyncThunk('product/getProduct', async (productId: number) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    return response.data;
});