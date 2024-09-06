// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  return (
    <div className="ProductList">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
