// app/order-confirmation/page.tsx
'use client'; // Mark as a Client Component since we're using hooks and browser APIs

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { trackPurchase } from '../utils/pixelEvents';

export default function OrderConfirmation() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState({
    orderId: '',
    orderDate: '',
    paymentMethod: '',
    amount: '',
    deliveryDate: ''
  });
 useEffect(() => {
   
  }, []);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const paymentData = JSON.parse(localStorage.getItem('current_payment') || '{}');
      const orderId = 'ORDER' + Math.floor(100000 + Math.random() * 900000);
      
      // Calculate dates
      const orderDate = new Date(paymentData.timestamp || Date.now());
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 3 + Math.floor(Math.random() * 3));
      
      // Format payment method
      let methodName = '';
      if (paymentData.method) {
        switch(paymentData.method) {
          case 'phonepe': methodName = 'PhonePe'; break;
          case 'gpay': methodName = 'Google Pay'; break;
          case 'paytm': methodName = 'Paytm'; break;
          case 'bhim_upi': methodName = 'UPI'; break;
          default: methodName = paymentData.method;
        }
      }

      setOrderDetails({
        orderId,
        orderDate: orderDate.toLocaleDateString('en-US', {
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric'
        }),
        paymentMethod: methodName,
        amount: paymentData.amount ? `₹${parseFloat(paymentData.amount).toFixed(2)}` : '',
        deliveryDate: deliveryDate.toLocaleDateString('en-US', {
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric'
        })
      });

      // Clear payment data from storage
      localStorage.removeItem('current_payment');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white max-w-md w-full rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-5 text-center text-white">
          <h1 className="text-2xl font-bold mb-2">Thank You For Your Order!</h1>
          <p>Your payment was successful</p>
        </div>
        
        <div className="p-5 text-center">
          <svg 
            className="w-20 h-20 mx-auto my-5" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 52 52"
          >
            <circle cx="26" cy="26" r="25" fill="none" stroke="#059669" strokeWidth="2"/>
            <path fill="none" stroke="#059669" strokeWidth="4" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
          
          <div className="text-lg font-bold text-blue-600 mb-4">
            Order #{orderDetails.orderId}
          </div>
          
          <p className="text-gray-700 mb-5 leading-relaxed">
            Your order has been received and is being processed. 
            We've sent a confirmation email with all the details.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-5 text-left">
            <div className="flex justify-between mb-3">
              <span className="text-gray-600 font-medium">Order Date:</span>
              <span className="font-semibold text-gray-800">{orderDetails.orderDate}</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="text-gray-600 font-medium">Payment Method:</span>
              <span className="font-semibold text-gray-800">{orderDetails.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Amount Paid:</span>
              <span className="font-semibold text-gray-800">{orderDetails.amount}</span>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-5 text-left">
            <h3 className="text-green-700 font-semibold mb-2">Estimated Delivery</h3>
            <p className="text-gray-800">{orderDetails.deliveryDate}</p>
            <p className="text-sm text-gray-500">We'll notify you when your order ships</p>
          </div>
          
          <button 
            onClick={() => router.push('/')}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
          >
            Continue Shopping
          </button>
          
          <div className="mt-7 text-sm text-gray-500">
            Need help? <a href="mailto:support@yourstore.com" className="text-blue-600">Contact our support team</a>
          </div>
        </div>
      </div>
    </div>
  );
}