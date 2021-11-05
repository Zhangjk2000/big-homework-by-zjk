import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
      <div className="container-xl">
        <Link to="/" className="navbar-brand">
          NFT拍卖平台
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul
            style={{ fontSize: "1.0rem", letterSpacing: "0.6rem" }}
            className="navbar-nav ml-auto"
          >
            <li className="nav-item">
              <Link to="/marketplace" className="nav-link">
                火热拍卖
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                NFT铸造
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/my-tokens" className="nav-link">
                我的作品
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
