import Layout from '@/componets/Layout';
import { useEffect, useState } from 'react';
import { items } from "../../public/Items.json";
import { Carousel } from "react-bootstrap";
import { IoMdClock } from "react-icons/io";
import Card from '@/componets/Card';
import ProductCard from '@/componets/Card';
function Home() {
  const initialTime = 700; // 10 minutes in seconds
  const [time, setTime] = useState(initialTime);
  // // Uncomment the useEffect block to use it
  useEffect(() => {
    const timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(timer);
      } else {
        setTime((prevTime) => prevTime - 1);
      }
      if (time < 10) {
        setTime(700)
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);
  const [products, setProducts] = useState( {
  "collection": "products",
  "documents": [
    {
      "_id": {
        "$oid": "6864665c1c3046"
      },
      "Title": "15 Kg Tirupati Cottonseed Oil Tin",
      "color": "",
      "size": "15 KG",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "2425",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">15 Kg Tirupati Cottonseed Oil Tin</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Cottonseed Oil</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">15 KG</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2425</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">59%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">: Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above, : Shop Above ₹700 & Get Flat ₹100 Off</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8860</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; color: #333; line-height: 1.6;\">\r\n  <h2>Tirupati Refined Cottonseed Oil – 15 KG</h2>\r\n\r\n  <ul>\r\n    <li><strong>Brand:</strong> Tirupati Oil</li>\r\n    <li><strong>Item Form:</strong> Liquid</li>\r\n    <li><strong>Net Weight:</strong> 15 KG</li>\r\n    <li><strong>Diet Type:</strong> Vegetarian</li>\r\n    <li><strong>Recommended Use:</strong> Cooking</li>\r\n    <li><strong>Package Quantity:</strong> 1</li>\r\n    <li><strong>Manufacturer:</strong> N K Proteins Pvt Ltd</li>\r\n    <li><strong>Country of Origin:</strong> India</li>\r\n  </ul>\r\n\r\n  <h3>Ingredients</h3>\r\n  <p>\r\n    Refined Cottonseed Oil, Permitted Antioxidant (TBHQ)\r\n  </p>\r\n\r\n  <h3>Enriched With</h3>\r\n  <ul>\r\n    <li>Vitamin A</li>\r\n    <li>Vitamin D</li>\r\n  </ul>\r\n\r\n  <h3>About this item</h3>\r\n  <ul>\r\n    <li><strong>Premium Quality Oil:</strong> Tirupati Refined Cottonseed Oil is carefully extracted and refined to deliver purity, taste, and superior performance in everyday cooking.</li>\r\n    <li><strong>Heart-Healthy:</strong> Rich in essential fatty acids and fortified with Vitamins A and D, it promotes better nutrition for the entire family.</li>\r\n    <li><strong>Light & Neutral Flavour:</strong> The oil's neutral taste ensures that the original flavour of your dishes remains intact.</li>\r\n    <li><strong>Long Shelf Life:</strong> Contains permitted antioxidant TBHQ which helps maintain freshness and extends usability.</li>\r\n    <li><strong>Ideal for Indian Cooking:</strong> Suitable for deep frying, sautéing, and general cooking, making it a kitchen essential for all households.</li>\r\n    <li><strong>Economical Bulk Pack:</strong> The 15 KG packaging is ideal for large families, catering businesses, restaurants, and food joints.</li>\r\n  </ul>\r\n\r\n  <p>\r\n    Whether you’re preparing everyday meals or festive delicacies, <strong>Tirupati Refined Cottonseed Oil</strong> delivers health and taste in every drop. Trusted by millions of households across India, it’s the smart choice for nutritious and delicious cooking.\r\n  </p>\r\n</div>\r\n",
      "images": "/uploads/uploads/174731996381120250515143923",
      "images1": "/uploads/uploads/174731996381120250515143923",
      "images2": "/uploads/uploads/174731996368420250515143923",
      "images3": "/uploads/uploads/174731996344120250515143923",
      "images4": "/uploads/uploads/174731996364820250515143923",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ccb1841"
      },
      "Title": "boAt Aavante Bar 1550 Pro",
      "color": "BLACK",
      "size": "NA",
      "storage": "",
      "selling_price": "389.49",
      "mrp": "22999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 1550 Pro</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Sound Bar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹22999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7462</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">\n  <h2 style=\"color: #3F51B5;\">boAt Aavante Bar 1550 Pro – 160W RMS 2.1 Channel Soundbar with Subwoofer</h2>\n\n  <h3 style=\"color: #3F51B5;\">Key Features</h3>\n  <ul>\n    <li><strong>Powerful Sound:</strong> Delivers 160W RMS of boAt Signature Sound, creating an immersive experience for music, movies, and games.</li>\n    <li><strong>2.1 Channel Configuration:</strong> Equipped with a wired subwoofer for deep, punchy bass that enhances the overall sound profile.</li>\n    <li><strong>Multiple Connectivity Options:</strong> Seamless pairing via Bluetooth v5.3, HDMI (ARC), Optical, AUX, and USB – connect to any device effortlessly.</li>\n    <li><strong>Multiple EQ Modes:</strong> Customize audio with dedicated EQ presets like Music, Movies, News, and 3D for a tailored listening experience.</li>\n    <li><strong>Sleek Design with LED Lights:</strong> Stylish and modern design featuring LED lighting that complements any living room or entertainment setup.</li>\n  </ul>\n\n  <h3 style=\"color: #3F51B5;\">Specifications</h3>\n  <ul>\n    <li><strong>Drivers:</strong> Four 2.25” speakers and one 6.5” subwoofer driver for rich, balanced sound.</li>\n    <li><strong>Impedance:</strong> 4Ω x 4 + 4Ω for stable performance.</li>\n    <li><strong>Frequency Response:</strong> 40Hz – 20KHz – ideal for full-range sound reproduction.</li>\n    <li><strong>Signal-to-Noise Ratio:</strong> ≥ 70dB for clean, distortion-free audio output.</li>\n    <li><strong>Bluetooth Range:</strong> Up to 10 meters – enjoy wireless freedom.</li>\n    <li><strong>Dimensions:</strong>\n      <ul>\n        <li>Soundbar: 900mm (L) x 79mm (H) x 90mm (D)</li>\n        <li>Subwoofer: 190mm (W) x 370mm (H) x 310mm (D)</li>\n      </ul>\n    </li>\n  </ul>\n\n  <h3 style=\"color: #3F51B5;\">Product Images</h3>\n  <img src=\"https://tse1.mm.bing.net/th?id=OIP.KGkVoFycOo29uXBV9zYlmwHaDS&pid=Api\" alt=\"boAt Aavante Bar 1550 Pro Image 1\" style=\"width: 100%; margin-bottom: 10px;\" />\n  <img src=\"https://tse3.mm.bing.net/th?id=OIP.fVCPOyfSJ9e1Bd8Bc1dRwwHaFP&pid=Api\" alt=\"boAt Aavante Bar 1550 Pro Image 2\" style=\"width: 100%; margin-bottom: 10px;\" />\n  <img src=\"https://tse3.mm.bing.net/th?id=OIP.JzFxe6p6TQLzajB6kJiSCwHaHa&pid=Api\" alt=\"boAt Aavante Bar 1550 Pro Image 3\" style=\"width: 100%; margin-bottom: 10px;\" />\n  <img src=\"https://tse1.mm.bing.net/th?id=OIP.U2MxkBPU6IQT3j2JMro2LQAAAA&pid=Api\" alt=\"boAt Aavante Bar 1550 Pro Image 4\" style=\"width: 100%;\" />\n</div>\n",
      "images": "/uploads/uploads/171604665369220240518153733",
      "images1": "/uploads/uploads/171604665369220240518153733",
      "images2": "/uploads/uploads/171604665370620240518153733",
      "images3": "/uploads/uploads/171604665327820240518153733",
      "images4": "/uploads/uploads/171604665313520240518153733",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cf6d17b"
      },
      "Title": "Samsung 1.5 Ton 3 Star Wi-fi Enabled, Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Anti-bacterial Filter",
      "color": "White",
      "size": "1.5 Ton",
      "storage": "",
      "selling_price": "699.89",
      "mrp": "36990",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung 1.5 Ton 3 Star Wi-fi Enabled, Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Anti-bacterial Filter</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">AC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 Ton</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹36990</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹699.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7311</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">\n  <h2 style=\"color: #007BFF;\">1.5 Ton Split Inverter Air Conditioner – 3 Star Energy Rated</h2>\n\n  <p><strong>Cooling Capacity:</strong> 1.5 Ton with inverter compressor and variable tonnage technology for faster cooling and better energy efficiency.</p>\n  <p><strong>Room Size Suitability:</strong> Ideal for medium-sized rooms ranging from 111 to 150 sq. ft.</p>\n\n  <h3 style=\"color: #007BFF;\">Energy Efficiency</h3>\n  <ul>\n    <li><strong>Energy Rating:</strong> 3 Star BEE Rating</li>\n    <li><strong>ISEER Rating:</strong> 3.96 W/W – Higher than industry benchmarks</li>\n    <li><strong>Power Saving Mode:</strong> Efficient performance with lower electricity consumption</li>\n  </ul>\n\n  <h3 style=\"color: #007BFF;\">Eco-Friendly Refrigerant</h3>\n  <p>Uses <strong>R32 Refrigerant</strong> – a next-generation refrigerant that helps protect the ozone layer and has low global warming potential, making it safer for the planet.</p>\n\n  <h3 style=\"color: #007BFF;\">Smart Features</h3>\n  <ul>\n    <li>Auto Mode</li>\n    <li>Fast Cool</li>\n    <li>Good Sleep Mode</li>\n    <li>5-Step Mode</li>\n    <li>Dehumidification Mode</li>\n    <li>Fan Mode</li>\n    <li>Quiet Operation</li>\n    <li>SmartThings Connectivity</li>\n    <li>AI Auto Cooling</li>\n    <li>Filter Cleaning Indicator</li>\n    <li>Indoor Temperature Display</li>\n    <li>Display On/Off</li>\n    <li>Beep Sound On/Off</li>\n    <li>24-Hour Timer</li>\n    <li>Auto Restart</li>\n  </ul>\n\n  <h3 style=\"color: #007BFF;\">What's Included in the Box</h3>\n  <ul>\n    <li>Indoor Unit</li>\n    <li>Outdoor Unit</li>\n    <li>Remote Control</li>\n    <li>2 Batteries</li>\n    <li>User Manual</li>\n    <li>Warranty Card</li>\n  </ul>\n\n  <p><strong>Warranty:</strong> 1 Year on Product, 5 Years on Compressor</p>\n\n  <h3 style=\"color: #007BFF;\">Product Dimensions</h3>\n  <ul>\n    <li><strong>Indoor Unit:</strong> 889 x 299 x 215 mm (WxHxD)</li>\n    <li><strong>Outdoor Unit:</strong> 720 x 548 x 265 mm (WxHxD)</li>\n  </ul>\n\n  <h3 style=\"color: #007BFF;\">Product Images</h3>\n\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/df564a9b-0977-4373-91d5-ad33ede4b13a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"AC Image 1\" style=\"width: 100% !important; margin-bottom: 10px;\">\n  \n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/69220252-1717-42de-a17a-b26399e155b0.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"AC Image 2\" style=\"width: 100% !important; margin-bottom: 10px;\">\n\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/76262833-38c3-4a2f-9654-cee78c915ddb.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"AC Image 3\" style=\"width: 100% !important; margin-bottom: 10px;\">\n\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/e90d617d-1cb0-4327-a78c-5c8b2bd50723.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"AC Image 4\" style=\"width: 100% !important; margin-bottom: 10px;\">\n\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/6237940c-ace1-4149-a67e-83ca8343de8c.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"AC Image 5\" style=\"width: 100% !important; margin-bottom: 10px;\">\n\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/c55dafea-4890-44cf-9213-8cd4b2db1f46.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"AC Image 6\" style=\"width: 100% !important; margin-bottom: 10px;\">\n\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/357f8fda-b144-4fcd-a1bf-67fa66b7df4a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"AC Image 7\" style=\"width: 100% !important;\">\n\n</div>\n",
      "images": "/uploads/uploads/171545004384120240511175403",
      "images1": "/uploads/uploads/171545004384120240511175403",
      "images2": "/uploads/uploads/171545004332420240511175403",
      "images3": "/uploads/uploads/171545004386320240511175403",
      "images4": "/uploads/uploads/171545004334220240511175403",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce5e016"
      },
      "Title": "4 Burner Butterfly Smart 4 Burner Glass Top Gas Stove | Manual Ignition | Scratch Resistant Toughened Glass | Brass Burners | Skid-proof Legs | 1 Year Manufacturer's Warranty | Black",
      "color": "1",
      "size": "4 Burner",
      "storage": "",
      "selling_price": "399.69",
      "mrp": "4599",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">4 Burner Butterfly Smart 4 Burner Glass Top Gas Stove | Manual Ignition | Scratch Resistant Toughened Glass | Brass Burners | Skid-proof Legs | 1 Year Manufacturer's Warranty | Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Gas Stove</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">1</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">4 Burner</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4599</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.69</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">93%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">9256</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<h2>Butterfly 4 Burner Glass Top Gas Stove – Black</h2>\n\n<ul>\n  <li><strong>Colour:</strong> Black</li>\n  <li><strong>Material:</strong> Glass</li>\n  <li><strong>Special Feature:</strong> Gas</li>\n  <li><strong>Brand:</strong> Butterfly</li>\n  <li><strong>Heating Elements:</strong> 4</li>\n</ul>\n\n<h3>About this item</h3>\n<ul>\n  <li><strong>Stylish Diamond Cut Design:</strong> This gas stove features an ergonomically designed metal frame with a unique diamond cut finish, providing easy access to controls and adding a touch of sophistication to your kitchen.</li>\n  \n  <li><strong>6mm Ultra Thick Tempered Glass:</strong> Built to last, the stove comes with a 6mm thick toughened glass top, capable of withstanding heavy weights and high temperatures (up to 650°C). Each glass top passes a 1Kg Iron Ball Drop Test for assured quality and durability.</li>\n  \n  <li><strong>Durable and Rustproof Construction:</strong> Equipped with a premium-grade ADC 12 mixing tube and a fully rustproof, powder-coated GI body, this stove includes heavy-duty brass burners and strong forged pan stands that ensure years of dependable performance.</li>\n  \n  <li><strong>Ease of Use & Maintenance:</strong> The lightweight design, easy-to-clean glass surface, integrated drip tray, and 360-degree swivel nozzle make everyday usage hassle-free and convenient.</li>\n  \n  <li><strong>Spacious Burner Layout:</strong> Thoughtfully spaced burners allow you to use multiple large utensils at once – ideal for busy mornings or elaborate weekend meals with your family.</li>\n  \n  <li><strong>Premium Finish & Designer Knobs:</strong> The stove boasts a sleek and modern look with its stylish knobs and diamond pattern that enhances the overall kitchen décor.</li>\n</ul>\n\n<h3>Package Contents:</h3>\n<ul>\n  <li>1 x 4 Burner Gas Stove</li>\n  <li>1 x User Manual with Warranty Card</li>\n</ul>\n<div style=\"gap: 10px;\">\n  <img src=\"https://m.media-amazon.com/images/I/71nQPcpcNbL._SL1500_.jpg\" alt=\"Butterfly Gas Stove Image 1\" width=\"100%\">\n  <img src=\"https://m.media-amazon.com/images/I/71iQSIxPccL._SL1500_.jpg\" alt=\"Butterfly Gas Stove Image 2\" width=\"100%\">\n  <img src=\"https://m.media-amazon.com/images/I/71m-8vOWOYL._SL1500_.jpg\" alt=\"Butterfly Gas Stove Image 3\" width=\"100%\">\n  <img src=\"https://m.media-amazon.com/images/I/71KFtcuxY2L._SL1500_.jpg\" alt=\"Butterfly Gas Stove Image 4\" width=\"100%\">\n  <img src=\"https://m.media-amazon.com/images/I/71hwB7K6A7L._SL1500_.jpg\" alt=\"Butterfly Gas Stove Image 5\" width=\"100%\">\n  <img src=\"https://m.media-amazon.com/images/I/71xG8ytx2tL._SL1500_.jpg\" alt=\"Butterfly Gas Stove Image 6\" width=\"100%\">\n  <img src=\"https://m.media-amazon.com/images/I/61mzv58+hwL._SL1500_.jpg\" alt=\"Butterfly Gas Stove Image 7\" width=\"100%\">\n</div>",
      "images": "/uploads/uploads/174854461330520250529185013",
      "images1": "/uploads/uploads/174854461330520250529185013",
      "images2": "/uploads/uploads/174854461353820250529185013",
      "images3": "/uploads/uploads/174854461315620250529185013",
      "images4": "/uploads/uploads/174854461358320250529185013",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce8efd1"
      },
      "Title": "boAt Airdopes 701 ANC",
      "color": "BLACK",
      "size": "NA",
      "storage": "",
      "selling_price": "359.79",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Airdopes 701 ANC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Airdopes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹359.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8895</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">\n  <h2 style=\"color: #3F51B5;\">boAt Airdopes 701 ANC – Hybrid Active Noise Cancellation Earbuds</h2>\n\n  <h3 style=\"color: #3F51B5;\">Key Features</h3>\n  <ul>\n    <li><strong>Active Noise Cancellation (ANC):</strong> Hybrid ANC technology reduces ambient noise by up to 30dB, letting you enjoy a truly immersive sound experience – whether you're traveling, working, or relaxing.</li>\n    <li><strong>Audio Quality:</strong> Powered by 9mm dynamic drivers, these earbuds deliver the signature boAt sound with punchy bass and clear treble – perfect for music lovers and audiophiles alike.</li>\n    <li><strong>Battery Life:</strong> Enjoy up to 5.5 hours of playback on a single charge. With the charging case, total playback extends to an impressive 28 hours – your music, all day long.</li>\n    <li><strong>Connectivity:</strong> Bluetooth 5.0 provides a stable, lag-free connection with a wireless range of up to 10 meters – ensuring seamless pairing with all your devices.</li>\n    <li><strong>Multi-Mode Support:</strong> Switch easily between ANC Mode, Crystal Mode (for ambient sound awareness), and BEAST™ Mode (ultra-low latency for gaming and streaming).</li>\n    <li><strong>Design & Durability:</strong> Sleek in-ear design with ergonomic stems for a secure fit. Rated IPX7 for water and sweat resistance, making them ideal for workouts, sports, and outdoor use.</li>\n    <li><strong>ASAP Charge:</strong> Need a quick boost? A 5-minute charge delivers up to 60 minutes of playback – perfect for when you're on the move.</li>\n  </ul>\n\n  <h3 style=\"color: #3F51B5;\">Product Image</h3>\n  <img src=\"https://tse4.mm.bing.net/th?id=OIP.i6xMtYQuFG8iEhNhSGJs1wHaHa&pid=Api\" alt=\"boAt Airdopes 701 ANC Image 1\" style=\"width: 100%; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);\" />\n</div>\n",
      "images": "/uploads/uploads/171604572657420240518152206",
      "images1": "/uploads/uploads/171604572657420240518152206",
      "images2": "/uploads/uploads/171604572613920240518152206",
      "images3": "/uploads/uploads/171604572677720240518152206",
      "images4": "/uploads/uploads/171604572683120240518152206",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c897682"
      },
      "Title": "Lifelong Mixer Grinder for Kitchen - 3 Jars 500 Watt Mixie - Chutney Jar, Dry Grinder Jar & Liquidizing Jar used as Wet Grinder & Blender for Milkshake, Smoothie, Puree -Stainless Steel Blades(LLMG23)",
      "color": "Black",
      "size": "500 Watt- 3 Jar",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Lifelong Mixer Grinder for Kitchen - 3 Jars 500 Watt Mixie - Chutney Jar, Dry Grinder Jar & Liquidizing Jar used as Wet Grinder & Blender for Milkshake, Smoothie, Puree -Stainless Steel Blades(LLMG23)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">500 Watt- 3 Jar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8843</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; color: #333; line-height: 1.6;\">\n  <h2 style=\"color: #E91E63;\">Lifelong Mixer Grinder – Powerful, Compact & Reliable</h2>\n\n  <h3 style=\"color: #3F51B5;\">Product Overview</h3>\n  <p>\n    Make your kitchen tasks quicker and easier with the <strong>Lifelong Mixer Grinder</strong>. Designed to blend performance with safety and convenience, this mixer grinder is ideal for everyday use – from grinding spices to preparing smoothies or chutneys.\n  </p>\n\n  <h3 style=\"color: #3F51B5;\">Key Features</h3>\n  <ul>\n    <li><strong>Brand:</strong> Lifelong</li>\n    <li><strong>Color:</strong> Black</li>\n    <li><strong>Blade Material:</strong> Durable Stainless Steel for efficient grinding and blending.</li>\n    <li><strong>Capacity:</strong> 1.5 Litres – perfect for small to medium-sized households.</li>\n    <li><strong>Special Features:</strong> \n      <ul>\n        <li>Overload Protection to safeguard motor</li>\n        <li>Adjustable Speed Control for precision blending</li>\n        <li>Anti-Skid Base for stability during operation</li>\n      </ul>\n    </li>\n    <li><strong>Control Type:</strong> Easy-to-use Knob Control</li>\n    <li><strong>Item Weight:</strong> Lightweight at just 2.8 kg for easy handling</li>\n    <li><strong>Compact Dimensions:</strong> 11.5D x 13.8W x 7.9H cm – space-saving design for modern kitchens</li>\n  </ul>\n\n  <h3 style=\"color: #3F51B5;\">Product Images</h3>\n  <img src=\"https://tse2.mm.bing.net/th?id=OIP._GOr4mnqK9xUVt7pkbX39gHaHa&pid=Api\" alt=\"Lifelong Mixer Grinder Image 1\" style=\"width: 100%; margin-bottom: 10px; border-radius: 8px;\" />\n  <img src=\"https://tse4.mm.bing.net/th?id=OIP.KKRxJABxA5ZOwBrJWyDfNAHaEK&pid=Api\" alt=\"Lifelong Mixer Grinder Image 2\" style=\"width: 100%; margin-bottom: 10px; border-radius: 8px;\" />\n  <img src=\"https://tse1.mm.bing.net/th?id=OIP.7FhXAMtjw5I_jdPmw5_oEQHaHa&pid=Api\" alt=\"Lifelong Mixer Grinder Image 3\" style=\"width: 100%; margin-bottom: 10px; border-radius: 8px;\" />\n  <img src=\"https://tse4.mm.bing.net/th?id=OIP.N3veQFd-zyXVCEm2epjgKgHaEK&pid=Api\" alt=\"Lifelong Mixer Grinder Image 4\" style=\"width: 100%; margin-bottom: 10px; border-radius: 8px;\" />\n\n  <h3 style=\"color: #3F51B5;\">Why Choose Lifelong?</h3>\n  <p>\n    Lifelong is a trusted Indian brand known for its reliable, affordable, and high-quality kitchen appliances. This mixer grinder is a perfect blend of performance and safety, backed by quality materials and user-friendly design.\n  </p>\n</div>\n",
      "images": "/uploads/uploads/174069179129020250227212951",
      "images1": "/uploads/uploads/174069179129020250227212951",
      "images2": "/uploads/uploads/174069179150120250227212951",
      "images3": "/uploads/uploads/174069179127820250227212951",
      "images4": "/uploads/uploads/174069179166420250227212951",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c4627c6"
      },
      "Title": "iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods;",
      "color": "Desert Titanium,Natural Titanium,Blue Titanium,White Titanium,Black Titanium",
      "size": "256GB,512GB,1TB",
      "storage": "",
      "selling_price": "599.89",
      "mrp": "135900",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods;</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Desert Titanium,Natural Titanium,Blue Titanium,White Titanium,Black Titanium</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">256GB,512GB,1TB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹135900</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹599.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6962</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; color: #000000; line-height: 1.6;\">\n\n  <h2 style=\"color: #000000;\">iPhone 16 Pro Max</h2>\n\n  <h3 style=\"color: #000000;\">Forged in Titanium</h3>\n  <p>\n    iPhone 16 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.\n  </p>\n\n  <h3 style=\"color: #000000;\">Advanced Display</h3>\n  <p>\n    The 6.7” Super Retina XDR display with ProMotion ramps up refresh rates to 120Hz when you need exceptional graphics performance. Dynamic Island bubbles up alerts and Live Notifications. Plus, with Always-On display, your Lock Screen stays glanceable, so you don’t have to tap it to stay in the know.\n  </p>\n\n  <h3 style=\"color: #000000;\">Game-Changing A17 Pro Chip</h3>\n  <p>\n    A Pro-class GPU makes mobile games feel so immersive, with rich environments and realistic characters. A17 Pro is also incredibly efficient and helps to deliver amazing all-day battery life.\n  </p>\n\n  <h3 style=\"color: #000000;\">Powerful Pro Camera System</h3>\n  <p>\n    Get incredible framing flexibility with 7 pro lenses. Capture super high-resolution photos with more color and detail using the 48MP Main camera. And take sharper close-ups from farther away with the 5x Telephoto camera on iPhone 15 Pro Max.\n  </p>\n\n  <h3 style=\"color: #000000;\">Customizable Action Button</h3>\n  <p>\n    Action button is a fast track to your favorite feature. Just set the one you want, like Silent mode, Camera, Voice Memo, Shortcut, and more. Then press and hold to launch the action.\n  </p>\n\n  <h3 style=\"color: #000000;\">Images</h3>\n  <img src=\"https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/Sep/iPhone16Pro/river/r1964_Product_Page_Avail_Flex_Module_Amazon_Desktop_1500__en-IN_01._CB563233717_.jpg\" alt=\"iPhone 16 Pro Max Image 1\" style=\"width: 100%; margin-bottom: 10px;\" />\n  <img src=\"https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/Sep/iPhone16Pro/river/r1964_Product_Page_Avail_Flex_Module_Amazon_Desktop_1500__en-IN_02._CB563233717_.jpg\" alt=\"iPhone 16 Pro Max Image 2\" style=\"width: 100%; margin-bottom: 10px;\" />\n  <img src=\"https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/Sep/iPhone16Pro/river/r1964_Product_Page_Avail_Flex_Module_Amazon_Desktop_1500__en-IN_03._CB563233717_.jpg\" alt=\"iPhone 16 Pro Max Image 3\" style=\"width: 100%; margin-bottom: 10px;\" />\n  <img src=\"https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/Sep/iPhone16Pro/river/r1964_Product_Page_Avail_Flex_Module_Amazon_Desktop_1500__en-IN_04._CB563233717_.jpg\" alt=\"iPhone 16 Pro Max Image 4\" style=\"width: 100%; margin-bottom: 10px;\" />\n  <img src=\"https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/Sep/iPhone16Pro/river/r1964_Product_Page_Avail_Flex_Module_Amazon_Desktop_1500__en-IN_05._CB563233717_.jpg\" alt=\"iPhone 16 Pro Max Image 5\" style=\"width: 100%; margin-bottom: 10px;\" />\n  <img src=\"https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/Sep/iPhone16Pro/river/r1964_Product_Page_Avail_Flex_Module_Amazon_Desktop_1500__en-IN_06._CB563233717_.jpg\" alt=\"iPhone 16 Pro Max Image 6\" style=\"width: 100%; margin-bottom: 10px;\" />\n  <img src=\"https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/Sep/iPhone16Pro/river/r1964_Product_Page_Avail_Flex_Module_Amazon_Desktop_1500__en-IN_07._CB563233717_.jpg\" alt=\"iPhone 16 Pro Max Image 7\" style=\"width: 100%; margin-bottom: 10px;\" />\n  <img src=\"https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/Sep/iPhone16Pro/river/r1964_Product_Page_Avail_Flex_Module_Amazon_Desktop_1500__en-IN_08._CB563233717_.jpg\" alt=\"iPhone 16 Pro Max Image 8\" style=\"width: 100%; margin-bottom: 10px;\" />\n  <img src=\"https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/Sep/iPhone16Pro/river/r1964_Product_Page_Avail_Flex_Module_Amazon_Desktop_1500__en-IN_09._CB563233717_.jpg\" alt=\"iPhone 16 Pro Max Image 9\" style=\"width: 100%;\" />\n\n</div>\n",
      "images": "/uploads/uploads/174025355810520250222194558",
      "images1": "/uploads/uploads/174025355810520250222194558",
      "images2": "/uploads/uploads/174025355849020250222194558",
      "images3": "/uploads/uploads/174025355856820250222194558",
      "images4": "/uploads/uploads/174025355853220250222194558",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cd00941"
      },
      "Title": "Prestige 750 Watts Iris Plus Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar)| 4 Super Efficient Stainless Blades|",
      "color": "Black",
      "size": "750 Watt-4 Jar",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "6899",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Prestige 750 Watts Iris Plus Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar)| 4 Super Efficient Stainless Blades|</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">750 Watt-4 Jar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6899</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">91%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7699</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; color: #000000; line-height: 1.5; max-width: 600px;\">\n\n  <h2 style=\"color: #000000;\">Prestige Iris Plus 750 Watt Mixer Grinder</h2>\n\n  <ul>\n    <li><strong>Brand:</strong> Prestige</li>\n    <li><strong>Colour:</strong> Black</li>\n    <li><strong>Special Feature:</strong> Ergonomic Handle, Multiple Attachments</li>\n    <li><strong>Capacity:</strong> 1000 Milliliters</li>\n    <li><strong>Product Dimensions:</strong> 2D x 50W x 29H Centimeters</li>\n    <li><strong>Included Components:</strong> 1 unit of IRIS Plus 750 Watt Mixer Grinder</li>\n    <li><strong>Style:</strong> Mixer Grinder</li>\n    <li><strong>Recommended Uses:</strong> Grind</li>\n    <li><strong>Power Source:</strong> Corded Electric</li>\n    <li><strong>Number of Speeds:</strong> 3</li>\n  </ul>\n\n  <h3>Images</h3>\n  <img src=\"https://tse4.mm.bing.net/th?id=OIP.tAeRnQIu192Pfms1ZQf2OAAAAA&pid=Api\" alt=\"Prestige Iris Plus Mixer Grinder\" style=\"width: 100%; margin-bottom: 10px;\" />\n  <img src=\"https://tse3.mm.bing.net/th?id=OIP.IMj-ef8kDhg0yiGPyxGi_AHaHa&pid=Api\" alt=\"Prestige Mixer Grinder with Stainless Steel Jars\" style=\"width: 100%; margin-bottom: 10px;\" />\n  \n\n</div>\n",
      "images": "/uploads/uploads/174069192685820250227213206",
      "images1": "/uploads/uploads/174069192685820250227213206",
      "images2": "/uploads/uploads/174069192635920250227213206",
      "images3": "/uploads/uploads/174069192693520250227213206",
      "images4": "/uploads/uploads/174069192647920250227213206",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c06e337"
      },
      "Title": "Bajaj PX97 Torque New 36L Personal Air Cooler For Room| DuramarinePump| 3-Yr Warranty| TurboFan Technology| Powerful Air Throw| 3-Speed Control| Portable Air Cooler For Home| White",
      "color": "White",
      "size": "36L",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "6799",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Bajaj PX97 Torque New 36L Personal Air Cooler For Room| DuramarinePump| 3-Yr Warranty| TurboFan Technology| Powerful Air Throw| 3-Speed Control| Portable Air Cooler For Home| White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Cooler</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">36L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6799</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8632</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">\n  <h2 style=\"color: #007BFF;\">Bajaj Personal Air Cooler - 36 Litres (White)</h2>\n\n  <p><strong>Category:</strong> Air Cooler for Home</p>\n  <p><strong>Type:</strong> Personal Cooler</p>\n  <p><strong>Water Tank Capacity:</strong> 36 Litres</p>\n  <p><strong>Air Flow:</strong> 30 Feet</p>\n  <p><strong>Colour:</strong> White</p>\n\n  <h3 style=\"color: #007BFF;\">Key Features:</h3>\n\n  <ul>\n    <li><strong>DuraMarine Pump:</strong> All Bajaj Air Coolers come equipped with a DuraMarine Pump that features higher insulation. It protects the pump from moisture, enhancing its life and reliability.</li>\n    <li><strong>Anti-Bacterial Hexacool Technology Pads:</strong> Specially designed pads safeguard against bacteria, ensuring fresh and clean air. The hexagonal design of the pads allows maximum cooling with minimum water usage. It is also resistant to bad odours.</li>\n    <li><strong>Turbo Fan Technology:</strong> Experience strong fan-based cooling that ensures better and faster air circulation throughout the room.</li>\n    <li><strong>Adjustable Air Flow:</strong> Comes with 3-speed control to customize the air flow as per your comfort and requirement.</li>\n    <li><strong>4-Way Air Deflection:</strong> With vertical auto-swing and 4-way air deflection, it provides wide and even air spread across the room.</li>\n    <li><strong>Convenient Mobility:</strong> Equipped with castor wheels for effortless 4-way movement – move your cooler wherever you go with ease!</li>\n  </ul>\n\n  <h3 style=\"color: #007BFF;\">Warranty:</h3>\n  <p>Enjoy peace of mind with <strong>1-year standard warranty</strong> and an <strong>additional 2 years extended warranty</strong>. (Terms & Conditions Applied)</p>\n  <p><em>Offer valid from 1st March 2024 to 30th June 2024.</em></p>\n\n  <h3 style=\"color: #007BFF;\">Product Images:</h3>\n  \n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/7c789395-3d5f-4db1-b88d-34cc9e46b83d.__CR0,0,970,600_PT0_SX970_V1___.jpg\" style=\"width: 100%; margin-bottom: 10px;\" alt=\"Cooler Image 1\">\n  \n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/7456aca0-7a5c-4940-9670-db2c1923747d.__CR0,0,970,600_PT0_SX970_V1___.jpg\" style=\"width: 100%; margin-bottom: 10px;\" alt=\"Cooler Image 2\">\n  \n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/3e31056a-7a45-4810-8371-6f050cc04bf0.__CR0,0,970,600_PT0_SX970_V1___.jpg\" style=\"width: 100%; margin-bottom: 10px;\" alt=\"Cooler Image 3\">\n  \n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/eaebf85a-2803-4a7e-8c9b-27ef7a7e4ee8.__CR0,0,970,600_PT0_SX970_V1___.jpg\" style=\"width: 100%; margin-bottom: 10px;\" alt=\"Cooler Image 4\">\n  \n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/ba8b13cc-0d1b-49c7-b3c5-585ffae98463.__CR0,0,970,600_PT0_SX970_V1___.jpg\" style=\"width: 100%;\" alt=\"Cooler Image 5\">\n\n</div>\n",
      "images": "/uploads/uploads/171544750427720240511171144",
      "images1": "/uploads/uploads/171544750427720240511171144",
      "images2": "/uploads/uploads/171544750424520240511171144",
      "images3": "/uploads/uploads/171544750484420240511171144",
      "images4": "/uploads/uploads/171544750436320240511171144",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cbb2efa"
      },
      "Title": " Bajaj GX-1 Mixer Grinder 500W|Superior Mixie For Kitchen|2-in-1 for Dry Grinding| Blade Function With Titan Motor|3 Stainless Steel Mixer Jars|1 Year...",
      "color": "Black",
      "size": "500 Watt- 3 Jar",
      "storage": "",
      "selling_price": "379.79",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\"> Bajaj GX-1 Mixer Grinder 500W|Superior Mixie For Kitchen|2-in-1 for Dry Grinding| Blade Function With Titan Motor|3 Stainless Steel Mixer Jars|1 Year...</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">500 Watt- 3 Jar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7722</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; color: #000000; line-height: 1.6; max-width: 600px;\">\n\n  <h2 style=\"color: #000000;\">Bajaj GX 1 Mixer Grinder</h2>\n\n  <ul>\n    <li><strong>Brand:</strong> Bajaj</li>\n    <li><strong>Model Name:</strong> GX 1</li>\n    <li><strong>Special Feature:</strong> Manual</li>\n    <li><strong>Colour:</strong> Black</li>\n    <li><strong>Product Dimensions:</strong> 22D x 23W x 42H Centimeters</li>\n    <li><strong>Bowl Capacity:</strong> 1.2L Liquidizing Jar, 0.8L Dry Grind Jar, 0.4L Chutney Jar</li>\n    <li><strong>Recommended Uses:</strong> Mixing, Grinding</li>\n    <li><strong>Number of Speeds:</strong> 3</li>\n    <li><strong>Included Components:</strong> Mixer: 1N, Liquidizing Jar</li>\n    <li><strong>Product Care Instructions:</strong>\n      <ul>\n        <li>Please allow the motor to cool for some time between product uses.</li>\n        <li>Most mixer grinders come with overload protection which automatically turns off the motor in case of overheating.</li>\n        <li>Burning smell during the first few usages is normal due to varnish coating on the motor and will stop after a few cycles.</li>\n        <li>For tough grinding such as turmeric, masala, or idli batter, use mixer grinders with 750 Watts or more.</li>\n      </ul>\n    </li>\n  </ul>\n\n</div>\n",
      "images": "/uploads/uploads/174069393062420250227220530",
      "images1": "/uploads/uploads/174069393062420250227220530",
      "images2": "/uploads/uploads/174069393076520250227220530",
      "images3": "/uploads/uploads/174069393044620250227220530",
      "images4": "/uploads/uploads/174069393057520250227220530",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665caaed9b"
      },
      "Title": "Bajaj SWX 4 Deluxe 800-Watt 2-Slice Grill Sandwich Maker",
      "color": "Black",
      "size": "800-Watt ",
      "storage": "",
      "selling_price": "339.99",
      "mrp": "1699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Bajaj SWX 4 Deluxe 800-Watt 2-Slice Grill Sandwich Maker</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Sandwich Maker</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">800-Watt </td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹339.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6038</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; color: #000000; max-width: 800px; line-height: 1.6;\">\n\n  <h2 style=\"color: #000000;\">Bajaj SWX 4 Deluxe Sandwich Griller</h2>\n\n  <ul>\n    <li><strong>Brand:</strong> Bajaj</li>\n    <li><strong>Style:</strong> SWX-4</li>\n    <li><strong>Special Feature:</strong> Toaster</li>\n    <li><strong>Material:</strong> Acrylonitrile Butadiene Styrene (ABS)</li>\n    <li><strong>Colour:</strong> Black</li>\n    <li><strong>Product Dimensions:</strong> 23D x 21W x 9.1H cm</li>\n    <li><strong>Wattage:</strong> 800 Watts</li>\n    <li><strong>Voltage:</strong> 240 Volts</li>\n    <li><strong>Item Weight:</strong> 5.2 kg</li>\n    <li><strong>Included Components:</strong> 1 Unit Toaster, Instruction Manual, Warranty Card</li>\n  </ul>\n\n  <h3 style=\"margin-top: 20px; color: #000000;\">About This Item</h3>\n  <ul>\n    <li><strong>Type:</strong> 2-Slice Grill Sandwich Maker</li>\n    <li><strong>Series:</strong> SWX 4 Deluxe with Griller Plates</li>\n    <li><strong>Non-Stick Coated Plates:</strong> For easy cleaning & maintenance.</li>\n    <li><strong>Neon Indicator & Buckle Clips:</strong> Power on/ready lights and handle clips for safer operation.</li>\n    <li><strong>Upright Compact Storage:</strong> Stands upright with cord winder at the base.</li>\n    <li><strong>Steady Support:</strong> Base stability prevents skidding.</li>\n    <li><strong>Also Available:</strong> SWX 3 DLX with Toaster Plate (800W).</li>\n  </ul>\n\n  <div style=\"margin-top: 20px;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/4b4615ba-5e89-4311-88ff-4b05680d4cb1.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 1\" style=\"width: 100%;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/7361ced0-1921-4f55-a728-72e1c7211811.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 2\" style=\"width: 100%;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/2857448d-5eb6-4dbd-947b-d1adbf5de7a9.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 3\" style=\"width: 100%;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b15e6664-039d-42f0-ab8f-b01e153dfd30.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 4\" style=\"width: 100%;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/809aa5b2-5b55-4bdb-ad15-590763cad3d7.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 5\" style=\"width: 100%;\">\n  </div>\n</div>\n",
      "images": "/uploads/uploads/171551567169520240512120751",
      "images1": "/uploads/uploads/171551567169520240512120751",
      "images2": "/uploads/uploads/171551567173220240512120751",
      "images3": "/uploads/uploads/171551567153120240512120751",
      "images4": "/uploads/uploads/171551567192820240512120751",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cc2d2f8"
      },
      "Title": "Bosch TrueMixx Pro Mixer Grinder, 1000W 4 Jars Black MGM8842MIN",
      "color": "Black",
      "size": "1000 Watt",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "9000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Bosch TrueMixx Pro Mixer Grinder, 1000W 4 Jars Black MGM8842MIN</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1000 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">95%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6234</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; color: #000000; max-width: 800px; line-height: 1.6;\">\n\n  <h2 style=\"color: #000000;\">Bosch TrueMixx Mixer Grinder</h2>\n\n  <ul>\n    <li><strong>Brand:</strong> Bosch</li>\n    <li><strong>Model Name:</strong> True Mixx</li>\n    <li><strong>Colour:</strong> Black</li>\n    <li><strong>Product Dimensions:</strong> 21D x 49.5W x 21.9H cm</li>\n    <li><strong>Blade Material:</strong> Stainless Steel</li>\n    <li><strong>Special Feature:</strong> Overload Protection</li>\n    <li><strong>Capacity:</strong> 1.4 litres</li>\n    <li><strong>Controls Type:</strong> Plastic</li>\n    <li><strong>Item Weight:</strong> 5200 grams</li>\n    <li><strong>Dishwasher Safe:</strong> Yes</li>\n  </ul>\n\n</div>\n",
      "images": "/uploads/uploads/174069380715420250227220327",
      "images1": "/uploads/uploads/174069380715420250227220327",
      "images2": "/uploads/uploads/174069380785320250227220327",
      "images3": "/uploads/uploads/174069380727620250227220327",
      "images4": "/uploads/uploads/174069380768020250227220327",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c8c523f"
      },
      "Title": " NutriPro Juicer Mixer Grinder - Smoothie Maker - 500 Watts (2 Jar, Silver) - 2 Year Warranty",
      "color": "Silver",
      "size": "500 Watt-2 Jar",
      "storage": "",
      "selling_price": "389.79",
      "mrp": "6899",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\"> NutriPro Juicer Mixer Grinder - Smoothie Maker - 500 Watts (2 Jar, Silver) - 2 Year Warranty</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">500 Watt-2 Jar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6899</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7111</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; color: #000000; max-width: 800px; line-height: 1.6;\">\n\n  <h2 style=\"color: #000000;\">Nutripro Countertop Blender</h2>\n\n  <ul>\n    <li><strong>Brand:</strong> Nutripro</li>\n    <li><strong>Colour:</strong> Silver</li>\n    <li><strong>Special Feature:</strong> Powerful Motor</li>\n    <li><strong>Capacity:</strong> 300 Milliliters</li>\n    <li><strong>Product Dimensions:</strong> 30.3D x 13.3W x 22.4H cm</li>\n    <li><strong>Included Components:</strong> Mixers</li>\n    <li><strong>Style:</strong> Countertop Blender</li>\n    <li><strong>Recommended Uses:</strong> Juices, Grinding</li>\n    <li><strong>Power Source:</strong> Corded Electric</li>\n    <li><strong>Number of Speeds:</strong> 2</li>\n  </ul>\n\n</div>\n",
      "images": "/uploads/uploads/174069345262820250227215732",
      "images1": "/uploads/uploads/174069345262820250227215732",
      "images2": "/uploads/uploads/174069345268020250227215732",
      "images3": "/uploads/uploads/174069345252720250227215732",
      "images4": "/uploads/uploads/174069345293720250227215732",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c7cdd5b"
      },
      "Title": "Atomberg Zenova Mixer Grinder with Unique Coarse Mode | Advanced Safety Features | 4 Jars including Chopper Jar with Hands Free Operation (Red Wine)",
      "color": "Red Wine",
      "size": "550 Watt",
      "storage": "",
      "selling_price": "379.99",
      "mrp": "11999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Atomberg Zenova Mixer Grinder with Unique Coarse Mode | Advanced Safety Features | 4 Jars including Chopper Jar with Hands Free Operation (Red Wine)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Red Wine</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">550 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹11999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7005</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; color: #000000; max-width: 800px; line-height: 1.6;\">\n\n  <h2 style=\"color: #000000;\">Atomberg Zenova Mixer Grinder</h2>\n\n  <ul>\n    <li><strong>Brand:</strong> Atomberg</li>\n    <li><strong>Model Name:</strong> Atomberg Zenova Mixer Grinder</li>\n    <li><strong>Colour:</strong> Red Wine</li>\n    <li><strong>Special Feature:</strong> Safety Lock</li>\n    <li><strong>Product Dimensions:</strong> 53.5D x 26.5W x 32.8H cm</li>\n    <li><strong>Bowl Capacity:</strong> 1.5 litres</li>\n    <li><strong>Recommended Uses:</strong> Blend</li>\n    <li><strong>Number of Speeds:</strong> 4</li>\n    <li><strong>Product Care Instructions:</strong> Hand Wash</li>\n    <li><strong>Included Components:</strong> \n      1 Mixer Base Unit, 1 Liquidiser Jar, 1 Multipurpose Jar, \n      1 Chutney and Spice Grinding Jar, 1 Chopper Jar, \n      1 Spatula, 1 User Manual with Warranty Card\n    </li>\n  </ul>\n\n</div>\n",
      "images": "/uploads/uploads/174069209190520250227213451",
      "images1": "/uploads/uploads/174069209190520250227213451",
      "images2": "/uploads/uploads/174069209153020250227213451",
      "images3": "/uploads/uploads/174069209171720250227213451",
      "images4": "/uploads/uploads/174069209139920250227213451",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cd489dd"
      },
      "Title": " Philips HL7756/01 750 Watt Mixer Grinder, 3 Stainless Steel Multipurpose Jars with 3 Speed Control and Pulse function (Black)",
      "color": "Black",
      "size": "750 Watt-3 Jar",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "9000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\"> Philips HL7756/01 750 Watt Mixer Grinder, 3 Stainless Steel Multipurpose Jars with 3 Speed Control and Pulse function (Black)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">750 Watt-3 Jar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6098</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; color: #000000; max-width: 800px; line-height: 1.6;\">\n\n  <h2 style=\"color: #000000;\">Philips HL7756/00 Mixer Grinder</h2>\n\n  <ul>\n    <li><strong>Brand:</strong> Philips</li>\n    <li><strong>Model Name:</strong> HL7756/00</li>\n    <li><strong>Colour:</strong> Black</li>\n    <li><strong>Product Dimensions:</strong> 37D x 21W x 26H cm</li>\n    <li><strong>Blade Material:</strong> Stainless Steel</li>\n    <li><strong>Special Features:</strong> Adjustable Speed Control, Leak Proof</li>\n    <li><strong>Capacity:</strong> 1500 Milliliters</li>\n    <li><strong>Controls Type:</strong> Alloy</li>\n    <li><strong>Item Weight:</strong> 3 Kilograms</li>\n    <li><strong>Dishwasher Safe:</strong> No</li>\n  </ul>\n\n</div>\n",
      "images": "/uploads/uploads/174069360330920250227220003",
      "images1": "/uploads/uploads/174069360330920250227220003",
      "images2": "/uploads/uploads/174069360353620250227220003",
      "images3": "/uploads/uploads/174069360310620250227220003",
      "images4": "/uploads/uploads/174069360383920250227220003",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c402019"
      },
      "Title": " Crompton DS 500 BLK 500-Watt Mixer Grinder with Powertron Motor & Motor Vent-X Technology (3 Stainless Steel Jars, Black & Grey)",
      "color": "Black",
      "size": "500 Watt- 3 Jar",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "9000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\"> Crompton DS 500 BLK 500-Watt Mixer Grinder with Powertron Motor & Motor Vent-X Technology (3 Stainless Steel Jars, Black & Grey)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">500 Watt- 3 Jar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7825</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; color: #000000; max-width: 800px; line-height: 1.6;\">\n\n  <h2 style=\"color: #000000;\">Crompton DS 500W Mixer Grinder</h2>\n\n  <ul>\n    <li><strong>Brand:</strong> Crompton</li>\n    <li><strong>Model Name:</strong> Crompton DS 500W Mixer Grinder</li>\n    <li><strong>Colour:</strong> Black & Grey</li>\n    <li><strong>Product Dimensions:</strong> 19D x 17.5W x 22.5H cm</li>\n    <li><strong>Blade Material:</strong> Stainless Steel</li>\n    <li><strong>Capacity:</strong> 1.2 Litres</li>\n    <li><strong>Controls Type:</strong> Knob Control</li>\n    <li><strong>Item Weight:</strong> 3.5 Kilograms</li>\n    <li><strong>Dishwasher Safe:</strong> Yes</li>\n    <li><strong>Manufacturer:</strong> Crompton Greaves Consumer Electricals Limited, Equinox Business Park, 1st Floor, Tower 3, LBS Marg, Kurla (W), Mumbai 400070, Maharashtra, India. Ph: +91 22 6167 8499</li>\n  </ul>\n\n</div>\n",
      "images": "/uploads/uploads/174069240359620250227214003",
      "images1": "/uploads/uploads/174069240359620250227214003",
      "images2": "/uploads/uploads/174069240320320250227214003",
      "images3": "/uploads/uploads/174069240356620250227214003",
      "images4": "/uploads/uploads/174069240361020250227214003",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c4d0db3"
      },
      "Title": "Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Black, 12GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life",
      "color": "Titanium Black,Titanium Blue,Titanium Gray,Titanium Silver",
      "size": "12GB RAM + 256GB Storage",
      "storage": "",
      "selling_price": "899.99",
      "mrp": "141999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Black, 12GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Titanium Black,Titanium Blue,Titanium Gray,Titanium Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12GB RAM + 256GB Storage</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹141999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹899.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6804</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; color: #000; background-color: #fff; padding: 20px; max-width: 800px; line-height: 1.6; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);\">\n  <h2 style=\"color: #000;\">Samsung Galaxy S25 Ultra</h2>\n  <p><strong>Meet Galaxy S25 Ultra</strong>, your true AI companion. Powered by the next chapter of <strong>Galaxy AI</strong> with multi-modality and the most advanced Galaxy fundamentals, the S25 Ultra naturally adapts to you—learning your patterns, anticipating your needs, and connecting your world seamlessly.</p>\n  <p>With <strong>Now Brief</strong>, it also offers you personalized insights to help you navigate your day with intelligence and ease.</p>\n</div>\nNeed to do multiple tasks? Galaxy S25 Ultra performs seamless actions across apps and will get them done for you instantly.\nLive to create? Galaxy S25 Ultra’s cutting-edge camera and visual creation tools offer you the best camera and editing experience, thanks to its most advanced AI ProVisual Engine. Go from Wide to Tele and even Ultra Wide and get the sharpest details.\nLove gaming? Enjoy hyper-realistic, ultra-smooth gameplay with the most powerful processor, customized for Galaxy - Snapdragon 8 Elite.\nAll this shielded in an Ultra-strong titanium frame with Galaxy’s toughest glass ever, Corning Gorilla Armor 2. <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/71abfc46-123d-451f-8176-925bcbd60de2.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 1\" width=\"100%\">\n<img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/ef688649-5a6b-4c7d-9e96-1898401f63fd.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 2\" width=\"100%\">\n<img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/3d364248-373d-4edb-87ea-b5e73a784d94.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 3\" width=\"100%\">\n<img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/8a19f7fc-5e20-4926-a14b-1eac01ca67bf.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 4\" width=\"100%\">\n<img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/313549b1-296c-4d6f-954d-00f64f0ecb05.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 5\" width=\"100%\">\n<img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/a8b94664-1f89-4d64-a8ed-bc7d8df7d756.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 6\" width=\"100%\">\n<img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/4130646c-0c34-474f-a41b-019dd098cd3f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 7\" width=\"100%\">\n<img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b6ab2ce4-90d1-43ee-a39d-2bf3cf34b218.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 8\" width=\"100%\">\n<img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/d20f6226-df88-497e-a5c7-53be3f029e6b.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 9\" width=\"100%\">\n",
      "images": "/uploads/uploads/174025632878820250222203208",
      "images1": "/uploads/uploads/174025632878820250222203208",
      "images2": "/uploads/uploads/174025632843820250222203208",
      "images3": "/uploads/uploads/174025632899520250222203208",
      "images4": "/uploads/uploads/174025632818520250222203208",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c45a692"
      },
      "Title": "Butterfly Rapid - 4J / Rapid 750 W Juicer Mixer Grinder (4 Jars, Black)",
      "color": "Black",
      "size": "Rapid 750 W ",
      "storage": "",
      "selling_price": "399.89",
      "mrp": "3999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Butterfly Rapid - 4J / Rapid 750 W Juicer Mixer Grinder (4 Jars, Black)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Rapid 750 W </td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7860</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; color: #000; background-color: #fff; padding: 20px; max-width: 800px; line-height: 1.6; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);\">\n  <h2 style=\"color: #000;\">Durable & Aesthetic Design</h2>\n  <p>Designed using high-quality and robust <strong>ABS material</strong>, this mixer-grinder ensures long-lasting performance. Additionally, this handy appliance is <strong>shock-proof</strong> and <strong>aesthetically pleasing</strong>, making it a perfect addition to enhance the overall aesthetics of your kitchen.</p>\n</div>\nBlender Jar This mixer-grinder’s blender jar is designed using unbreakable polycarbonate material, ensuring enduring performance.\nit features a flow breaker that ensures smooth blending. Moreover, this blender jar's lid locking mechanism allows for hands-free operation while blending.\nThanks to this mixer-grinder's special blender jar with the sophisticated feature of spill resistance and easy pouring, you can prevent spilling juice while pouring and spend less time cleaning.\nFeaturing high-stability rubber boots with airlocks, this mixer-grinder adds ease to dry grinding, wet grinding, and blending. Even during difficult operations, these specifically constructed vacuum rubber boots ensure stable performance.  <img src=\"https://rukminim2.flixcart.com/image/200/200/jhp5si80/mixer-grinder-juicer/n/z/a/butterfly-rapid-4-jar-750-watts-original-imaf5dvgzj65f5cj.jpeg?q=90\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://rukminim2.flixcart.com/image/200/200/jhp5si80/mixer-grinder-juicer/n/z/a/butterfly-rapid-4-jar-750-watts-original-imaf5dvjy3vs8sv6.jpeg?q=90\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://rukminim2.flixcart.com/image/200/200/jhp5si80/mixer-grinder-juicer/n/z/a/butterfly-rapid-4-jar-750-watts-original-imaf5843bkujxwrw.jpeg?q=90\" alt=\"Image 3\" style=\"width: 100% !important;\">\n    <img src=\"https://rukminim2.flixcart.com/image/200/200/jhp5si80/mixer-grinder-juicer/n/z/a/butterfly-rapid-4-jar-750-watts-original-imaf35p3ypkzw6g8.jpeg?q=90\" alt=\"Image 4\" style=\"width: 100% !important;\">\n    <img src=\"https://rukminim2.flixcart.com/image/200/200/jhp5si80/mixer-grinder-juicer/n/z/a/butterfly-rapid-4-jar-750-watts-original-imaf4t2sg7gh7yer.jpeg?q=90\" alt=\"Image 5\" style=\"width: 100% !important;\">\n    <img src=\"https://rukminim2.flixcart.com/image/200/200/jhp5si80/mixer-grinder-juicer/n/z/a/butterfly-rapid-4-jar-750-watts-original-imaf5dvg9gjtyuk9.jpeg?q=90\" alt=\"Image 6\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171544169538920240511153455",
      "images1": "/uploads/uploads/171544169538920240511153455",
      "images2": "/uploads/uploads/171544169583120240511153455",
      "images3": "/uploads/uploads/171544169591720240511153455",
      "images4": "/uploads/uploads/171544169580120240511153455",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c4a6a2e"
      },
      "Title": "boAt Lunar Connect Plus Smart Watch with 1.43\" AMOLED Display",
      "color": "Cherry Blossom, Active Black, Deep Blue",
      "size": "NA",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "2199",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Lunar Connect Plus Smart Watch with 1.43\" AMOLED Display</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Smart Watch</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Cherry Blossom, Active Black, Deep Blue</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2199</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7108</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604519598120240518151315",
      "images1": "/uploads/uploads/171604519598120240518151315",
      "images2": "/uploads/uploads/171604519532920240518151315",
      "images3": "/uploads/uploads/171604519532820240518151315",
      "images4": "/uploads/uploads/171604519526020240518151315",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cd7ddf2"
      },
      "Title": "vivo V27 5G (Magic Blue, 128 GB) (8 GB RAM)",
      "color": "Magic Blue",
      "size": "8+128 GB, 12+256GB",
      "storage": "",
      "selling_price": "599.89",
      "mrp": "25999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">vivo V27 5G (Magic Blue, 128 GB) (8 GB RAM)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Magic Blue</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8+128 GB, 12+256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹25999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹599.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8944</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<div style=\"font-family: Arial, sans-serif; background-color: #fff; color: #000; padding: 20px; max-width: 900px; margin: auto; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);\">\n  <h2 style=\"color: #000;\">Vivo V27 5G – Magic Blue</h2>\n\n  <p><strong>Model:</strong> VIVO V27 5G<br>\n     <strong>OS:</strong> Android<br>\n     <strong>RAM:</strong> 8 GB<br>\n     <strong>Processor:</strong> MediaTek Dimensity 7200 5G<br>\n     <strong>Battery:</strong> 4600 mAh<br>\n     <strong>Display:</strong> 6.78\" Full HD+ AMOLED</p>\n\n  <h3 style=\"color: #000;\">Camera Specifications</h3>\n  <ul>\n    <li><strong>Rear Camera:</strong> 50MP (OIS) + 8MP Wide + 2MP Macro</li>\n    <li><strong>Front Camera:</strong> 50MP with Eye Autofocus</li>\n    <li><strong>Camera Modes:</strong> Night, Portrait, Pro, Dual View, Supermoon, Timelapse, and more</li>\n  </ul>\n\n  <h3 style=\"color: #000;\">Build & Dimensions</h3>\n  <ul>\n    <li><strong>Colour:</strong> Magic Blue</li>\n    <li><strong>Material:</strong> Premium glass design</li>\n    <li><strong>Weight:</strong> 400 g</li>\n    <li><strong>Dimensions:</strong> 9.6 x 6 x 12 cm</li>\n  </ul>\n\n  <h3 style=\"color: #000;\">Inside the Box</h3>\n  <ul>\n    <li>Handset</li>\n    <li>Type-C to USB Cable</li>\n    <li>USB Power Adapter</li>\n    <li>Protective Case & Film (Pre-applied)</li>\n    <li>Ejector Tool</li>\n    <li>Documentation</li>\n  </ul>\n\n  <h3 style=\"color: #000;\">Product Gallery</h3>\n  <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px;\">\n    <img src=\"https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/d87b008613d143b789374f13b5489e44_186e99cce84_RPD_01.jpg.jpeg?q=90\" alt=\"Vivo V27 Image 1\" style=\"width: 100%;\">\n    <img src=\"https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f5ff5bd898b54fd68c9fbe5df4c90620_186e99cfb10_RPD_02.jpg.jpeg?q=90\" alt=\"Vivo V27 Image 2\" style=\"width: 100%;\">\n    <img src=\"https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f63ce64ac61b4bf09e24d722ab057994_186e99d17f8_RPD_03.jpg.jpeg?q=90\" alt=\"Vivo V27 Image 3\" style=\"width: 100%;\">\n    <img src=\"https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/e21a764d55c646a9a41a6b4f3cd1570d_186e99d31e7_RPD_04.jpg.jpeg?q=90\" alt=\"Vivo V27 Image 4\" style=\"width: 100%;\">\n    <img src=\"https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/6ec53b8b8ece4a73bd509f1edaf80439_186e99d4d3c_RPD_05.jpg.jpeg?q=90\" alt=\"Vivo V27 Image 5\" style=\"width: 100%;\">\n    <img src=\"https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a16d3db89674cefa74df0e3adecbc93_186e99d8170_RPD_07.jpg.jpeg?q=90\" alt=\"Vivo V27 Image 6\" style=\"width: 100%;\">\n    <img src=\"https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/3f12d8607bdd4efe9b097b14a020b968_186e99d9d14_RPD_08.jpg.jpeg?q=90\" alt=\"Vivo V27 Image 7\" style=\"width: 100%;\">\n    <img src=\"https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f12712072915476382be5791f375bb7f_186e99db984_RPD_09.jpg.jpeg?q=90\" alt=\"Vivo V27 Image 8\" style=\"width: 100%;\">\n  </div>\n</div>\n",
      "images": "/uploads/uploads/171544028344920240511151123",
      "images1": "/uploads/uploads/171544028344920240511151123",
      "images2": "/uploads/uploads/171544028386620240511151123",
      "images3": "/uploads/uploads/171544028374920240511151123",
      "images4": "/uploads/uploads/171544028324120240511151123",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce11318"
      },
      "Title": "APPLE Watch SE GPS (2nd Gen) Heart Rate Monitor, Crash Detection, Sleep Tracking (Starlight Sport Strap, 40mm)",
      "color": "Space Gray,Star Light",
      "size": "40 MM,44 MM",
      "storage": "",
      "selling_price": "439.79",
      "mrp": "28999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">APPLE Watch SE GPS (2nd Gen) Heart Rate Monitor, Crash Detection, Sleep Tracking (Starlight Sport Strap, 40mm)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Watch</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Space Gray,Star Light</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">40 MM,44 MM</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹28999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹439.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8136</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "WHY APPLE WATCH SE — All the essentials to help you monitor your fitness, keep connected, track your health and stay safe. Now up to 20% faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever.\nEASILY CUSTOMISABLE — Available in a range of sizes and colours, with dozens of straps to choose from and watch faces with complications tailored to whatever you’re into.\nHEALTH AND SAFETY FEATURES — Get help when you need it with Crash Detection, Fall Detection and Emergency SOS. Get deep insights into your health, including notifications if you have an irregular rhythm or an unusually high or low heart rate.\nSIMPLY COMPATIBLE — It works seamlessly with your Apple devices and services. Unlock your Mac automatically. Find your devices with a tap. Apple Watch requires an iPhone 8 or later with the latest iOS version.\nSWIMPROOF AND STYLISH — Water resistant to 50 metres. Three finishes. And a redesigned, colour-matched back case made with a new production process that reduces its carbon emissions by over 80%.",
      "images": "/uploads/uploads/171544058228020240511151622",
      "images1": "/uploads/uploads/171544058228020240511151622",
      "images2": "/uploads/uploads/171544058217920240511151622",
      "images3": "/uploads/uploads/171544058242320240511151622",
      "images4": "/uploads/uploads/171544058278920240511151622",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cc1cbd5"
      },
      "Title": "APPLE Watch Ultra GPS + Cellular - ECG App, Temp sensor, Blood oxygen, Fall Detection (Orange Alpine Strap, Large)",
      "color": "Orange Alpine,Starlight Alpine",
      "size": "49 MM",
      "storage": "",
      "selling_price": "399.79",
      "mrp": "82998",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">APPLE Watch Ultra GPS + Cellular - ECG App, Temp sensor, Blood oxygen, Fall Detection (Orange Alpine Strap, Large)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Watch</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Orange Alpine,Starlight Alpine</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">49 MM</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹82998</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8103</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "Your essential companion for a healthy life is now even more powerful. The S9 chip enables a super-bright display and a magical new way to quickly and easily interact with your Apple Watch without touching the screen. Advanced health, safety and activity features provide powerful insights and help when you need it. And redesigned apps in watchOS give you more information at a glance.\nCARBON NEUTRAL — An aluminium Apple Watch Series 9 paired with the latest Sport Loop is carbon neutral.\nCELLULAR CONNECTIVITY—Send a text, make a call, and stream music without your iPhone nearby.\nADVANCED HEALTH FEATURES—Keep an eye on your blood oxygen. Take an ECG anytime. Get notifications if you have an irregular heart rhythm. See how much time you spent in REM, Core, or Deep sleep with sleep stages. Temperature sensing provides insights into overall well-being and cycle tracking. And take note of your state of mind to help build emotional awareness and resilience.\nA POWERFUL FITNESS PARTNER—The Workout app gives you a range of ways to train plus advanced metrics for more insights about your workout performance.   <img src=\"https://www.apple.com/in/apple-watch-ultra-2/images/overview/design/design_glory__b6ma91iz65ci_large_2x.jpg\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://www.apple.com/in/apple-watch-ultra-2/images/overview/design/design_tough__cxf55rbuc4q6_large_2x.jpg\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://www.apple.com/in/apple-watch-ultra-2/images/overview/design/design_brighter_light__fw79yoz4yyaa_large_2x.jpg\" alt=\"Image 3\" style=\"width: 100% !important;\">\n    <img src=\"https://www.apple.com/v/apple-watch-ultra-2/d/images/overview/design/design_ready__dm2wm45xodea_large_2x.jpg\" alt=\"Image 4\" style=\"width: 100% !important;\">\n    <img src=\"https://www.apple.com/v/apple-watch-ultra-2/d/images/overview/design/design_features_left_static__eu85ddvb5keq_large_2x.jpg\" alt=\"Image 5\" style=\"width: 100% !important;\">\n    <img src=\"https://www.apple.com/v/apple-watch-ultra-2/d/images/overview/design/design_features_right_static__duohcem6jlg2_large_2x.jpg\" alt=\"Image 6\" style=\"width: 100% !important;\">\n    <img src=\"https://www.apple.com/in/apple-watch-ultra-2/images/overview/design/design_magical_find_my__bga5b92d5q1u_large_2x.jpg\" alt=\"Image 7\" style=\"width: 100% !important;\">\n    <img src=\"https://www.apple.com/v/apple-watch-ultra-2/d/images/overview/design/design_carbon__cttkpvv1k7cm_large_2x.jpg\" alt=\"Image 8\" style=\"width: 100% !important;\">\n    <img src=\"https://www.apple.com/in/apple-watch-ultra-2/images/overview/outdoor/adventure_backcountry_hw__fi8n3ex9imuu_large_2x.jpg\" alt=\"Image 9\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171544082725720240511152027",
      "images1": "/uploads/uploads/171544082725720240511152027",
      "images2": "/uploads/uploads/171544082757620240511152027",
      "images3": "/uploads/uploads/171544082759420240511152027",
      "images4": "/uploads/uploads/171544082786120240511152027",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cdd335b"
      },
      "Title": "boAt Rockerz 510 Super Extra Bass Bluetooth Headset (Raging Red, On the Ear)",
      "color": "Red",
      "size": "Free Size",
      "storage": "",
      "selling_price": "389.89",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Rockerz 510 Super Extra Bass Bluetooth Headset (Raging Red, On the Ear)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Rockerz</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Red</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Free Size</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8738</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "Model:\n‎Rockerz-510\nWeight:\n0.50kg\nDimensions:\n12.00cm x 15.00cm x 6.00cm\nSKU:\nJLAVAM   <img src=\"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r510-2.png?v=1615237317\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r510-3.png?v=1615237318\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r510-4.png?v=1615237320\" alt=\"Image 3\" style=\"width: 100% !important;\">\n    <img src=\"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r510-5.png?v=1615237316\" alt=\"Image 4\" style=\"width: 100% !important;\">\n    <img src=\"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r510-6.png?v=1615237315\" alt=\"Image 5\" style=\"width: 100% !important;\">\n    <img src=\"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Voice-Assistant-Panel_1-Year_3e5ba7e2-2538-4f60-972a-7a9fd0c7f382.png?v=1617609236\" alt=\"Image 6\" style=\"width: 100% !important;\">\n</body>",
      "images": "/uploads/uploads/171544126243420240511152742",
      "images1": "/uploads/uploads/171544126243420240511152742",
      "images2": "/uploads/uploads/171544126298820240511152742",
      "images3": "/uploads/uploads/171544126264420240511152742",
      "images4": "/uploads/uploads/171544126250520240511152742",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cf2705e"
      },
      "Title": "Haier 240 L Frost Free Double Door 3 Star Convertible Refrigerator (Moon Silver, HEF-253GS-P)",
      "color": "Moon Silver",
      "size": "237L,240L",
      "storage": "",
      "selling_price": "599.49",
      "mrp": "25999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Haier 240 L Frost Free Double Door 3 Star Convertible Refrigerator (Moon Silver, HEF-253GS-P)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Refrigerator</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Moon Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">237L,240L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹25999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹599.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6092</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "Frost Free Refrigerator: Auto defrost function to prevent ice build-up\nCapacity 240 Litres: Suitable for families with 2 to 3 members or bachelors | Freezer capacity: 57 Ltr , Fresh food capacity: 183 Ltr\nEnergy Rating: 3 Stars - Energy Efficiency\nManufacturer Warranty: 1 year on product, 10 years on compressor.\nInverter Compressor with Cooling technology – Energy efficient, silent operation & more durable with Expert cooling technology\nStorage or Interior description : Fresh food capacity : 183ltr | Freezer capacity : 57 Ltr | Total no : of compartments : 1, Shelf Type : Toughened Glass / Large Vegetable box capacity | Anti-bacterial gasket | Bottle storage capacity : 4\nSpecial Features: 5 in 1 Convertible Vegetable Box, 3 Toughened Glass Shelves, Anti-bacterial gasket Clean Back, Connect Home inverter\nShelf type: Toughened Adjustable Glass Shelves\nItem Dimensions & Weight: 61.5x54.8x156(LxWxH) | Weight : 53Kg\nIncluded in the box: 1 Refrigerator Unit, Egg Tray, Ice Tray, User Manual, Warranty Card   <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/2b4d2aae-717e-4e31-9406-e4e902bff21c.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b87c430b-0070-40a9-b3a3-8874d81552a6.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/6cfede9b-14e2-4baa-8a79-b912d1862693.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 3\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/84081f47-fce9-4948-a5e7-31e89397e526.__CR0,0,300,300_PT0_SX300_V1___.jpg\" alt=\"Image 4\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/862e566d-ead7-4027-afb2-c82a431006d9.__CR0,0,300,300_PT0_SX300_V1___.jpg\" alt=\"Image 5\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/bb997069-bd44-456a-ba84-b212f1167ba4.__CR0,0,300,300_PT0_SX300_V1___.jpg\" alt=\"Image 6\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/f4238cb6-2bde-41ed-afc2-dcac5f6228b8.__CR0,0,300,300_PT0_SX300_V1___.jpg\" alt=\"Image 7\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/dc36b00b-7395-4960-95ce-002e7b5daf6f.__CR0,0,300,300_PT0_SX300_V1___.jpg\" alt=\"Image 8\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/f631a6d4-213f-498b-8160-11e7a2af9429.__CR0,0,300,300_PT0_SX300_V1___.jpg\" alt=\"Image 9\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171544136913420240511152929",
      "images1": "/uploads/uploads/171544136913420240511152929",
      "images2": "/uploads/uploads/171544136955420240511152929",
      "images3": "/uploads/uploads/171544136975020240511152929",
      "images4": "/uploads/uploads/171544136962920240511152929",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cecb0ae"
      },
      "Title": "LG 9/5 kg with Wi-Fi EnabledAl Direct Drive Technology Ready to Wear Clothes Washer with Dryer with In-built Heater Silver",
      "color": "Silver",
      "size": "9 Kg",
      "storage": "",
      "selling_price": "499.99",
      "mrp": "59990",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">LG 9/5 kg with Wi-Fi EnabledAl Direct Drive Technology Ready to Wear Clothes Washer with Dryer with In-built Heater Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Washer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">9 Kg</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹59990</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7122</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "If you are looking for an elegantly designed and efficient front-door washing machine, then this LG washing machine is ideal for you. Its Direct Drive motor operates with minimal vibration and noise. Moreover, the LG Steam technology removes dust mites and keeps your clothes hygienic. Furthermore, the LG ThinQ Wi-Fi feature allows you to remotely control this machine with an app.\nSpecifications\nGeneral\nIn The Box\n1 Washing Machine, Drainage Pipe, Water Inlet Pipe, User manual, Warranty Card\nBrand\nLG\nModel Name\nFHD0905SWS\nFunction Type\nWasher with Dryer\nEnergy Rating\n5\nWashing Capacity\n9 kg\nWashing Method\nTUMBLE\nMaximum Spin Speed\n1400 RPM\nIn-built Heater\nYes\nColor\nSilver\nDryer Capacity\n5 kg\nMaximum Temperature\n95 degree C\nWater Level Selector\nYes\nShade\nSilver VCM\nSteam\nNo\nInverter\nNo\nInstallation & Demo\nInstallation & Demo\nAuthorised Service Engineer will install the Washing Machine, make it operational and explain the below details. 1. How to Use, 2. Features,3. Do's and Dont's.\nWarranty\nWarranty Summary\n2 Years Comprehensive Warranty and 10 Years Warranty on Motor from LG\nCovered in Warranty\nAll Parts Excluding Outer Cabinet and Plastic Parts From the Date of Purchase Will be Covered Under Warranty. Covers All Manufacturing Defects\nNot Covered in Warranty\nParts: Outer Cabinet and Plastic Parts, Any Accessories External to the Product, Product is Not Used According to the Instructions Given in the Instructions Manual, Defects\nWarranty Service Type\nTechnician Visit\nWash Modes\nQuick Wash\nYes\nSpin Only\nYes\nSpin & Rinse\nYes\nOther Wash Modes\nEasy Care, Wash+Dry, Tub Clean, Wool (Hand/Wool), Allergy Care, Download Cycle, Delicate, Dry Only, Baby care\nBody Features\nOuter Body Material\nSTEEL\nTub Material\nStainless Steel\nOther Body Features\n150 Degree Door Opening Angle, Auto Door\nConvenience Features\nDigital Display\nYes\nPower Features\nPower Requirement\n100-240 V\nAdditional Features\nChild Lock\nYes\nDoor Lock\nYes\nAuto Power Off\nYes\nOther Features\nAI DD™ Motor Washing Motion Optimization, 6 Motion AI Direct Drive™, Steam™, Allergy care, ThinQ™ with Wi-Fi Control, Smart Diagnosis™\nDimensions\nWidth\n60 cm\nHeight\n85 cm\nDepth\n56 cm\nWeight\n60 kg    <img src=\"https://www.lg.com/content/dam/channel/wcms/in/images/washing-machines/fhd0905stb_ablqeil_eail_in_c/features/FHD0905STB-Inverter-D-v03.jpg\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://www.lg.com/content/dam/channel/wcms/in/images/washing-machines/fhd0905stb_ablqeil_eail_in_c/features/FHD0905STB-Titan2-D.jpg\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://www.lg.com/content/dam/channel/wcms/in/images/washing-machines/fhd0905stb_ablqeil_eail_in_c/features/FHD0905STB-TurboWash-360-D1.jpg\" alt=\"Image 3\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171544154517820240511153225",
      "images1": "/uploads/uploads/171544154517820240511153225",
      "images2": "/uploads/uploads/171544154568620240511153225",
      "images3": "/uploads/uploads/171544154549220240511153225",
      "images4": "/uploads/uploads/171544154591520240511153225",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c8d3b88"
      },
      "Title": "atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote",
      "color": "White",
      "size": "1200mm",
      "storage": "",
      "selling_price": "306.89",
      "mrp": "3699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Fan</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1200mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹306.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8495</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "ENERGY EFFICIENT BLDC TECHNOLOGY: Atomberg Renesa comes with an energy efficient BLDC motor. This 5-star rated fan provides a superior air delivery of 235 CMM with 360 RPM while consuming only 28W (at speed 5), saving up to 65% in electricity consumption.\nADDED CONVENIENCE OF REMOTE: Atomberg Renesa fan comes with a Smart IR Remote. IR remotes are easy to use without the hassle of pairing. Adjust the fan's speed or activate its unique features like boost mode, timer, or sleep mode at the click of a button.\nSLEEK & UNIQUE DESIGN: Atomberg Renesa has a sleek and modern design with LED lights that elevates the decor of your room.\nBLADE FINISH: Powder Coated Matte Finish\n2+1 YEAR WARRANTY: Atomberg Renesa ceiling fan comes with a standard two-year warranty. An additional one-year warranty can be availed of by registering your purchase on the Atomberg website.\nCONSISTENT SPEED EVEN AT LOW VOLTAGE: Atomberg Renesa ceiling fan runs with no drop in speed during voltage fluctuations ranging between 165V-285V, thereby maintaining consistency. It runs 3X longer on an inverter battery when compared to ordinary fans, allowing you to enjoy consistent airflow even during power outages.\nEASY INSTALLATION: Easy doorstep installation can be initiated through Urban Company OR through Atomberg directly. For installation through Urban Company, simply book an installation visit through the Urban Company app which also allows easy rescheduling, cancellation of service requests, and also allows service tracking.  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/7a26dd40-c4c1-413a-877e-c9d5d6ca3eaa.__CR0,0,2426,1501_PT0_SX970_V1___.jpg\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/df2ade1b-3b1f-4082-a90f-56cb65bcaba4.__CR0,0,1940,600_PT0_SX970_V1___.jpg\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/a805702c-d3c8-4f68-bd78-5e9e1ecc24c5.__CR0,0,2426,1501_PT0_SX970_V1___.jpg\" alt=\"Image 3\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171544929290820240511174132",
      "images1": "/uploads/uploads/171544929290820240511174132",
      "images2": "/uploads/uploads/171544929287520240511174132",
      "images3": "/uploads/uploads/171544929240920240511174132",
      "images4": "/uploads/uploads/171544929252820240511174132",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c07273c"
      },
      "Title": "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design (UA32T4380AKXXL)",
      "color": "Black",
      "size": "32 Inch",
      "storage": "",
      "selling_price": "379.99",
      "mrp": "17999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design (UA32T4380AKXXL)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">TV</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">32 Inch</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹17999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7304</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "Brand\t‎Samsung\nManufacturer\t‎Samsung India Pvt Ltd, DIXON TECHNOLOGIES (INDIA) LTD, SHED 2, 3, 4, EMC-2 NEAR AIRPORT GOVINDHARAM VILLAGE, MUNAGALAPALEM POST, YERPEDU MADALAM, CHITTOOR DIST. ANDHRA PRADESH-517526, INDIA.\nModel\t‎UA32T4380AKXXL\nModel Name\t‎UA32T4380AKXXL\nModel Year\t‎2022\nProduct Dimensions\t‎8.6 x 72.3 x 72.3 cm; 3.8 kg\nItem model number\t‎UA32T4380AKXXL\nMemory Storage Capacity\t‎16 GB\nRam Memory Installed Size\t‎1.5 GB\nOperating System\t‎Tizen\nHardware Interface\t‎USB, HDMI\nGraphics Coprocessor\t‎‎Mali400\nTuner Technology\t‎Ethernet\nResponse Time\t‎7 Milliseconds\nResolution\t‎768p\nSpecial Features\t‎Screen Share | Music System | Content Guide | Connect Share Movie | Supported Apps : Netflix, Youtube, Prime Video, Hotstar, SonyLiv, Hungama, JioCinema, Zee5, Eros Now, Oxygen Play\nMounting Hardware\t‎‎1 LED TV, 1 User Manual, 1 Warranty Card, 1 Remote Control, 2 AAA Batteries, Wall Mount / Table Top will be provided at the time of installation based on customer preferences.\nNumber of items\t‎1\nRemote Control Description\t‎Remote with Navigation keys\nRemote control technology\t‎IR\nDisplay Technology\t‎LED\nStanding screen display size\t‎32 Inches\nDisplay Type\t‎HD PurColor\nViewing Angle\t‎178 Degrees\nImage Aspect Ratio\t‎16:09\nImage brightness\t‎High Brightness\nSupported image types\t‎GIF, JPEG\nScreen Resolution\t‎1366 x 768 pixels\nResolution\t‎1366x768 Pixels\nAudio input compatible with the item\t‎Auxiliary\nAudio output mode\t‎Stereo\nSupported audio formats\t‎mp3_audio, wma\nSpeaker Surround Sound Channel Configuration\t‎Dolby Digital Plus\nVideo Capture Resolution\t‎720p\nAudio Wattage\t‎20 Watts\nVoltage\t‎45 Volts\nPower Source\t‎AC\nBatteries Required\t‎No\nRefresh Rate\t‎60 Hz\nTotal USB ports\t‎1\nConnector Type\t‎Wi-Fi, USB, Ethernet, HDMI\nMaximum Operating Distance\t‎8 Feet\nMounting Type\t‎Wall Mount & Table Mount\nActual viewing angle\t‎178 Degrees\nMedia Format\t‎MPEG, AVI\nIncludes remote\t‎Yes\nSupports Bluetooth Technology\t‎No\nManufacturer\t‎Samsung India Pvt Ltd\nItem Weight\t‎3 kg 800 g\nAdditional Information\nASIN\tB0B8YTGC23\nCustomer Reviews\t4.2 4.2 out of 5 stars    13,915 ratings\n4.2 out of 5 stars\nBest Sellers Rank\t#425 in Electronics (See Top 100 in Electronics)\n#3 in Smart Televisions\nDate First Available\t8 August 2022\nPacker\tSamsung India Electronics Pvt. Ltd. having its Registered Office at: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001\nImporter\tSamsung India Electronics Pvt. Ltd. having its Registered Office at: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001\nItem Dimensions LxWxH\t8.6 x 72.3 x 72.3 Centimeters\nNet Quantity\t1 Count\nGeneric Name\tTelevision  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/f31590d2-85c9-4aa2-8f5a-fbc8d0184b19.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/d48664bd-4352-4e4f-81a4-f06dd2f6c16f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/bd5e6070-d47b-49ed-8cd4-f6d4b9f964ec.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 3\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/8c61c37e-fb39-4d3d-adf8-7516a18fe196.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 4\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/d54b20a4-bf9c-4edf-9094-334b82f5804f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" alt=\"Image 5\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171544198710820240511153947",
      "images1": "/uploads/uploads/171544198710820240511153947",
      "images2": "/uploads/uploads/171544198744920240511153947",
      "images3": "/uploads/uploads/171544198732520240511153947",
      "images4": "/uploads/uploads/171544198760920240511153947",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cc149b1"
      },
      "Title": "SAMSUNG Galaxy S22 Ultra 5G (Phantom Black, 256 GB)  (12 GB RAM)",
      "color": "Phantom Black,Dark Red",
      "size": "8+128 GB, 12+256GB",
      "storage": "",
      "selling_price": "499.89",
      "mrp": "75999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">SAMSUNG Galaxy S22 Ultra 5G (Phantom Black, 256 GB)  (12 GB RAM)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Phantom Black,Dark Red</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8+128 GB, 12+256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹75999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8968</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "\nOS\t‎Android 12.0\nRAM\t‎12 GB\nProduct Dimensions\t‎0.9 x 7.8 x 16.3 cm; 228 g\nBatteries\t‎1 Lithium Ion batteries required. (included)\nItem model number\t‎SM-S908EZKHINU\nWireless communication technologies\t‎Cellular\nConnectivity technologies\t‎Bluetooth, Wi-Fi, USB\nGPS\t‎True\nSpecial features\t‎Fast Charging Support, Wireless Charging\nDisplay technology\t‎AMOLED\nOther display features\t‎Wireless\nDevice interface - primary\t‎Touchscreen\nOther camera features\t‎Rear, Front\nForm factor\t‎Bar\nColour\t‎Phantom Black\nBattery Power Rating\t‎5000\nWhats in the box\t‎Handset, Ejection Pin,Data Cable,Quick Start Guide\nManufacturer\t‎Samsung India pvt Ltd\nCountry of Origin\t‎Vietnam\nItem Weight\t‎228 g\nAdditional Information\nASIN\tB09SHJ1C9W\nCustomer Reviews\t4.4 4.4 out of 5 stars    2,697 ratings\n4.4 out of 5 stars\nBest Sellers Rank\t#45,469 in Electronics (See Top 100 in Electronics)\n#1,144 in Smartphones\nDate First Available\t26 October 2021\nManufacturer\tSamsung India pvt Ltd, Samsung Electronics Vietnam Thai Nguyen Co.,Ltd, Yen Binh Industrial Park, Dong Tien Ward Pho Yen Town 00280, Thai Nguyen Province Vietnam\nPacker\tSamsung Electronics Vietnam Thai Nguyen Co.,Ltd, Yen Binh Industrial Park, Dong Tien Ward Pho Yen Town 00280, Thai Nguyen Province Vietnam\nImporter\tSamsung India Electronics Pvt ltd, 6th Floor , DLF Centre, Sansad Marg, New Delhi - 110001 . Email id: support.india@samsung.com\nItem Dimensions LxWxH\t9 x 78 x 163 Millimeters\nNet Quantity\t1 Count\nGeneric Name\tSmartphones  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/c8a6e6ed-afda-449a-940c-4d7bbdb97789.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 1\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/fb7185ae-b04d-4a62-be51-8c5dac9bb1ee.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 2\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/fb7185ae-b04d-4a62-be51-8c5dac9bb1ee.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 3\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/9d8fe642-a7cc-4c31-b9ce-9d692fbdf6da.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 4\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/69304db5-a2b4-4357-b332-00b7aa286985.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 5\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/2f3fb576-c5eb-4440-bc39-996f65a8b5e3.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 6\">",
      "images": "/uploads/uploads/171544255685220240511154916",
      "images1": "/uploads/uploads/171544255685220240511154916",
      "images2": "/uploads/uploads/171544255663820240511154916",
      "images3": "/uploads/uploads/171544255621020240511154916",
      "images4": "/uploads/uploads/171544255685220240511154916",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ca7b1e4"
      },
      "Title": "APPLE AirPods Pro (2nd generation)",
      "color": "White",
      "size": "Free",
      "storage": "",
      "selling_price": "398.79",
      "mrp": "23499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">APPLE AirPods Pro (2nd generation)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Airpods</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Free</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹23499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹398.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8146</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "The speakers inside the EarPods have been engineered to maximise sound output, which means you get high-quality audio.\nThe EarPods (USB-C) also include a built-in remote that lets you adjust the volume, control the playback of music and video, and answer or end calls with a press of the remote.\nDesigned by Apple\nDeeper, richer bass tones\nGreater protection from sweat and water    <img src=\"https://m.media-amazon.com/images/G/31/img20/Wireless/WLA/July/Headsets/AirPods/River_images/IN_AMZ_AirPods_Wired_Desktop_02._CB408311056_.jpg\" style=\"width: 100%;\" alt=\"Image 1\">\n  <img src=\"https://m.media-amazon.com/images/G/31/img20/Wireless/WLA/July/Headsets/AirPods/River_images/IN_AMZ_AirPods_Wired_Desktop_03._CB408311276_.jpg\" style=\"width: 100%;\" alt=\"Image 2\">\n  <img src=\"https://m.media-amazon.com/images/G/31/img20/Wireless/WLA/July/Headsets/AirPods/River_images/IN_AMZ_AirPods_Wired_Desktop_04._CB408311056_.jpg\" style=\"width: 100%;\" alt=\"Image 3\">\n  <img src=\"https://m.media-amazon.com/images/G/31/img20/Wireless/WLA/July/Headsets/AirPods/River_images/IN_AMZ_AirPods_Wired_Desktop_07._CB408311276_.jpg\" style=\"width: 100%;\" alt=\"Image 4\">\n  <img src=\"https://m.media-amazon.com/images/G/31/img20/Wireless/WLA/July/Headsets/AirPods/River_images/IN_AMZ_AirPods_Wired_Desktop_08._CB408311059_.jpg\" style=\"width: 100%;\" alt=\"Image 5\">",
      "images": "/uploads/uploads/171544315285020240511155912",
      "images1": "/uploads/uploads/171544315285020240511155912",
      "images2": "/uploads/uploads/171544315235720240511155912",
      "images3": "/uploads/uploads/171544315264220240511155912",
      "images4": "/uploads/uploads/171544315254320240511155912",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c458592"
      },
      "Title": "IBELL CLASSY P16 SB WHITE Pedestal Fan 5 Leaf with Remote and High Air Flow, 55W, LED Display, High",
      "color": "White",
      "size": "Free Size",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "3699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">IBELL CLASSY P16 SB WHITE Pedestal Fan 5 Leaf with Remote and High Air Flow, 55W, LED Display, High</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Fan</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Free Size</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8066</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "iBELL 5 Leaf Pedestal Fan 406mm with High Air Throw\nPower Supply: 230V-/SOHz Power: 55W | Powder Coated Meta Grill\n3 speed control, 2 hour timer, Whisper quiet operation, Copper motor, Wide sweep oscillation\nStrong body for more life, more base stability. Height adjusting option available.\n2 Year Warranty (1 Year standard warranty + 1 Year additional warranty on free registration. Warranty Registration should be done within 30 days from the date of purchase.)   <img src=\"https://m.media-amazon.com/images/I/71wz6GJG6CL._SL1500_.jpg\" style=\"width: 100%;\" alt=\"Image 1\">\n  <img src=\"https://m.media-amazon.com/images/I/71JE-F1I-qL._SL1500_.jpg\" style=\"width: 100%;\" alt=\"Image 2\">\n  <img src=\"https://m.media-amazon.com/images/I/61YtRLKQNcL._SL1500_.jpg\" style=\"width: 100%;\" alt=\"Image 3\">",
      "images": "/uploads/uploads/171544332667620240511160206",
      "images1": "/uploads/uploads/171544332667620240511160206",
      "images2": "/uploads/uploads/171544332613620240511160206",
      "images3": "/uploads/uploads/171544332644520240511160206",
      "images4": "/uploads/uploads/171544332637620240511160206",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ca90f27"
      },
      "Title": "1 Ton 5 Star Wi-Fi Inverter Smart Split AC (Copper Condenser, 7 in 1 Convertible with True AI Mode, 4 Way Swing, PM 0.1 Air Purification Filter, Matter Certified, 2024 Model, White)",
      "color": "White",
      "size": "1 Ton",
      "storage": "",
      "selling_price": "599.99",
      "mrp": "38990",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">1 Ton 5 Star Wi-Fi Inverter Smart Split AC (Copper Condenser, 7 in 1 Convertible with True AI Mode, 4 Way Swing, PM 0.1 Air Purification Filter, Matter Certified, 2024 Model, White)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">AC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1 Ton</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹38990</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹599.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7955</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "Smart Split AC with Auto Convertible Inverter compressor\nConverti7: 7 Stages of Cooling Performance\n5 Star Energy Rating for energy efficiency. Suitable for small sized rooms.\nWarranty: 1 Year Comprehensive | 5 years on PCB |10 years on Compressor.\nCopper Condenser Coil with Shield Blu Technology: For greater durability in high humidity & coastal areas\nWorks with Amazon Alexa and Google Assistant |Customized Sleep Profiles | Remote Access and Control with Miraie\nMiraie: Connected Living | Comfortable Sleep Profile |Full Control Anytime Anywhere  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/f0cd9799-89df-44d8-abe3-907342e0f4c1.__CR0,0,1080,1080_PT0_SX300_V1___.png\" style=\"width: 100%;\" alt=\"Image 1\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/dc202b14-d927-46a2-991e-4a845c5a32ac.__CR0,0,1500,1500_PT0_SX300_V1___.png\" style=\"width: 100%;\" alt=\"Image 2\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/23a1b4f1-5926-4753-a2c3-4c0d2ac895ab.__CR0,0,1600,1600_PT0_SX300_V1___.jpeg\" style=\"width: 100%;\" alt=\"Image 3\">",
      "images": "/uploads/uploads/171544351980620240511160519",
      "images1": "/uploads/uploads/171544351980620240511160519",
      "images2": "/uploads/uploads/171544351968120240511160519",
      "images3": "/uploads/uploads/171544351993520240511160519",
      "images4": "/uploads/uploads/171544351913020240511160519",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce00d5d"
      },
      "Title": "Apple iPhone 15",
      "color": "Blue,Black,Pink,White",
      "size": "128GB,256GB",
      "storage": "",
      "selling_price": "499.89",
      "mrp": "59499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple iPhone 15</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Blue,Black,Pink,White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">128GB,256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹59499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6545</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "Dynamic Island\nDynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can track your next ride, see who’s calling, check your flight status, and so much more.\n\n\nHighly Durable\nThe innovative new design features back glass that has color infused throughout the material. A custom dual ion-exchange process for the glass, and an aerospace-grade aluminum enclosure, help make the iPhone 15 incredibly durable. Dependably durable. The Ceramic Shield front is tougher than any smartphone glass. Moreover, the iPhone is splash, water, and dust resistant. What a relief.\n\n\n48 MP Main Camera\nNow the Main camera shoots in super-high resolution. So it’s easier than ever to take standout photos with amazing detail — from snapshots to stunning landscapes.\n\n\nA16 Bionic Processor\nA16 Bionic powers all kinds of advanced features. Like computational photography used for 24 MP photos and next-gen portraits. Voice Isolation for phone calls. And smooth performance for graphics-intensive games. All with incredible efficiency for great battery life. No wonder it started as a Pro chip.\n\n\nUSB-C Compatible\nThe new USB-C connector lets you charge your Mac or iPad with the same cable you use to charge iPhone 15. You can even use the iPhone 15 to charge the Apple Watch or AirPods. Bye-bye, cable clutter.   <img src=\"https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River/R1807_1._CB575346353_.jpg\" style=\"width: 100%;\" alt=\"Image 1\">\n  <img src=\"https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River/R1807_2._CB575346353_.jpg\" style=\"width: 100%;\" alt=\"Image 2\">\n  <img src=\"https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River/R1807_3._CB575346353_.jpg\" style=\"width: 100%;\" alt=\"Image 3\">\n  <img src=\"https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River/R12FCC1._CB575346353_.jpg\" style=\"width: 100%;\" alt=\"Image 4\">",
      "images": "/uploads/uploads/171544410265520240511161502",
      "images1": "/uploads/uploads/171544410265520240511161502",
      "images2": "/uploads/uploads/171544410213920240511161502",
      "images3": "/uploads/uploads/171544410253920240511161502",
      "images4": "/uploads/uploads/171544410279020240511161502",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ca6a6c9"
      },
      "Title": "Samsung Galaxy Z Fold5 5G AI Smartphone (Black, 12GB RAM, 512GB Storage)",
      "color": "Blue,Black,Beige",
      "size": "256GB,512GB",
      "storage": "",
      "selling_price": "699.99",
      "mrp": "164999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy Z Fold5 5G AI Smartphone (Black, 12GB RAM, 512GB Storage)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Blue,Black,Beige</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">256GB,512GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹164999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹699.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7765</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "\nOS\t‎Android 13.0\nRAM\t‎8 GB\nProduct Dimensions\t‎0.7 x 7.2 x 16.5 cm; 187 g\nBatteries\t‎2 Lithium Ion batteries required. (included)\nItem model number\t‎SM-F731B\nWireless communication technologies\t‎Cellular\nConnectivity technologies\t‎Bluetooth, Wi-Fi, USB, NFC\nGPS\t‎True\nSpecial features\t‎Fast Charging Support, Dual SIM, Wireless Charging, Built-In GPS\nDisplay technology\t‎AMOLED\nOther display features\t‎Wireless\nDevice interface - primary\t‎Touchscreen\nResolution\t‎2640 x 1080\nOther camera features\t‎Rear, Front\nAudio Jack\t‎USB Type-C\nForm factor\t‎Foldable Screen\nColour\t‎beige\nBattery Power Rating\t‎3700\nWhats in the box\t‎Handset, Type C-Cable, SIM Tray Ejector, User Manual\nManufacturer\t‎Samsung\nCountry of Origin\t‎India\nItem Weight\t‎187 g\nAdditional Information\nASIN\tB0CB6BMFJR\nCustomer Reviews\t4.1 4.1 out of 5 stars    280 ratings\n4.1 out of 5 stars\nBest Sellers Rank\t#22,083 in Electronics (See Top 100 in Electronics)\n#812 in Smartphones\nDate First Available\t27 July 2023\nManufacturer\tSamsung, Samsung India Electronics Pvt. Ltd. having its Registered Office at: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001\nPacker\tSamsung India Electronics Pvt. Ltd. having its Registered Office at: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001\nImporter\tSamsung India Electronics Pvt ltd, 6th Floor , DLF Centre, Sansad Marg, New Delhi - 110001 . Email id: support.india@samsung.com, Tel(Toll Free): 1800 40 7267864\nItem Dimensions LxWxH\t7 x 72 x 165 Millimeters\nNet Quantity\t1 count\nGeneric Name\tSmartphone   <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b9b0a973-3e86-4b53-a60c-65e46e9afb07.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 1\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/2ae956be-4114-4f72-b2aa-568cbb0e961d.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 2\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/32ac1299-1890-4599-8dfc-01e445acf80e.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 3\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/10f90616-4511-469f-a108-648b05dcc4dd.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 4\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b6779138-ecaf-4792-8c49-8dcf3ff0a023.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 5\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/8a819e67-dcd3-4632-92ba-1a06f2877fa7.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 6\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/f3d484c2-fc4e-42bf-8772-6d5248330018.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 7\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/325df036-3e95-4bad-a704-babaecc8717a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 8\">",
      "images": "/uploads/uploads/171544470629120240511162506",
      "images1": "/uploads/uploads/171544470629120240511162506",
      "images2": "/uploads/uploads/171544470693320240511162506",
      "images3": "/uploads/uploads/171544470612620240511162506",
      "images4": "/uploads/uploads/171544470629220240511162506",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c6724c9"
      },
      "Title": "Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White with Chrome Deco Strip, GLS18I3FWAGC)",
      "color": "White",
      "size": "1.5 Ton",
      "storage": "",
      "selling_price": "449.89",
      "mrp": "37999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White with Chrome Deco Strip, GLS18I3FWAGC)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">AC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 Ton</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹37999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹449.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7634</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "Lloyd Split AC with Inverter Compressor: AC with variable speed compressor which automatically adjusts power depending on room temperature & heat load. Convertible / adjustable with 5 cooling modes through remote control to operate in different tonnages for different cooling needs (40% to 100% capacity);Capacity: 1.5 ton suitable for medium size rooms up to 160 square feet\nEnergy Rating: 3 Star, Annual Energy Consumption: 956.79, ISEER Value: 3.84, please refer to energy label on the product page;Manufacturer Warranty: 1 Year on the product, 5 Years on Component (including PCB) and 10 Years on the Compressor, please refer to company website for further details; Blue Fins Evaporator Coils: Corrosion Resistance Coated Blue Fins Evaporator Coils Ensures better cooling performance, require low maintenance and enhances durability of the product;Key Features: Cools even at Ambient temperature of 52°C with 2 Way Air Swing, Stabilizer Free Operation within 140 - 280 voltage range; Hidden LED Display; Noise Level: IDU - 32 (DB)\nSpecial Features: 5 in 1 Convertible AC that Cools even @ 52°C temperature, Clean Air Filter + PM 2.5 Air Filter, 4m Long Air Throw, Turbo Cool, Low Gas Detection, Clean Filter Indication, Installation Check, Auto Restart on power restoration;Refrigerant: R32 Refrigerant has been used which is environment friendly and has No Ozone Depletion Potential and Low Global Warming Potential\nIDU Dimension (L x B x H) in cm: 87.0 x 21.7 x 30.0 having 9.6 kg net weight and ODU Dimension (L x B x H) in cm: 87.0 x 36.5 x 56.0 having 27.2 kg net weight;Included in the Box: 1 Indoor Unit, Remote & Batteries, User Manual, Drain Pipe, Installation Accessory Kit, Connecting Wire and 1 Outdoor Unit with 3 meter Copper Installation Pipe\nForm Factor: Mini-Split   <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/0d5806ad-247c-4c10-8112-96a0fc7fd7d0.__CR0,0,300,300_PT0_SX300_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 1\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/ebd9b91f-f528-4f92-96c2-ec7f2770de61.__CR0,0,300,300_PT0_SX300_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 2\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/32f67aac-159b-45a5-b5fe-e14c1e503b1d.__CR0,0,300,300_PT0_SX300_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 3\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/1f0851e1-7d8a-4051-a35a-02904116aa51.__CR0,0,300,300_PT0_SX300_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 4\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/8af739cc-c5b6-4375-bd78-66ed46cc3f08.__CR0,0,300,300_PT0_SX300_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 5\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/4bdadda6-fd02-4c24-9357-be41946cc2a5.__CR0,0,300,300_PT0_SX300_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 6\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/4d16cb4f-a675-4b4f-9d93-58e7f0cbc5de.__CR0,0,300,300_PT0_SX300_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 7\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/ac052972-c5a2-4bf4-af7d-7a2d5de44458.__CR0,0,300,300_PT0_SX300_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 8\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/5fe07e26-c07f-47b8-8b23-16793bf0be4c.__CR0,0,300,300_PT0_SX300_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 9\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/c46af8d6-bcc9-465e-aaaf-22cdb319ed3e.__CR0,0,300,300_PT0_SX300_V1___.jpg\" style=\"width: 100%;\" alt=\"Image 10\">",
      "images": "/uploads/uploads/171544634019520240511165220",
      "images1": "/uploads/uploads/171544634019520240511165220",
      "images2": "/uploads/uploads/171544634088820240511165220",
      "images3": "/uploads/uploads/171544634043320240511165220",
      "images4": "/uploads/uploads/171544634073620240511165220",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cda17cd"
      },
      "Title": "IFB 24 L Solo Microwave Oven (24PM2S, Silver, 69 Indian and Continental Auto Cook Recipes)",
      "color": "Black",
      "size": "24L",
      "storage": "",
      "selling_price": "429.99",
      "mrp": "6499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">IFB 24 L Solo Microwave Oven (24PM2S, Silver, 69 Indian and Continental Auto Cook Recipes)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Microwave Oven</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">24L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹429.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6161</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "24L Capacity: Suitable for families with 5 to 6 members\nSolo: Can be used for Reheating, Melting and Cooking\nIFB offer a super warranty 1 year on Microwave Oven & 3 years on magnetron & cavity\nControl: Touch Key Pad (Membrane) is sensitive to touch and easy to clean\nMulti Stage Cooking, Food Defrost,Delay Start, Daily Essentials, Quick Reheat, 30 Seconds Express Cook, Cup Meals, Chef secret, pizza reheat, beverages, One Pot Meal, Dessert Delight,\nChild Safety Lock: Ensures complete safety especially for homes with young children\nSpecial features: 69 Auto-cook menus, Disinfect, Deodorize, , Power Save, Overheating Protection, Sensor Malfunction Protection\nIncluded in the Box : Microwave Oven, Unit Glass Turntable, Wire Rack, Quick Guide Label, Warranty Card  <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/1d24ed06-20da-4f29-be19-919ee6b2d1d1.__CR0,0,970,600_PT0_SX970_V1___.png\" style=\"width: 100%;\" alt=\"Image 1\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/427ceaee-f28d-46a7-bb59-90fa97b2cc88.__CR0,0,300,300_PT0_SX300_V1___.png\" style=\"width: 100%;\" alt=\"Image 2\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/aff563ca-5ba6-47cd-b789-427c6108f636.__CR0,0,300,300_PT0_SX300_V1___.png\" style=\"width: 100%;\" alt=\"Image 3\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/dbd64a28-3aae-42ce-b472-3632a5be26f0.__CR0,0,300,300_PT0_SX300_V1___.png\" style=\"width: 100%;\" alt=\"Image 4\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/52dc0233-a4dc-443b-812a-6e9913510b18.__CR0,0,970,300_PT0_SX970_V1___.png\" style=\"width: 100%;\" alt=\"Image 5\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/72908600-7a55-4245-90d0-576cc1659c36.__CR0,0,300,300_PT0_SX300_V1___.png\" style=\"width: 100%;\" alt=\"Image 6\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/19f62ea6-6ae1-45aa-9361-0949dc951a6c.__CR0,0,300,300_PT0_SX300_V1___.png\" style=\"width: 100%;\" alt=\"Image 7\">\n  <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/5fce2def-fea2-4515-8ffb-b71f1937b353.__CR0,0,300,300_PT0_SX300_V1___.png\" style=\"width: 100%;\" alt=\"Image 8\">",
      "images": "/uploads/uploads/171544762169520240511171341",
      "images1": "/uploads/uploads/171544762169520240511171341",
      "images2": "/uploads/uploads/171544762132320240511171341",
      "images3": "/uploads/uploads/171544762159420240511171341",
      "images4": "/uploads/uploads/171544762151620240511171341",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c953fc5"
      },
      "Title": "Whirlpool 260 L (253D) Frost Free Triple-Door Refrigerator (FP 253D PROTTON ROY GERMAN STEEL(Z)",
      "color": "German Steel",
      "size": "260 L",
      "storage": "",
      "selling_price": "499.49",
      "mrp": "26299",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Whirlpool 260 L (253D) Frost Free Triple-Door Refrigerator (FP 253D PROTTON ROY GERMAN STEEL(Z)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Refrigerator</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">German Steel</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">260 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹26299</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6368</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "Frost Free Multi-Door Refrigerator: Energy Efficient\nCapacity: 235 litres suitable for a medium sized family\nEnergery Efficent : As unbelievable as it is, the all new Protton world series consumes lesser energy than a CFL*, making it one of the most energy efficient refrigerator in its class. *T&C Apply. As compared to a 60 watt CFL\nSpecial Feature - Stabilizer-free operations even in high voltage fluctuations between (160-300V)\nStorage & Interior Description : | Cooling Type ; Frost Free | Display Type ; Thermostat | Shelf Material ; Toughened Glass | Compressor Type ; Reciprocatory\nWarranty : 1 year on product, 10 years on compressor\nBrand-Specific Features : ZEOLITE TECHNOLOGY, MOISTURE RETENTION TECHNOLOGY, FRUIT CRISPER, DELI ZONE, 32 L LARGE STORAGE, AIR BOOSTER, ENERGY EFFICIENT\nItem Dimensions & Weight : 64D x 56W x 161.1H Centimeters | Weight : 52Kg\nIn Box: 1 Refrigerator, Manual, Warranty Card   <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/aebdfa41-efd6-41ca-9ba9-6f6f276928fe.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/fac43694-7c87-4b72-8bfb-c810edc7c51a.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/fac43694-7c87-4b72-8bfb-c810edc7c51a.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 3\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/728e52fc-3549-4e0a-ba2a-1f6adfbf1a26.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 4\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/728e52fc-3549-4e0a-ba2a-1f6adfbf1a26.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 5\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/292b3a85-a43c-487f-bab7-26522aeb75aa.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 6\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/14560daa-d9be-488d-9a38-ccb228ea2993.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 7\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/14560daa-d9be-488d-9a38-ccb228ea2993.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 8\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171544969919020240511174819",
      "images1": "/uploads/uploads/171544969919020240511174819",
      "images2": "/uploads/uploads/171544969914120240511174819",
      "images3": "/uploads/uploads/171544969913220240511174819",
      "images4": "/uploads/uploads/171544969954620240511174819",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cf01392"
      },
      "Title": "Women Pink Messenger Bag - Extra Spacious (Pack of: 3)",
      "color": "Light Pink",
      "size": "Free Size",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "1499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Women Pink Messenger Bag - Extra Spacious (Pack of: 3)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Purse</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Light Pink</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Free Size</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8540</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "WATERPROOF POLYESTER FABRIC: Made of 100% waterproof polyester fabric, this bag ensures that your belongings remain dry and protected even in challenging weather conditions. It's a reliable choice for your everyday adventures.\r\nSUPERIOR PROTECTION: The bag features full padding throughout its design, offering overall protection for your valuables. This thoughtful construction minimizes the risk of damage from accidental bumps or impacts, keeping your items safe and secure.\r\nINCREDIBLY SPACIOUS: With two main zip compartments easily segregate your belongings, allowing for quick and hassle-free access. The bag features multiple inside pockets and sections, designed for convenience to organize your belongings systematically.\r\nTRAVEL FRIENDLY: The bag comes with a detachable shoulder strap, providing flexibility in carrying options. Equipped with trolley straps at the back. Enables easy attachment to luggage trolleys, streamlining a hassle-free travel experience.\r\nWIDE COMPATIBILITY: With dimensions of 15 inches x 11.5 inches x 4 inches (W x H x D) and a generous volume of 11 litres, this bag is designed to accommodate up to a 15.6-inch laptop. It's the perfect companion for your daily commute.",
      "images": "/uploads/uploads/171551453971020240512114859",
      "images1": "/uploads/uploads/171551453971020240512114859",
      "images2": "/uploads/uploads/171551453977720240512114859",
      "images3": "/uploads/uploads/171551453990720240512114859",
      "images4": "/uploads/uploads/171551453949520240512114859",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c0a47d4"
      },
      "Title": "Hawkins Contura Black XT Induction Compatible Inner Lid Aluminium Pressure Cooker, 3 Litre, Black (CXT30)",
      "color": "Black",
      "size": "3L,5L",
      "storage": "",
      "selling_price": "311.79",
      "mrp": "3699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Hawkins Contura Black XT Induction Compatible Inner Lid Aluminium Pressure Cooker, 3 Litre, Black (CXT30)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Home Appliance</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">3L,5L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹311.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8962</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "Ideal for 3 or 4 Persons\nXtra Thick body - 4.88 mm thick base - Base stays flat, will not bulge\nCooks quickly and evenly\nBase stays flat, will not bulge\nHeats evenly all over; retains heat well   <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/98d4db10-3738-4d65-a7a8-178128599bf3._CR0,0,1000,1000_PT0_SX300__.jpg\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/831b0810-67ae-43b8-90cd-a683edeeaf4f._CR0,0,1000,1000_PT0_SX300__.jpg\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/dc5174f9-679b-4487-a72e-92ee3e895321._CR0,0,1000,1000_PT0_SX300__.jpg\" alt=\"Image 3\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/a5e02277-698a-422a-8d85-b9c6585c81d1._CR0,0,1000,1000_PT0_SX300__.jpg\" alt=\"Image 4\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/cd5dcdb4-59df-428a-8b8f-588679b2efbe._CR0,0,1000,1000_PT0_SX300__.jpg\" alt=\"Image 5\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/0be90b79-d8f0-43b6-b237-80009b8e6e37._CR0,0,1000,1000_PT0_SX300__.jpg\" alt=\"Image 6\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171551544782920240512120407",
      "images1": "/uploads/uploads/171551544782920240512120407",
      "images2": "/uploads/uploads/171551544766420240512120407",
      "images3": "/uploads/uploads/171551544770620240512120407",
      "images4": "/uploads/uploads/171551544764320240512120407",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c0f736d"
      },
      "Title": "Philips HR3705/10 300 Watt Lightweight Hand Mixer, Blender with 5 speed control settings, stainless steel accessories and 2 years warranty(black color)",
      "color": "Black",
      "size": "300 Watt",
      "storage": "",
      "selling_price": "309.49",
      "mrp": "2499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Philips HR3705/10 300 Watt Lightweight Hand Mixer, Blender with 5 speed control settings, stainless steel accessories and 2 years warranty(black color)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Hand Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">300 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹309.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6427</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "\nBrand\tPhilips\nColour\tBlack\nBlade Material\tStainless Steel\nSpecial Feature\tLightweight\nCapacity\t2 Kilograms\nControls Type\tStainless Steel\nItem Weight\t1080 Grams\nModel Name\tHR3705/10\nIs Dishwasher Safe\tNo\nSee more\n\tMaterial\nStainless Steel\n\tNumber of Speeds\n5\n\tVoltage\n300 Volts\n\tWattage\n300 Watts\nAbout this item\nPower: 300 watts; Operating voltage: 220-240 volts\nTwo pairs of strip beaters, plus dough hooks, Cord length: 1.2 m\n5 speeds plus turbo for a variety of recipes\n1.2m cord for longer reach\nIncludes: Hand mixer, Stainless steel dough hooks and Stainless steel strip beaters\nWarranty: 2 year warranty from the date of purchase  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/bb60e5c4-b842-4dca-85b9-39746728d2dd.__CR0,0,4042,2500_PT0_SX970_V1___.jpg\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/5ee218c2-6de0-4f70-80d4-ff8a9d77d68b.__CR0,0,4042,2500_PT0_SX970_V1___.jpg\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/1ccc20e4-aae0-49fe-8c30-0a923372e7be.__CR0,0,4042,2500_PT0_SX970_V1___.jpg\" alt=\"Image 3\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/106aac9a-5cb6-4f9b-b727-8abf0af82721.__CR0,0,4042,2500_PT0_SX970_V1___.jpg\" alt=\"Image 4\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/5b783cf0-ef19-43f9-bcbd-c5edc112d124.__CR0,0,4042,2500_PT0_SX970_V1___.jpg\" alt=\"Image 5\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171551584259720240512121042",
      "images1": "/uploads/uploads/171551584259720240512121042",
      "images2": "/uploads/uploads/171551584296120240512121042",
      "images3": "/uploads/uploads/171551584236920240512121042",
      "images4": "/uploads/uploads/171551584283720240512121042",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cb27298"
      },
      "Title": "Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023",
      "color": "WHITE",
      "size": "1.5 TON",
      "storage": "",
      "selling_price": "499.89",
      "mrp": "30000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹30000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8454</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603609022320240518124130",
      "images1": "/uploads/uploads/171603609022320240518124130",
      "images2": "/uploads/uploads/171603609043320240518124130",
      "images3": "/uploads/uploads/171603609018520240518124130",
      "images4": "/uploads/uploads/171603609022320240518124130",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cfe3c85"
      },
      "Title": "Symphony Diet 12T Personal Tower Air Cooler for Home with Honeycomb Pad, Powerful Blower, i-Pure Tec",
      "color": "WHITE",
      "size": ".",
      "storage": "",
      "selling_price": "399.79",
      "mrp": "15000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Symphony Diet 12T Personal Tower Air Cooler for Home with Honeycomb Pad, Powerful Blower, i-Pure Tec</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6788</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603623610720240518124356",
      "images1": "/uploads/uploads/171603623610720240518124356",
      "images2": "/uploads/uploads/171603623659920240518124356",
      "images3": "/uploads/uploads/171603623667120240518124356",
      "images4": "/uploads/uploads/171603623610720240518124356",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce6111a"
      },
      "Title": "Noise Buds Combat Z",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "4900",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Noise Buds Combat Z</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4900</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7892</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603623841520240518124358",
      "images1": "/uploads/uploads/171603623841520240518124358",
      "images2": "/uploads/uploads/171603623850920240518124358",
      "images3": "/uploads/uploads/171603623858420240518124358",
      "images4": "/uploads/uploads/171603623813420240518124358",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce7a3c3"
      },
      "Title": "Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023",
      "color": "WHITE",
      "size": "1.5 TON",
      "storage": "",
      "selling_price": "589.79",
      "mrp": "32000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹32000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹589.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7855</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603632297320240518124522",
      "images1": "/uploads/uploads/171603632297320240518124522",
      "images2": "/uploads/uploads/171603632257420240518124522",
      "images3": "/uploads/uploads/171603632224520240518124522",
      "images4": "/uploads/uploads/171603632297320240518124522",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c2c3142"
      },
      "Title": "OnePlus Buds 3 TWS",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "4900",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">OnePlus Buds 3 TWS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4900</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6228</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603633965120240518124539",
      "images1": "/uploads/uploads/171603633965120240518124539",
      "images2": "/uploads/uploads/171603633973020240518124539",
      "images3": "/uploads/uploads/171603633969720240518124539",
      "images4": "/uploads/uploads/171603633912520240518124539",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c18f49d"
      },
      "Title": "Crompton Ozone Desert Air Cooler- 55L; with Everlast Pump, Auto Fill, 4-Way Air Deflection and High",
      "color": "WHITE",
      "size": "55 LITRE",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "15000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Crompton Ozone Desert Air Cooler- 55L; with Everlast Pump, Auto Fill, 4-Way Air Deflection and High</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">55 LITRE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8643</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603638785720240518124627",
      "images1": "/uploads/uploads/171603638785720240518124627",
      "images2": "/uploads/uploads/171603638763720240518124627",
      "images3": "/uploads/uploads/171603638717620240518124627",
      "images4": "/uploads/uploads/171603638757220240518124627",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce8e292"
      },
      "Title": "Atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote | Upto 65% Energy Savi",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "339.49",
      "mrp": "3699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote | Upto 65% Energy Savi</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹339.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6160</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603642452920240518124704",
      "images1": "/uploads/uploads/171603642452920240518124704",
      "images2": "/uploads/uploads/171603642452920240518124704",
      "images3": "/uploads/uploads/171603642452920240518124704",
      "images4": "/uploads/uploads/171603642452920240518124704",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cdc95ff"
      },
      "Title": "Hitachi 1 Ton Class 3 Star, ice Clean, Xpandable+, Inverter Split AC with 5 Year Comprehensive Warra",
      "color": "WHITE",
      "size": "1.0 TON",
      "storage": "",
      "selling_price": "499.79",
      "mrp": "30000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Hitachi 1 Ton Class 3 Star, ice Clean, Xpandable+, Inverter Split AC with 5 Year Comprehensive Warra</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.0 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹30000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6253</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603644021320240518124720",
      "images1": "/uploads/uploads/171603644021320240518124720",
      "images2": "/uploads/uploads/171603644059120240518124720",
      "images3": "/uploads/uploads/171603644072120240518124720",
      "images4": "/uploads/uploads/171603644021320240518124720",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c69f812"
      },
      "Title": "atomberg Renesa Enzel 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote | Upto 65% Energ",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "339.99",
      "mrp": "3699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">atomberg Renesa Enzel 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote | Upto 65% Energ</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹339.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6378</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603648885620240518124808",
      "images1": "/uploads/uploads/171603648885620240518124808",
      "images2": "/uploads/uploads/171603648885620240518124808",
      "images3": "/uploads/uploads/171603648885620240518124808",
      "images4": "/uploads/uploads/171603648885620240518124808",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cc1dab4"
      },
      "Title": "MILTON Ernesto Inner Stainless Steel Casserole Set of 3 (420 ml, 850 ml, 1.43 litres), Red | Easy to",
      "color": "DEFAULT",
      "size": "3",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "2000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">MILTON Ernesto Inner Stainless Steel Casserole Set of 3 (420 ml, 850 ml, 1.43 litres), Red | Easy to</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">3</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7908</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603652193620240518124841",
      "images1": "/uploads/uploads/171603652193620240518124841",
      "images2": "/uploads/uploads/171603652118320240518124841",
      "images3": "/uploads/uploads/171603652199620240518124841",
      "images4": "/uploads/uploads/171603652193620240518124841",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c486e9f"
      },
      "Title": "Havells 1200mm Stealth Prime BLDC BLDC Motor Ceiling Fan | Most Silent & Premium, 5 Star with RF Rem",
      "color": "DEFAULT",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "8000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Havells 1200mm Stealth Prime BLDC BLDC Motor Ceiling Fan | Most Silent & Premium, 5 Star with RF Rem</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8852</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603659243220240518124952",
      "images1": "/uploads/uploads/171603659243220240518124952",
      "images2": "/uploads/uploads/171603659243220240518124952",
      "images3": "/uploads/uploads/171603659243220240518124952",
      "images4": "/uploads/uploads/171603659243220240518124952",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c341b15"
      },
      "Title": "ACTIVA Gracia 1200 MM (28 Watts) BLDC Motor Fan With LED Light |Remote| 3 Blade Energy Saving Ceilin",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "349.79",
      "mrp": "2499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ACTIVA Gracia 1200 MM (28 Watts) BLDC Motor Fan With LED Light |Remote| 3 Blade Energy Saving Ceilin</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7020</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603662793620240518125027",
      "images1": "/uploads/uploads/171603662793620240518125027",
      "images2": "/uploads/uploads/171603662736920240518125027",
      "images3": "/uploads/uploads/171603662773420240518125027",
      "images4": "/uploads/uploads/171603662782820240518125027",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c7a2aa1"
      },
      "Title": "VINOD 25 Pcs Stainless Steel Cookware Set Induction Bottom Non-Stick Coated Cookware Set (Stainless",
      "color": "DEFAULT",
      "size": "25 pcs",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">VINOD 25 Pcs Stainless Steel Cookware Set Induction Bottom Non-Stick Coated Cookware Set (Stainless</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">25 pcs</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8714</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603667094620240518125110",
      "images1": "/uploads/uploads/171603667094620240518125110",
      "images2": "/uploads/uploads/171603667074420240518125110",
      "images3": "/uploads/uploads/171603667080020240518125110",
      "images4": "/uploads/uploads/171603667060420240518125110",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c6f71f3"
      },
      "Title": "SUPER TOY Wireless Speaker with Colorful Light",
      "color": "MIX",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "3599",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">SUPER TOY Wireless Speaker with Colorful Light</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">MIX</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3599</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6385</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603672429520240518125204",
      "images1": "/uploads/uploads/171603672429520240518125204",
      "images2": "/uploads/uploads/171603672429520240518125204",
      "images3": "/uploads/uploads/171603672429520240518125204",
      "images4": "/uploads/uploads/171603672429520240518125204",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c7d0aae"
      },
      "Title": "Havells 1200mm Stealth Air BLDC Motor Ceiling Fan",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "389.89",
      "mrp": "4900",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Havells 1200mm Stealth Air BLDC Motor Ceiling Fan</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4900</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6902</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603678292820240518125302",
      "images1": "/uploads/uploads/171603678292820240518125302",
      "images2": "/uploads/uploads/171603678279520240518125302",
      "images3": "/uploads/uploads/171603678268320240518125302",
      "images4": "/uploads/uploads/171603678266420240518125302",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c33f87c"
      },
      "Title": "IBELL 490GH HOB 3 Burner Glass Top Gas Stove with Auto Ignition, Toughened Glass",
      "color": "Black",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "379.89",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">IBELL 490GH HOB 3 Burner Glass Top Gas Stove with Auto Ignition, Toughened Glass</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7671</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603678779220240518125307",
      "images1": "/uploads/uploads/171603678779220240518125307",
      "images2": "/uploads/uploads/171603678779220240518125307",
      "images3": "/uploads/uploads/171603678779220240518125307",
      "images4": "/uploads/uploads/171603678779220240518125307",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c50685d"
      },
      "Title": "Crompton Optimus Desert Air Cooler- 65L; with 18?Fan, Everlast Pump, Large & Easy Clean Ice Chamber,",
      "color": "WHITE",
      "size": "65 L",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "13999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Crompton Optimus Desert Air Cooler- 65L; with 18?Fan, Everlast Pump, Large & Easy Clean Ice Chamber,</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">65 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹13999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8637</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603685276420240518125412",
      "images1": "/uploads/uploads/171603685276420240518125412",
      "images2": "/uploads/uploads/171603685275620240518125412",
      "images3": "/uploads/uploads/171603685295620240518125412",
      "images4": "/uploads/uploads/171603685276420240518125412",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c0127f4"
      },
      "Title": "Orient Electric Ultimo 50L Desert Air Cooler with Densenest Honeycomb pads, Ice chamber & High Air D",
      "color": "Black",
      "size": "50 L",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Orient Electric Ultimo 50L Desert Air Cooler with Densenest Honeycomb pads, Ice chamber & High Air D</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">50 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8066</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603689723020240518125457",
      "images1": "/uploads/uploads/171603689723020240518125457",
      "images2": "/uploads/uploads/171603689723020240518125457",
      "images3": "/uploads/uploads/171603689723020240518125457",
      "images4": "/uploads/uploads/171603689723020240518125457",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c9694a6"
      },
      "Title": "Maharaja Whiteline Rambo Ac-303 65 L Air Cooler, Standard, Grey And Black",
      "color": "WHITE",
      "size": "65 L",
      "storage": "",
      "selling_price": "379.89",
      "mrp": "13999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Maharaja Whiteline Rambo Ac-303 65 L Air Cooler, Standard, Grey And Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">65 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹13999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6532</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603695970520240518125559",
      "images1": "/uploads/uploads/171603695970520240518125559",
      "images2": "/uploads/uploads/171603695991020240518125559",
      "images3": "/uploads/uploads/171603695964420240518125559",
      "images4": "/uploads/uploads/171603695970520240518125559",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c31bb63"
      },
      "Title": "32L Wi-Fi enabled Bespoke Convection Microwave Oven, MC32B7382QC",
      "color": "Black",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "349.49",
      "mrp": "28999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">32L Wi-Fi enabled Bespoke Convection Microwave Oven, MC32B7382QC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹28999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6521</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603708152220240518125801",
      "images1": "/uploads/uploads/171603708152220240518125801",
      "images2": "/uploads/uploads/171603708118220240518125801",
      "images3": "/uploads/uploads/171603708152220240518125801",
      "images4": "/uploads/uploads/171603708152220240518125801",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c2ad472"
      },
      "Title": "Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 256GB Storage)",
      "color": "Graphite,Mint,Phanton,Cream",
      "size": "12GB/256GB",
      "storage": "",
      "selling_price": "349.49",
      "mrp": "167000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 256GB Storage)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Graphite,Mint,Phanton,Cream</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12GB/256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹167000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8121</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603708680820240518125806",
      "images1": "/uploads/uploads/171603708680820240518125806",
      "images2": "/uploads/uploads/171603708671920240518125806",
      "images3": "/uploads/uploads/171603708673620240518125806",
      "images4": "/uploads/uploads/171603708641320240518125806",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c58aef6"
      },
      "Title": "32L, Masala & SunDry? Convection Microwave Oven, MC32K7056CR",
      "color": "Black",
      "size": "32 L",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "23999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">32L, Masala & SunDry? Convection Microwave Oven, MC32K7056CR</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">32 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹23999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8615</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603713099620240518125850",
      "images1": "/uploads/uploads/171603713099620240518125850",
      "images2": "/uploads/uploads/171603713020020240518125850",
      "images3": "/uploads/uploads/171603713099620240518125850",
      "images4": "/uploads/uploads/171603713099620240518125850",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c36e8c0"
      },
      "Title": "Bespoke Jet Pet",
      "color": "DEFAULT",
      "size": ".",
      "storage": "",
      "selling_price": "289.89",
      "mrp": "17999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Bespoke Jet Pet</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹17999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6602</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603718554620240518125945",
      "images1": "/uploads/uploads/171603718554620240518125945",
      "images2": "/uploads/uploads/171603718521020240518125945",
      "images3": "/uploads/uploads/171603718554620240518125945",
      "images4": "/uploads/uploads/171603718554620240518125945",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c5cd646"
      },
      "Title": "Samsung Galaxy Z Flip3 5G (Cream, 8GB RAM, 128GB Storage) with No Cost EMI",
      "color": "Black,Cream",
      "size": "8GB/128GB",
      "storage": "",
      "selling_price": "349.49",
      "mrp": "37999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy Z Flip3 5G (Cream, 8GB RAM, 128GB Storage) with No Cost EMI</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black,Cream</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8GB/128GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹37999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8899</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603725031020240518130050",
      "images1": "/uploads/uploads/171603725031020240518130050",
      "images2": "/uploads/uploads/171603725029720240518130050",
      "images3": "/uploads/uploads/171603725061620240518130050",
      "images4": "/uploads/uploads/171603725073120240518130050",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cced638"
      },
      "Title": "Samsung Jet 70 Cordless Stick Vacuum Cleaner with 2-in-1 charging station",
      "color": "DEFAULT",
      "size": "5 FEET",
      "storage": "",
      "selling_price": "278.49",
      "mrp": "15999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Jet 70 Cordless Stick Vacuum Cleaner with 2-in-1 charging station</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">5 FEET</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹278.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7675</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603729472020240518130134",
      "images1": "/uploads/uploads/171603729472020240518130134",
      "images2": "/uploads/uploads/171603729411220240518130134",
      "images3": "/uploads/uploads/171603729453120240518130134",
      "images4": "/uploads/uploads/171603729472020240518130134",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c86a26b"
      },
      "Title": "YNUR | INVERTER AC | 5 STAR | 1 TON",
      "color": "WHITE",
      "size": "1.0 TON",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "28999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">YNUR | INVERTER AC | 5 STAR | 1 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.0 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹28999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8738</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603735482420240518130234",
      "images1": "/uploads/uploads/171603735482420240518130234",
      "images2": "/uploads/uploads/171603735442720240518130234",
      "images3": "/uploads/uploads/171603735453020240518130234",
      "images4": "/uploads/uploads/171603735482420240518130234",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c36d75c"
      },
      "Title": "DCUHDAVS | INVERTER AC | 5 STAR | 1.5 TON",
      "color": "WHITE",
      "size": "1.5 TON",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "29999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">DCUHDAVS | INVERTER AC | 5 STAR | 1.5 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹29999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6945</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603740678920240518130326",
      "images1": "/uploads/uploads/171603740678920240518130326",
      "images2": "/uploads/uploads/171603740660920240518130326",
      "images3": "/uploads/uploads/171603740687920240518130326",
      "images4": "/uploads/uploads/171603740678920240518130326",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cf9112d"
      },
      "Title": "MAXIMA (OA50MMA) | WINDOW COOLER | 50 LTRS",
      "color": "WHITE",
      "size": "50 L",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">MAXIMA (OA50MMA) | WINDOW COOLER | 50 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">50 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8318</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603746164920240518130421",
      "images1": "/uploads/uploads/171603746164920240518130421",
      "images2": "/uploads/uploads/171603746181820240518130421",
      "images3": "/uploads/uploads/171603746164920240518130421",
      "images4": "/uploads/uploads/171603746164920240518130421",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c0e550d"
      },
      "Title": "Apple iPhone 13 (256GB) - Pink",
      "color": "Star;ight,Pink,Blue,Green",
      "size": "128GB,256GB",
      "storage": "",
      "selling_price": "399.79",
      "mrp": "67800",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple iPhone 13 (256GB) - Pink</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Star;ight,Pink,Blue,Green</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">128GB,256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹67800</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8552</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603751649420240518130516",
      "images1": "/uploads/uploads/171603751649420240518130516",
      "images2": "/uploads/uploads/171603751699320240518130516",
      "images3": "/uploads/uploads/171603751667620240518130516",
      "images4": "/uploads/uploads/171603751690820240518130516",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c51c24a"
      },
      "Title": "MAGNA (DA60EMA) | DESERT COOLER | 60 LTRS",
      "color": "DEFAULT",
      "size": "60 L",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "17999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">MAGNA (DA60EMA) | DESERT COOLER | 60 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">60 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹17999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6621</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603754565720240518130545",
      "images1": "/uploads/uploads/171603754565720240518130545",
      "images2": "/uploads/uploads/171603754546820240518130545",
      "images3": "/uploads/uploads/171603754585320240518130545",
      "images4": "/uploads/uploads/171603754565720240518130545",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cda1b2e"
      },
      "Title": "MAXIMA (DA55PMA) | DESERT COOLER | 55 LTRS",
      "color": "WHITE",
      "size": "55 LITRE",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">MAXIMA (DA55PMA) | DESERT COOLER | 55 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">55 LITRE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6845</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603760196520240518130641",
      "images1": "/uploads/uploads/171603760196520240518130641",
      "images2": "/uploads/uploads/171603760176820240518130641",
      "images3": "/uploads/uploads/171603760112120240518130641",
      "images4": "/uploads/uploads/171603760196520240518130641",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cc6eab5"
      },
      "Title": "Mivi Fort Q200 Soundbar with 200W Surround Sound, 2.1 Channel soundbar with",
      "color": "Default",
      "size": "200 Watt",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "49000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Mivi Fort Q200 Soundbar with 200W Surround Sound, 2.1 Channel soundbar with</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">200 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹49000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7469</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603761567820240518130655",
      "images1": "/uploads/uploads/171603761567820240518130655",
      "images2": "/uploads/uploads/171603761595720240518130655",
      "images3": "/uploads/uploads/171603761522020240518130655",
      "images4": "/uploads/uploads/171603761567820240518130655",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c16c565"
      },
      "Title": "AURA DUO (DA80PMC) | DESERT COOLER | 80 LTRS",
      "color": "WHITE",
      "size": "80 L",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "15999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">AURA DUO (DA80PMC) | DESERT COOLER | 80 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">80 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8306</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603764641520240518130726",
      "images1": "/uploads/uploads/171603764641520240518130726",
      "images2": "/uploads/uploads/171603764685920240518130726",
      "images3": "/uploads/uploads/171603764641520240518130726",
      "images4": "/uploads/uploads/171603764641520240518130726",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c1622d5"
      },
      "Title": "CELESTA (DA35LMA) | DESERT COOLER | 35 LTRS",
      "color": "DEFAULT",
      "size": "35 L",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "15999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">CELESTA (DA35LMA) | DESERT COOLER | 35 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">35 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6601</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603769191220240518130811",
      "images1": "/uploads/uploads/171603769191220240518130811",
      "images2": "/uploads/uploads/171603769158620240518130811",
      "images3": "/uploads/uploads/171603769191220240518130811",
      "images4": "/uploads/uploads/171603769191220240518130811",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c05774e"
      },
      "Title": "ZEBRONICS ZEB-Juke bar 9530WS Pro Dolby 5.1 340 W Bluetooth Soundbar (Black, 5.1 Channel)",
      "color": "Default",
      "size": "340 Watt",
      "storage": "",
      "selling_price": "249.49",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ZEBRONICS ZEB-Juke bar 9530WS Pro Dolby 5.1 340 W Bluetooth Soundbar (Black, 5.1 Channel)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">340 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8676</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603773547420240518130855",
      "images1": "/uploads/uploads/171603773547420240518130855",
      "images2": "/uploads/uploads/171603773578920240518130855",
      "images3": "/uploads/uploads/171603773539920240518130855",
      "images4": "/uploads/uploads/171603773547420240518130855",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c0af1a0"
      },
      "Title": "ULTIMA (DA35MMA) | DESERT COOLER | 35 LTRS",
      "color": "WHITE",
      "size": "35 L",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "15999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ULTIMA (DA35MMA) | DESERT COOLER | 35 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">35 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6430</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603774327320240518130903",
      "images1": "/uploads/uploads/171603774327320240518130903",
      "images2": "/uploads/uploads/171603774338420240518130903",
      "images3": "/uploads/uploads/171603774327320240518130903",
      "images4": "/uploads/uploads/171603774327320240518130903",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c3931ac"
      },
      "Title": "AURA DUO (DA60PMC)| DESERT COOLER | 60 LTRS",
      "color": "WHITE",
      "size": "60 L",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">AURA DUO (DA60PMC)| DESERT COOLER | 60 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">60 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8094</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603777564720240518130935",
      "images1": "/uploads/uploads/171603777564720240518130935",
      "images2": "/uploads/uploads/171603777564720240518130935",
      "images3": "/uploads/uploads/171603777564720240518130935",
      "images4": "/uploads/uploads/171603777564720240518130935",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce4b97a"
      },
      "Title": "ASTRA (PA20MMA) | PERSONAL COOLER | 20 LTRS",
      "color": "WHITE",
      "size": "20 L",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ASTRA (PA20MMA) | PERSONAL COOLER | 20 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">20 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8916</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603782918520240518131029",
      "images1": "/uploads/uploads/171603782918520240518131029",
      "images2": "/uploads/uploads/171603782936220240518131029",
      "images3": "/uploads/uploads/171603782918520240518131029",
      "images4": "/uploads/uploads/171603782918520240518131029",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce0ecb1"
      },
      "Title": "ULTIMA (DA20MMA) | DESERT COOLER | 20 LTRS",
      "color": "MIX",
      "size": "20 L",
      "storage": "",
      "selling_price": "249.79",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ULTIMA (DA20MMA) | DESERT COOLER | 20 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">MIX</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">20 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6564</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603787550320240518131115",
      "images1": "/uploads/uploads/171603787550320240518131115",
      "images2": "/uploads/uploads/171603787550420240518131115",
      "images3": "/uploads/uploads/171603787561820240518131115",
      "images4": "/uploads/uploads/171603787550320240518131115",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cb151c8"
      },
      "Title": "GOVO GOSURROUND 970 | 525W Soundbar,",
      "color": "Default",
      "size": "525 Watt",
      "storage": "",
      "selling_price": "249.49",
      "mrp": "11999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">GOVO GOSURROUND 970 | 525W Soundbar,</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">525 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹11999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8482</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603788512220240518131125",
      "images1": "/uploads/uploads/171603788512220240518131125",
      "images2": "/uploads/uploads/171603788544020240518131125",
      "images3": "/uploads/uploads/171603788564920240518131125",
      "images4": "/uploads/uploads/171603788549420240518131125",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c85d45b"
      },
      "Title": "Symphony Diet 22T Portable Air Cooler For Home with Powerful Blower, Honeycomb Pads, i-Pure Technolo",
      "color": "WHITE",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "249.89",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Symphony Diet 22T Portable Air Cooler For Home with Powerful Blower, Honeycomb Pads, i-Pure Technolo</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6077</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603792561520240518131205",
      "images1": "/uploads/uploads/171603792561520240518131205",
      "images2": "/uploads/uploads/171603792546620240518131205",
      "images3": "/uploads/uploads/171603792523120240518131205",
      "images4": "/uploads/uploads/171603792561520240518131205",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c80d6a0"
      },
      "Title": "AURA DUO (DA60PEC) | DESERT COOLER | 60 LTRS",
      "color": "WHITE",
      "size": "60 L",
      "storage": "",
      "selling_price": "269.89",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">AURA DUO (DA60PEC) | DESERT COOLER | 60 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">60 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹269.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6126</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603796419620240518131244",
      "images1": "/uploads/uploads/171603796419620240518131244",
      "images2": "/uploads/uploads/171603796419620240518131244",
      "images3": "/uploads/uploads/171603796419620240518131244",
      "images4": "/uploads/uploads/171603796419620240518131244",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cc53c54"
      },
      "Title": "boAt Aavante Bar 3600 Bluetooth Soundbar w/ 500W RMS Signature Sound,5.1 Channel",
      "color": "Default",
      "size": "500 Watt",
      "storage": "",
      "selling_price": "269.49",
      "mrp": "11999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 3600 Bluetooth Soundbar w/ 500W RMS Signature Sound,5.1 Channel</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">500 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹11999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹269.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7706</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603799776020240518131317",
      "images1": "/uploads/uploads/171603799776020240518131317",
      "images2": "/uploads/uploads/171603799783420240518131317",
      "images3": "/uploads/uploads/171603799772920240518131317",
      "images4": "/uploads/uploads/171603799769220240518131317",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c803513"
      },
      "Title": "Diet 3D 20i Tower Air Cooler 20-litres with Magnetic Full Function Remote",
      "color": "Black",
      "size": "20 L",
      "storage": "",
      "selling_price": "249.79",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Diet 3D 20i Tower Air Cooler 20-litres with Magnetic Full Function Remote</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">20 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7282</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603803435020240518131354",
      "images1": "/uploads/uploads/171603803435020240518131354",
      "images2": "/uploads/uploads/171603803445420240518131354",
      "images3": "/uploads/uploads/171603803435020240518131354",
      "images4": "/uploads/uploads/171603803435020240518131354",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce6b404"
      },
      "Title": "Novamax 85 L AEON Honeycomb Cooling Evaporative Air Cooler",
      "color": "MIX",
      "size": "85 L",
      "storage": "",
      "selling_price": "289.79",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Novamax 85 L AEON Honeycomb Cooling Evaporative Air Cooler</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">MIX</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">85 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6006</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603807739920240518131437",
      "images1": "/uploads/uploads/171603807739920240518131437",
      "images2": "/uploads/uploads/171603807735420240518131437",
      "images3": "/uploads/uploads/171603807767020240518131437",
      "images4": "/uploads/uploads/171603807739920240518131437",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c70fa6b"
      },
      "Title": "ZEBRONICS Juke BAR",
      "color": "Default",
      "size": "200 Watt",
      "storage": "",
      "selling_price": "289.89",
      "mrp": "11999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ZEBRONICS Juke BAR</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">200 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹11999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6585</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603810622120240518131506",
      "images1": "/uploads/uploads/171603810622120240518131506",
      "images2": "/uploads/uploads/171603810692620240518131506",
      "images3": "/uploads/uploads/171603810664120240518131506",
      "images4": "/uploads/uploads/171603810622120240518131506",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c502953"
      },
      "Title": "AURA DUO - DA90PEC",
      "color": "MIX",
      "size": "55 LITRE",
      "storage": "",
      "selling_price": "279.89",
      "mrp": "11999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">AURA DUO - DA90PEC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">MIX</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">55 LITRE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹11999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹279.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8059</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603811665820240518131516",
      "images1": "/uploads/uploads/171603811665820240518131516",
      "images2": "/uploads/uploads/171603811682520240518131516",
      "images3": "/uploads/uploads/171603811623620240518131516",
      "images4": "/uploads/uploads/171603811665820240518131516",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c60c4ca"
      },
      "Title": "AURA NEO (DA60PMH) | DESERT COOLER | 60 LTRS",
      "color": "DEFAULT",
      "size": "60 L",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">AURA NEO (DA60PMH) | DESERT COOLER | 60 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">60 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6858</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603816269320240518131602",
      "images1": "/uploads/uploads/171603816269320240518131602",
      "images2": "/uploads/uploads/171603816246920240518131602",
      "images3": "/uploads/uploads/171603816258820240518131602",
      "images4": "/uploads/uploads/171603816269320240518131602",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c2b01d4"
      },
      "Title": "MAXIMA (DB90PMA) | DESERT COOLER | 90 LTRS",
      "color": "WHITE",
      "size": "90 L",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "15999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">MAXIMA (DB90PMA) | DESERT COOLER | 90 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">90 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6775</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603821050620240518131650",
      "images1": "/uploads/uploads/171603821050620240518131650",
      "images2": "/uploads/uploads/171603821092220240518131650",
      "images3": "/uploads/uploads/171603821084520240518131650",
      "images4": "/uploads/uploads/171603821050620240518131650",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c561ba5"
      },
      "Title": "JBL Cinema SB270 2.1",
      "color": "Default",
      "size": "200 Watt",
      "storage": "",
      "selling_price": "249.49",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">JBL Cinema SB270 2.1</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">200 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7006</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603823596120240518131715",
      "images1": "/uploads/uploads/171603823596120240518131715",
      "images2": "/uploads/uploads/171603823518020240518131715",
      "images3": "/uploads/uploads/171603823522420240518131715",
      "images4": "/uploads/uploads/171603823596820240518131715",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cd48a94"
      },
      "Title": "MAXIMA (DB75PMA) | DESERT COOLER | 75 LTRS",
      "color": "DEFAULT",
      "size": "75 L",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">MAXIMA (DB75PMA) | DESERT COOLER | 75 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">75 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6139</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603825476520240518131734",
      "images1": "/uploads/uploads/171603825476520240518131734",
      "images2": "/uploads/uploads/171603825442920240518131734",
      "images3": "/uploads/uploads/171603825489820240518131734",
      "images4": "/uploads/uploads/171603825476520240518131734",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c2c3da1"
      },
      "Title": "OnePlus Nord Buds",
      "color": "DEFAULT",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "329.89",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">OnePlus Nord Buds</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹329.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8601</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603831563820240518131835",
      "images1": "/uploads/uploads/171603831563820240518131835",
      "images2": "/uploads/uploads/171603831571320240518131835",
      "images3": "/uploads/uploads/171603831514020240518131835",
      "images4": "/uploads/uploads/171603831578620240518131835",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c5fbc20"
      },
      "Title": "High Efficiency Honeycomb Pad With Anti-Microbial Property",
      "color": "249",
      "size": "65 L",
      "storage": "",
      "selling_price": "289.89",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">High Efficiency Honeycomb Pad With Anti-Microbial Property</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">249</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">65 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6173</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603835915820240518131919",
      "images1": "/uploads/uploads/171603835915820240518131919",
      "images2": "/uploads/uploads/171603835910520240518131919",
      "images3": "/uploads/uploads/171603835995920240518131919",
      "images4": "/uploads/uploads/171603835915820240518131919",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c2680f6"
      },
      "Title": "Boult Audio Z60 Truly Wireless in Ear Earbuds",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "229.79",
      "mrp": "1299",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Boult Audio Z60 Truly Wireless in Ear Earbuds</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1299</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹229.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6875</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603841364920240518132013",
      "images1": "/uploads/uploads/171603841364920240518132013",
      "images2": "/uploads/uploads/171603841373020240518132013",
      "images3": "/uploads/uploads/171603841394620240518132013",
      "images4": "/uploads/uploads/171603841394820240518132013",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ced18ce"
      },
      "Title": "boAt Ultima Chronos with 1.96\" AMOLED",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "259.89",
      "mrp": "2799",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Ultima Chronos with 1.96\" AMOLED</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2799</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹259.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6081</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603855576120240518132235",
      "images1": "/uploads/uploads/171603855576120240518132235",
      "images2": "/uploads/uploads/171603855552820240518132235",
      "images3": "/uploads/uploads/171603855562520240518132235",
      "images4": "/uploads/uploads/171603855563320240518132235",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c3d2db3"
      },
      "Title": "Apple iPhone 11 ( 128 GB)",
      "color": "Black, Green, Yellow, Purple, RED, White",
      "size": "64 GB, 128 GB",
      "storage": "",
      "selling_price": "429.99",
      "mrp": "49999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple iPhone 11 ( 128 GB)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black, Green, Yellow, Purple, RED, White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">64 GB, 128 GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹49999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹429.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8674</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603866061320240518132420",
      "images1": "/uploads/uploads/171603866061320240518132420",
      "images2": "/uploads/uploads/171603866031920240518132420",
      "images3": "/uploads/uploads/171603866083120240518132420",
      "images4": "/uploads/uploads/171603866032720240518132420",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c7b20dc"
      },
      "Title": "atomberg Renesa Enzel 1200mm",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "279.89",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">atomberg Renesa Enzel 1200mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹279.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8077</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603866144620240518132421",
      "images1": "/uploads/uploads/171603866144620240518132421",
      "images2": "/uploads/uploads/171603866134420240518132421",
      "images3": "/uploads/uploads/171603866123420240518132421",
      "images4": "/uploads/uploads/171603866196820240518132421",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c286dd8"
      },
      "Title": "JBW Men's Phantom 1.00 ctw Diamond Chronograph",
      "color": "GOLD",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "359.89",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">JBW Men's Phantom 1.00 ctw Diamond Chronograph</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">GOLD</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹359.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6399</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603871353420240518132513",
      "images1": "/uploads/uploads/171603871353420240518132513",
      "images2": "/uploads/uploads/171603871353420240518132513",
      "images3": "/uploads/uploads/171603871353420240518132513",
      "images4": "/uploads/uploads/171603871353420240518132513",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c7dda01"
      },
      "Title": "Hindware 85 L Desert Air Cooler",
      "color": "Default",
      "size": "85L",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Hindware 85 L Desert Air Cooler</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">85L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6893</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603884624420240518132726",
      "images1": "/uploads/uploads/171603884624420240518132726",
      "images2": "/uploads/uploads/171603884638020240518132726",
      "images3": "/uploads/uploads/171603884648920240518132726",
      "images4": "/uploads/uploads/171603884624420240518132726",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c7cbc59"
      },
      "Title": "IZI Mini X Nano 4K Camera Drone UHD 20MP, CMOS, 4KM Live Video, 31-min Flight Time, GPS, 3-Axis Stab",
      "color": "GREEN",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "359.89",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">IZI Mini X Nano 4K Camera Drone UHD 20MP, CMOS, 4KM Live Video, 31-min Flight Time, GPS, 3-Axis Stab</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">GREEN</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹359.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7389</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603891448920240518132834",
      "images1": "/uploads/uploads/171603891448920240518132834",
      "images2": "/uploads/uploads/171603891448920240518132834",
      "images3": "/uploads/uploads/171603891448920240518132834",
      "images4": "/uploads/uploads/171603891448920240518132834",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ca48c7e"
      },
      "Title": "Bajaj DMH 90 Neo 90L",
      "color": "Default",
      "size": "90L",
      "storage": "",
      "selling_price": "379.79",
      "mrp": "18399",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Bajaj DMH 90 Neo 90L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">90L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹18399</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6349</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603896617620240518132926",
      "images1": "/uploads/uploads/171603896617620240518132926",
      "images2": "/uploads/uploads/171603896653020240518132926",
      "images3": "/uploads/uploads/171603896657420240518132926",
      "images4": "/uploads/uploads/171603896678120240518132926",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c5fb100"
      },
      "Title": "JioBook 11 (2023) NB1112MM(BLU) (Mediatek 8788 Octa-core 2 GHz/ARM Mali G72 MP3 @800 MHz/29.5cms 60",
      "color": "\tJioBlue",
      "size": "11.6 Inches",
      "storage": "",
      "selling_price": "349.79",
      "mrp": "24999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">JioBook 11 (2023) NB1112MM(BLU) (Mediatek 8788 Octa-core 2 GHz/ARM Mali G72 MP3 @800 MHz/29.5cms 60</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">\tJioBlue</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">11.6 Inches</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹24999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6135</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603899487220240518132954",
      "images1": "/uploads/uploads/171603899487220240518132954",
      "images2": "/uploads/uploads/171603899489920240518132954",
      "images3": "/uploads/uploads/171603899451220240518132954",
      "images4": "/uploads/uploads/171603899487220240518132954",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c5debbe"
      },
      "Title": "DesiDiya? Astronaut Galaxy Projector with Remote Control - 360? Adjustable Timer Kids Astronaut Nebu",
      "color": "MIX",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "6999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">DesiDiya? Astronaut Galaxy Projector with Remote Control - 360? Adjustable Timer Kids Astronaut Nebu</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">MIX</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8439</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603906667320240518133106",
      "images1": "/uploads/uploads/171603906667320240518133106",
      "images2": "/uploads/uploads/171603906680620240518133106",
      "images3": "/uploads/uploads/171603906624420240518133106",
      "images4": "/uploads/uploads/171603906621420240518133106",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c087a62"
      },
      "Title": "SKYUP MiNi CoOlEr FoR RoOm CoOlInG MiNi CoOlEr AiR",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "1699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">SKYUP MiNi CoOlEr FoR RoOm CoOlInG MiNi CoOlEr AiR</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6119</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603909238820240518133132",
      "images1": "/uploads/uploads/171603909238820240518133132",
      "images2": "/uploads/uploads/171603909263320240518133132",
      "images3": "/uploads/uploads/171603909213320240518133132",
      "images4": "/uploads/uploads/171603909238820240518133132",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c2a0dfe"
      },
      "Title": "Fossil Gen 6 Digital Black Dial Men's Watch-FTW4059",
      "color": "BLACK",
      "size": "FREE SIZE",
      "storage": "",
      "selling_price": "319.89",
      "mrp": "17999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Fossil Gen 6 Digital Black Dial Men's Watch-FTW4059</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">FREE SIZE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹17999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹319.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7311</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603927487220240518133434",
      "images1": "/uploads/uploads/171603927487220240518133434",
      "images2": "/uploads/uploads/171603927482820240518133434",
      "images3": "/uploads/uploads/171603927488020240518133434",
      "images4": "/uploads/uploads/171603927487220240518133434",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c676010"
      },
      "Title": "CITRODA Mini Handheld Fan",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">CITRODA Mini Handheld Fan</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8844</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603933270020240518133532",
      "images1": "/uploads/uploads/171603933270020240518133532",
      "images2": "/uploads/uploads/171603933283620240518133532",
      "images3": "/uploads/uploads/171603933274520240518133532",
      "images4": "/uploads/uploads/171603933252620240518133532",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c73a3e8"
      },
      "Title": "Apple Watch Series 8 [GPS 45 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fit",
      "color": "Aluminum Midnight, Starlight, Silver and Product Red Stainless-steel Silver, Graphite and Gold",
      "size": "45 mm",
      "storage": "",
      "selling_price": "349.49",
      "mrp": "78999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple Watch Series 8 [GPS 45 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fit</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Aluminum Midnight, Starlight, Silver and Product Red Stainless-steel Silver, Graphite and Gold</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">45 mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹78999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6237</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171603941562520240518133655",
      "images1": "/uploads/uploads/171603941562520240518133655",
      "images2": "/uploads/uploads/171603941511520240518133655",
      "images3": "/uploads/uploads/171603941512920240518133655",
      "images4": "/uploads/uploads/171603941562520240518133655",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c79c1d0"
      },
      "Title": "Amazfit GTR 3 Pro Smart Watch with BT Phone Calls, Blood Pressure Monitoring, 1.45 AMOLED Display, 2",
      "color": "BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "17899",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Amazfit GTR 3 Pro Smart Watch with BT Phone Calls, Blood Pressure Monitoring, 1.45 AMOLED Display, 2</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹17899</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8908</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604005634220240518134736",
      "images1": "/uploads/uploads/171604005634220240518134736",
      "images2": "/uploads/uploads/171604005684720240518134736",
      "images3": "/uploads/uploads/171604005676820240518134736",
      "images4": "/uploads/uploads/171604005634220240518134736",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ca6e766"
      },
      "Title": "Noise Pulse 2 Max 1.85\" Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness",
      "color": "JET BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "28999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Noise Pulse 2 Max 1.85\" Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">JET BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹28999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8121</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604012320220240518134843",
      "images1": "/uploads/uploads/171604012320220240518134843",
      "images2": "/uploads/uploads/171604012320220240518134843",
      "images3": "/uploads/uploads/171604012320220240518134843",
      "images4": "/uploads/uploads/171604012320220240518134843",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ccd9001"
      },
      "Title": "Panasonic 1.5 Ton 3 Star Wi-Fi Inverter Smart Split AC (Copper Condenser)",
      "color": "Default",
      "size": "1.5 Ton",
      "storage": "",
      "selling_price": "389.89",
      "mrp": "36990",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Panasonic 1.5 Ton 3 Star Wi-Fi Inverter Smart Split AC (Copper Condenser)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 Ton</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹36990</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8133</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604013023720240518134850",
      "images1": "/uploads/uploads/171604013023720240518134850",
      "images2": "/uploads/uploads/171604013042420240518134850",
      "images3": "/uploads/uploads/171604013025520240518134850",
      "images4": "/uploads/uploads/171604013014720240518134850",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cc0be2c"
      },
      "Title": "Fire-Boltt Ninja Call Pro Plus 1.83\" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sp",
      "color": "BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "289.89",
      "mrp": "4999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Fire-Boltt Ninja Call Pro Plus 1.83\" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sp</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6442</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604017712220240518134937",
      "images1": "/uploads/uploads/171604017712220240518134937",
      "images2": "/uploads/uploads/171604017744220240518134937",
      "images3": "/uploads/uploads/171604017714220240518134937",
      "images4": "/uploads/uploads/171604017712220240518134937",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c55f77e"
      },
      "Title": "Haier 1.5 Ton 3 Star Twin Inverter Split AC",
      "color": "Default",
      "size": "1.5 Ton",
      "storage": "",
      "selling_price": "389.89",
      "mrp": "65490",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Haier 1.5 Ton 3 Star Twin Inverter Split AC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 Ton</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹65490</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7205</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604026932220240518135109",
      "images1": "/uploads/uploads/171604026932220240518135109",
      "images2": "/uploads/uploads/171604026945020240518135109",
      "images3": "/uploads/uploads/171604026937020240518135109",
      "images4": "/uploads/uploads/171604026919020240518135109",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c4c3909"
      },
      "Title": "E MOTORAD - RIDE THE ELECTRIC REVOLUTION Youth X1 Mountain Electric Cycle",
      "color": "DEEP BLUE",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">E MOTORAD - RIDE THE ELECTRIC REVOLUTION Youth X1 Mountain Electric Cycle</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEEP BLUE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6917</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604033714620240518135217",
      "images1": "/uploads/uploads/171604033714620240518135217",
      "images2": "/uploads/uploads/171604033714620240518135217",
      "images3": "/uploads/uploads/171604033714620240518135217",
      "images4": "/uploads/uploads/171604033714620240518135217",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c55d5e0"
      },
      "Title": "JBL Partybox 310 | Portable Bluetooth Party Speaker | 240W Monstrous Pro Sound | Dynamic Light Show",
      "color": "BLACK",
      "size": "240 WATT",
      "storage": "",
      "selling_price": "499.49",
      "mrp": "63999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">JBL Partybox 310 | Portable Bluetooth Party Speaker | 240W Monstrous Pro Sound | Dynamic Light Show</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">240 WATT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹63999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6593</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604040672020240518135326",
      "images1": "/uploads/uploads/171604040672020240518135326",
      "images2": "/uploads/uploads/171604040672020240518135326",
      "images3": "/uploads/uploads/171604040672020240518135326",
      "images4": "/uploads/uploads/171604040672020240518135326",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c0ba520"
      },
      "Title": "OnePlus 12",
      "color": "Flowy Emerlad,Silky Black",
      "size": "12GB/512GB",
      "storage": "",
      "selling_price": "449.79",
      "mrp": "69999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">OnePlus 12</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Flowy Emerlad,Silky Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12GB/512GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹69999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹449.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6020</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604042543320240518135345",
      "images1": "/uploads/uploads/171604042543320240518135345",
      "images2": "/uploads/uploads/171604042536520240518135345",
      "images3": "/uploads/uploads/171604042580720240518135345",
      "images4": "/uploads/uploads/171604042541920240518135345",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c1968b4"
      },
      "Title": "Wipro Vesta 1.5L BK205 Cool Touch Kettle",
      "color": "BLACK",
      "size": "1.5 L",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "2199",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Wipro Vesta 1.5L BK205 Cool Touch Kettle</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2199</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7038</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604047058020240518135430",
      "images1": "/uploads/uploads/171604047058020240518135430",
      "images2": "/uploads/uploads/171604047027520240518135430",
      "images3": "/uploads/uploads/171604047058020240518135430",
      "images4": "/uploads/uploads/171604047058020240518135430",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c8b6f26"
      },
      "Title": "boAt Immortal 121 TWS Earbuds with Beast? Mode(40ms Low Latency) for Gaming, 40H Playtime, Blazing L",
      "color": "Black Sabre",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "289.79",
      "mrp": "15999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Immortal 121 TWS Earbuds with Beast? Mode(40ms Low Latency) for Gaming, 40H Playtime, Blazing L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black Sabre</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7542</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604052451220240518135524",
      "images1": "/uploads/uploads/171604052451220240518135524",
      "images2": "/uploads/uploads/171604052451220240518135524",
      "images3": "/uploads/uploads/171604052451220240518135524",
      "images4": "/uploads/uploads/171604052451220240518135524",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cdfc6b7"
      },
      "Title": "boAt AAVANTE Bar 3150D 260W 5.1 Channel Bluetooth Soundbar with Dolby Audio, Signature Sound,Wired S",
      "color": "BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "399.99",
      "mrp": "39999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt AAVANTE Bar 3150D 260W 5.1 Channel Bluetooth Soundbar with Dolby Audio, Signature Sound,Wired S</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹39999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7967</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604061444320240518135654",
      "images1": "/uploads/uploads/171604061444320240518135654",
      "images2": "/uploads/uploads/171604061445520240518135654",
      "images3": "/uploads/uploads/171604061429720240518135654",
      "images4": "/uploads/uploads/171604061444320240518135654",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c3a2108"
      },
      "Title": "Pixel 7 5G (Obsidian, 8GB RAM, 128GB Stoarge)",
      "color": "Snow,LemonGrass,Obsidian",
      "size": "8GB/128GB",
      "storage": "",
      "selling_price": "439.49",
      "mrp": "46999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Pixel 7 5G (Obsidian, 8GB RAM, 128GB Stoarge)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Snow,LemonGrass,Obsidian</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8GB/128GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹46999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹439.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8500</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604064763820240518135727",
      "images1": "/uploads/uploads/171604064763820240518135727",
      "images2": "/uploads/uploads/171604064763820240518135727",
      "images3": "/uploads/uploads/171604064713320240518135727",
      "images4": "/uploads/uploads/171604064785220240518135727",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cc20191"
      },
      "Title": "Pioneer TS-WX3000T Coaxial Subwoofer",
      "color": "BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "249.49",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Pioneer TS-WX3000T Coaxial Subwoofer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8808</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604069460920240518135814",
      "images1": "/uploads/uploads/171604069460920240518135814",
      "images2": "/uploads/uploads/171604069490520240518135814",
      "images3": "/uploads/uploads/171604069413520240518135814",
      "images4": "/uploads/uploads/171604069460920240518135814",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c317255"
      },
      "Title": "JBL Tune 235NC in Ear Wireless ANC Earbuds",
      "color": "BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "4999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">JBL Tune 235NC in Ear Wireless ANC Earbuds</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6860</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604074168620240518135901",
      "images1": "/uploads/uploads/171604074168620240518135901",
      "images2": "/uploads/uploads/171604074164920240518135901",
      "images3": "/uploads/uploads/171604074184620240518135901",
      "images4": "/uploads/uploads/171604074168620240518135901",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c693ecc"
      },
      "Title": "Sony HT-S40R Real 5.1ch Dolby Audio Soundbar for TV with Subwoofer & Wireless Rear Speakers, 5.1ch H",
      "color": "BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "25999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Sony HT-S40R Real 5.1ch Dolby Audio Soundbar for TV with Subwoofer & Wireless Rear Speakers, 5.1ch H</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹25999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6063</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604078255720240518135942",
      "images1": "/uploads/uploads/171604078255720240518135942",
      "images2": "/uploads/uploads/171604078284320240518135942",
      "images3": "/uploads/uploads/171604078255720240518135942",
      "images4": "/uploads/uploads/171604078255720240518135942",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cbd224b"
      },
      "Title": "Sony WH-1000XM5 Wireless The Best Active Noise",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "439.89",
      "mrp": "100329",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Sony WH-1000XM5 Wireless The Best Active Noise</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹100329</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹439.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8467</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604083114520240518140031",
      "images1": "/uploads/uploads/171604083114520240518140031",
      "images2": "/uploads/uploads/171604083175320240518140031",
      "images3": "/uploads/uploads/171604083178320240518140031",
      "images4": "/uploads/uploads/171604083114920240518140031",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cee72dd"
      },
      "Title": "Canon EOS 3000D DSLR Camera 1Body 18-55mm Lance",
      "color": "BLACK",
      "size": "18-55mm",
      "storage": "",
      "selling_price": "289.79",
      "mrp": "35999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Canon EOS 3000D DSLR Camera 1Body 18-55mm Lance</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">18-55mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹35999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7303</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604084434620240518140044",
      "images1": "/uploads/uploads/171604084434620240518140044",
      "images2": "/uploads/uploads/171604084459820240518140044",
      "images3": "/uploads/uploads/171604084434620240518140044",
      "images4": "/uploads/uploads/171604084434620240518140044",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce732a0"
      },
      "Title": "Apple AirPods Pro (2nd Generation)",
      "color": "WHITE",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "19999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple AirPods Pro (2nd Generation)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹19999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8568</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604094012720240518140220",
      "images1": "/uploads/uploads/171604094012720240518140220",
      "images2": "/uploads/uploads/171604094042420240518140220",
      "images3": "/uploads/uploads/171604094027320240518140220",
      "images4": "/uploads/uploads/171604094054620240518140220",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c974f60"
      },
      "Title": "P9 Plus Compatible Air-pods On-Ear Headphone Max Bluetooth Headset with Mic",
      "color": "SILVER",
      "size": "FREE SIZE",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "49000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">P9 Plus Compatible Air-pods On-Ear Headphone Max Bluetooth Headset with Mic</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">SILVER</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">FREE SIZE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹49000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7071</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604100756820240518140327",
      "images1": "/uploads/uploads/171604100756820240518140327",
      "images2": "/uploads/uploads/171604100777220240518140327",
      "images3": "/uploads/uploads/171604100778120240518140327",
      "images4": "/uploads/uploads/171604100756820240518140327",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c4480c0"
      },
      "Title": "Samsung Galaxy S24 Ultra 5G AI Smartphone",
      "color": "Titanium Black, Titanium Gray, Titanium Violet",
      "size": "12 GB",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "139999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy S24 Ultra 5G AI Smartphone</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Titanium Black, Titanium Gray, Titanium Violet</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12 GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹139999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6234</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604110776020240518140507",
      "images1": "/uploads/uploads/171604110776020240518140507",
      "images2": "/uploads/uploads/171604110731620240518140507",
      "images3": "/uploads/uploads/171604110715720240518140507",
      "images4": "/uploads/uploads/171604110752620240518140507",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665caf389a"
      },
      "Title": "OnePlus 11R 5G",
      "color": "Galactic Silver, Solar Red, Sonic Black",
      "size": "12 GB",
      "storage": "",
      "selling_price": "319.79",
      "mrp": "32999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">OnePlus 11R 5G</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Galactic Silver, Solar Red, Sonic Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12 GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹32999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹319.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6821</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604117960120240518140619",
      "images1": "/uploads/uploads/171604117960120240518140619",
      "images2": "/uploads/uploads/171604117925620240518140619",
      "images3": "/uploads/uploads/171604117969420240518140619",
      "images4": "/uploads/uploads/171604117999620240518140619",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c3008cf"
      },
      "Title": "Sandisk Extreme Portable 1TB, 1050MB/s R, 1000MB/s W, 3mtr Drop Protection, IP65 Water/dust Resistan",
      "color": "Default",
      "size": "1 TB",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "3799",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Sandisk Extreme Portable 1TB, 1050MB/s R, 1000MB/s W, 3mtr Drop Protection, IP65 Water/dust Resistan</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1 TB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3799</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7493</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604134753220240518140907",
      "images1": "/uploads/uploads/171604134753220240518140907",
      "images2": "/uploads/uploads/171604134742920240518140907",
      "images3": "/uploads/uploads/171604134744020240518140907",
      "images4": "/uploads/uploads/171604134739220240518140907",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c0c5ab5"
      },
      "Title": "Fossil Gen 6 Smartwatch Digital Black",
      "color": "Blue,Brown, Grey, Multicolour, Pink, Purple, Rose Gold, Silver",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Fossil Gen 6 Smartwatch Digital Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Blue,Brown, Grey, Multicolour, Pink, Purple, Rose Gold, Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8981</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604151745220240518141157",
      "images1": "/uploads/uploads/171604151745220240518141157",
      "images2": "/uploads/uploads/171604151761020240518141157",
      "images3": "/uploads/uploads/171604151722720240518141157",
      "images4": "/uploads/uploads/171604151782920240518141157",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cccfbb0"
      },
      "Title": "hakti Technology S5 High Pressure Car Washer Machine 1900 Watts, Pressure 125 Bar, 8L/Min Flow Rate",
      "color": "Default",
      "size": "1900 Watt",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "6099",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">hakti Technology S5 High Pressure Car Washer Machine 1900 Watts, Pressure 125 Bar, 8L/Min Flow Rate</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1900 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6099</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7216</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604151987220240518141159",
      "images1": "/uploads/uploads/171604151987220240518141159",
      "images2": "/uploads/uploads/171604151995220240518141159",
      "images3": "/uploads/uploads/171604151914320240518141159",
      "images4": "/uploads/uploads/171604151968320240518141159",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cc93f1f"
      },
      "Title": "Amazfit T-Rex Pro Smartwatch Fitness Watch with SpO2, Heart Rate, Sleep Monitor, Sports Watch with O",
      "color": "Meteorite Black",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "289.89",
      "mrp": "4999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Amazfit T-Rex Pro Smartwatch Fitness Watch with SpO2, Heart Rate, Sleep Monitor, Sports Watch with O</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Meteorite Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8277</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604165524920240518141415",
      "images1": "/uploads/uploads/171604165524920240518141415",
      "images2": "/uploads/uploads/171604165524920240518141415",
      "images3": "/uploads/uploads/171604165524920240518141415",
      "images4": "/uploads/uploads/171604165524920240518141415",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c16bb5e"
      },
      "Title": "Marshall Emberton Wireless Outdoor Speaker",
      "color": "Black And Brass, Cream",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Marshall Emberton Wireless Outdoor Speaker</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black And Brass, Cream</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8323</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604171447320240518141514",
      "images1": "/uploads/uploads/171604171447320240518141514",
      "images2": "/uploads/uploads/171604171413420240518141514",
      "images3": "/uploads/uploads/171604171447320240518141514",
      "images4": "/uploads/uploads/171604171447320240518141514",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c53f2ce"
      },
      "Title": "Samsung Galaxy Tab A9+ 27.94 cm (11.0 inch) Display, RAM 8 GB, ROM 128 GB Expandable, Wi-Fi Tablet,",
      "color": "Grey,Graphite,Silver",
      "size": "8GB/128GB",
      "storage": "",
      "selling_price": "389.99",
      "mrp": "18999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy Tab A9+ 27.94 cm (11.0 inch) Display, RAM 8 GB, ROM 128 GB Expandable, Wi-Fi Tablet,</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Grey,Graphite,Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8GB/128GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹18999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8640</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604174658220240518141546",
      "images1": "/uploads/uploads/171604174658220240518141546",
      "images2": "/uploads/uploads/171604174673320240518141546",
      "images3": "/uploads/uploads/171604174659020240518141546",
      "images4": "/uploads/uploads/171604174639520240518141546",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c2eb3da"
      },
      "Title": "FireBoltt DREAM The First Ever Wristphone",
      "color": "Aqua Black, Aqua Blue, Aqua Gold Black, Aqua Light Gold, Aqua Orenge",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "3599",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">FireBoltt DREAM The First Ever Wristphone</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Aqua Black, Aqua Blue, Aqua Gold Black, Aqua Light Gold, Aqua Orenge</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3599</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8254</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604180099420240518141640",
      "images1": "/uploads/uploads/171604180099420240518141640",
      "images2": "/uploads/uploads/171604180079620240518141640",
      "images3": "/uploads/uploads/171604180068920240518141640",
      "images4": "/uploads/uploads/171604180038620240518141640",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c3f8ebe"
      },
      "Title": "Airdopes 131 Iron Man Marvel Edition",
      "color": "RED",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "279.99",
      "mrp": "2999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Airdopes 131 Iron Man Marvel Edition</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">RED</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹279.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7071</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604193121820240518141851",
      "images1": "/uploads/uploads/171604193121820240518141851",
      "images2": "/uploads/uploads/171604193160520240518141851",
      "images3": "/uploads/uploads/171604193146820240518141851",
      "images4": "/uploads/uploads/171604193121820240518141851",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ca30336"
      },
      "Title": "Philips CX 5535/11 High Performance Bladeless Technology Tower Fan with Touchscreen Panel and Remote",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "9199",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Philips CX 5535/11 High Performance Bladeless Technology Tower Fan with Touchscreen Panel and Remote</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9199</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6072</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604194147820240518141901",
      "images1": "/uploads/uploads/171604194147820240518141901",
      "images2": "/uploads/uploads/171604194147720240518141901",
      "images3": "/uploads/uploads/171604194175820240518141901",
      "images4": "/uploads/uploads/171604194111120240518141901",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cf6464b"
      },
      "Title": "Sony Alpha ZV-E10L 24.2 Mega Pixel Interchangeable-Lens Mirrorless vlog Optical zoom Camera with 16-",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "459.79",
      "mrp": "60999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Sony Alpha ZV-E10L 24.2 Mega Pixel Interchangeable-Lens Mirrorless vlog Optical zoom Camera with 16-</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹60999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹459.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6729</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604206499520240518142104",
      "images1": "/uploads/uploads/171604206499520240518142104",
      "images2": "/uploads/uploads/171604206469120240518142104",
      "images3": "/uploads/uploads/171604206418520240518142104",
      "images4": "/uploads/uploads/171604206465620240518142104",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cabab43"
      },
      "Title": "HP All-in-One PC Intel Pentium J5040 21.5-inch(54.6 cm) FHD Three-Sided Micro-Edge Display(8GB RAM/5",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "349.49",
      "mrp": "31999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">HP All-in-One PC Intel Pentium J5040 21.5-inch(54.6 cm) FHD Three-Sided Micro-Edge Display(8GB RAM/5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹31999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7212</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604213577820240518142215",
      "images1": "/uploads/uploads/171604213577820240518142215",
      "images2": "/uploads/uploads/171604213593920240518142215",
      "images3": "/uploads/uploads/171604213550920240518142215",
      "images4": "/uploads/uploads/171604213520120240518142215",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cdaa7ec"
      },
      "Title": "TECNO Phantom V Fold 5G Black (12GB RAM,256GB Storage) | The First Full Size Fold | LTPO AMOLED Disp",
      "color": "Black,White",
      "size": "12GB/256GB",
      "storage": "",
      "selling_price": "429.99",
      "mrp": "69999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">TECNO Phantom V Fold 5G Black (12GB RAM,256GB Storage) | The First Full Size Fold | LTPO AMOLED Disp</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black,White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12GB/256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹69999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹429.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7468</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604222582120240518142345",
      "images1": "/uploads/uploads/171604222582120240518142345",
      "images2": "/uploads/uploads/171604222531120240518142345",
      "images3": "/uploads/uploads/171604222554920240518142345",
      "images4": "/uploads/uploads/171604222512020240518142345",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce189a4"
      },
      "Title": "Symphony Diet 3D 55i+ Portable Tower Air Cooler For Home with 3-Side Honeycomb Pads, Magnetic Remote",
      "color": "White",
      "size": "Regular",
      "storage": "",
      "selling_price": "389.49",
      "mrp": "12499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Symphony Diet 3D 55i+ Portable Tower Air Cooler For Home with 3-Side Honeycomb Pads, Magnetic Remote</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7988</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604237098720240518142610",
      "images1": "/uploads/uploads/171604237098720240518142610",
      "images2": "/uploads/uploads/171604237057920240518142610",
      "images3": "/uploads/uploads/171604237065520240518142610",
      "images4": "/uploads/uploads/171604237014220240518142610",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c7fbd7e"
      },
      "Title": "HILLSTAR Foldable Remote Control Drone with Camera HD Wide Angle Lens Optical Flow Positioning with",
      "color": "Default",
      "size": "1800 mAh",
      "storage": "",
      "selling_price": "299.49",
      "mrp": "1999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">HILLSTAR Foldable Remote Control Drone with Camera HD Wide Angle Lens Optical Flow Positioning with</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1800 mAh</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6571</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604247083920240518142750",
      "images1": "/uploads/uploads/171604247083920240518142750",
      "images2": "/uploads/uploads/171604247077720240518142750",
      "images3": "/uploads/uploads/171604247041320240518142750",
      "images4": "/uploads/uploads/171604247081620240518142750",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ca4ed47"
      },
      "Title": "IZI Mini X Nano Fly More Combo 4K Camera Drone UHD 20MP, CMOS,4KM Live Video, 93-min Flight Time, GP",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "379.89",
      "mrp": "38999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">IZI Mini X Nano Fly More Combo 4K Camera Drone UHD 20MP, CMOS,4KM Live Video, 93-min Flight Time, GP</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹38999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7957</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604270640220240518143146",
      "images1": "/uploads/uploads/171604270640220240518143146",
      "images2": "/uploads/uploads/171604270630320240518143146",
      "images3": "/uploads/uploads/171604270694320240518143146",
      "images4": "/uploads/uploads/171604270610020240518143146",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cba4f5a"
      },
      "Title": "Airdopes 161 ANC",
      "color": "Black, Green, White",
      "size": "NA",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "3999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Airdopes 161 ANC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black, Green, White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8054</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604276687420240518143246",
      "images1": "/uploads/uploads/171604276687420240518143246",
      "images2": "/uploads/uploads/171604276616820240518143246",
      "images3": "/uploads/uploads/171604276612420240518143246",
      "images4": "/uploads/uploads/171604276692820240518143246",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce75b59"
      },
      "Title": "Apple Watch Series 9 [GPS 41mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Band S/M.",
      "color": "Midnight,Starlight,Silver",
      "size": "41mm/45mm",
      "storage": "",
      "selling_price": "439.49",
      "mrp": "41999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple Watch Series 9 [GPS 41mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Band S/M.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Midnight,Starlight,Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">41mm/45mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹41999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹439.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6407</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604282246920240518143342",
      "images1": "/uploads/uploads/171604282246920240518143342",
      "images2": "/uploads/uploads/171604282217920240518143342",
      "images3": "/uploads/uploads/171604282266920240518143342",
      "images4": "/uploads/uploads/171604282246920240518143342",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c809163"
      },
      "Title": "Apple Watch Series 8 [GPS 45 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fit",
      "color": "Red,Midnight,Graphite,Silver",
      "size": "45mm",
      "storage": "",
      "selling_price": "329.79",
      "mrp": "32999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple Watch Series 8 [GPS 45 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fit</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Red,Midnight,Graphite,Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">45mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹32999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹329.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7250</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604293368320240518143533",
      "images1": "/uploads/uploads/171604293368320240518143533",
      "images2": "/uploads/uploads/171604293350720240518143533",
      "images3": "/uploads/uploads/171604293389320240518143533",
      "images4": "/uploads/uploads/171604293318420240518143533",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c20f58c"
      },
      "Title": "Apple Watch SE (2nd Gen, 2023) [GPS 44mm] Smartwatch with Midnight Aluminum Case with Midnight Sport",
      "color": "Midnight,Starlight",
      "size": "44mm",
      "storage": "",
      "selling_price": "379.49",
      "mrp": "32999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple Watch SE (2nd Gen, 2023) [GPS 44mm] Smartwatch with Midnight Aluminum Case with Midnight Sport</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Midnight,Starlight</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">44mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹32999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8088</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604305816820240518143738",
      "images1": "/uploads/uploads/171604305816820240518143738",
      "images2": "/uploads/uploads/171604305878020240518143738",
      "images3": "/uploads/uploads/171604305849320240518143738",
      "images4": "/uploads/uploads/171604305815520240518143738",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c90b645"
      },
      "Title": "Amazon Basics Wireless Bluetooth Multi-Device Keyboard for Windows, Apple iOS Android Or Chrome, Com",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "1199",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Amazon Basics Wireless Bluetooth Multi-Device Keyboard for Windows, Apple iOS Android Or Chrome, Com</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1199</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7436</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604313895020240518143858",
      "images1": "/uploads/uploads/171604313895020240518143858",
      "images2": "/uploads/uploads/171604313853820240518143858",
      "images3": "/uploads/uploads/171604313857420240518143858",
      "images4": "/uploads/uploads/171604313814920240518143858",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cd20fdb"
      },
      "Title": "Safari Omega spacious/large laptop backpack with Raincover, college bag, travel bag for men and wome",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "2948",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Safari Omega spacious/large laptop backpack with Raincover, college bag, travel bag for men and wome</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2948</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8487</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604330072020240518144140",
      "images1": "/uploads/uploads/171604330072020240518144140",
      "images2": "/uploads/uploads/171604330075720240518144140",
      "images3": "/uploads/uploads/171604330085020240518144140",
      "images4": "/uploads/uploads/171604330091320240518144140",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c642443"
      },
      "Title": "Havells 1200W Foldable Hair Dryer; 3 Heat Settings with Cool Shot (Hot/Cool/ Warm), Heat Balance Tec",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "249.89",
      "mrp": "1599",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Havells 1200W Foldable Hair Dryer; 3 Heat Settings with Cool Shot (Hot/Cool/ Warm), Heat Balance Tec</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1599</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7335</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604341876420240518144338",
      "images1": "/uploads/uploads/171604341876420240518144338",
      "images2": "/uploads/uploads/171604341896820240518144338",
      "images3": "/uploads/uploads/171604341882820240518144338",
      "images4": "/uploads/uploads/171604341839120240518144338",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c4e549b"
      },
      "Title": "Morphy Richards Idazzle Hd121Dc 1200W Hair Dryer|1200 Watt|Aqua Blue & Black",
      "color": "Default",
      "size": "1200 Watt",
      "storage": "",
      "selling_price": "239.89",
      "mrp": "899",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Morphy Richards Idazzle Hd121Dc 1200W Hair Dryer|1200 Watt|Aqua Blue & Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1200 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹899</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹239.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8985</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604356336620240518144603",
      "images1": "/uploads/uploads/171604356336620240518144603",
      "images2": "/uploads/uploads/171604356317620240518144603",
      "images3": "/uploads/uploads/171604356390120240518144603",
      "images4": "/uploads/uploads/171604356347920240518144603",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce2371a"
      },
      "Title": "WZATCO Yuva Plus (Upgraded) Native 1080P Full HD Projector with 4K Support, True 420 ANSI on Screen",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "389.49",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">WZATCO Yuva Plus (Upgraded) Native 1080P Full HD Projector with 4K Support, True 420 ANSI on Screen</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8709</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604366128220240518144741",
      "images1": "/uploads/uploads/171604366128220240518144741",
      "images2": "/uploads/uploads/171604366112820240518144741",
      "images3": "/uploads/uploads/171604366152620240518144741",
      "images4": "/uploads/uploads/171604366121220240518144741",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cba9b25"
      },
      "Title": "Enamor Athleisure-Padded Wirefree Full Coverage High Impact with Antimicrobial & Sweat Wicking Longl",
      "color": "Thai Green,Navy,Soft Pink",
      "size": "Free Size",
      "storage": "",
      "selling_price": "299.49",
      "mrp": "1499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Enamor Athleisure-Padded Wirefree Full Coverage High Impact with Antimicrobial & Sweat Wicking Longl</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Clothing</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Thai Green,Navy,Soft Pink</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Free Size</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6611</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604394424920240518145224",
      "images1": "/uploads/uploads/171604394424920240518145224",
      "images2": "/uploads/uploads/171604394499420240518145224",
      "images3": "/uploads/uploads/171604394483620240518145224",
      "images4": "/uploads/uploads/171604394473120240518145224",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cc3b864"
      },
      "Title": "Boult Audio Z40 Pro",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "1499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Boult Audio Z40 Pro</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8231</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604403767120240518145357",
      "images1": "/uploads/uploads/171604403767120240518145357",
      "images2": "/uploads/uploads/171604403784320240518145357",
      "images3": "/uploads/uploads/171604403740920240518145357",
      "images4": "/uploads/uploads/171604403720220240518145357",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cfd9358"
      },
      "Title": "Noise Buds X Prime in-Ear",
      "color": "Silver Grey,Sheen Green,Champagne White",
      "size": "Regular",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "1499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Noise Buds X Prime in-Ear</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Silver Grey,Sheen Green,Champagne White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6904</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604415520020240518145555",
      "images1": "/uploads/uploads/171604415520020240518145555",
      "images2": "/uploads/uploads/171604415576620240518145555",
      "images3": "/uploads/uploads/171604415526220240518145555",
      "images4": "/uploads/uploads/171604415570120240518145555",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cb3d4de"
      },
      "Title": "Redmi Buds 5 Bluetooth TWS",
      "color": "Purple,Black",
      "size": "Regular",
      "storage": "",
      "selling_price": "279.89",
      "mrp": "2699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Redmi Buds 5 Bluetooth TWS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Purple,Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹279.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6095</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604427048820240518145750",
      "images1": "/uploads/uploads/171604427048820240518145750",
      "images2": "/uploads/uploads/171604427033220240518145750",
      "images3": "/uploads/uploads/171604427053420240518145750",
      "images4": "/uploads/uploads/171604427050820240518145750",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cd8b1a6"
      },
      "Title": "DDLC V380 PRO WiFi CCTV Security Camera for Home Outdoor High HD",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "279.79",
      "mrp": "1499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">DDLC V380 PRO WiFi CCTV Security Camera for Home Outdoor High HD</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹279.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8683</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604444335320240518150043",
      "images1": "/uploads/uploads/171604444335320240518150043",
      "images2": "/uploads/uploads/171604444323620240518150043",
      "images3": "/uploads/uploads/171604444397720240518150043",
      "images4": "/uploads/uploads/171604444392420240518150043",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c8cd5af"
      },
      "Title": "Nothing Phone (2) 5G (White, 12GB RAM, 512GB Storage) | 6.7 Inch LTPO OLED AMOLED Display | 50 MP(OI",
      "color": "White",
      "size": "12GB/512GB",
      "storage": "",
      "selling_price": "389.79",
      "mrp": "49999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Nothing Phone (2) 5G (White, 12GB RAM, 512GB Storage) | 6.7 Inch LTPO OLED AMOLED Display | 50 MP(OI</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12GB/512GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹49999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8127</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604466685320240518150426",
      "images1": "/uploads/uploads/171604466685320240518150426",
      "images2": "/uploads/uploads/171604466640520240518150426",
      "images3": "/uploads/uploads/171604466673620240518150426",
      "images4": "/uploads/uploads/171604466699120240518150426",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c82aacf"
      },
      "Title": "boAt Airdopes 141",
      "color": "Black, Cyan Cider, White Purity",
      "size": "NA",
      "storage": "",
      "selling_price": "289.79",
      "mrp": "4999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Airdopes 141</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black, Cyan Cider, White Purity</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7262</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604478420620240518150624",
      "images1": "/uploads/uploads/171604478420620240518150624",
      "images2": "/uploads/uploads/171604478415320240518150624",
      "images3": "/uploads/uploads/171604478443720240518150624",
      "images4": "/uploads/uploads/171604478420620240518150624",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c67102e"
      },
      "Title": "boAt Airdopes 131 - Make in India",
      "color": "Active Black Indi",
      "size": "NA",
      "storage": "",
      "selling_price": "289.79",
      "mrp": "2999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Airdopes 131 - Make in India</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Active Black Indi</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7844</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604482390520240518150703",
      "images1": "/uploads/uploads/171604482390520240518150703",
      "images2": "/uploads/uploads/171604482390520240518150703",
      "images3": "/uploads/uploads/171604482390520240518150703",
      "images4": "/uploads/uploads/171604482390520240518150703",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cd4241b"
      },
      "Title": "realme TechLife Buds T100 Bluetooth Truly Wireless in Ear Earbuds with mic",
      "color": "Techlife Buds T100-B, Techlife Buds T100-G, Techlife Buds T100-W",
      "size": "NA",
      "storage": "",
      "selling_price": "289.89",
      "mrp": "2999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">realme TechLife Buds T100 Bluetooth Truly Wireless in Ear Earbuds with mic</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Techlife Buds T100-B, Techlife Buds T100-G, Techlife Buds T100-W</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8680</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604489226520240518150812",
      "images1": "/uploads/uploads/171604489226520240518150812",
      "images2": "/uploads/uploads/171604489240320240518150812",
      "images3": "/uploads/uploads/171604489239920240518150812",
      "images4": "/uploads/uploads/171604489242420240518150812",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c1a6ca9"
      },
      "Title": "JBL Tune Beam Wireless ANC Earbuds",
      "color": "Black, Blue, Purple, White",
      "size": "NA",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "3999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">JBL Tune Beam Wireless ANC Earbuds</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black, Blue, Purple, White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7321</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604497574220240518150935",
      "images1": "/uploads/uploads/171604497574220240518150935",
      "images2": "/uploads/uploads/171604497578120240518150935",
      "images3": "/uploads/uploads/171604497522220240518150935",
      "images4": "/uploads/uploads/171604497590320240518150935",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cf7450d"
      },
      "Title": "realme Buds T300 TWS Earbuds",
      "color": "Black",
      "size": "NA",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "2599",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">realme Buds T300 TWS Earbuds</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2599</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6991</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604502178020240518151021",
      "images1": "/uploads/uploads/171604502178020240518151021",
      "images2": "/uploads/uploads/171604502153320240518151021",
      "images3": "/uploads/uploads/171604502178020240518151021",
      "images4": "/uploads/uploads/171604502178020240518151021",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cea330b"
      },
      "Title": "boAt Immortal IM-200 7.1 Channel Wired Over Ear USB Gaming Headphone",
      "color": "Furious Blue",
      "size": "NA",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "5999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Immortal IM-200 7.1 Channel Wired Over Ear USB Gaming Headphone</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Furious Blue</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹5999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6937</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604513119520240518151211",
      "images1": "/uploads/uploads/171604513119520240518151211",
      "images2": "/uploads/uploads/171604513140520240518151211",
      "images3": "/uploads/uploads/171604513142720240518151211",
      "images4": "/uploads/uploads/171604513119520240518151211",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ce4b153"
      },
      "Title": "TRebel Airdopes 601 ANC",
      "color": "WHITE",
      "size": "NA",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">TRebel Airdopes 601 ANC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8882</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604529893620240518151458",
      "images1": "/uploads/uploads/171604529893620240518151458",
      "images2": "/uploads/uploads/171604529885520240518151458",
      "images3": "/uploads/uploads/171604529819020240518151458",
      "images4": "/uploads/uploads/171604529897020240518151458",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c80c350"
      },
      "Title": "TRebel Airdopes 141",
      "color": "Cyan Cider, White Purity",
      "size": "NA",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">TRebel Airdopes 141</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Cyan Cider, White Purity</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7340</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604538754320240518151627",
      "images1": "/uploads/uploads/171604538754320240518151627",
      "images2": "/uploads/uploads/171604538777120240518151627",
      "images3": "/uploads/uploads/171604538778920240518151627",
      "images4": "/uploads/uploads/171604538759120240518151627",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c81a1f1"
      },
      "Title": "boAt Airdopes 601 ANC",
      "color": "black, white",
      "size": "NA",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Airdopes 601 ANC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">black, white</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8520</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604557747420240518151937",
      "images1": "/uploads/uploads/171604557747420240518151937",
      "images2": "/uploads/uploads/171604557777820240518151937",
      "images3": "/uploads/uploads/171604557744320240518151937",
      "images4": "/uploads/uploads/171604557746820240518151937",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665caf3286"
      },
      "Title": "TRebel Airdopes 131",
      "color": "Lightpink, White",
      "size": "NA",
      "storage": "",
      "selling_price": "289.79",
      "mrp": "6999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">TRebel Airdopes 131</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Lightpink, White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8834</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604565940020240518152059",
      "images1": "/uploads/uploads/171604565940020240518152059",
      "images2": "/uploads/uploads/171604565910920240518152059",
      "images3": "/uploads/uploads/171604565960520240518152059",
      "images4": "/uploads/uploads/171604565935520240518152059",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c1d096a"
      },
      "Title": "TRebel Airdopes 181",
      "color": "cool greay, Spirit White",
      "size": "NA",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">TRebel Airdopes 181</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">cool greay, Spirit White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7168</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604578876420240518152308",
      "images1": "/uploads/uploads/171604578876420240518152308",
      "images2": "/uploads/uploads/171604578887220240518152308",
      "images3": "/uploads/uploads/171604578818720240518152308",
      "images4": "/uploads/uploads/171604578876420240518152308",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c6135bd"
      },
      "Title": "iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimes",
      "color": "Graphite Matte,Blue Lagoon",
      "size": "8GB/128GB",
      "storage": "",
      "selling_price": "389.79",
      "mrp": "24999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Graphite Matte,Blue Lagoon</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8GB/128GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹24999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8683</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604588318620240518152443",
      "images1": "/uploads/uploads/171604588318620240518152443",
      "images2": "/uploads/uploads/171604588340720240518152443",
      "images3": "/uploads/uploads/171604588349120240518152443",
      "images4": "/uploads/uploads/171604588390720240518152443",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cad4b2c"
      },
      "Title": "boAt Airdopes 441 Made In India",
      "color": "Active Black Indi",
      "size": "NA",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "4999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Airdopes 441 Made In India</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Active Black Indi</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7477</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604593563220240518152535",
      "images1": "/uploads/uploads/171604593563220240518152535",
      "images2": "/uploads/uploads/171604593569320240518152535",
      "images3": "/uploads/uploads/171604593531720240518152535",
      "images4": "/uploads/uploads/171604593524720240518152535",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cf40119"
      },
      "Title": "boAt Airdopes 101 Made In India",
      "color": "Active Black, White",
      "size": "NA",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "5999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Airdopes 101 Made In India</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Active Black, White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹5999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6928</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604604418820240518152724",
      "images1": "/uploads/uploads/171604604418820240518152724",
      "images2": "/uploads/uploads/171604604498120240518152724",
      "images3": "/uploads/uploads/171604604465420240518152724",
      "images4": "/uploads/uploads/171604604456720240518152724",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c1a1082"
      },
      "Title": "Ambrane 20000mAh Powerbank, 22.5W Fast Charging, Triple Output (2 USB & 1 Type C), Power Delivery, Q",
      "color": "Default",
      "size": "20000 mAh",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "2499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Ambrane 20000mAh Powerbank, 22.5W Fast Charging, Triple Output (2 USB & 1 Type C), Power Delivery, Q</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">20000 mAh</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7333</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604608152820240518152801",
      "images1": "/uploads/uploads/171604608152820240518152801",
      "images2": "/uploads/uploads/171604608121720240518152801",
      "images3": "/uploads/uploads/171604608149320240518152801",
      "images4": "/uploads/uploads/171604608184020240518152801",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ceb0673"
      },
      "Title": "boAt Aavante Bar 1500",
      "color": "BLACK",
      "size": "NA",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "17999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 1500</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹17999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7977</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604620533620240518153005",
      "images1": "/uploads/uploads/171604620533620240518153005",
      "images2": "/uploads/uploads/171604620518720240518153005",
      "images3": "/uploads/uploads/171604620564420240518153005",
      "images4": "/uploads/uploads/171604620590720240518153005",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c13f58d"
      },
      "Title": "Dr Luxur Faux Leather Colossus Ergonomic Gaming Chair For Office Work From Home With Lumbar Support,",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "449.99",
      "mrp": "16999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Dr Luxur Faux Leather Colossus Ergonomic Gaming Chair For Office Work From Home With Lumbar Support,</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹16999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹449.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7571</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604624691120240518153046",
      "images1": "/uploads/uploads/171604624691120240518153046",
      "images2": "/uploads/uploads/171604624672120240518153046",
      "images3": "/uploads/uploads/171604624650820240518153046",
      "images4": "/uploads/uploads/171604624622620240518153046",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665ca27380"
      },
      "Title": "boAt Aavante Bar Thump",
      "color": "Carbon Black",
      "size": "NA",
      "storage": "",
      "selling_price": "299.49",
      "mrp": "21999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar Thump</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Carbon Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹21999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6064</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604626223520240518153102",
      "images1": "/uploads/uploads/171604626223520240518153102",
      "images2": "/uploads/uploads/171604626233620240518153102",
      "images3": "/uploads/uploads/171604626298120240518153102",
      "images4": "/uploads/uploads/171604626231620240518153102",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c66ec45"
      },
      "Title": "NXTGN Core i9 Gaming PC (Core i9 11th Gen Processor, 32GB RAM, 1TB SSD, 4TB Hard Drive, 12GB RTX3060",
      "color": "Default",
      "size": "32GB/1TB",
      "storage": "",
      "selling_price": "489.99",
      "mrp": "120499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">NXTGN Core i9 Gaming PC (Core i9 11th Gen Processor, 32GB RAM, 1TB SSD, 4TB Hard Drive, 12GB RTX3060</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">32GB/1TB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹120499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹489.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8084</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604631261920240518153152",
      "images1": "/uploads/uploads/171604631261920240518153152",
      "images2": "/uploads/uploads/171604631270820240518153152",
      "images3": "/uploads/uploads/171604631268820240518153152",
      "images4": "/uploads/uploads/171604631261920240518153152",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c160669"
      },
      "Title": "boAt Aavante Orion",
      "color": "BLACK",
      "size": "NA",
      "storage": "",
      "selling_price": "299.49",
      "mrp": "19999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Orion</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹19999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6030</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604634817820240518153228",
      "images1": "/uploads/uploads/171604634817820240518153228",
      "images2": "/uploads/uploads/171604634852120240518153228",
      "images3": "/uploads/uploads/171604634812720240518153228",
      "images4": "/uploads/uploads/171604634870120240518153228",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cd419d8"
      },
      "Title": "boAt Aavante Bar 3100D",
      "color": "BLACK",
      "size": "NA",
      "storage": "",
      "selling_price": "319.99",
      "mrp": "24999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 3100D</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹24999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹319.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8823</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604646118520240518153421",
      "images1": "/uploads/uploads/171604646118520240518153421",
      "images2": "/uploads/uploads/171604646170820240518153421",
      "images3": "/uploads/uploads/171604646192920240518153421",
      "images4": "/uploads/uploads/171604646194920240518153421",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c97cddc"
      },
      "Title": "boAt Aavante Bar 1800 v2",
      "color": "BLACK",
      "size": "NA",
      "storage": "",
      "selling_price": "319.89",
      "mrp": "26999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 1800 v2</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹26999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹319.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8373</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604655618620240518153556",
      "images1": "/uploads/uploads/171604655618620240518153556",
      "images2": "/uploads/uploads/171604655634420240518153556",
      "images3": "/uploads/uploads/171604655686720240518153556",
      "images4": "/uploads/uploads/171604655684420240518153556",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c0c6994"
      },
      "Title": "boAt Aavante Bar 4000DA",
      "color": "BLACK",
      "size": "n",
      "storage": "",
      "selling_price": "299.49",
      "mrp": "24999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 4000DA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">n</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹24999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7675</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604673251220240518153852",
      "images1": "/uploads/uploads/171604673251220240518153852",
      "images2": "/uploads/uploads/171604673268220240518153852",
      "images3": "/uploads/uploads/171604673217320240518153852",
      "images4": "/uploads/uploads/171604673273520240518153852",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c7fee73"
      },
      "Title": "ACTIVA Lotus 5 Star 1200 mm BLDC Motor with Remote 4 Blade Ceiling Fan (ROSE WOOD, Pack of 1)",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "3999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ACTIVA Lotus 5 Star 1200 mm BLDC Motor with Remote 4 Blade Ceiling Fan (ROSE WOOD, Pack of 1)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7476</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604676192520240518153921",
      "images1": "/uploads/uploads/171604676192520240518153921",
      "images2": "/uploads/uploads/171604676124420240518153921",
      "images3": "/uploads/uploads/171604676172920240518153921",
      "images4": "/uploads/uploads/171604676194820240518153921",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c3a5cf4"
      },
      "Title": "boAt Aavante Bar 1750",
      "color": "BLACK",
      "size": "n",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "29999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 1750</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">n</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹29999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6981</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604684379520240518154043",
      "images1": "/uploads/uploads/171604684379520240518154043",
      "images2": "/uploads/uploads/171604684313520240518154043",
      "images3": "/uploads/uploads/171604684324720240518154043",
      "images4": "/uploads/uploads/171604684377920240518154043",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c4c9d03"
      },
      "Title": "APPLE 2022 MacBook AIR M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLXW3HN/A (13.6 Inch, Space Grey, 1.24",
      "color": "Mid Night,Silver,Space Grey",
      "size": "8GB/256GB",
      "storage": "",
      "selling_price": "459.79",
      "mrp": "93999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">APPLE 2022 MacBook AIR M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLXW3HN/A (13.6 Inch, Space Grey, 1.24</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Mid Night,Silver,Space Grey</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8GB/256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹93999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹459.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8348</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604689433620240518154134",
      "images1": "/uploads/uploads/171604689433620240518154134",
      "images2": "/uploads/uploads/171604689495620240518154134",
      "images3": "/uploads/uploads/171604689441120240518154134",
      "images4": "/uploads/uploads/171604689434320240518154134",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c48fe9c"
      },
      "Title": "boAt Aavante Bar 1200D",
      "color": "BLACK",
      "size": "n",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "27999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 1200D</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">n</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹27999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8794</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": ".",
      "images": "/uploads/uploads/171604693568120240518154215",
      "images1": "/uploads/uploads/171604693568120240518154215",
      "images2": "/uploads/uploads/171604693567820240518154215",
      "images3": "/uploads/uploads/171604693599720240518154215",
      "images4": "/uploads/uploads/171604693594520240518154215",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c5756ec"
      },
      "Title": "Cookwell Bullet Mixer Grinder 600 Watts",
      "color": "Black",
      "size": "5 Jar-3 Blade",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "2499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Cookwell Bullet Mixer Grinder 600 Watts</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">5 Jar-3 Blade</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7959</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "\nBrand\tCOOKWELL\nColour\tSilver\nSpecial Feature\tCompact\nProduct Dimensions\t14D x 14W x 30H Centimeters\nIncluded Components\tUser Manual, Blades, Jars, Mixer grinder\nStyle\tcountertop_blender\nRecommended Uses For Product\tBlending, Juices, Grinding\nPower Source\tCorded Electric\nNumber of Speeds\t2\nVoltage\t230 Volts   <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/18ea3664-1488-4188-8fdb-46d7a0ffa771.__CR0,0,1940,1200_PT0_SX970_V1___.jpg\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/43bf093e-0481-4075-8fdf-9afdac9ea475.__CR0,0,1940,1200_PT0_SX970_V1___.jpg\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/bd16bb01-ef81-4e94-87ef-b1319455449b.__CR0,0,1940,1200_PT0_SX970_V1___.jpg\" alt=\"Image 3\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/70b0ad88-4a5a-4a90-873e-93e083f65aa9.__CR0,0,1940,1200_PT0_SX970_V1___.jpg\" alt=\"Image 4\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/d432f86d-dec2-46ea-a38a-5d4c38300dbb.__CR0,0,1940,1200_PT0_SX970_V1___.jpg\" alt=\"Image 5\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171544377266320240511160932",
      "images1": "/uploads/uploads/171544377266320240511160932",
      "images2": "/uploads/uploads/171544377222720240511160932",
      "images3": "/uploads/uploads/171544377249120240511160932",
      "images4": "/uploads/uploads/171544377266320240511160932",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c950904"
      },
      "Title": "boAt Aavante Bar Orion Plus Bluetooth 2.1-Channel Soundbar with 160 W Signature Sound, BT v5.3, Multi-Compatibility, Attractive Design, EQ Modes & Master Remote Control(Midnight Black)",
      "color": "Black",
      "size": "160 W",
      "storage": "",
      "selling_price": "399.79",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar Orion Plus Bluetooth 2.1-Channel Soundbar with 160 W Signature Sound, BT v5.3, Multi-Compatibility, Attractive Design, EQ Modes & Master Remote Control(Midnight Black)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Boat Soundbar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">160 W</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6076</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "<img  width=\"100%\" alt=\"\" src=\"https://www.boat-lifestyle.com/cdn/shop/files/AB_Stark_dynamicleds_1x1_5e41873b-1382-4889-81dd-a7e4caa81004_1080x.jpg?v=1684404665\">\n<img  width=\"100%\" alt=\"\" src=\"https://www.boat-lifestyle.com/cdn/shop/files/AB_Stark_Starklysuperiorsound_1x1_89ac17f1-945a-4d45-9007-8bfb88983c85_1080x.jpg?v=1684404665\">\n<img  width=\"100%\" alt=\"\" src=\"https://www.boat-lifestyle.com/cdn/shop/files/AB_Stark_wallmountable_1x1_f8c6dc90-5be9-41f7-a86f-d87e734426c2_1080x.jpg?v=1684404665\">\n<img  width=\"100%\" alt=\"\" src=\"https://www.boat-lifestyle.com/cdn/shop/files/AB_Stark_Soundtailoredforyou_1x1_dd7204ff-1a46-438e-80d6-54888b785826_1080x.jpg?v=1684404657\">",
      "images": "/uploads/uploads/171552634520920240512150545",
      "images1": "/uploads/uploads/171552634520920240512150545",
      "images2": "/uploads/uploads/171552634588320240512150545",
      "images3": "/uploads/uploads/171552634549520240512150545",
      "images4": "/uploads/uploads/171552634525720240512150545",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c889e8a"
      },
      "Title": "PHILIPS Mixer Grinder 3-in-1 750 Watt (Mixer Grinder + Juicer + Food Processor) 4 Jar, (HL7707/01)",
      "color": "Black",
      "size": "750 Watt",
      "storage": "",
      "selling_price": "389.49",
      "mrp": "7699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">PHILIPS Mixer Grinder 3-in-1 750 Watt (Mixer Grinder + Juicer + Food Processor) 4 Jar, (HL7707/01)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">750 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7814</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "Motor Warranty: 5 Years; Product Warranty: 2 Years.Frequency : 50 Hz\nPowerful 750W motor with compact set-up fits most kitchen requirements and takes minimum storage space,with Gear Drive technology that supports food processing, Includes Mixer Grinder, ChefPro Bowl, Chutney Jar, Multipurpose Jar, Wet Jar, Pulp Extractor, chopping attachement, Fine shredding tool, Fine slicing tool, Grating tool and Kneading tool\nWattage: 750 W; Voltage: 230 V; Revolution: 20.000 rpm (max)\nNo of Jars: 4; Jar Size: ChefPro Jar (2.2 Litres), Wet Jar (1.5 L), Multipurpose Jar (1 Litre), Chutney Jar (0.5 Litre); Jar Material: Stainless Steel; Body Material: ABS; Blade Material: Stainless Steel; Speed Control: 3 Speed Control Motor + Pulse\nThis product does not require installation. Please allow the motor to cool for some time between product uses.\nLeak-proof jars, easy-to-assemble accessories, PowerChop for superior chopping and special disc inserts for slicing and shredding allows for finest mixing, grinding, chopping, grating, slicing and atta kneading\nBurning smell during first few usage is normal due to varnish coating on motor and will stop after few usage cycles. Your mixer grinder's powerful motor may make some noise. If the noise level/smell seem abnormal, please contact Customer Care.    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/8fdc3cb2-0bb6-443d-a221-78a227bebe77.__CR0,0,1464,625_PT0_SX1464_V1___.jpg\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/870af0e5-37fc-46ab-bc68-1af53a9710b0.__CR0,0,4043,2501_PT0_SX970_V1___.jpg\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b2abc021-8288-4a6e-afe7-705fb7360828.__CR0,0,4043,2501_PT0_SX970_V1___.jpg\" alt=\"Image 3\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/0cf3ac60-17fd-4535-816d-67e718729253.__CR0,0,4043,2501_PT0_SX970_V1___.jpg\" alt=\"Image 4\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/8a49dd94-3e7c-4246-b8a0-0bcc32dedc4e.__CR0,0,4043,2501_PT0_SX970_V1___.jpg\" alt=\"Image 5\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171544992492220240511175204",
      "images1": "/uploads/uploads/171544992492220240511175204",
      "images2": "/uploads/uploads/171544992435120240511175204",
      "images3": "/uploads/uploads/171544992473420240511175204",
      "images4": "/uploads/uploads/171544992471120240511175204",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c35e8f2"
      },
      "Title": "Faber Hob 4 Burner | Auto-Ignition | Spillage Proof | HOB SUPERIA HT904 BR AI | Concealed Chamber | Metal Knobs ",
      "color": "Black",
      "size": "4 Burner",
      "storage": "",
      "selling_price": "369.49",
      "mrp": "19599",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Faber Hob 4 Burner | Auto-Ignition | Spillage Proof | HOB SUPERIA HT904 BR AI | Concealed Chamber | Metal Knobs </td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Stove</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">4 Burner</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹19599</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹369.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6785</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "Tye: Toughened Black Glass, 7mm | Size: 90cm Width\nBurners Specifications: 4 Burners - 1 x 3.3 Kw , 1 x 2 Kw, 2 x 1.6 Kw | Burners Available in 70mm, 90mm and 110mm\nIgnition – In-built Auto Electric, DC1.5 V Operated | Spillage Proof and Flat Concelaed Chamber\nPremium Metal Knobs | Burner cap – Brass with Black coating | Used as Hob or a Hobtop\nWarranty: 5 Years on Burner & Glass and 1 Year Comprehensive      <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b8d03acd-7821-43a2-9cc6-4918cb357d04.__CR0,1,2337,723_PT0_SX970_V1___.png\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/fc6a306a-475e-4ec0-92d0-702934929fd1.__CR8,0,2318,717_PT0_SX970_V1___.png\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/5105a398-60f4-4274-8cd3-d15b4e0ad33e.__CR13,0,2305,713_PT0_SX970_V1___.png\" alt=\"Image 3\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171544944852620240511174408",
      "images1": "/uploads/uploads/171544944852620240511174408",
      "images2": "/uploads/uploads/171544944883020240511174408",
      "images3": "/uploads/uploads/171544944828120240511174408",
      "images4": "/uploads/uploads/171544944867220240511174408",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c49b555"
      },
      "Title": "Larah by Borosil Blue Eve Silk Series Opalware Dinner Set | 35 Pieces for Family of 6 | Microwave & Dishwasher Safe | Bone-Ash Free | Crockery Set for Dining & Gifting | Plates & Bowls | White",
      "color": "White",
      "size": "Full Set",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "3499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Larah by Borosil Blue Eve Silk Series Opalware Dinner Set | 35 Pieces for Family of 6 | Microwave & Dishwasher Safe | Bone-Ash Free | Crockery Set for Dining & Gifting | Plates & Bowls | White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Home-Appliance</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Full Set</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7588</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "BONE-ASH FREE, 100% VEGETARIAN DINNER SET: Our entire dinner sets range are thoughtfully crafted to be completely free of any animal-derived components. Unlike traditional dinner sets, our products do not contain any bone-ash, making them the perfect choice for strict vegetarians. Enjoy your meals with peace of mind, knowing that our dinner set is truly vegetarian-friendly.\nMICROWAVE-SAFE & CHIP-RESISTANT: Elevate your everyday dining experience with the Larah Dinner Set. Crafted with durable toughened opalware glass, this set is designed for dailyuse without chipping. It's microwave-safe you can heat your meals directly on the plates. Upgrade your dinnerware collection and enjoy the perfect blend of style, durability with Dinner Set.\nSTAIN-RESISTANT & DISHWASHER-SAFE: Experience effortless cleaning with the Larah opalware dinner set. Designed to be stain-resistant, these sets ensure that no remnants of your last meal linger in the form of stains or smells. They are dishwasher-safe. Upgrade your dining experience with Larah by Borosil and enjoy hassle-free maintenance. Make every meal a delightful and pristine affair.\nLIGHTWEIGHT & STACKABLE - Experience the perfect balance of practicality and style with our dinner sets. Designed with space-saving in mind, they are lightweight and stackable, making them easy to use and store. Our dinnerware is scratch-resistant, ensuring it maintains its pristine appearance no matter how frequently it is used.     <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/348ceadb-0e38-424c-a43e-afa8a292b764.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image\" style=\"width: 100% !important;\">\n</body>",
      "images": "/uploads/uploads/171544779485520240511171634",
      "images1": "/uploads/uploads/171544779485520240511171634",
      "images2": "/uploads/uploads/171544779487320240511171634",
      "images3": "/uploads/uploads/171544779478820240511171634",
      "images4": "/uploads/uploads/171544779428720240511171634",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c0abed2"
      },
      "Title": "Crompton Ozone 88 Litres Desert Air Cooler for home | Large & Easy Clean Ice Chamber | 4-Way Air Deflection | High Density Honeycomb Pads | Everlast Pump | Auto Fill",
      "color": "White",
      "size": "55L,75L,88L",
      "storage": "",
      "selling_price": "389.89",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Crompton Ozone 88 Litres Desert Air Cooler for home | Large & Easy Clean Ice Chamber | 4-Way Air Deflection | High Density Honeycomb Pads | Everlast Pump | Auto Fill</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Cooler</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">55L,75L,88L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8123</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "PRODUCT: Crompton's high performance portable desert air cooler with wood wool cooling pads and 3-way speed settings for air speed control\nTECHNICAL SPECIFICATIONS: Capacity 75 L; Air delivery 4200 CMH; Air throw 52 ft.; Power 190 W; Operating voltage 230 V; Dimensions : 61 x 40.5 x 120 cm; Suitable for upto 550 sq. ft.Empty Tank Alarm : No\nENHANCED AIR FLOW AND COOLING: Motorized and auto-swing louvres for 4-way air deflection; Water level indicator for easy monitoring\nINVERTER CAPABILITY: Relatively lower power requirement; Can run on inverter power\nDURABLE: Rust-free body with smooth, easy to clean exteriors\nPACKAGE CONTENTS: 1 unit of Crompton Air Cooler, Instructions Manual and Warranty Card\nWARRANTY: 1 year provided by Crompton from date of purchase.\nCooler is manual, No remote control is present\nNo trolly is present  <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/431c43b2-494e-4b08-97a0-d193e968627d.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/8715c673-b7c0-43bb-8cb7-cce48368f9af.__CR0,0,970,600_PT0_SX970_V1___.png\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/0d9f71e6-0500-46bf-9fdb-3e4525e0344a.__CR0,0,1100,1100_PT0_SX220_V1___.jpg\" alt=\"Image 3\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/61e8cd4f-2925-4fd3-ae7d-0a181ea4cdc1.__CR0,0,1100,1100_PT0_SX220_V1___.jpg\" alt=\"Image 4\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b3fd0721-69da-4708-b8d4-9f6406f8394f.__CR0,0,1100,1100_PT0_SX220_V1___.jpg\" alt=\"Image 5\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/832a4753-2104-42ac-bbb3-574839be2112.__CR0,0,1100,1100_PT0_SX220_V1___.jpg\" alt=\"Image 6\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171544757120120240511171251",
      "images1": "/uploads/uploads/171544757120120240511171251",
      "images2": "/uploads/uploads/171544757126420240511171251",
      "images3": "/uploads/uploads/171544757165120240511171251",
      "images4": "/uploads/uploads/171544757171920240511171251",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c329f24"
      },
      "Title": "atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote",
      "color": "Brown & Black",
      "size": "1200mm",
      "storage": "",
      "selling_price": "355.79",
      "mrp": "3699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Fan</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Brown & Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1200mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹355.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8052</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "ENERGY EFFICIENT BLDC TECHNOLOGY: Atomberg Renesa comes with an energy efficient BLDC motor. This 5-star rated fan provides a superior air delivery of 235 CMM with 360 RPM while consuming only 28W (at speed 5), saving up to 65% in electricity consumption.\nADDED CONVENIENCE OF REMOTE: Atomberg Renesa fan comes with a Smart IR Remote. IR remotes are easy to use without the hassle of pairing. Adjust the fan's speed or activate its unique features like boost mode, timer, or sleep mode at the click of a button.\nSLEEK & UNIQUE DESIGN: Atomberg Renesa has a sleek and modern design with LED lights that elevates the decor of your room.\nBLADE FINISH: Powder Coated Matte Finish\n2+1 YEAR WARRANTY: Atomberg Renesa ceiling fan comes with a standard two-year warranty. An additional one-year warranty can be availed of by registering your purchase on the Atomberg website.\nCONSISTENT SPEED EVEN AT LOW VOLTAGE: Atomberg Renesa ceiling fan runs with no drop in speed during voltage fluctuations ranging between 165V-285V, thereby maintaining consistency. It runs 3X longer on an inverter battery when compared to ordinary fans, allowing you to enjoy consistent airflow even during power outages.\nEASY INSTALLATION: Easy doorstep installation can be initiated through Urban Company OR through Atomberg directly. For installation through Urban Company, simply book an installation visit through the Urban Company app which also allows easy rescheduling, cancellation of service requests, and also allows service tracking.   <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/7a26dd40-c4c1-413a-877e-c9d5d6ca3eaa.__CR0,0,2426,1501_PT0_SX970_V1___.jpg\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/df2ade1b-3b1f-4082-a90f-56cb65bcaba4.__CR0,0,1940,600_PT0_SX970_V1___.jpg\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/a805702c-d3c8-4f68-bd78-5e9e1ecc24c5.__CR0,0,2426,1501_PT0_SX970_V1___.jpg\" alt=\"Image 3\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171544873472220240511173214",
      "images1": "/uploads/uploads/171544873472220240511173214",
      "images2": "/uploads/uploads/171544873467120240511173214",
      "images3": "/uploads/uploads/171544873425920240511173214",
      "images4": "/uploads/uploads/171544873418420240511173214",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cace2c2"
      },
      "Title": "APPLE iPhone 15 Pro Max ",
      "color": "Natural Titanium,Blue Titanium,White Titanium,Black Titanium",
      "size": "256GB,512GB,1TB",
      "storage": "",
      "selling_price": "399.79",
      "mrp": "159900",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">APPLE iPhone 15 Pro Max </td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Natural Titanium,Blue Titanium,White Titanium,Black Titanium</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">256GB,512GB,1TB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹159900</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7874</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.\nADVANCED DISPLAY — The 6.7” Super Retina XDR display with ProMotion ramps up refresh rates to 120Hz when you need exceptional graphics performance. Dynamic Island bubbles up alerts and Live Notifications. Plus, with Always-On display, your Lock Screen stays glanceable, so you don’t have to tap it to stay in the know.\nGAME-CHANGING A17 PRO CHIP — A Pro-class GPU makes mobile games feel so immersive, with rich environments and realistic characters. A17 Pro is also incredibly efficient and helps to deliver amazing all-day battery life.\nPOWERFUL PRO CAMERA SYSTEM — Get incredible framing flexibility with 7 pro lenses. Capture super high-resolution photos with more color and detail using the 48MP Main camera. And take sharper close-ups from farther away with the 5x Telephoto camera on iPhone 15 Pro Max.\nCUSTOMIZABLE ACTION BUTTON — Action button is a fast track to your favorite feature. Just set the one you want, like Silent mode, Camera, Voice Memo, Shortcut, and more. Then press and hold to launch the action.<video width=\"100%\" controls autoplay muted>\n  <source src=\"https://bestbuy.dealszone.live/assets1/video/iphone15.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video> <img  width=\"100%\" alt=\"\" src=\"https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River15pro/R1AEBB1._CB575355692_.jpg\">\n<img  width=\"100%\" alt=\"\" src=\"https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River15pro/R1809_4._CB575355692_.jpg\">\n<img  width=\"100%\" alt=\"\" src=\"https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River15pro/R1809_3._CB575355692_.jpg\">\n<img  width=\"100%\" alt=\"\" src=\"https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River15pro/R12EBB1._CB575355692_.jpg\">",
      "images": "/uploads/uploads/171544186911120240511153749",
      "images1": "/uploads/uploads/171544186911120240511153749",
      "images2": "/uploads/uploads/171544186991920240511153749",
      "images3": "/uploads/uploads/171544186922420240511153749",
      "images4": "/uploads/uploads/171544186917220240511153749",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cbd95fc"
      },
      "Title": "Pigeon Healthifry Digital Air Fryer, 360? High Speed Air Circulation Technology 1200 W with Non-Stic",
      "color": "Black",
      "size": "Free Size",
      "storage": "",
      "selling_price": "379.79",
      "mrp": "3499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Pigeon Healthifry Digital Air Fryer, 360? High Speed Air Circulation Technology 1200 W with Non-Stic</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Air-Fryer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Free Size</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8142</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "\nSpecial Feature\tDigital\nProduct Dimensions\t30D x 22.9W x 29H Centimeters\nColour\tGreen\nCapacity\t4.2 litres\nMaterial\tStainless Steel, Plastic, Aluminium\nAbout this item\nBring your family together with the Pigeon HealthiFRY Digital Airfryer, the ultimate solution for healthier, faster, and more convenient cooking, creating delicious memories and fostering a love for wholesome cooking among all family members – enjoy guilt free healthy snacks!\n8 PRESET MENUS: Take the guesswork out of cooking with 8 pre-set menus - French Fries, Paneer Tikka, Samosa, Vegetable Roast, Pizza, Cutlets/Nuggets, Cakes, and Chips.\n360° HIGH-SPEED AIR CIRCULATION: Enjoy perfectly crispy and evenly cooked delicious snacks, thanks to the advanced 360° high-speed air circulation technology. USES 95% LESS OIL: Enjoy guilt-free indulgence with up to 95% less oil than traditional cooking methods\nDIGITAL DISPLAY: Easily select modes / menus and monitor cooking times and temperatures.\nDELAY START FUNCTION: Plan your meals ahead of time - Simply set the timer and let the HealthiFRY work its magic while you attend to other tasks.\nDEFROST FUNCTION: Quickly and safely thaws frozen foods, so you can cook without delay.\nPOWERFUL 1200W MOTOR: Rapid heating and consistent air throw performance, so you can whip up delicious meals in no time.    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/ca8ded96-e559-4c3c-b273-22cb35672ffb.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 1\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/8eeb3dd7-b03f-4d85-89bf-c6ee86ca36af.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 2\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/3321aa8d-04b7-41dd-89a7-98cbb8ff2f72.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 3\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/dbf6766e-9a80-4a37-831c-b608d9de4dfa.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 4\" style=\"width: 100% !important;\">\n    <img src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b547ea99-5ad2-4863-899b-f459d6079dc3.__CR0,0,970,600_PT0_SX970_V1___.jpg\" alt=\"Image 5\" style=\"width: 100% !important;\">",
      "images": "/uploads/uploads/171551472130720240512115201",
      "images1": "/uploads/uploads/171551472130720240512115201",
      "images2": "/uploads/uploads/171551472159620240512115201",
      "images3": "/uploads/uploads/171551472140420240512115201",
      "images4": "/uploads/uploads/171551472193820240512115201",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665cf97655"
      },
      "Title": "Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage)",
      "color": "Titanium Black,Titanium Gray,Titanium Green,Titanium Violet",
      "size": "12+256 GB, 12+1 TB",
      "storage": "",
      "selling_price": "439.79",
      "mrp": "129999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Titanium Black,Titanium Gray,Titanium Green,Titanium Violet</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12+256 GB, 12+1 TB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹129999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹439.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8846</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "\nOS\t‎Android 14.0\nProduct Dimensions\t‎0.9 x 7.9 x 16.2 cm; 232 g\nBatteries\t‎1 Lithium Ion batteries required. (included)\nItem model number\t‎S928BZ\nWireless communication technologies\t‎Cellular\nConnectivity technologies\t‎Bluetooth, Wi-Fi, USB, NFC\nGPS\t‎True\nSpecial features\t‎Fast Charging Support, Dual SIM, Always On Display, Built-In GPS, Mobile Hotspot Capability\nOther display features\t‎Wireless\nDevice interface - primary\t‎Touchscreen with Stylus Support\nResolution\t‎QHD+ 3120 x 1440\nOther camera features\t‎Rear, Front\nAudio Jack\t‎USB Type C\nForm factor\t‎Bar\nColour\t‎grey\nBattery Power Rating\t‎5000\nWhats in the box\t‎SIM Ejector Pin, Smartphone, Data Cable (Type C-to-C)\nManufacturer\t‎Samsung\nCountry of Origin\t‎India\nItem Weight\t‎232 g\nAdditional Information\nASIN\tB0CT5BKF4C\nCustomer Reviews\t4.3 4.3 out of 5 stars    135 ratings\n4.3 out of 5 stars\nDate First Available\t24 January 2024\nManufacturer\tSamsung, Samsung India Electronics Pvt. Ltd., 6th Floor, DLF Centre, Sansad Marg, New Delhi – 110001 Email us at: support.india@samsung.com Tel (Toll Free): 1800 40 7267864\nPacker\tSamsung India Electronics Pvt. Ltd., 6th Floor, DLF Centre, Sansad Marg, New Delhi – 110001 Email us at: support.india@samsung.com Tel (Toll Free): 1800 40 7267864\nImporter\tSamsung India Electronics Pvt. Ltd., 6th Floor, DLF Centre, Sansad Marg, New Delhi – 110001 Email us at: support.india@samsung.com Tel (Toll Free): 1800 40 7267864\nItem Dimensions LxWxH\t9 x 79 x 162 Millimeters\nNet Quantity\t1 Count\nGeneric Name\tSmartphone <video width=\"100%\" controls autoplay muted>\n  <source src=\"https://mobilesaleshubs.online/assets1/video/s24.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>  <img  width=\"100%\" alt=\"\" src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/fd1e6df5-5441-458b-a1e1-1014b3295558.__CR0,5,1464,600_PT0_SX1464_V1___.jpg\">\n<img  width=\"100%\" alt=\"\" src=\"https://m.media-amazon.com/images/S/aplus-media/vc/ea0dfe3b-c83f-497b-9604-95873cfa2500.__CR0,147,1920,787_PT0_SX1464_V1___.jpg\">\n<img  width=\"100%\" alt=\"\" src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/458590b4-f1b2-4f04-8186-21db5f5574a8.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\">\n<img  width=\"100%\" alt=\"\" src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/978d7680-ac62-46e1-843a-b653aa91e6c7.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\">\n<img  width=\"100%\" alt=\"\" src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/82215c9b-220b-4b10-8d40-21412833a857.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\">\n<img  width=\"100%\" alt=\"\" src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b6131bb2-1cae-4fdc-bdf0-6f1a2c81a4ec.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\">\n<img  width=\"100%\" alt=\"\" src=\"https://m.media-amazon.com/images/S/aplus-media-library-service-media/72897c28-5702-41e9-83e0-148325093d51.__CR0,0,1464,600_PT0_SX1464_V1___.jpg\">",
      "images": "/uploads/uploads/171544448153320240511162121",
      "images1": "/uploads/uploads/171544448153320240511162121",
      "images2": "/uploads/uploads/171544448176820240511162121",
      "images3": "/uploads/uploads/171544448189220240511162121",
      "images4": "/uploads/uploads/171544448153320240511162121",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c3d966a"
      },
      "Title": "Butterfly Smart Glass 3 Burner Gas Stove, Black, Manual Ignition",
      "color": "Black",
      "size": "3-Burner",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "6499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Butterfly Smart Glass 3 Burner Gas Stove, Black, Manual Ignition</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Stove</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">3-Burner</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7789</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "\r\nColour\tBlack\r\nMaterial\tGlass\r\nSpecial Feature\tGas\r\nBrand\tButterfly\r\nHeating Elements\t3\r\nAbout this item\r\nUnique toughened glass , Spill proof design. Wear Resistant : Yes\r\nProduct Dimensions: 67 x 34 x 11 cm\r\nHigh thermal efficiency\r\nBrass burner\r\nDesigner knobs\r\nUniquely designed pan support\r\n360 degree revolving nozzle\r\nEasy cleaning\r\nColor: Black, Material: Glass, Shape: Rectangle\r\nPackage Contents: Gas Stove, User Manual with Warranty Card. Warranty: 1 year manufacturer warranty. For further queries/issues, please Note: User manual has been attached below",
      "images": "/uploads/uploads/171551526891720240512120108",
      "images1": "/uploads/uploads/171551526891720240512120108",
      "images2": "/uploads/uploads/171551526844420240512120108",
      "images3": "/uploads/uploads/171551526829320240512120108",
      "images4": "/uploads/uploads/171551526841520240512120108",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6864665c944a2e"
      },
      "Title": "Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens (Black)",
      "color": "Black",
      "size": "18MP",
      "storage": "",
      "selling_price": "429.99",
      "mrp": "37999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens (Black)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Camera</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">18MP</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹37999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹429.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8385</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "product_desc": "Brand\t‎Canon\nManufacturer\t‎Canon Inc., value:No.18, Chen Kuo Road, Tan Tzu Dist, Taichung City, Taiwan\nModel\t‎200DIIKIS\nModel Name\t‎EOS\nModel Year\t‎2019\nProduct Dimensions\t‎30.99 x 17.73 x 23.49 cm; 450 g\nBatteries\t‎1 Lithium Metal batteries required. (included)\nMemory Storage Capacity\t‎16 GB\nMemory Slots Available\t‎1.0\nFlash memory type\t‎SDHC\nFlash type\t‎value:EF S18-45 IS II Lens, Strap, Battery Charger, Battery Pack, AC Cable\nHardware Interface\t‎Secure Digital Card\nResolution\t‎4K (3840x2160)\nSpecial Features\t‎Live ViewEye Detection\nMounting Hardware\t‎EF S18-45 IS II Lens, Strap, Battery Charger, Battery Pack, AC Cable\nNumber of items\t‎5\nDisplay Technology\t‎Vari Angle LCD\nStanding screen display size\t‎3 Inches\nDisplay Type\t‎LCD\nAperture Modes\t‎F4.0\nImage stabilization technology\t‎Optical\nHas Image Stabilisation\t‎Yes\nAspect Ratio\t‎4:3\nMaximum resolution\t‎24.1 MP\nOptical Sensor Resolution\t‎24.1 MP\nMaximum Shutter Speed\t‎1/4000 sec Seconds\nMinimum Shutter Speed\t‎30 Seconds\nMin Focal Length\t‎18 Millimeters\nVideo Capture Resolution\t‎2160p\nVoltage\t‎230 Volts\nBattery Description\t‎Lithium Ion\nBatteries Included\t‎Yes\nBatteries Required\t‎Yes\nBattery cell composition\t‎Lithium Ion\nContinuous Shooting Speed\t‎5 fps\nConnector Type\t‎Wi-Fi\nDevice interface - primary\t‎Touchscreen, Dial, Buttons\nMaterial\t‎Polycarbonate resin\nForm Factor\t‎DSLR\nDescription of flash modes\t‎value:Compatible with EX-series Speedlites\nLens type\t‎Ultra Wide Angle, Telephoto\nMeasurement\t‎Evaluative\nMounting Type\t‎EF-S Mount\nViewfinder type\t‎Optical\nHas Auto Focus\t‎Yes\nIncludes Rechargeable Battery\t‎Yes\nIs there a timer?\t‎Yes\nIncludes AC Adapter\t‎Yes\nIncludes remote\t‎No\nManufacturer\t‎Canon Inc.\nCountry of Origin\t‎Taiwan\nImported By\t‎No.18, Chen Kuo Road, Tan Tzu Dist, Taichung City, Taiwan\nItem Weight\t‎450 g\nAdditional Information\nASIN\tB07RJWB548\nCustomer Reviews\t4.5 4.5 out of 5 stars    1,285 ratings\n4.5 out of 5 stars\nBest Sellers Rank\t#27,222 in Electronics (See Top 100 in Electronics)\n#4 in Digital SLR Cameras\nDate First Available\t17 May 2019\nPacker\tNo.18, Chen Kuo Road, Tan Tzu Dist, Taichung City, Taiwan\nImporter\tNo.18, Chen Kuo Road, Tan Tzu Dist, Taichung City, Taiwan\nItem Dimensions LxWxH\t31 x 17.7 x 23.5 Centimeters\nNet Quantity\t6 Unit\nGeneric Name\tDigital Camera",
      "images": "/uploads/uploads/171544034671320240511151226",
      "images1": "/uploads/uploads/171544034671320240511151226",
      "images2": "/uploads/uploads/171544034645420240511151226",
      "images3": "/uploads/uploads/171544034650420240511151226",
      "images4": "/uploads/uploads/171544034654720240511151226",
      "__v": 0
    }
  ],
  "timestamp": "2025-07-01T22:51:08.172Z",
  "count": 196
});
  const [products1, setProducts1] = useState({ pixelId: "" });

  useEffect(() => {
    fetchProducts1();
  }, []);
  const fetchProducts1 = async () => {
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
        const data = await response.json();
        localStorage.setItem("upi", data.upi.upi)
        setProducts1(data.pixelId);
      } else {
      }
    } catch (error) {
    }

  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(timer);
      } else {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Layout data={products1}>
        <div id="container" style={{ overflow: "hidden" }}>
          <div style={{ height: "100%" }} data-reactroot="">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    div {\n        font-size: 20px;\n        text-align: center;\n    }\n"
              }}
            />
            <div>
              <div className="_2dxSCm">
                <div className="_38U37R" style={{
                  backgroundColor: "#2874f0",
                }}>
                  <div>
                    <div className="_1FWdmb pt-2" style={{
                      backgroundColor: "#2874f0",
                      display: "flex",
                      justifyContent: "space-between"
                    }}>
                      <a className="_3NH1qf mx-4 my-2" style={{
                        display: "flex", width: "65%"
                      }}>
                        <svg fill="#FFF" height="36" viewBox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                        <a className="Z4_K_h mx-3" style={{ width: 85 }}>
                          <img
                            src="/uploads/Q18Ifxk.webp"
                            className="_31Y9yB"
                            style={{ width: 85 }}
                          />
                        </a>
                      </a>

                      <div className="_2WBW6z" />
                      <a href="#/mobile.html#" className="_3NH1qf">
                        <svg
                          width={16}
                          height={16}
                          className='mt-3'
                          viewBox="0 0 15 15"
                          xmlns="external452e452e452e452e452e.html?link=http://www.w3.org/2000/svg"
                        >
                          <g fill="#fff" fillRule="evenodd">
                            <path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804" />
                            <path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245" />
                            <path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066" />
                            <path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503" />
                            <path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516" />
                          </g>
                        </svg>
                        <span className="_2tVMo0">1</span>
                      </a>
                    </div>
                    <div>
                      <div className="_3QNhdh " id="guidSearch">
                        <div className="ORogdv ">
                          <div className="_1k9EoO ">
                            <div className="_2d36Hu">
                              <a href="#/mobile.html#search" className="search-div">
                                <input
                                  type=""
                                  className="_1eMB9R my-1"
                                  placeholder="Search for Products, Brands and More"
                                  defaultValue=""
                                  style={{
                                    width: "92%",
                                    fontSize: 14,
                                    padding: "7px 10px",
                                    margin: 3,
                                    border: "none",
                                    borderRadius: 5
                                  }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                  {bootstrap.map((item) => (
                    <Carousel.Item key={item.id} interval={4000}>
                      <img src={item.imageUrl} alt="slides" className='img-fluid' />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="_2rW-uM _3sgvr0 _1cVt6K _1CXxjX" >
                  <div className="_3LrtWH ">
                    <div className="_3QuZpZ dod-div">
                      <div className="dod-label"> Deals of the Day </div>
                      <div className="_1oETR8">
                        <div className="_1dZamR _2mmD4F">
                          <IoMdClock style={{ fontSize: 19 }} className='mx-2' />
                          <div id="test">
                            {Math.floor(time / 60)}:{time % 60}</div>
                        </div>
                      </div>
                    </div>
                    <div className="_3Nxu4r">
                      <button className="_1s54Jm btn-sale-is-live">SALE IS LIVE</button>
                    </div>
                  </div>
                </div>
                <img className="mobi-only w-100"  src="https://rukminim2.flixcart.com/fk-p-flap/800/311/image/6c789488d8064b86.jpg" />
                <div className='row' style={{ background: "#f1f2f4" }}>
                  {products.documents?.length > 0 ?
                    products.documents.flat(2)?.map((item, index) => {
                      return <ProductCard key={item.id} item={item} index={index} />;
                    }) : <>
                      <img className="mt-3" src={`https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg`} />
                    </>}

                </div>
              </div>
            </div>
          </div>
          <footer className="seofooter" id="seofooter"></footer>
        </div >
      </Layout>

    </>

  );
}

export default Home;
