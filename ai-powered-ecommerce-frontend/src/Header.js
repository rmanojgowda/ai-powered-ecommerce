// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="Header">
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
