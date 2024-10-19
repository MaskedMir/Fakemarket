// src/redux/actions/authActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface LoginPayload {
  username: string;
  password: string;
}

interface RegisterPayload {
  username: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  'auth/login',
  async (loginData: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', loginData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error during login:', error.response?.data || error.message);
        return rejectWithValue(error.response?.data || error.message);
      }
      console.error('Unexpected error:', error);
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (registerData: RegisterPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://fakestoreapi.com/users', registerData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error during registration:', error.response?.data || error.message);
        return rejectWithValue(error.response?.data || error.message);
      }
      console.error('Unexpected error:', error);
      return rejectWithValue('An unexpected error occurred');
    }
  }
);
