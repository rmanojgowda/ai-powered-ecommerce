import React, { useState } from 'react';
import Header from './components/Header'; // Ensure this path is correct
import ProductCard from './components/ProductCard'; // Ensure this path is correct
import ProductList from './components/ProductList'; // Ensure this path is correct
import ShoppingCart from './components/ShoppingCart'; // Ensure this path is correct
import UserDashboard from './components/UserDashboard'; // Ensure this path is correct

function App() {
  const [products, setProducts] = useState([
    // Your product data here
  ]);

  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Header />
      <main>
        {/* Components arranged in ascending order */}
        <ProductCard products={products} />
        <ProductList products={products} />
        <ShoppingCart cartItems={cartItems} />
        <UserDashboard />
      </main>
    </div>
  );
}

export default App;
