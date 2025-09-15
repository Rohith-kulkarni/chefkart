// components/DishList.js
import { useContext, useState } from "react";
import MenuContext from "../context/menuContext";

const DishList = ({ dishes }) => {
  const { category, searchInput, selectedDishes, toggleSelectDish } =
    useContext(MenuContext);

  const [modalDish, setModalDish] = useState(null);

  const filteredDishes = dishes.filter((dish) => {
    const matchCategory = category ? dish.category.name === category : true;
    const matchSearch = dish.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
      {filteredDishes.map((dish) => (
        <div key={dish.id} className="border rounded p-4 relative">
          <h3 className="text-lg font-bold">{dish.name}</h3>
          <p className="text-sm mt-2">
            {dish.description.length > 50
              ? dish.description.slice(0, 50) + "..."
              : dish.description}
          </p>
          <div className="flex justify-between mt-4">
            <button
              className="text-blue-500 underline"
              onClick={() => setModalDish(dish)}
            >
              Read More
            </button>

            <button
              className={`px-4 py-2 rounded ${
                selectedDishes.some((d) => d.id === dish.id)
                  ? "bg-red-500 text-white"
                  : "bg-green-500 text-white"
              }`}
              onClick={() => toggleSelectDish(dish)}
            >
              {selectedDishes.some((d) => d.id === dish.id) ? "Remove" : "Add"}
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {modalDish && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-96 relative">
            <h2 className="text-xl font-bold mb-2">{modalDish.name}</h2>
            <p>{modalDish.description}</p>
            <button
              className="absolute top-2 right-2 text-red-500 font-bold"
              onClick={() => setModalDish(null)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DishList;
