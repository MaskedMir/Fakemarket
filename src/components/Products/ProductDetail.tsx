// src/components/Products/ProductDetail.tsx
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const location = useLocation();
  const [product, setProduct] = useState<Product | null>((location.state as { product: Product })?.product || null);

  useEffect(() => {
    if (!product) {
      const fetchProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      };
      fetchProduct();
    }
  }, [productId, product]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetail;
