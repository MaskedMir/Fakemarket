// src/redux/actions/cartActions.ts
import { createAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

export const addToCart = createAction<Product>('cart/add');
export const removeFromCart = createAction<number>('cart/remove');
