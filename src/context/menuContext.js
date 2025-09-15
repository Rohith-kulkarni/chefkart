// context/menuContext.js
import React, { createContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedDishes, setSelectedDishes] = useState([]);

  const onCategorySelect = (id) => {
    setCategory((prev) => (prev === id ? "" : id));
  };

  const onSearchChange = (text) => {
    setSearchInput(text);
  };

  const toggleSelectDish = (dish) => {
    setSelectedDishes((prev) =>
      prev.some((d) => d.id === dish.id)
        ? prev.filter((d) => d.id !== dish.id)
        : [...prev, dish]
    );
  };

  return (
    <MenuContext.Provider
      value={{
        category,
        onCategorySelect,
        searchInput,
        onSearchChange,
        selectedDishes,
        toggleSelectDish,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
