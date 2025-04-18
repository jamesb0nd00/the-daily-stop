import React from "react";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <img
            src={item.imageUrl || item.image}
            alt={item.name}
            className="item-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/300x200?text=No+Image";
            }}
          />
          <div className="item-details">
            <h3 className="item-name">{item.name}</h3>
            <p className="item-price">${item.price.toFixed(2)}</p>
            <p className="item-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
