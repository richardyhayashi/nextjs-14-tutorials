import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Proucts</Link>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
};

export default Home;
