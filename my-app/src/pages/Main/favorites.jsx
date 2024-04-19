const favourites = {
    listFavorites() {
      const favoritesString = localStorage.getItem('favorites');
      if(!favoritesString){
        return [];
      }
      const favorites = JSON.parse(favoritesString);
      console.log('favorites',favorites);
      return favorites;
    },
    toggleFavorites(vacansy) {
      if (this.isInFavorites(vacansy)) {
        this._removeFromFavorites(vacansy)
      } else {
        this._addToFavorites(vacansy)
      }
    },
    isInFavorites(vacansy) {
      console.log('vacansy',vacansy)
  
      const vacansies = this.listFavorites()
      const founded = vacansies.find(v => v.id === vacansy.id)
      console.log('founded',founded)
      return !!founded
    },
    _removeFromFavorites(vacansy) {
      const vacansies = this.listFavorites()
      const index = vacansies.findIndex(v => v.id === vacansy.id)
      vacansies.splice(index, 1)
      this.saveFavorites(vacansies)
    },
    _addToFavorites(vacansy) {
      const vacansies = this.listFavorites()
      vacansies.push(vacansy)
      this.saveFavorites(vacansies)
    },
    saveFavorites(vacansies){
      
      const favoritesString = JSON.stringify(vacansies)
      localStorage.setItem('favorites', favoritesString)
    },
  }
  export default favourites;