import React from 'react';
import ProductItem from './ProductItem';

import { Wrapper } from './Products.styles';

const Products = ({ products, onShowDetail, onAddToCart }) => {
  return (
    <Wrapper>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onShowDetail={onShowDetail}
          onAddToCart={onAddToCart}
        />
      ))}
    </Wrapper>
  );
};

export default Products;
