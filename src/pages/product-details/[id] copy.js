import React, { useEffect, useState } from 'react'
import { Carousel } from "react-bootstrap";
import { useRouter } from 'next/router';
import { FaShare, FaHeart, FaShoppingCart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

function ProductDetails() {
  const initialTime = 900; // 15 minutes in seconds
  const [time, setTime] = useState(initialTime);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const router = useRouter();
  const [product, setProduct] = useState({
    title: "15 Kg Tirupati Cottonseed Oil Tin",
    images: [
      "/product1.jpg",
      "/product2.jpg",
      "/product3.jpg"
    ],
    price: 1750,
    mrp: 2000,
    discount: 12,
    rating: 4.5,
    reviews: 120,
    features: `
      <ul>
        <li>Brand: Tirupati</li>
        <li>Type: Cottonseed Oil</li>
        <li>Quantity: 15 Kg</li>
        <li>Packaging: Tin</li>
        <li>100% Pure and Natural</li>
        <li>Rich in Vitamin E</li>
        <li>High smoke point</li>
        <li>Long shelf life</li>
      </ul>
    `,
    description: "Tirupati Cottonseed Oil is 100% pure and natural oil extracted from premium quality cottonseeds. It is rich in Vitamin E and has a high smoke point making it ideal for frying and cooking. The oil comes in a durable tin packaging of 15 Kg.",
    variants: [
      { id: 1, name: "5 Kg", price: 600 },
      { id: 2, name: "10 Kg", price: 1200 },
      { id: 3, name: "15 Kg", price: 1750 }
    ]
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(timer);
      } else {
        setTime(prevTime => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handleBuy = () => {
    // Add to cart or buy now logic
    router.push("/checkout");
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity > 0 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const percentageOff = ((product.mrp - product.price) / product.mrp) * 100;

  return (
    <div className="product-details-page">
      <div className="header" style={{ backgroundColor: "#2874f0" }}>
        <div className="container-fluid py-2">
          <div className="row align-items-center">
            <div className="col-1">
              <div className="menu-icon" onClick={() => router.back()}>
                <svg width={19} height={16} viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </div>
            <div className="col-2">
              <div className="menu-logo mx-2">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                  className="_31Y9yB"
                  style={{ width: 85 }}
                  alt="Flipkart Logo"
                />
              </div>
            </div>
            <div className="col-6"></div>
            <div className="col-1">
              <div className="menu-icon">
                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#FFF" fillRule="evenodd">
                    <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203" />
                    <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="col-1">
              <div className="menu-icon">
                <svg width={16} height={16} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#fff" fillRule="evenodd">
                    <path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804" />
                    <path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245" />
                    <path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066" />
                    <path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503" />
                    <path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-container">
        <div className="product-images-container card mb-4">
          <div className="product-actions">
            <div className={`wishlist-icon ${isWishlisted ? 'active' : ''}`} onClick={handleWishlist}>
              <FaHeart style={{ color: isWishlisted ? '#ff6161' : '#bbb1b1' }} />
              <span>{isWishlisted ? 'Wishlisted' : 'Wishlist'}</span>
            </div>
            <div className="share-icon">
              <FaShare style={{ color: '#bbb1b1' }} />
              <span>Share</span>
            </div>
          </div>
          
          <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null}>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Product ${index + 1}`}
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          
          <div className="thumbnail-container">
            {product.images.map((image, index) => (
              <div 
                key={index} 
                className={`thumbnail ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info-container card mb-4">
          <h1 className="product-title">{product.title}</h1>
          
          <div className="product-rating">
            <div className="rating-badge">
              {product.rating} ★
            </div>
            <span className="rating-count">{product.reviews} Ratings & Reviews</span>
          </div>
          
          <div className="price-container">
            <div className="current-price">₹{product.price}</div>
            <div className="mrp">₹{product.mrp}</div>
            <div className="discount">{percentageOff.toFixed(0)}% off</div>
          </div>
          
          <div className="offer-timer">
            <span>Offer ends in </span>
            <span className="time">{Math.floor(time / 60)}m {time % 60}s</span>
          </div>
          
          <div className="product-features">
            <h3>Highlights</h3>
            <div dangerouslySetInnerHTML={{ __html: product.features }} />
          </div>
          
          <div className="product-variants">
            <h3>Available Options</h3>
            <div className="variant-options">
              {product.variants.map(variant => (
                <div 
                  key={variant.id} 
                  className={`variant ${product.price === variant.price ? 'selected' : ''}`}
                  onClick={() => setProduct({...product, price: variant.price, mrp: variant.price * 1.15})}
                >
                  {variant.name}
                </div>
              ))}
            </div>
          </div>
          
          <div className="quantity-selector">
            <h3>Quantity</h3>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
          </div>
          
          <div className="delivery-info">
            <h3>Delivery Options</h3>
            <div className="delivery-option">
              <input type="text" placeholder="Enter delivery pincode" />
              <button>Check</button>
            </div>
            <div className="delivery-message">
              Delivery by 2 days, Free for orders above ₹500
            </div>
          </div>
        </div>
        
        <div className="seller-info-container card mb-4">
          <h3>Seller Information</h3>
          <div className="seller-details">
            <div className="seller-name">SuperComNet</div>
            <div className="seller-rating">4.2 ★ (1.2k ratings)</div>
          </div>
          <div className="seller-benefits">
            <div className="benefit">
              <img src="/7-day-return.png" alt="7 Day Return" />
              <span>7 Day Replacement</span>
            </div>
            <div className="benefit">
              <img src="/cod-not-available.png" alt="No COD" />
              <span>No Cash On Delivery</span>
            </div>
            <div className="benefit">
              <img src="/plus-badge.png" alt="Plus" />
              <span>Plus (F-Assured)</span>
            </div>
          </div>
        </div>
        
        <div className="product-description card mb-4">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        
        <div className="action-buttons">
          <button className="add-to-cart" onClick={handleBuy}>
            <FaShoppingCart /> ADD TO CART
          </button>
          <button className="buy-now" onClick={handleBuy}>
            BUY NOW
          </button>
        </div>
      </div>

      <style jsx>{`
        .product-details-page {
          background-color: #f1f3f6;
          padding-bottom: 20px;
        }
        
        .header {
          color: white;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .menu-icon {
          cursor: pointer;
          padding: 8px;
        }
        
        .product-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 15px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
        }
        
        @media (min-width: 768px) {
          .product-container {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        .card {
          background: white;
          border-radius: 4px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          padding: 15px;
        }
        
        .product-images-container {
          position: relative;
        }
        
        .product-actions {
          position: absolute;
          right: 15px;
          top: 15px;
          z-index: 10;
          display: flex;
          gap: 15px;
        }
        
        .wishlist-icon, .share-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          font-size: 12px;
        }
        
        .wishlist-icon.active svg {
          color: #ff6161 !important;
        }
        
        .thumbnail-container {
          display: flex;
          gap: 10px;
          margin-top: 15px;
          overflow-x: auto;
        }
        
        .thumbnail {
          width: 60px;
          height: 60px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          cursor: pointer;
          overflow: hidden;
        }
        
        .thumbnail.active {
          border-color: #2874f0;
        }
        
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .product-title {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 10px;
          color: #212121;
        }
        
        .product-rating {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }
        
        .rating-badge {
          background: #388e3c;
          color: white;
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 14px;
          display: flex;
          align-items: center;
        }
        
        .rating-count {
          color: #878787;
          font-size: 14px;
        }
        
        .price-container {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }
        
        .current-price {
          font-size: 24px;
          font-weight: 500;
        }
        
        .mrp {
          font-size: 16px;
          color: #878787;
          text-decoration: line-through;
        }
        
        .discount {
          color: #388e3c;
          font-size: 16px;
          font-weight: 500;
        }
        
        .offer-timer {
          background: #fef4e5;
          padding: 8px;
          border-radius: 4px;
          margin-bottom: 15px;
          font-size: 14px;
        }
        
        .offer-timer .time {
          font-weight: 500;
          color: #e53935;
        }
        
        .product-features ul {
          padding-left: 20px;
          margin: 10px 0;
        }
        
        .product-features li {
          margin-bottom: 5px;
        }
        
        .variant-options {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }
        
        .variant {
          border: 1px solid #e0e0e0;
          padding: 8px 15px;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .variant.selected {
          border-color: #2874f0;
          background-color: #f0f7ff;
        }
        
        .quantity-selector {
          margin: 20px 0;
        }
        
        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
        }
        
        .quantity-controls button {
          width: 30px;
          height: 30px;
          border: 1px solid #e0e0e0;
          background: white;
          font-size: 16px;
          cursor: pointer;
          border-radius: 4px;
        }
        
        .quantity-controls span {
          width: 40px;
          text-align: center;
        }
        
        .delivery-option {
          display: flex;
          gap: 10px;
          margin: 10px 0;
        }
        
        .delivery-option input {
          flex: 1;
          padding: 8px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
        }
        
        .delivery-option button {
          background: #2874f0;
          color: white;
          border: none;
          padding: 0 15px;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .delivery-message {
          color: #388e3c;
          font-size: 14px;
        }
        
        .seller-details {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }
        
        .seller-name {
          font-weight: 500;
        }
        
        .seller-rating {
          color: #2874f0;
        }
        
        .seller-benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }
        
        .benefit {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 12px;
          text-align: center;
        }
        
        .benefit img {
          width: 30px;
          height: 30px;
          margin-bottom: 5px;
        }
        
        .action-buttons {
          display: flex;
          gap: 15px;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          padding: 15px;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        }
        
        .add-to-cart, .buy-now {
          flex: 1;
          padding: 12px;
          border: none;
          border-radius: 4px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .add-to-cart {
          background: #ff9f00;
          color: white;
        }
        
        .buy-now {
          background: #fb641b;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default ProductDetails;