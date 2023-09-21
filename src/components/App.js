import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkModeIsOn, setDarkModeIsOn] = useState(false);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const handleClick = () => {
    setDarkModeIsOn(!darkModeIsOn);
  };
  const appClass = darkModeIsOn ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {darkModeIsOn ? "Light Mode" : "Dark Mode"}{" "}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
