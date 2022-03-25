import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/order">Order</a>
            </li>
            <li>
              <a href="/review">Order Review</a>
            </li>
            <li>
              <a href="/manage">Manage Inventory</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
