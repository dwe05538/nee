"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { trackPurchase } from '../utils/pixelEvents'

const PaymentPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState("");
  const [products, setProducts] = useState({ 
    upi: "", 
    upi2: "",
    Gpay: false,
    Phonepe: false,
    Paytm: false,
    Bhim: false,
    WPay: false
  });
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [data, setData] = useState({
    mrp: 0,
    selling_price: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      };

      const response = await fetch('/api/upichange', {
        method: 'GET',
        headers: headersList,
      });

      if (response.ok) {
        const responseData = await response.json();
        setProducts(responseData.upi);
        
        // Set default active tab based on available payment methods
        setDefaultActiveTab(responseData.upi);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      // Fallback to default if API fails
      setActiveTab("gpay");
    }
  };

  const setDefaultActiveTab = (paymentData) => {
    // Priority order for default selection
    const priorityOrder = ["gpay", "phonepe", "paytm", "bhim_upi", "wpay"];
    
    const paymentMethodMap = {
      "gpay": paymentData.Gpay,
      "phonepe": paymentData.Phonepe,
      "paytm": paymentData.Paytm,
      "bhim_upi": paymentData.Bhim,
      "wpay": paymentData.WPay
    };

    // Find the first available payment method from priority order
    for (const method of priorityOrder) {
      if (paymentMethodMap[method]) {
        setActiveTab(method);
        break;
      }
    }
  };

  useEffect(() => {
    // Fetch product data
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("cart");
        console.log("JSON.parse(storedData)", JSON.parse(storedData));
        
        let amount = { mrp: 0, selling_price: 0 }
        if (JSON.parse(storedData).length > 0) {
          JSON.parse(storedData).map((el, i) => {
            console.log("JSON.parse(storedData)", JSON.parse(storedData));
            amount.selling_price += el.quantity * el.selling_price
            amount.mrp += el.quantity * el.mrp
          })
          setData(amount);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    if (!activeTab || !products.upi) return;

    const name = "KHODIYAR ENTERPRISE";
    let paymentUrl;
    const total = data.selling_price;

    // Standard UPI payment link format that works with all UPI apps
    paymentUrl = `upi://pay?pa=${products.upi}&pn=${encodeURIComponent(name)}&am=${total}&cu=INR&tn=Payment`;

    // App-specific links based on active tab
    switch (activeTab) {
      case "bhim_upi": // BHIM
        paymentUrl = `upi://pay?pa=${products.upi}&pn=${encodeURIComponent(name)}&am=${total}&cu=INR&tn=Payment`;
        break;
      case "gpay": // Google Pay
        paymentUrl = `gpay://upi/pay?pa=${products.upi}&pn=${encodeURIComponent(name)}&am=${total}&cu=INR&tn=${encodeURIComponent("Payment to Merchant")}`;
        break;
      case "phonepe": // PhonePe
        paymentUrl = `phonepe://pay?pa=${products.upi}&pn=KHODIYAR%20ENTERPRISE&mc=&tn=Verified%20Merchant&am=${total}&cu=INR&url=&mode=02&orgid=159012&mid=&msid=&mtid=&sign=MEQCIB4NcyZl2FEuktegagtryRG1iA1XG9r3tMHCIGZmR0wQAiBPvbuBFfhZjmq3MKMKH/XouOPk2+STl/VwYQTg2Y7vWg==`
        break;
      case "paytm": // Paytm
        paymentUrl = `paytmmp://cash_wallet?pa=${products.upi}&pn=name&mc=7692&tr=&tn=BIG&am=${total}&cu=INR&tn=1109653558&tr=1109653558&url=&mode=02&purpose=00&orgid=159002&sign=MEQCIDsRrRTBN5u+J9c16TUURJ4IMiPQQ/Sj1WXW7Ane85mYAiBuwEHt/lPXmMKRjFFnz6+jekgTsKWwyTx44qlCXFkfpQ==&featuretype=money_transfer`;
        break;
      case "wpay": // WhatsApp Pay
        paymentUrl = `whatsapp://pay?pa=${products.upi}&pn=${encodeURIComponent(name)}&am=${total}&cu=INR`;
        break;
      default:
        // Default to standard UPI link
        paymentUrl = `upi://pay?pa=${products.upi}&pn=${encodeURIComponent(name)}&am=${total}&cu=INR&tn=Payment`;
        break;
    }

    setPayment(paymentUrl);
  }, [activeTab, products.upi, data.selling_price]);

  const handlePayment = async () => {
    setLoading(true);
    try {
       const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const total = cart.reduce((sum, item) => sum + parseFloat(item.selling_price) * item.quantity, 0);

    // Replace this with your real order ID logic if needed
    const orderId = `ORD-${Date.now()}`;

    if (cart.length > 0) {
      trackPurchase(orderId, cart, total);

      // Clear cart after purchase
      localStorage.removeItem('cart');
    }
      // Open payment URL in new tab
      window.open(payment, "_blank");

      // Redirect to success page after a delay
      // setTimeout(() => {
      //   router.push("/OrderConfirmation");
      // }, 3500);
    } catch (error) {
      console.error("Payment error:", error);
      setLoading(false);
    }
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  // Payment method configurations
  const paymentMethods = [
    {
      id: "gpay",
      name: "Google Pay",
      isEnabled: products.Gpay,
      discountText: "20% Extra Discount",
      discountColor: "text-green-600",
      image: "https://tse1.mm.bing.net/th/id/OIP.FK8u8eAmsZqReKVg0_caXgHaHa?pid=Api&P=0&h=220",
      imageClass: "w-9 h-9"
    },
    {
      id: "phonepe",
      name: "PhonePe",
      isEnabled: products.Phonepe,
      discountText: "20% Extra Discount",
      discountColor: "text-purple-600",
      image: "https://tse1.mm.bing.net/th/id/OIP.Kwp1zPrQUh0MDZDrQ4VguAHaHa?pid=Api&P=0&h=220",
      imageClass: "w-10 h-10"
    },
    {
      id: "paytm",
      name: "Paytm",
      isEnabled: products.Paytm,
      discountText: "20% Extra Discount",
      discountColor: "text-blue-600",
      image: "https://brandlogos.net/wp-content/uploads/2018/10/paytm-logo.png",
      imageClass: "w-10 h-10"
    },
    {
      id: "bhim_upi",
      name: "BHIM UPI",
      isEnabled: products.Bhim,
      discountText: null,
      discountColor: "",
      image: "https://tse3.mm.bing.net/th/id/OIP.Wvmz3tDBuxOR2SsNtloFCwHaHa?pid=Api&P=0&h=220",
      imageClass: "w-10 h-10"
    },
    {
      id: "wpay",
      name: "WhatsApp Pay",
      isEnabled: products.WPay,
      discountText: "15% Extra Discount",
      discountColor: "text-green-600",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",
      imageClass: "w-9 h-9"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-white shadow-md p-3 border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-none w-12">
            <button onClick={() => router.back()} className="menu-icon cursor-pointer">
              <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
              </svg>
            </button>
          </div>
          <div className="flex-grow">
            <p className="text-xs text-gray-600 mb-0">Step 4 of 4</p>
            <h5 className="text-base font-semibold">Payments</h5>
          </div>
          <div className="flex-none">
            <div className="flex flex-col items-center text-center rounded bg-gray-100 px-3 py-1.5 border border-gray-200">
              <div className="flex items-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                <p className="mb-0 ml-1.5 text-xs font-semibold text-gray-700">100% Secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 px-1.5">
        {/* UPI Payment Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
          <div className="p-3">
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png"
                className="w-full h-auto max-w-[45px]"
                alt="UPI"
              />
              <p className="text-base font-medium ml-3">UPI Payment</p>
            </div>
          </div>

          <div className="px-3 pb-3">
            <h4 className="text-sm font-semibold mb-2 text-gray-700">Choose Payment Method:</h4>

            {/* Render Payment Methods Dynamically */}
            {paymentMethods.map((method) => {
              if (!method.isEnabled) return null;

              return (
                <div
                  key={method.id}
                  className={`p-2.5 mb-2.5 rounded border cursor-pointer transition-all duration-200 ${
                    activeTab === method.id 
                      ? "border-blue-500 bg-blue-50 shadow-sm" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleTabChange(method.id)}
                >
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="payment_method_radio"
                      checked={activeTab === method.id}
                      onChange={() => handleTabChange(method.id)}
                      className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <div className="flex-grow">
                      <div className="flex items-baseline space-x-1">
                        <span className="text-gray-800 font-bold text-base">₹{data.selling_price}</span>
                        <span className="text-gray-700 font-semibold text-base">| {method.name}</span>
                      </div>
                      {method.discountText && (
                        <p className={`text-xs font-medium mt-0.5 ${method.discountColor}`}>
                          {method.discountText}
                        </p>
                      )}
                    </div>
                    <img
                      src={method.image}
                      className={method.imageClass}
                      alt={method.name}
                    />
                  </label>
                </div>
              );
            })}

            {/* Show message if no payment methods are available */}
            {!paymentMethods.some(method => method.isEnabled) && (
              <div className="text-center py-8">
                <p className="text-gray-500">No payment methods available at the moment.</p>
                <p className="text-sm text-gray-400 mt-1">Please try again later.</p>
              </div>
            )}
          </div>
        </div>

        {/* Cashback Section */}
        <div className="bg-green-50 border border-green-200 rounded-lg font-medium my-3 p-1 shadow-sm">
          <div className="px-2.5 py-2">
            <div className="cashback-container">
              <div className="cashback-header flex items-center mb-1.5">
                <p className="text-green-700 text-sm font-semibold">
                  <span className="text-green-700 font-bold">₹500</span> Cashback on First Order!
                </p>
              </div>
              <div className="cashback-body text-xs text-gray-700 text-justify">
                <p>
                  Place your order and get <span className="text-green-700 font-bold">₹500</span> cashback!
                  Cashback will be credited to your original UPI payment method after your order is delivered.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Price Details */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Price Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Price (1 item)</p>
              <p className="text-gray-800 font-bold">₹{data.selling_price}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Delivery Charges</p>
              <p className="text-green-600 font-medium">FREE</p>
            </div>
            <div className="border-t border-dashed border-gray-300 my-2"></div>
            <div className="flex justify-between items-center pt-1">
              <p className="text-gray-800 font-semibold text-base">Total Payable</p>
              <p className="text-blue-600 font-bold text-base">₹{data.selling_price}</p>
            </div>
          </div>
        </div>

        {/* Timer */}
        <div className="text-center mt-4 text-sm text-gray-600">
          <p>Offer ends in <span className="font-bold">{minutes}m {seconds}s</span></p>
        </div>
      </div>

      {/* Footer with Price and Continue Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-left w-1/2 pr-2 overflow-hidden">
            <p className="text-xs text-gray-600 mb-0">Total Payable</p>
            <span className="text-base font-bold text-gray-800">₹{data.selling_price}</span>
          </div>
          <button
            onClick={handlePayment}
            disabled={!activeTab || loading}
            className={`font-semibold py-2.5 px-4 rounded-md shadow-md transition duration-150 w-1/2 text-xs uppercase text-center ${
              !activeTab || loading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-yellow-500 text-black hover:bg-yellow-600"
            }`}
          >
            {loading ? "PROCESSING..." : "CONTINUE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
