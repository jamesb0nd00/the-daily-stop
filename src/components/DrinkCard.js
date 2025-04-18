import React from "react";
import "./DrinkCard.css";

function DrinkCard({
  name,
  brand,
  size,
  price,
  imageUrl,
  isFountain,
  flavors,
}) {
  return (
    <div className="drink-card">
      <div className="drink-card-image">
        <img src={imageUrl} alt={name} />
        {isFountain && <span className="fountain-badge">Fountain</span>}
      </div>
      <div className="drink-card-content">
        <h3 className="drink-card-name">{name}</h3>
        <p className="drink-card-brand">{brand}</p>
        <div className="drink-card-meta">
          <span className="drink-card-size">{size}</span>
          <span className="drink-card-price">${price}</span>
        </div>
        {flavors && (
          <div className="drink-card-flavors">
            <p>Available Flavors:</p>
            <div className="flavor-tags">
              {flavors.map((flavor, index) => (
                <span key={index} className="flavor-tag">
                  {flavor}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DrinkCard;
