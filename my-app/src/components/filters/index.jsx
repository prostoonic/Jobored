import './style.css'
import Cross from './../../icons/cross'

export default function Filters(props) {
  console.log(props)

  function onChangeFrom(e){
    props.onChange( { salary: {from: +e.target.value, to:props.filters.salary.to }})
  }
  function onChangeTo(e){
    props.onChange( { salary: {from: props.filters.salary.from, to:+e.target.value }})
  }
  function onChangeIndusty(e){
    props.onChange( { induastry: e.target.value  })
  }
  function search(){
    props.search()
    console.log('search')
  }
  const options = props.industry.map((o) => {
    return(
      <option key={o.key} value={o.key}>{o.title}</option>
      )
    })


  return (
   <aside>
    <div class="aside-items">
          <div class="upper-block">
              <div class="filters">
                  <p>Фильтры</p>
              </div>
              <div class="reset-btn">
                  <p class="reset">Сбросить все</p>
                  <Cross />
              </div>
          </div>
          <div class="industry">
              <p>Отрасль</p>
              <select name="Выберите отрасль" value= {props.filters.industry} onChange={onChangeIndusty} >
                {options}
              </select>
          </div>
          <div class="salary-inputs">
              <p>Оклад</p>
              <input type="number" placeholder="От" value= {props.filters.salary.from} onChange={onChangeFrom} />
              <input type="number" placeholder="До" value= {props.filters.salary.to} onChange={onChangeTo} />
          </div>
          <div class="apply-btn">
              <button class="btn" type="button" onClick={search}>Применить</button >
          </div>
        </div>
   </aside>  
  )
}