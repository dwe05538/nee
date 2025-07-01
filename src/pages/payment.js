"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const PaymentPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("bhim_upi");
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [data, setData] = useState({
    mrp: 0,
    selling_price: 0,
  });

  useEffect(() => {
    // Fetch product data
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("data");
        if (storedData) {
          setData(JSON.parse(storedData));
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

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Generate UPI payment URL
      const upiId = "your-upi-id@bank";
      const merchantName = "KHODIYAR ENTERPRISE";
      const amount = data.selling_price;
      
      const paymentUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=Payment`;

      // Open payment URL in new tab
      window.open(paymentUrl, "_blank");

      // Redirect to success page after a delay
      setTimeout(() => {
        router.push("/payment-success");
      }, 2000);
    } catch (error) {
      console.error("Payment error:", error);
      setLoading(false);
    }
  };

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
            
            {/* Google Pay */}
            <div 
              className={`p-2.5 mb-2.5 rounded border ${activeTab === "gpay" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
              onClick={() => setActiveTab("gpay")}
            >
              <label className="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  name="payment_method_radio" 
                  checked={activeTab === "gpay"}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" 
                />
                <div className="flex-grow">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-gray-800 font-bold text-base">₹{data.selling_price}</span>
                    <span className="text-gray-700 font-semibold text-base">| Google Pay</span>
                  </div>
                  <p className="text-xs font-medium text-green-600 mt-0.5">20% Extra Discount</p>
                </div>
                <img 
                  src="https://tse1.mm.bing.net/th/id/OIP.FK8u8eAmsZqReKVg0_caXgHaHa?pid=Api&P=0&h=220" 
                  className="w-9 h-9" 
                  alt="Google Pay" 
                />
              </label>
            </div>

            {/* PhonePe */}
            <div 
              className={`p-2.5 mb-2.5 rounded border ${activeTab === "phonepe" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
              onClick={() => setActiveTab("phonepe")}
            >
              <label className="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  name="payment_method_radio" 
                  checked={activeTab === "phonepe"}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" 
                />
                <div className="flex-grow">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-gray-800 font-bold text-base">₹{data.selling_price}</span>
                    <span className="text-gray-700 font-semibold text-base">| PhonePe</span>
                  </div>
                  <p className="text-xs font-medium text-purple-600 mt-0.5">20% Extra Discount</p>
                </div>
                <img 
                  src="https://tse1.mm.bing.net/th/id/OIP.Kwp1zPrQUh0MDZDrQ4VguAHaHa?pid=Api&P=0&h=220" 
                  className="w-10 h-10" 
                  alt="PhonePe" 
                />
              </label>
            </div>

            {/* BHIM UPI */}
            <div 
              className={`p-2.5 mb-2.5 rounded border ${activeTab === "bhim_upi" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
              onClick={() => setActiveTab("bhim_upi")}
            >
              <label className="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  name="payment_method_radio" 
                  checked={activeTab === "bhim_upi"}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" 
                />
                <div className="flex-grow">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-gray-800 font-bold text-base">₹{data.selling_price}</span>
                    <span className="text-gray-700 font-semibold text-base">| BHIM UPI</span>
                  </div>
                </div>
                <img 
                  src="https://tse3.mm.bing.net/th/id/OIP.Wvmz3tDBuxOR2SsNtloFCwHaHa?pid=Api&P=0&h=220" 
                  className="w-10 h-10" 
                  alt="BHIM UPI" 
                />
              </label>
            </div>
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
            disabled={loading}
            className={`bg-yellow-500 text-white font-semibold py-2.5 px-4 rounded-md shadow-md transition duration-150 w-1/2 text-xs uppercase text-center ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-yellow-600"
            }`}
          >
            {loading ? "Processing..." : "CONTINUE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;