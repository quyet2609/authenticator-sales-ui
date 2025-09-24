import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { clear } from '../store/cartSlice'

export default function Checkout() {
  const dispatch = useDispatch()
  const items = useSelector((s: RootState) => s.cart.items)
  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name || !email || !address) return
    setSubmitted(true)
    dispatch(clear())
  }

  if (submitted) {
    return (
      <div className="success">
        <h2>Cảm ơn bạn!</h2>
        <p>Đơn hàng đã được tiếp nhận.</p>
      </div>
    )
  }

  return (
    <div className="checkout">
      <h2>Thanh toán</h2>
      <div className="muted">Sản phẩm: {items.length} • Tổng: {total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
      <form onSubmit={onSubmit} className="form">
        <label>
          Họ tên
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Địa chỉ
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <button type="submit" className="button">Đặt hàng</button>
      </form>
    </div>
  )
}




