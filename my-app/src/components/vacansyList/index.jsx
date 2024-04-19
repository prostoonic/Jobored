import './style.css'
import VacancyRow from './../vacancyRow'
// import favourites  from './../../pages/Main/favorites'
import { useState } from 'react'

export default function Favorites(props) {
  const vacancies = props.vacancies || []
  console.log('props',props)
  const favoriteElems = vacancies.map((v) => {
   const isInFavorites = props.favoriteIds.includes(v.id)

    return(
      <VacancyRow
        vacancy = {v} 
        isInFavorites = {isInFavorites}
        onFavorite = {props.onFavorite}
      />
    )
    
  })
  return (
    <main>
      {favoriteElems}
    </main>
  )
}