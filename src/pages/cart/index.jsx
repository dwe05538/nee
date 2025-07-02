'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { HiShieldCheck } from 'react-icons/hi';

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
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

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => router.back()} className="p-2 rounded-full hover:bg-gray-100" aria-label="Go back">
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">My Cart</h1>
          <button onClick={() => router.push('/')} className="p-2 rounded-full hover:bg-gray-100" aria-label="Close">
            <FiX className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-4">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet</p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
              <ul className="divide-y divide-gray-200">
                {cart.map((item, index) => (
                  <li key={`${item.id}-${index}`} className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={item.images}
                          alt={item.Title}
                          className="w-20 h-20 object-contain rounded-lg border border-gray-200"
                        />
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{item.Title}</h3>
                        <p className="text-lg font-semibold text-gray-900 mt-1">
                          ₹{(parseFloat(item.selling_price) * item.quantity).toLocaleString('en-IN')}
                        </p>

                        <div className="flex items-center mt-3">
                          <button
                            onClick={() => changeQuantity(index, -1)}
                            className="w-8 h-8 flex items-center justify-center rounded-md border border-red-500 text-red-500 hover:bg-red-50 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <FiMinus className="w-4 h-4" />
                          </button>

                          <input
                            type="number"
                            min="1"
                            max="10"
                            value={item.quantity}
                            onChange={(e) => handleManualQuantity(index, e)}
                            className="w-12 h-8 mx-2 text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />

                          <button
                            onClick={() => changeQuantity(index, 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-md border border-green-500 text-green-500 hover:bg-green-50 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <FiPlus className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => removeItem(index)}
                            className="ml-auto flex items-center text-sm text-red-600 hover:text-red-800 transition-colors"
                            aria-label="Remove item"
                          >
                            <FiTrash2 className="w-4 h-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="px-4 py-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Total:</span>
                  <span className="text-lg font-bold text-gray-900">
                    ₹{calculateTotal().toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Safety Banner */}
            <div className="bg-blue-50 rounded-xl p-4 mb-4 flex items-start">
              <HiShieldCheck className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1 mr-3" />
              <p className="text-sm text-blue-800">
                Safe and secure payments. Easy returns. 100% Authentic products.
              </p>
            </div>
          </>
        )}
      </main>

      {/* Fixed Checkout Bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Total:</span>
              <span className="text-lg font-bold text-gray-900">
                ₹{calculateTotal().toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={placeOrder}
              className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition-colors flex items-center justify-center"
            >
              Place Order
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
