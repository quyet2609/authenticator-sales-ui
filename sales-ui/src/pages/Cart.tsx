import { Link } from 'react-router-dom'
import { useCart } from '../state/CartContext'

export default function Cart() {
  const { items, removeItem, clear, total } = useCart()
  if (items.length === 0) {
    return (
      <div className="empty">
        <p>Giỏ hàng trống.</p>
        <Link className="button" to="/">Tiếp tục mua sắm</Link>
      </div>
    )
  }
  return (
    <div className="cart">
      {items.map((it) => (
        <div key={it.id} className="cart-row">
          <img src={it.image} alt={it.name} />
          <div className="flex1">
            <div className="row space">
              <strong>{it.name}</strong>
              <button className="link" onClick={() => removeItem(it.id)}>Xóa</button>
            </div>
            <div className="muted">{it.description}</div>
          </div>
          <div className="price">
            {(it.price * it.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </div>
        </div>
      ))}
      <div className="row space total">
        <strong>Tổng:</strong>
        <strong>{total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</strong>
      </div>
      <div className="row space">
        <button className="link" onClick={clear}>Xóa giỏ</button>
        <Link className="button" to="/checkout">Thanh toán</Link>
      </div>
    </div>
  )
}



