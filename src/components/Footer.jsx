import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react'
import { restaurantInfo } from '../data/menu'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>مطعم الشيف وريف</h3>
            <p>أفضل الشاورما والمأكولات الشرقية الأصيلة في غزة</p>
            <div className="footer-rating">
              <span className="stars">⭐ 4.3/5</span>
              <span className="reviews">(63 تقييم)</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>معلومات التواصل</h4>
            <div className="footer-info">
              <div className="info-item">
                <Phone size={18} />
                <a href={`tel:${restaurantInfo.phone}`}>{restaurantInfo.phone}</a>
              </div>
              <div className="info-item">
                <Phone size={18} />
                <a href={`tel:${restaurantInfo.phone2}`}>{restaurantInfo.phone2}</a>
              </div>
              <div className="info-item">
                <Mail size={18} />
                <a href={`mailto:${restaurantInfo.email}`}>{restaurantInfo.email}</a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>العنوان وساعات العمل</h4>
            <div className="footer-info">
              <div className="info-item">
                <MapPin size={18} />
                <span>{restaurantInfo.address}</span>
              </div>
              <div className="info-item">
                <Clock size={18} />
                <span>يومياً: 10:00 - 23:00</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>تابعنا</h4>
            <div className="social-links">
              <a href={restaurantInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={24} />
              </a>
              <a href={`https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="social-link">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 مطعم الشيف وريف. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer