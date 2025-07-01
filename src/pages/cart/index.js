import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);
    const router = useRouter();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const changeQuantity = (index, change) => {
    const updatedCart = [...cart];
    const newQuantity = updatedCart[index].quantity + change;
    updatedCart[index].quantity = Math.max(1, Math.min(newQuantity, 10));
    updateCart(updatedCart);
  };

  const handleManualQuantity = (index, e) => {
    const updatedCart = [...cart];
    let qty = parseInt(e.target.value);
    if (isNaN(qty)) qty = 1;
    qty = Math.max(1, Math.min(qty, 10));
    updatedCart[index].quantity = qty;
    updateCart(updatedCart);
  };

  const removeItem = (index) => {
    if (window.confirm('Are you sure you want to remove this item from your cart?')) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      updateCart(updatedCart);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.selling_price) * item.quantity), 0);
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
       router.push('/address');
    }
  };

  // Styles
  const styles = {
    container: {
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      paddingBottom: '80px'
    },
    header: {
      backgroundColor: 'white',
      padding: '15px',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    backButton: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: '5px'
    },
    title: {
      flex: 1,
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: '600',
      color: '#333'
    },
    closeButton: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: '5px'
    },
    cartContent: {
      padding: '15px',
      maxWidth: '600px',
      margin: '0 auto'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '15px',
      marginBottom: '15px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    },
    emptyCart: {
      textAlign: 'center',
      padding: '40px 20px'
    },
    emptyCartImage: {
      width: '120px',
      opacity: '0.7',
      marginBottom: '20px'
    },
    emptyCartText: {
      color: '#666',
      fontSize: '16px',
      marginTop: '10px'
    },
    cartItem: {
      display: 'flex',
      padding: '12px 0',
      borderBottom: '1px solid #f0f0f0',
      position: 'relative'
    },
    cartItemImage: {
      width: '80px',
      height: '80px',
      objectFit: 'contain',
      borderRadius: '8px',
      border: '1px solid #eee',
      marginRight: '15px'
    },
    itemDetails: {
      flex: 1
    },
    itemTitle: {
      fontSize: '15px',
      fontWeight: '500',
      color: '#333',
      marginBottom: '5px',
      lineHeight: '1.3'
    },
    itemPrice: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#212121'
    },
    quantityControl: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px'
    },
    quantityButton: {
      width: '32px',
      height: '32px',
      borderRadius: '6px',
      border: '1px solid #ddd',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      backgroundColor: 'white'
    },
    quantityInput: {
      width: '50px',
      height: '32px',
      textAlign: 'center',
      border: '1px solid #ddd',
      borderRadius: '6px',
      margin: '0 8px',
      fontSize: '15px',
      fontWeight: '500'
    },
    removeButton: {
      position: 'absolute',
      right: '0',
      bottom: '15px',
      background: 'none',
      border: 'none',
      color: '#ff3e6c',
      fontSize: '13px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    removeIcon: {
      width: '16px',
      height: '16px',
      marginLeft: '5px'
    },
    cartTotal: {
      padding: '15px 0',
      fontSize: '18px',
      fontWeight: '700',
      textAlign: 'right',
      borderTop: '1px solid #f0f0f0',
      marginTop: '10px',
      color: '#212121'
    },
    safetyBanner: {
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px'
    },
    safetyIcon: {
      width: '40px',
      height: '40px',
      marginRight: '10px'
    },
    safetyText: {
      fontSize: '13px',
      color: '#666',
      flex: 1
    },
    promoImage: {
      width: '100%',
      borderRadius: '8px',
      marginBottom: '15px'
    },
    buttonContainer: {
      position: 'fixed',
      bottom: '0',
      left: '0',
      right: '0',
      backgroundColor: 'white',
      padding: '12px 15px',
      display: 'flex',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
      zIndex: 100
    },
    continueButton: {
      flex: 1,
      padding: '12px',
      backgroundColor: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '15px',
      fontWeight: '600',
      color: '#333',
      marginRight: '10px',
      cursor: 'pointer'
    },
    checkoutButton: {
      flex: 1,
      padding: '12px',
      backgroundColor: '#ffc200',
      border: 'none',
      borderRadius: '8px',
      fontSize: '15px',
      fontWeight: '600',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      opacity: cart.length === 0 ? 0.6 : 1
    },
    arrowIcon: {
      marginLeft: '5px'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <button style={styles.backButton} onClick={() =>  router.push(-1)}>
          <svg width="20" height="20" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
          </svg>
        </button>
        <div style={styles.title}>My Cart</div>
        <button style={styles.closeButton} onClick={() =>  router.push('/')}>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M12 10.586l5.707-5.707c.39-.39 1.023-.39 1.414 0s.39 1.023 0 1.414L13.414 12l5.707 5.707c.39.39.39 1.023 0 1.414s-1.023.39-1.414 0L12 13.414l-5.707 5.707c-.39.39-1.023.39-1.414 0s-.39-1.023 0-1.414L10.586 12 4.879 6.293c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0L12 10.586z"></path>
          </svg>
        </button>
      </div>

      {/* Cart Content */}
      <div style={styles.cartContent}>
        {/* Cart Items */}
        <div style={styles.card}>
          {cart.length === 0 ? (
            <div style={styles.emptyCart}>
              <img 
                src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png" 
                alt="Empty Cart" 
                style={styles.emptyCartImage}
              />
              <h3 style={{color: '#333', marginBottom: '5px'}}>Your cart is empty</h3>
              <p style={styles.emptyCartText}>Looks like you haven't added anything to your cart yet</p>
            </div>
          ) : (
            <>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {cart.map((item, index) => (
                  <li key={index}>
                    <div style={styles.cartItem}>
                      <img 
                        src={item.images} 
                        alt={item.Title} 
                        style={styles.cartItemImage}
                      />
                      <div style={styles.itemDetails}>
                        <div style={styles.itemTitle}>{item.Title}</div>
                        <div style={styles.itemPrice}>
                          ₹{(parseFloat(item.selling_price) * item.quantity).toLocaleString('en-IN')}
                        </div>
                        <div style={styles.quantityControl}>
                          <button 
                            style={{...styles.quantityButton, color: '#f44336', borderColor: '#f44336'}}
                            onClick={() => changeQuantity(index, -1)}
                          >
                            -
                          </button>
                          <input 
                            type="number" 
                            min="1" 
                            max="10" 
                            value={item.quantity} 
                            onChange={(e) => handleManualQuantity(index, e)}
                            style={styles.quantityInput}
                          />
                          <button 
                            style={{...styles.quantityButton, color: '#4CAF50', borderColor: '#4CAF50'}}
                            onClick={() => changeQuantity(index, 1)}
                          >
                            +
                          </button>
                        </div>
                        <button 
                          style={styles.removeButton}
                          onClick={() => removeItem(index)}
                        >
                          Remove
                          <svg style={styles.removeIcon} viewBox="0 0 24 24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#ff3e6c" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div style={styles.cartTotal}>
                Total: ₹{calculateTotal().toLocaleString('en-IN')}
              </div>
            </>
          )}
        </div>

        {/* Safety Banner */}
        <div style={styles.safetyBanner}>
          <img 
            src="https://rukminim1.flixcart.com/www/60/70/promos/13/02/2019/9b179a8a-a0e2-497b-bd44-20aa733dc0ec.png" 
            alt="Safety" 
            style={styles.safetyIcon}
          />
          <div style={styles.safetyText}>
            Safe and secure payments. Easy returns. 100% Authentic products.
          </div>
        </div>

        {/* <img 
          src="https://offermania.offerssales.online/assets1/home/images/offer.jpg" 
          alt="Offers" 
          style={styles.promoImage}
        />
        <img 
          src="https://offermania.offerssales.online/assets1/home/images/credit.jpg" 
          alt="Payment Options" 
          style={styles.promoImage}
        /> */}
      </div>

      {/* Footer Buttons */}
      <div style={styles.buttonContainer}>
        <button 
          style={{...styles.continueButton}}
          onClick={() => navigate('/')}
        >
          Continue Shopping
        </button>
        <button  
          style={{...styles.checkoutButton ,color:"#000"}}
          onClick={placeOrder}
          disabled={cart.length === 0}
        >
          {cart.length > 0 ? (
            `Place Order (₹${calculateTotal().toLocaleString('en-IN')})`
          ) : (
            'Place Order'
          )}
          <svg style={styles.arrowIcon} width="15" height="15" viewBox="0 0 24 24">
            <path d="M12.068.016l-3.717 3.698 5.263 5.286h-13.614v6h13.614l-5.295 5.317 3.718 3.699 11.963-12.016" fill="#ffffff"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartPage;