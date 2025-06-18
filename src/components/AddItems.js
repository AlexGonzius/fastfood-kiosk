import React from "react";
import MenuButton from "./MenuButton";

function AddItems({ menu, addItem }) {
  return (
    <div className="additems-panel">
      <h2>Add items</h2>
      <div className="menu-list">
        {menu.map(item =>
          <MenuButton key={item.id} item={item} addItem={addItem} />
        )}
      </div>
    </div>
  );
}

export default AddItems;