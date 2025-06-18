import React from "react";

function OrderItem({ item, removeItem }) {
  return (
    <div className="order-item">
      <span className="order-icon">{item.icon}</span>
      <span>{item.name}</span>
      <span>x{item.count}</span>
      <span>{item.price * item.count} KGS</span>
      <button className="remove-btn" onClick={() => removeItem(item.id)}>
        Удалить
      </button>
    </div>
  );
}

export default OrderItem;