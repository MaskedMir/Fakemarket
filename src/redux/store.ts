// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import rootReducer from './reducers/rootReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,

    reducer: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
