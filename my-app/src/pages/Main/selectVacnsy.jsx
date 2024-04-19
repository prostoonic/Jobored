import favourites from './favorites.jsx'

const favorites = favourites.listFavorites()

const ids = favorites.map((v) => v.id)
let favoriteIds = ids

function handleFavorite(vacancy) {
    favourites.toggleFavorites(vacancy)
  const index =  favoriteIds.findIndex((v) => v === vacancy.id)
  if (index === -1) {
    favoriteIds = [...favoriteIds, vacancy.id]
  } else {
    favoriteIds.splice(index, 1)
      favoriteIds = [...favoriteIds]
  }
}
export default {favorites,
                favoriteIds, 
                handleFavorite};
