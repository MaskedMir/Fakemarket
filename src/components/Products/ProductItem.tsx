import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from 'C:/fakestore/src/redux/actions/cartAction.ts';
import './ProductItem.css';
import { Product } from '../../types';

interface ProductItemProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onClick }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <div className="product-item" onClick={() => onClick(product)}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
