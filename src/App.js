import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ItemList from "./components/ItemList";
import {
  foodItems,
  alcoholItems,
  tobaccoItems,
  sodaItems,
  fountainDrinks,
  snackItems,
  kratomItems,
} from "./data/items";
import "./App.css";

function App() {
  // Get featured items from each category
  const featuredItems = [
    ...foodItems.slice(0, 3),
    ...alcoholItems.slice(0, 3),
    ...snackItems.slice(0, 3),
  ];

  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-page">
                  <div className="hero-section">
                    <div className="hero-content">
                      <h1>Welcome to The Daily Stop</h1>
                      <p>Your one-stop shop for all your convenience needs</p>
                      <div className="hero-image">
                        <img
                          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                          alt="Convenience Store"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="featured-section">
                    <h2>Featured Items</h2>
                    <ItemList items={featuredItems} />
                  </div>
                </div>
              }
            />
            <Route
              path="/food"
              element={
                <div className="page-content">
                  <h2>Food Menu</h2>
                  <ItemList items={foodItems} />
                </div>
              }
            />
            <Route
              path="/alcohol"
              element={
                <div className="page-content">
                  <h2>Alcohol Selection</h2>
                  <ItemList items={alcoholItems} />
                </div>
              }
            />
            <Route
              path="/tobacco"
              element={
                <div className="page-content">
                  <h2>Tobacco Products</h2>
                  <ItemList items={tobaccoItems} />
                </div>
              }
            />
            <Route
              path="/sodas"
              element={
                <div className="page-content">
                  <h2>Sodas</h2>
                  <ItemList items={sodaItems} />
                </div>
              }
            />
            <Route
              path="/fountain-drinks"
              element={
                <div className="page-content">
                  <h2>Fountain Drinks</h2>
                  <ItemList items={fountainDrinks} />
                </div>
              }
            />
            <Route
              path="/snacks"
              element={
                <div className="page-content">
                  <h2>Snacks</h2>
                  <ItemList items={snackItems} />
                </div>
              }
            />
            <Route
              path="/kratom"
              element={
                <div className="page-content">
                  <h2>Kratom Products</h2>
                  <ItemList items={kratomItems} />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
