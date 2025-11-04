import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-products" element={<div>All Products Page</div>} />
        <Route path="/my-products" element={<div>My Products Page</div>} />
        <Route path="/my-bids" element={<div>My Bids Page</div>} />
        <Route path="/create-product" element={<div>Create Product Page</div>} />
      </Routes>
    </div>
  );
}

export default App;