"use client";

import React from 'react';
import { useState } from 'react';

/*function BarChart() {
  return <h1>Bar Chart</h1>;
}*/

function DashboardPage() {
  const [name, setName] = useState("");

  console.log("Dashboad client component");

  return (
    <div>
      <h1>Dashboard Page</h1>
      <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
      {name ? (
        <p>Hello, {name}!</p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DashboardPage;
