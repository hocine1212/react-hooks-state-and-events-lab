import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState(false);
  const itemClass = item ? "in-cart" : "";
  const handleClick = () => {
    setItem(!item);
  };
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {item ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
