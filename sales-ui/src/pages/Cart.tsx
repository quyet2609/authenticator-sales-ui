import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { removeItem, clear } from '../store/cartSlice'

export default function Cart() {
  const dispatch = useDispatch()
  const items = useSelector((s: RootState) => s.cart.items)
  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0)
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
              <button className="link" onClick={() => dispatch(removeItem(it.id))}>Xóa</button>
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
        <button className="link" onClick={() => dispatch(clear())}>Xóa giỏ</button>
        <Link className="button" to="/checkout">Thanh toán</Link>
      </div>
    </div>
  )
}




