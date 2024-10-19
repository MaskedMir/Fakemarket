// src/components/ProductItem.tsx
import React from 'react';
import './ProductItem.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductItemProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onClick }) => {
  return (
    <div className="product-item" onClick={() => onClick(product)}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
    </div>
  );
};

export default ProductItem;
