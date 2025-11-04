import React from 'react';
import { NavLink } from 'react-router-dom';


const MenuLink = ({ to, children }) => (
  <li>
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        isActive 
          ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold" 
          : "text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary font-medium"
      }
    >
      {children}
    </NavLink>
  </li>
);

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm px-4 sm:px-8 py-4">
      <div className="navbar-start">
        <NavLink to="/" className="text-2xl md:text-3xl font-bold text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
          Smart
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Deals
          </span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/all-products">All Product</MenuLink>
          <MenuLink to="/my-products">My Products</MenuLink>
          <MenuLink to="/my-bids">My Bids</MenuLink>
          <MenuLink to="/create-product">Create Product</MenuLink>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <NavLink to="/login">
          <button className="btn btn-outline border-2 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text hover:text-white hover:from-primary hover:to-secondary px-8" style={{ borderImage: 'linear-gradient(135deg, #632EE3, #9F62F2) 1' }}>
            Login
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-none hover:opacity-90 px-6">
            Register
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;