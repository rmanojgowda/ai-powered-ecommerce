// src/components/Header.js
import React from 'react';
import './Header.css'; // Optional, if you have specific styles for Header

function Header() {
  return (
    <header className="Header">
      <h1>AI-Powered E-Commerce</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
    </header>
  );
}

export default Header;
