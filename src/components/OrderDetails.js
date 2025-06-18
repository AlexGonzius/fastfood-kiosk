import React from "react";
import OrderItem from "./OrderItem";

function OrderDetails({ order, removeItem }) {
  const total = order.reduce(
    (sum, item) => sum + item.count * item.price,
    0
  );

  return (
    <div className="order-panel">
      <h2>Order Details</h2>
      {order.length === 0 ? (
        <p className="empty-text">No items in your order.</p>
      ) : (
        <div>
          {order.map(item =>
            <OrderItem key={item.id} item={item} removeItem={removeItem} />
          )}
          <div className="total">
            <strong>Total price:</strong> {total} KGS
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;