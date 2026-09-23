import { useState } from 'react';
import { NavLink } from 'react-router-dom';
inport { useNavigate } from 'react-router-dom';

export default function Header() {
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <nav className="main-nav">
  <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
    Главная
  </NavLink>
  <NavLink to="/catalog" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
    Каталог
  </NavLink>
</nav>
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </a>

        <nav className="nav">
          <a href="/" className="nav-item">Главная</a>
          <a href="/movies" className="nav-item">Фильмы</a>
          <a href="/about" className="nav-item">О проекте</a>
        </nav>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск фильмов"
          />
        </form>
      </div>
    </header>
  );
}
