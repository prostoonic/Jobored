import './style.css'
import Save from './../../icons/save'
import Saved from './../../icons/saved'

export default function Result(props) {
  console.log('prps',props)
  let isInFavorites = false
  function findVacansy(e){
    const vacansy = e.target.closest('div')
    const id = vacansy.getAttribute('id-vacansy')
    const vacnsyOBG = vacancies.find(vacansy => vacansy.id === +id)
    props.save(vacnsyOBG)
  }
  const vacancies = props.vacancies || [];
  
  const vacancyElems = vacancies.map((v) => {
    isInFavorites =  props.isVacansyInFavorites(v)
    console.log(props.isInFavorites)  

    console.log(isInFavorites)  
    return (
      // <a href='vacansy' key={v.id}>
        <div class="vacansy" key={v.id} id-vacansy={v.id}>
          <div class="vacansy-info">
            <div class="job-title">
              {true && <p>{v.profession}</p>}
            </div>
            <div class="salary-and-work-days">
              <div class="salary">
                <h2>{v.payment_from}</h2>
              </div>
              <div class="dot">
                <p>•</p>
              </div>
              <div class="work-days">
                <p>{v.type_of_work.title}</p>
              </div>
            </div>
            <div class="location">
              <img src="locate item.svg" alt="" />
              <p>{v.address}</p>
            </div>
          </div>
          <button onClick={findVacansy}>{ isInFavorites ? <Saved/>:<Save/>}</button>
        </div>
     // </a> 
    )
  });

  return (
    <main>
      {vacancyElems}
    </main>
  )
}