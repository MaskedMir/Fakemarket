// src/components/Cart.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Product } from '../types';
import './Cart.css';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className='container'>
        <div>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
            <div className="cart-items">
            {cartItems.map((item: Product) => (
                <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
    </div>
  );
};

export default Cart;
