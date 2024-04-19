// import './Main.css'
import Header from './../../components/header'
import Vacansy from './../../components/vacansy'
import selectVacansy from './../Main/selectVacnsy'

export default function App() {
  const vacancyString = localStorage.getItem('vacancy')
  const vacancy = JSON.parse(vacancyString)
  return (
    <div>
      <Header />  
      <Vacansy vacancy={vacancy} favoriteIds={selectVacansy.favoriteIds} onFavorite={selectVacansy.handleFavorite}/>
    </div>
  )
}