// src/App.js
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';
import UserDashboard from './components/UserDashboard';
import './App.css';

function App() {
  // Example data
  const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg' }
  ];
  const cartItems = [{ id: 1, name: 'Product 1', price: 10 }];

  return (
    <div className="App">
      <Header />
      <main>
        <ProductList products={products} />
        <ProductCard products={products} />
        <ShoppingCart cartItems={cartItems} />
        <UserDashboard />
      </main>
    </div>
  );
}

export default App;
