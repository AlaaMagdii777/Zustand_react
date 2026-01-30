import { create } from "zustand";

export const useFavoritesStore = create((set) => ({
  favorites: [],

  addToFavorites: (card) =>
    set((state) => ({
      favorites: [...state.favorites, card],
    })),

  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    }))
}));
