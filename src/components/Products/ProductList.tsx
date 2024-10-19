import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem';
import Header from 'C:/fakestore/src/components/Header.tsx';
import { Product } from '../../types';
import './ProductList.css';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (category: string = '') => {
    try {
      const url = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : 'https://fakestoreapi.com/products';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products. Please try again later.');
    }
  };

  const handleCategoryChange = (category: string) => {
    fetchProducts(category);
  };

  const handleProductClick = (product: Product) => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header onCategoryChange={handleCategoryChange} />
      <div className='items'>
        {products.map(product => (
          <ProductItem key={product.id} product={product} onClick={handleProductClick} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
