import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});

export default rootReducer;
