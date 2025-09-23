import { Link, Outlet } from 'react-router-dom'
import { CartProvider } from '../state/CartContext'

export default function App() {
  return (
    <CartProvider>
      <div className="container">
        <header className="header">
          <h1>Shop</h1>
          <nav>
            <Link to="/">Sản phẩm</Link>
            <Link to="/cart">Giỏ hàng</Link>
            <Link to="/checkout">Thanh toán</Link>
          </nav>
        </header>
        <main className="main">
          <Outlet />
        </main>
        <footer className="footer">© {new Date().getFullYear()} Sales UI</footer>
      </div>
    </CartProvider>
  )
}



