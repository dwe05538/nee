"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { trackInitiateCheckout } from "../utils/pixelEvents";

const OrderSummary = () => {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userData = JSON.parse(localStorage.getItem("user")) || {};
            const cartData = JSON.parse(localStorage.getItem("cart")) || [];
            setUser(userData);
            setCartItems(cartData);
            calculateTotals(cartData);
        }
    }, []);

    const calculateTotals = (items) => {
        let amount = 0;
        let discount = 0;
        
        items.forEach(item => {
            amount += item.selling_price * item.quantity;
            discount += (item.mrp - item.selling_price) * item.quantity;
        });
        
        setTotalAmount(amount);
        setTotalDiscount(discount);
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        
        const updatedCart = cartItems.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        
        setCartItems(updatedCart);
        calculateTotals(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        calculateTotals(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="order-summary-container">
            <div className="container-fluid p-3 px-0 header-container">
                <div className="row header align-items-center">
                    <div className="col-1">
                        <div className="menu-icon" onClick={() => router.push("/")}>
                            <svg
                                width={19}
                                height={16}
                                viewBox="0 0 19 16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
                                    stroke="#000"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="menu-logo">
                            <h4 className="mb-0">Order Summary</h4>
                        </div>
                    </div>
                </div>
                
                <div className="order-summary-content">
                    <div className="progress-indicator">
                        <img
                            className="w-100"
                            src={"/uploads/progress-indicator-summary.png"}
                            alt="Progress indicator"
                        />
                    </div>
                    
                    <div className="delivery-address-section">
                        <h3>Delivered to:</h3>
                        <div className="address-details">
                            <h4>Name: {user?.name}</h4>
                            <div className="address">Address: {user?.address}</div>
                            <div className="contact">Mobile: {user?.phone}</div>
                        </div>
                    </div>
                    
                    <div className="cart-items-section">
                        <h3>Your Items ({cartItems.length})</h3>
                        <ul className="cart-items-list">
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <li key={item.id} className="cart-item">
                                        <div className="item-main-info">
                                            <img
                                                src={item.images}
                                                alt={item.Title}
                                                className="item-image"
                                            />
                                            <div className="item-details">
                                                <div className="item-title">{item.Title}</div>
                                                <img
                                                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                                                    width="77px"
                                                    className="advantage-badge"
                                                    alt="Flipkart Advantage"
                                                />
                                            </div>
                                        </div>
                                        <div className="item-controls">
                                            <div className="quantity-controls">
                                                <button 
                                                    className="quantity-btn minus"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    -
                                                </button>
                                                <span className="quantity">{item.quantity}</span>
                                                <button 
                                                    className="quantity-btn plus"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                                <button 
                                                    className="remove-btn"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                            <div className="item-pricing">
                                                <span className="original-price">
                                                    ₹ {item.mrp * item.quantity}
                                                </span>
                                                <span className="discounted-price">
                                                    ₹ {item.selling_price * item.quantity}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <div className="empty-cart-message">
                                    <p>Your cart is empty</p>
                                    <button 
                                        className="continue-shopping-btn"
                                        onClick={() => router.push("/")}
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            )}
                        </ul>
                    </div>
                    
                    {cartItems.length > 0 && (
                        <>
                            <div className="price-details-section">
                                <h3>Price Details</h3>
                                <div className="price-breakdown">
                                    <div className="price-row">
                                        <span>Price ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                                        <span>₹ {cartItems.reduce((acc, item) => acc + (item.mrp * item.quantity), 0)}</span>
                                    </div>
                                    <div className="price-row">
                                        <span>Discount</span>
                                        <span className="discount">- ₹ {totalDiscount}</span>
                                    </div>
                                    <div className="price-row">
                                        <span>Delivery Charges</span>
                                        <span className="free-delivery">FREE Delivery</span>
                                    </div>
                                    <div className="price-row total-amount">
                                        <span>Total Amount</span>
                                        <span>₹ {totalAmount}</span>
                                    </div>
                                    <div className="savings-message">
                                        You will save <span className="savings-amount">- ₹ {totalDiscount}</span> on this order
                                    </div>
                                </div>
                            </div>
                            
                            <div className="safety-banner">
                                <img
                                    className="safety-icon"
                                    src="https://rukminim1.flixcart.com/www/60/70/promos/13/02/2019/9b179a8a-a0e2-497b-bd44-20aa733dc0ec.png?q=90"
                                    loading="lazy"
                                    alt="Safety banner"
                                />
                                <div className="safety-text">
                                    Safe and secure payments. Easy returns. 100% Authentic products.
                                </div>
                            </div>
                            
                            <div className="checkout-footer">
                                <div className="footer-pricing">
                                    <span className="total-discount">- ₹ {totalDiscount}</span>
                                    <span className="final-price">₹ {totalAmount}</span>
                                </div>
                                <button
                                    className="proceed-to-payment-btn"
                                    onClick={() => {
                                            trackInitiateCheckout(cartItems);
router.push('/payment')}}
                                >
                                    Proceed to Payment
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            
            <style jsx>{`
                .order-summary-container {
                    height: 100%;
                    background-color: #f5f5f5;
                }
                
                .header-container {
                    background-color: white;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    position: sticky;
                    top: 0;
                    z-index: 10;
                }
                
                .menu-icon {
                    cursor: pointer;
                    padding: 8px;
                }
                
                .menu-logo h4 {
                    font-weight: 600;
                }
                
                .order-summary-content {
                    padding-bottom: 80px;
                }
                
                .progress-indicator {
                    padding: 16px 0;
                    background-color: white;
                    margin-bottom: 12px;
                }
                
                .delivery-address-section,
                .cart-items-section,
                .price-details-section {
                    background-color: white;
                    padding: 16px;
                    margin-bottom: 12px;
                    border-radius: 4px;
                }
                
                .delivery-address-section h3,
                .cart-items-section h3,
                .price-details-section h3 {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 12px;
                }
                
                .address-details h4 {
                    font-size: 16px;
                    margin-bottom: 8px;
                }
                
                .address, .contact {
                    font-size: 14px;
                    color: #666;
                    margin-bottom: 4px;
                }
                
                .cart-item {
                    padding: 16px 0;
                    border-bottom: 1px solid #eee;
                }
                
                .item-main-info {
                    display: flex;
                    gap: 16px;
                }
                
                .item-image {
                    width: 80px;
                    height: 80px;
                    object-fit: contain;
                    border: 1px solid #eee;
                    border-radius: 4px;
                }
                
                .item-details {
                    flex: 1;
                }
                
                .item-title {
                    font-weight: 500;
                    margin-bottom: 8px;
                }
                
                .advantage-badge {
                    margin-top: 8px;
                }
                
                .item-controls {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 16px;
                }
                
                .quantity-controls {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .quantity-btn {
                    width: 30px;
                    height: 30px;
                    border: 1px solid #ddd;
                    background: white;
                    border-radius: 4px;
                    font-weight: bold;
                    cursor: pointer;
                }
                
                .quantity {
                    min-width: 20px;
                    text-align: center;
                }
                
                .remove-btn {
                    background: none;
                    border: none;
                    color: #ff3f6c;
                    cursor: pointer;
                    margin-left: 12px;
                    font-size: 14px;
                }
                
                .item-pricing {
                    text-align: right;
                }
                
                .original-price {
                    text-decoration: line-through;
                    color: #999;
                    font-size: 14px;
                    margin-right: 8px;
                }
                
                .discounted-price {
                    font-weight: 600;
                    color: #212121;
                }
                
                .empty-cart-message {
                    text-align: center;
                    padding: 32px 0;
                }
                
                .continue-shopping-btn {
                    background: #2874f0;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    margin-top: 16px;
                    cursor: pointer;
                }
                
                .price-row {
                    display: flex;
                    justify-content: space-between;
                    margin: 12px 0;
                }
                
                .discount {
                    color: #388e3c;
                }
                
                .free-delivery {
                    color: #388e3c;
                }
                
                .total-amount {
                    font-weight: 600;
                    padding-top: 12px;
                    border-top: 1px dashed #ddd;
                }
                
                .savings-message {
                    color: #388e3c;
                    font-size: 14px;
                    padding-top: 12px;
                    border-top: 1px dashed #ddd;
                }
                
                .savings-amount {
                    font-weight: 600;
                }
                
                .safety-banner {
                    display: flex;
                    align-items: center;
                    background: white;
                    padding: 12px 16px;
                    margin-bottom: 12px;
                    gap: 12px;
                }
                
                .safety-icon {
                    width: 40px;
                    height: 40px;
                }
                
                .safety-text {
                    font-size: 14px;
                    color: #666;
                }
                
                .checkout-footer {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: white;
                    padding: 12px 16px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
                }
                
                .footer-pricing {
                    display: flex;
                    flex-direction: column;
                }
                
                .total-discount {
                    color: #388e3c;
                    font-size: 14px;
                    text-decoration: line-through;
                }
                
                .final-price {
                    font-weight: 600;
                    font-size: 18px;
                }
                
                .proceed-to-payment-btn {
                    background: #fb641b;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 4px;
                    font-weight: 600;
                    cursor: pointer;
                    flex: 1;
                    max-width: 200px;
                }
            `}</style>
        </div>
    );
};

export default OrderSummary;