import Card from "./components/Card";
import { useFavoritesStore } from "./store/useFavoritesStore";

const cards = [
{
  id: 1,
  title: "Smart Headphones",
  description: "Noise cancelling wireless headphones",
  image:
    "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
},
{
  id: 2,
  title: "Gaming Mouse",
  description: "High precision RGB gaming mouse",
  image:
    "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600",
},
  {
    id: 3,
    title: "Smart Watch",
    description: "Track fitness and notifications",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

export default function App() {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-8">🛒 Products</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      {/* Favorites */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold">
          ❤️ Favorites ({favorites.length})
        </h2>

        {favorites.length === 0 ? (
          <p className="text-gray-400 mt-2">
            No favorite products yet
          </p>
        ) : (
          <ul className="mt-3 list-disc pl-5 text-gray-300">
            {favorites.map((fav) => (
              <li key={fav.id}>{fav.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
