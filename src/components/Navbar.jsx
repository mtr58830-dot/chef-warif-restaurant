import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ShoppingCart } from 'lucide-react'
import './Navbar.css'

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <h2>🍗 الشيف وريف</h2>
          </Link>

          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>الرئيسية</Link>
            <Link to="/menu" className="nav-link" onClick={() => setIsOpen(false)}>القائمة</Link>
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>عن المطعم</Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>اتصل بنا</Link>
          </div>

          <div className="nav-actions">
            <Link to="/cart" className="cart-link">
              <ShoppingCart size={24} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
            <button className="order-btn">اطلب الآن</button>
          </div>

          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar