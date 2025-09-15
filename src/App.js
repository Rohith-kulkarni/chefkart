import React from "react";
import { useContext } from "react";
import { MenuProvider } from "./context/menuContext";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import { dishes } from "./data/mockDishes";
import MenuContext from "./context/menuContext";

const filtersList = [
  { id: 1, category: "STARTER" },
  { id: 2, category: "MAIN COURSE" },
  { id: 3, category: "SIDES" },
  { id: 4, category: "DESSERT" },
];

const AppContent = () => {
  const { searchInput, onSearchChange, selectedDishes, toggleSelectDish } =
    useContext(MenuContext);

  return (
    <div className="p-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search dishes..."
        className="border p-2 rounded w-full mb-4"
        value={searchInput}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* Filters */}
      <Filters filtersList={filtersList} dishes={dishes} />

      {/* Dish List */}
      <DishList dishes={dishes} />

      {/* Selected Dishes */}
      {selectedDishes.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Selected Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedDishes.map((dish) => (
              <div
                key={dish.id}
                className="border rounded p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold">{dish.name}</h3>
                  <p className="text-sm text-gray-600">
                    {dish.description.length > 50
                      ? dish.description.slice(0, 50) + "..."
                      : dish.description}
                  </p>
                </div>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => toggleSelectDish(dish)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <MenuProvider>
      <AppContent />
    </MenuProvider>
  );
};

export default App;
