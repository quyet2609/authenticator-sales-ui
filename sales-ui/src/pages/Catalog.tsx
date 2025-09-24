import { useDispatch } from 'react-redux'
import { products } from '../state/products'
import { addItem } from '../store/cartSlice'

export default function Catalog() {
  const dispatch = useDispatch()
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
              <button onClick={() => dispatch(addItem(p))}>Thêm</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}




