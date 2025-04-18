import React from "react";
import "./FoodCard.css";

function FoodCard({
  name,
  type,
  price,
  imageUrl,
  description,
  isHot,
  isBreakfast,
}) {
  return (
    <div className="food-card">
      <div className="food-card-image">
        <img src={imageUrl} alt={name} />
        {isHot && <span className="hot-badge">Hot</span>}
        {isBreakfast && <span className="breakfast-badge">Breakfast</span>}
      </div>
      <div className="food-card-content">
        <h3 className="food-card-name">{name}</h3>
        <p className="food-card-type">{type}</p>
        <p className="food-card-description">{description}</p>
        <div className="food-card-meta">
          <span className="food-card-price">${price}</span>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
