import { useFavoritesStore } from "../store/useFavoritesStore";

const Card = ({ card }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useFavoritesStore();

  const isFav = favorites.some((item) => item.id === card.id);

  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-lg w-72 overflow-hidden">
      {/* Product Image */}
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-44 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{card.title}</h2>
        <p className="text-gray-400 text-sm mt-1">
          {card.description}
        </p>

        <button
          onClick={() =>
            isFav ? removeFromFavorites(card.id) : addToFavorites(card)
          }
          className={`mt-4 w-full py-2 rounded-lg font-medium transition ${
            isFav
              ? "bg-red-600 hover:bg-red-700"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {isFav ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default Card;
