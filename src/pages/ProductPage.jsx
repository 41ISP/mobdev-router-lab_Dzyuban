import { useParams, useNavigate } from 'react-router-dom';
import { products, labelForCategory } from '../data/products.js';

export default function ProductPage() {
    // useParams = достаёт параметры из адреса URL строки
    // вся функция достаёт все id из написанного в URL
    const { id } = useParams();
    // useNavigate() перенаправляет пользователя на другую страницу без презагрузки страницы
    const navigate = useNavigate();

    // .find() перебирает все элементы массива и находит сходство опираясь на функцию
    // функцию (p => p.id === id) p = первый элемент массива,
    // p.id = id первого элемента массива сравнивается с нашим внесённым id
    const product = products.find(p => p.id === id)

    if (!product) {
    return <div className="not-found-inline">Такой книги нет в каталоге.</div>;
  }

  // отрисовка книги
  return (
    <section className="page-shell">
      <div className="product-detail">
        <div className="detail-swatch" style={{ background: product.color }}>
          {product.name[0]}
        </div>
        <div className="detail-body">
          <p className="detail-name">{product.name}</p>
          <p className="detail-cat">{labelForCategory(product.category)}</p>
          <div className="detail-price">{product.price} ₽</div>
          <p className="detail-desc">{product.description}</p>
          <button type="button" className="btn ghost" onClick={() => navigate(-1)}>
            ← Назад
          </button>
        </div>
      </div>
    </section>
  );


}