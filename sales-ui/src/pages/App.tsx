import { Link, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}




