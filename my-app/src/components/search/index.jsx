import './style.css'

export default function Header(props) {
  console.log(props)
  function typing(e){
    props.onChange( { search: e.target.value  })
  }
  function search(){
    console.log('search',props)
    props.search()
    
  }
  return (
    <div class="search-vacansy">
      <input type="text" placeholder="" value={props.search} onChange={typing}/>
      <button  onClick={search}>Поиск</button>
    </div>
  )
}