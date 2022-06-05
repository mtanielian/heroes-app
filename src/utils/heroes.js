import { heroes } from "../data/heroes"

export const getHeroesByPublisher = ( publisher ) => {
  return heroes.filter(h => h.publisher === publisher)
}

export const getHeroeById = (id) => {
  return heroes.find(h => h.id === id)
}