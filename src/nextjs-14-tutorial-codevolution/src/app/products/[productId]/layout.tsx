import React from 'react';

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ProductDetailLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error('Error loading product!');
  }

  return (
    <>
      {children}
      <h2>Feature Products</h2>
    </>
  );
};

export default ProductDetailLayout;
