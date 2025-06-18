import React from "react";

function MenuButton({ item, addItem }) {
  return (
    <button className="menubtn" onClick={() => addItem(item)}>
      <span className="menu-icon">{item.icon}</span>
      <span>{item.name}</span>
      <span className="menu-price">{item.price} KGS</span>
    </button>
  );
}

export default MenuButton;