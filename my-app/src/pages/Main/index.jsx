import './Main.css'
import favorites from './favorites.jsx'
import Header from './../../components/header'
import Filters from './../../components/filters'
import Search from './../../components/search'
import VacansyList from './../../components/vacansyList'
import selectVacansy from './selectVacnsy'
import { searchVacansies } from './../../api'
import { searchIndustry } from './../../api'
import { useEffect, useState } from 'react'

export default function App() {
  console.log('selectVacansy',selectVacansy)
  const [vacansies, setVacansies] = useState([])
  const [industry, setIndustry] = useState([])
  const [isInFavorite, setIsInFavorite] = useState(false)
  const [filters, setFilters] = useState({
    induastry: null,
    salary: {
      from: 0,
      to: 10000,
    },
    search:'',
  })
   

  
  const obgForUrl ={
    payment_from: filters.salary.from,
    payment_to: filters.salary.to,
    keyword:filters.search,
  }
  
  const urlFinal = new URL(`https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/`)
  for (let key of Object.keys(obgForUrl)) {
    urlFinal.searchParams.set(key, obgForUrl[key])
  }
  const searchUrl = urlFinal.toString()
  console.log(searchUrl)

  useEffect(() => {
      searchVacansies(searchUrl)
      .then(vacansies => {
        setVacansies(vacansies)
      });
      searchIndustry()
      .then(industryList => {
      setIndustry(industryList)
    });
  }, [])

  function searchVacansyByURL(){
    searchVacansies(searchUrl)
    .then(vacansies => {
      setVacansies(vacansies)
    });
  }
  
  
  function handleFiltersChange(newFilters){
    setFilters({...filters, ...newFilters})
  }
  console.log('filters:',filters)
  console.log('vacansies:',vacansies)

  

  function isVacansyInFavorites(vacansy){
    const isVacansyInFavorites = favorites.isInFavorites(vacansy)
    return isVacansyInFavorites
  }
  function toggleFavorites(vacansy) {
     favorites.toggleFavorites(vacansy)
     setIsInFavorite(!isInFavorite)
  }
  console.log('selectVacansy.handleFavorite',selectVacansy.handleFavorite)
  return (
    <div>
      <Header />
      <Filters filters={filters} onChange={handleFiltersChange} industry={industry} search={searchVacansyByURL}/>
      <div className='main'>
        <Search onChange={handleFiltersChange} filters={filters} />
        <VacansyList vacancies={vacansies} favoriteIds={selectVacansy.favoriteIds} onFavorite={selectVacansy.handleFavorite}/>
      </div>
    </div>
  )
}
// save={toggleFavorites} isVacansyInFavorites={isVacansyInFavorites} toggleVacansy={isInFavorite}