import React, { useState } from "react";
import "./App.css";
import OrderDetails from "./components/OrderDetails";
import AddItems from "./components/AddItems";

const MENU_ITEMS = [
  { id: 1, name: 'Hamburger', price: 80, icon: "🍔" },
  { id: 2, name: 'Cheeseburger', price: 90, icon: "🧀" },
  { id: 3, name: 'Fries', price: 50, icon: "🍟" },
  { id: 4, name: 'Cola', price: 40, icon: "🥤" },
  { id: 5, name: 'Chicken Nuggets', price: 100, icon: "🍗" },
  { id: 6, name: 'Salad', price: 60, icon: "🥗" }
];

function App() {
  const [order, setOrder] = useState([]);

  const addItem = (item) => {
    setOrder((prevOrder) => {
      const found = prevOrder.find(el => el.id === item.id);
      if (found) {
        return prevOrder.map(el =>
          el.id === item.id ? { ...el, count: el.count + 1 } : el
        );
      }
      return [...prevOrder, { ...item, count: 1 }];
    });
  };

  const removeItem = (id) => {
    setOrder((prevOrder) => prevOrder.filter(el => el.id !== id));
  };

  return (
    <div className="kiosk-container">
      <OrderDetails order={order} removeItem={removeItem} />
      <AddItems menu={MENU_ITEMS} addItem={addItem} />
    </div>
  );
}

export default App;