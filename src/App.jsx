import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Login from './Login';
import Register from './Register';
import AllProducts from './pages/AllProducts';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/my-products" element={<div>My Products Page</div>} />
          <Route path="/my-bids" element={<div>My Bids Page</div>} />
          <Route path="/create-product" element={<div>Create Product Page</div>} />
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          <Route path="/product/:id" element={<div>Product Details Page</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;