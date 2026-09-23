import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/catalog/${product.id}`} className="product-card">
      <div className="product-swatch" style={{ background: product.color }}>
        {product.name[0]}
      </div>
      <div className="product-body">
        <p className="product-name">{product.name}</p>
        <div className="product-price">{product.price} ₽</div>
      </div>
    </Link>
  );
}