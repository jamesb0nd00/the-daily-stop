import React from "react";
import "./TobaccoCard.css";

function TobaccoCard({ name, type, strength, price, imageUrl, description }) {
  return (
    <div className="tobacco-card">
      <div className="tobacco-card-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="tobacco-card-content">
        <h3 className="tobacco-card-name">{name}</h3>
        <p className="tobacco-card-type">{type}</p>
        <p className="tobacco-card-description">{description}</p>
        <div className="tobacco-card-meta">
          <span className="tobacco-card-strength">Strength: {strength}</span>
          <span className="tobacco-card-price">${price}</span>
        </div>
      </div>
    </div>
  );
}

export default TobaccoCard;
