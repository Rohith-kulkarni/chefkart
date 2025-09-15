const IngredientModal = ({ dish, onClose, isSelected, toggleDish }) => {
  if (!dish) return null;

  const selected = isSelected(dish);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-end"
      onClick={onClose}
    >
      <div
        className="bg-white w-full rounded-t-2xl p-4 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-4 text-gray-500 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <h2 className="text-lg font-bold mb-2">{dish.name}</h2>
        <p className="text-sm text-gray-600 mb-4">{dish.description}</p>

        <h3 className="font-semibold mb-1">Ingredients</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
          {dish.ingredients?.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>

        <button
          className={`w-full py-2 rounded-lg text-sm font-medium ${
            selected ? "bg-red-500 text-white" : "bg-green-500 text-white"
          }`}
          onClick={() => toggleDish(dish)}
        >
          {selected ? "Remove from Selection" : "Add to Selection"}
        </button>
      </div>
    </div>
  );
};

export default IngredientModal;
