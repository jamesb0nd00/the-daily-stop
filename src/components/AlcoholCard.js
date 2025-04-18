import React from "react";
import "./AlcoholCard.css";

function AlcoholCard({ name, type, abv, price, imageUrl, description }) {
  return (
    <div className="alcohol-card">
      <div className="alcohol-card-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="alcohol-card-content">
        <h3 className="alcohol-card-name">{name}</h3>
        <p className="alcohol-card-type">{type}</p>
        <p className="alcohol-card-description">{description}</p>
        <div className="alcohol-card-meta">
          <span className="alcohol-card-abv">ABV: {abv}%</span>
          <span className="alcohol-card-price">${price}</span>
        </div>
      </div>
    </div>
  );
}

export default AlcoholCard;
