import { useCart } from '../state/CartContext'
import { products } from '../state/products'

export default function Catalog() {
  const { addItem } = useCart()
  return (
    <div className="grid">
      {products.map((p) => (
        <div key={p.id} className="card">
          <img src={p.image} alt={p.name} />
          <div className="card-body">
            <h3>{p.name}</h3>
            <p className="muted">{p.description}</p>
            <div className="row">
              <span className="price">{p.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
              <button onClick={() => addItem(p)}>Thêm</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}



