import './style.css'
import Logo from './../../icons/logo'

export default function Header() {
  return (
    <nav>
      <a href='/'>
        <div class="logo">
          <Logo />
        </div>
      </a>
      
      <div class="center-items">
          <div class="find-job">
              <a href="/" class="a-find-job">Поиск вакансий</a>
          </div>
          <div class="favorites">
              <a href="/favorites" class="a-favorites">Избранное</a>
          </div>
      </div>
    </nav>
  )
}