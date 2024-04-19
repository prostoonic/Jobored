import './style.css'
import Save from './../../icons/save'
import Location from './../../icons/location'
import VacancyRow from './../vacancyRow'
import VacansyDescription from './../vacancyDescription'
export default function vacansy(props) {
  console.log(props)
   const isInFavorites = props.favoriteIds.includes(props.vacancy.id)
console.log(props.candidat)
  return (
    <main>
      <VacancyRow
        vacancy = {props.vacancy} 
        isInFavorites = {isInFavorites}
        onFavorite = {props.onFavorite}
        class="vacansy"/>
      {/* <div class="vacansy" key={vacancy.id} id-vacansy={vacancy.id}>
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
      </div> */}
        <div class="vacansy-full-info">
          <VacansyDescription description = {props.vacancy.vacancyRichText}/>
        </div>
    </main>
    
  )
}