import React from "react";
import "./KratomCard.css";

function KratomCard({ name, strain, price, imageUrl, weight, description }) {
  return (
    <div className="kratom-card">
      <div className="kratom-card-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="kratom-card-content">
        <h3 className="kratom-card-name">{name}</h3>
        <p className="kratom-card-strain">{strain}</p>
        <p className="kratom-card-description">{description}</p>
        <div className="kratom-card-meta">
          <span className="kratom-card-weight">{weight}</span>
          <span className="kratom-card-price">${price}</span>
        </div>
      </div>
    </div>
  );
}

export default KratomCard;
