import React from "react";
import { HiShoppingCart } from "react-icons/hi2";

const Navbar = () => {
  return <nav className="nav">
    <header className="nav-header">
        <div className="nav-brand">
          <h4>Cart Shop</h4>
        </div>
        <div className="nav-cart">
        <HiShoppingCart className="icon nav-icon" />
        </div>
    </header>
  </nav>;
};

export default Navbar;