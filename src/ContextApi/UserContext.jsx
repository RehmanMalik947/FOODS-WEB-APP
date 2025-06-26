import React, { createContext, useState } from "react";
import { food_items } from "../assets/Pages/food";

export const dataContext = createContext();

function UserContext({ children }) {
  const [Food_items, setFoodItems] = useState(food_items);
  const [input, setInput] = useState("");
  const [showCart,setShowCart]=useState(false)

  const data = {
    input,
    setInput,
    Food_items,
    setFoodItems,
    showCart,
    setShowCart
  };

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;
