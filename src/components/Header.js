import React from "react";
import { Link } from "react-router-dom";
import food from "../assets/food.jpg";

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>
          <Link to="/booking">Reserve a table</Link>
        </button>
      </div>
      <div className="right-side">
        <img
          src={food}
          alt="our cook holding a tablet with delicious baguettes"
        width='500' height='600'/>
      </div>
    </header>
  );
};

export default Header;