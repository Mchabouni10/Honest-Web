import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav1() {
  const categories = [
    "Subscriptions",
    "Baby + Diapers",
    "Wipes",
    "Bath + Body",
    "Skincare",
    "Makeup",
    "Baby Clothing",
    "Cleaning",
    "Gifts + Kits",
  ];

  return (
    <div>
      <div className="slideshow-container">
        <h3>BUILD YOUR OWN GIFT! | Get Started</h3>
      </div>
      <div className="navbar">
        <input
          className="searchBar1"
          type="text"
          placeholder="Search Honest..."
        />

        <Link to="/">
          <img className="logoImage" src="/logo1.png" alt="honest" />
        </Link>

        <Link to="/signup">
          <p>Sign Up</p>
        </Link>
        <span>|</span>
        <Link to="/signin">
          <p>Sign In</p>
        </Link>
        <span>|</span>
        <Link to="/shop">
          <p>Shop</p>
        </Link>
      </div>

      <div className="nav2">
        <ul style={{ listStyle: "none", padding: 0, display: "flex" }}>
          {categories.map((category, index) => (
            <li key={index} style={{ marginRight: "10px" }}>
              <Link to={`/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav1;
