const DishCard = ({ dish, isSelected, toggleDish, onDishClick }) => {
  const selected = isSelected(dish);

  return (
    <div className="flex justify-between items-center border-b py-3">
      <div className="flex flex-col">
        <h3 className="font-semibold">{dish.name}</h3>
        <p className="text-sm text-gray-500 w-40 truncate">
          {dish.description.substring(0, 40)}...
          <button
            className="text-blue-500 ml-1 text-sm"
            onClick={(e) => {
              e.stopPropagation();
              onDishClick(dish);
            }}
          >
            Read more
          </button>
        </p>

        <button
          className={`mt-2 px-3 py-1 rounded text-sm font-medium ${
            selected
              ? "bg-red-100 text-red-500 border border-red-400"
              : "bg-green-100 text-green-600 border border-green-400"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            toggleDish(dish);
          }}
        >
          {selected ? "Remove" : "Add +"}
        </button>
      </div>

      <img
        src={dish.image}
        alt={dish.name}
        className="w-16 h-16 rounded object-cover ml-4"
      />
    </div>
  );
};

export default DishCard;
