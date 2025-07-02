export const fbq = (...args) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(...args);
  }
};

// Predefined eCommerce Events
export const trackViewContent = (product) => {
  fbq('track', 'ViewContent', {
    content_ids: [product.id],
    content_name: product.Title,
    content_type: 'product',
    value: parseFloat(product.selling_price),
    currency: 'INR',
  });
};

export const trackAddToCart = (product) => {
  fbq('track', 'AddToCart', {
    content_ids: [product.id],
    content_name: product.Title,
    content_type: 'product',
    value: parseFloat(product.selling_price),
    currency: 'INR',
  });
};

export const trackInitiateCheckout = (cart) => {
  fbq('track', 'InitiateCheckout', {
    content_ids: cart.map((item) => item.id),
    content_type: 'product',
    value: cart.reduce((sum, item) => sum + parseFloat(item.selling_price) * item.quantity, 0),
    currency: 'INR',
    num_items: cart.length,
  });
};

export const trackPurchase = (orderId, cart, total) => {
  fbq('track', 'Purchase', {
    content_ids: cart.map((item) => item.id),
    content_type: 'product',
    value: total,
    currency: 'INR',
    order_id: orderId,
  });
};
