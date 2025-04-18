import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to The Daily Stop</h1>
        <p>Your one-stop destination for news, weather, and sports</p>
      </section>

      <section className="featured-section">
        <h2>Featured Today</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <h3>Latest News</h3>
            <p>Stay updated with the most recent headlines</p>
          </div>
          <div className="featured-card">
            <h3>Weather Forecast</h3>
            <p>Check your local weather conditions</p>
          </div>
          <div className="featured-card">
            <h3>Sports Updates</h3>
            <p>Get the latest scores and highlights</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
