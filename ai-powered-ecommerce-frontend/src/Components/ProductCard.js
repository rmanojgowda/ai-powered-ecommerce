// src/components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
