// components/Filters.js
import { useContext } from "react";
import MenuContext from "../context/menuContext";

const Filters = ({ filtersList, dishes }) => {
  const { category, onCategorySelect } = useContext(MenuContext);

  const getCategoryCount = (catName) =>
    dishes.filter((d) => d.category.name === catName).length;

  return (
    <div className="flex gap-4 overflow-x-auto p-2">
      {filtersList.map((filter) => (
        <button
          key={filter.id}
          className={`px-4 py-2 rounded ${
            category === filter.category
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => onCategorySelect(filter.category)}
        >
          {filter.category} ({getCategoryCount(filter.category)})
        </button>
      ))}
    </div>
  );
};

export default Filters;
