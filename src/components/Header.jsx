import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
      
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </a>        
        <nav className="nav">
          <NavLink  to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Главная</NavLink >
          <NavLink  to="/catalog" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Фильмы</NavLink >
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
