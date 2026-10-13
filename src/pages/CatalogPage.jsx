import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import CategoryFilter from '../components/CategoryFilter.jsx';
import { movies, genres } from '../data/movies.js';

export default function CatalogPage() {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || '';
   const visibleMovies = activeCategory
    ? movies.filter(m => m.genre === activeCategory)
    : movies;
    return (
    <section className="page-shell">
      <CategoryFilter categories={genres} />
      <div className="product-grid">
        {visibleMovies.map(movie => (
          <ProductCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
