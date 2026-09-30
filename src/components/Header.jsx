import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Header() {

  const [query, setQuery] = useState('');
  
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // проверка ввода
    // если пусто = на главную
    // .trim() - убирает пробелы слева и с права
    if (!query.trim()){ navigate('/'); return};
    // если не пусто = отправляет на нужную страницу
    // encodeURIComponent = декодирует строку в нужный вид для поисковой строки
    navigate(`/search?q=${encodeURIComponent(query.trim())}`); 
  }

  function handleSearchKeyDown(e) {
    // handleSearchKeyDown *(e)* -> if(e.key)
    // .trim() = убирает пробелы слева и справа
    // navigate = функция переводит пользователя на другую страницу без перезагрузки
    // handleSearchKeyDown *(e)* -> *e.*target/*на каком элементе происходит событие(у нас это input)*/
    //.*value/*что записано в импуте(то что записывает человек в поиск)*/
    if (e.key === 'Enter' && e.target.value.trim()) {
      navigate('/search?q=' + encodeURIComponent(e.target.value.trim()));
    }
  }


  return (
      
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </Link>        
        <nav className="nav">
          <NavLink  to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Главная</NavLink >
          <NavLink  to="/catalog" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Фильмы</NavLink >
          <NavLink to="/about" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>О проекте</NavLink>
        </nav>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
          <input
          // value={query} хранилище текста в инпут
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            // onKeyDown={handleSearchKeyDown} когда нажата клавиша enter
            onKeyDown={handleSearchKeyDown}
            placeholder="Поиск фильмов"
          />
        </form>
      </div>
    </header>
  );
}
