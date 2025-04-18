import React from "react";
import "./SnackCard.css";

function SnackCard({ name, brand, type, price, imageUrl, size, isCandy }) {
  return (
    <div className="snack-card">
      <div className="snack-card-image">
        <img src={imageUrl} alt={name} />
        {isCandy && <span className="candy-badge">Candy</span>}
      </div>
      <div className="snack-card-content">
        <h3 className="snack-card-name">{name}</h3>
        <p className="snack-card-brand">{brand}</p>
        <p className="snack-card-type">{type}</p>
        <div className="snack-card-meta">
          <span className="snack-card-size">{size}</span>
          <span className="snack-card-price">${price}</span>
        </div>
      </div>
    </div>
  );
}

export default SnackCard;
