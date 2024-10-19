import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

interface HeaderProps {
  onCategoryChange: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
  };

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header>
      <div className="header-top">
        <h1>FakeStore</h1>
        <div className="category-container">
          <div className="category-block">
            All Categories
            <div className="dropdown">
              {categories.map(category => (
                <div
                  key={category}
                  className="category-item"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="header-buttons">
          <button onClick={handleLoginLogout}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
          <Link to="/cart" className="cart-button">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
