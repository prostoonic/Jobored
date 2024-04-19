import Saved from './../../icons/saved'
import Save from './../../icons/save'
import Location from './../../icons/location'
import './style.css'
import { useState } from 'react'

export default function VacancyRow({vacancy, isInFavorites, onFavorite}) {
  const [isSelected , setIsSelected] = useState(isInFavorites)
  console.log('isInFavorites', isInFavorites)
  function selectVacansy(){
    onFavorite(vacancy)
    setIsSelected(!isSelected)
  }
  function storeVacansy(){
    const vacancyString = JSON.stringify(vacancy)
    localStorage.setItem('vacancy', vacancyString)
  }
  return (
    <a href={`/vacansy`} onClick={storeVacansy}>
      <div class="vacansy" key={vacancy.id} id-vacansy={vacancy.id}>
          <div class="vacansy-info">
              <div class="job-title">
                  <p>{vacancy.profession}</p>
              </div>
              <div class="salary-and-work-days">
                  <div class="salary">
                      <p>{vacancy.payment_from}</p>
                  </div>
                  <div class="dot">
                      <p>•</p>
                  </div>
                  <div class="work-days">
                      <p>{vacancy.type_of_work.title}</p>
                  </div>
              </div>
              <div class="location">
                 <Location /> 
                  <p>{vacancy.address}</p>
              </div>
          </div>
          <button onClick={selectVacansy}>{isSelected ? <Saved /> :< Save />}</button>
      </div>
    </a>
  )
}
// href={`/vacansy`}