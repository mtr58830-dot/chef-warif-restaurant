import { ShoppingCart, Heart } from 'lucide-react'
import './DishCard.css'

const DishCard = ({ dish, onAddToCart, isFeatured = false }) => {
  return (
    <div className={`dish-card ${isFeatured ? 'featured' : ''}`}>
      <div className="dish-image-wrapper">
        <img src={dish.image} alt={dish.nameAr} className="dish-image" />
        <button className="wish-btn">
          <Heart size={20} />
        </button>
        {isFeatured && <span className="featured-badge">مميز</span>}
      </div>
      <div className="dish-content">
        <div className="dish-header">
          <div>
            <h3>{dish.nameAr}</h3>
            <p className="dish-name-en">{dish.nameEn}</p>
          </div>
          <div className="dish-price">{dish.price} ش</div>
        </div>
        <p className="dish-description">{dish.description}</p>
        <button className="add-to-cart-btn" onClick={() => onAddToCart(dish)}>
          <ShoppingCart size={18} />
          أضف إلى السلة
        </button>
      </div>
    </div>
  )
}

export default DishCard