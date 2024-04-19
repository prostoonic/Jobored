// import './Main.css'
import Header from './../../components/header'
import VacansyList from './../../components/vacansyList'
// import favourites  from './../Main/favorites.jsx'
import selectVacansy from './../Main/selectVacnsy'
import { useState } from 'react'

// const Favorites = () => {
//   const [vacansies, setVacansies] = useState(favourites.listFavorites())
//   const toggleFavorites = vacansy => {
//     if (favourites.isInFavorites(vacansy)) {
//       favourites._removeFromFavorites(vacansy)
//     } else {
//       favourites._addToFavorites(vacansy)
//     }
//     setVacansies(favourites.listFavorites())
//   }
//   return (
//     <div className="main">
//       <Header />
//       <VacansyList vacansies={vacansies} toggleFavorites={toggleFavorites} />
//     </div>
//   )
// }

// export default Favorites;
// jsx
  
// import './Main.css'

export default function App() {
  return (
    <div>
      <Header />
      <VacansyList vacancies={selectVacansy.favorites} favoriteIds={selectVacansy.favoriteIds} onFavorite={selectVacansy.handleFavorite}/>
    </div>
    
  )
}
