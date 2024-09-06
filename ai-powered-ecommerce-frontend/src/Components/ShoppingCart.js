// src/components/ShoppingCart.js
import React from 'react';

function ShoppingCart({ cartItems }) {
  return (
    <div className="ShoppingCart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <button>Checkout</button>
    </div>
  );
}

export default ShoppingCart;
