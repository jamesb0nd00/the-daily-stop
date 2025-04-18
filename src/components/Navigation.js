import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          The Daily Stop
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/food">Food</Link>
          <Link to="/alcohol">Alcohol</Link>
          <Link to="/tobacco">Tobacco</Link>
          <Link to="/sodas">Sodas</Link>
          <Link to="/fountain-drinks">Fountain Drinks</Link>
          <Link to="/snacks">Snacks</Link>
          <Link to="/kratom">Kratom</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
