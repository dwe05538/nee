import Layout from '@/componets/Layout';
import { useEffect, useState } from 'react';
import { items } from "../../public/Items.json";
import { Carousel } from "react-bootstrap";
import { IoMdClock } from "react-icons/io";
import Card from '@/componets/Card';
import ProductCard from '@/componets/Card';
import { inherits } from 'chart.js/src/helpers';
// import "bootstrap/dist/css/bootstrap.min.css";
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
  const [products, setProducts] = useState( [
    {
      "_id": {
        "$oid": "686443d0674ef3"
      },
      "Title": "15 Kg Tirupati Cottonseed Oil Tin",
      "color": "",
      "size": "15 KG",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "2425",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">15 Kg Tirupati Cottonseed Oil Tin</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Cottonseed Oil</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">15 KG</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2425</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">59%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">: Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above, : Shop Above ₹700 & Get Flat ₹100 Off</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8860</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/174731996381120250515143923",
      "images1": "/uploads/uploads/174731996381120250515143923",
      "images2": "/uploads/uploads/174731996368420250515143923",
      "images3": "/uploads/uploads/174731996344120250515143923",
      "images4": "/uploads/uploads/174731996364820250515143923",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d00b8538"
      },
      "Title": "boAt Aavante Bar 1550 Pro",
      "color": "BLACK",
      "size": "NA",
      "storage": "",
      "selling_price": "389.49",
      "mrp": "22999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 1550 Pro</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Sound Bar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹22999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7462</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604665369220240518153733",
      "images1": "/uploads/uploads/171604665369220240518153733",
      "images2": "/uploads/uploads/171604665370620240518153733",
      "images3": "/uploads/uploads/171604665327820240518153733",
      "images4": "/uploads/uploads/171604665313520240518153733",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d064d885"
      },
      "Title": "Samsung 1.5 Ton 3 Star Wi-fi Enabled, Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Anti-bacterial Filter",
      "color": "White",
      "size": "1.5 Ton",
      "storage": "",
      "selling_price": "699.89",
      "mrp": "36990",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung 1.5 Ton 3 Star Wi-fi Enabled, Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Anti-bacterial Filter</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">AC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 Ton</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹36990</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹699.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7311</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171545004384120240511175403",
      "images1": "/uploads/uploads/171545004384120240511175403",
      "images2": "/uploads/uploads/171545004332420240511175403",
      "images3": "/uploads/uploads/171545004386320240511175403",
      "images4": "/uploads/uploads/171545004334220240511175403",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0b12fc3"
      },
      "Title": "4 Burner Butterfly Smart 4 Burner Glass Top Gas Stove | Manual Ignition | Scratch Resistant Toughened Glass | Brass Burners | Skid-proof Legs | 1 Year Manufacturer's Warranty | Black",
      "color": "1",
      "size": "4 Burner",
      "storage": "",
      "selling_price": "399.69",
      "mrp": "4599",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">4 Burner Butterfly Smart 4 Burner Glass Top Gas Stove | Manual Ignition | Scratch Resistant Toughened Glass | Brass Burners | Skid-proof Legs | 1 Year Manufacturer's Warranty | Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Gas Stove</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">1</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">4 Burner</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4599</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.69</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">93%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">9256</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/174854461330520250529185013",
      "images1": "/uploads/uploads/174854461330520250529185013",
      "images2": "/uploads/uploads/174854461353820250529185013",
      "images3": "/uploads/uploads/174854461315620250529185013",
      "images4": "/uploads/uploads/174854461358320250529185013",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0f50077"
      },
      "Title": "boAt Airdopes 701 ANC",
      "color": "BLACK",
      "size": "NA",
      "storage": "",
      "selling_price": "359.79",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Airdopes 701 ANC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Airdopes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹359.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8895</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604572657420240518152206",
      "images1": "/uploads/uploads/171604572657420240518152206",
      "images2": "/uploads/uploads/171604572613920240518152206",
      "images3": "/uploads/uploads/171604572677720240518152206",
      "images4": "/uploads/uploads/171604572683120240518152206",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d03964fe"
      },
      "Title": "Lifelong Mixer Grinder for Kitchen - 3 Jars 500 Watt Mixie - Chutney Jar, Dry Grinder Jar & Liquidizing Jar used as Wet Grinder & Blender for Milkshake, Smoothie, Puree -Stainless Steel Blades(LLMG23)",
      "color": "Black",
      "size": "500 Watt- 3 Jar",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Lifelong Mixer Grinder for Kitchen - 3 Jars 500 Watt Mixie - Chutney Jar, Dry Grinder Jar & Liquidizing Jar used as Wet Grinder & Blender for Milkshake, Smoothie, Puree -Stainless Steel Blades(LLMG23)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">500 Watt- 3 Jar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8843</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/174069179129020250227212951",
      "images1": "/uploads/uploads/174069179129020250227212951",
      "images2": "/uploads/uploads/174069179150120250227212951",
      "images3": "/uploads/uploads/174069179127820250227212951",
      "images4": "/uploads/uploads/174069179166420250227212951",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d081b6ee"
      },
      "Title": "iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods;",
      "color": "Desert Titanium,Natural Titanium,Blue Titanium,White Titanium,Black Titanium",
      "size": "256GB,512GB,1TB",
      "storage": "",
      "selling_price": "599.89",
      "mrp": "135900",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods;</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Desert Titanium,Natural Titanium,Blue Titanium,White Titanium,Black Titanium</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">256GB,512GB,1TB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹135900</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹599.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6962</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/174025355810520250222194558",
      "images1": "/uploads/uploads/174025355810520250222194558",
      "images2": "/uploads/uploads/174025355849020250222194558",
      "images3": "/uploads/uploads/174025355856820250222194558",
      "images4": "/uploads/uploads/174025355853220250222194558",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0d289b2"
      },
      "Title": "Prestige 750 Watts Iris Plus Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar)| 4 Super Efficient Stainless Blades|",
      "color": "Black",
      "size": "750 Watt-4 Jar",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "6899",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Prestige 750 Watts Iris Plus Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar)| 4 Super Efficient Stainless Blades|</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">750 Watt-4 Jar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6899</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">91%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7699</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/174069192685820250227213206",
      "images1": "/uploads/uploads/174069192685820250227213206",
      "images2": "/uploads/uploads/174069192635920250227213206",
      "images3": "/uploads/uploads/174069192693520250227213206",
      "images4": "/uploads/uploads/174069192647920250227213206",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d07d0389"
      },
      "Title": "Bajaj PX97 Torque New 36L Personal Air Cooler For Room| DuramarinePump| 3-Yr Warranty| TurboFan Technology| Powerful Air Throw| 3-Speed Control| Portable Air Cooler For Home| White",
      "color": "White",
      "size": "36L",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "6799",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Bajaj PX97 Torque New 36L Personal Air Cooler For Room| DuramarinePump| 3-Yr Warranty| TurboFan Technology| Powerful Air Throw| 3-Speed Control| Portable Air Cooler For Home| White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Cooler</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">36L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6799</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8632</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544750427720240511171144",
      "images1": "/uploads/uploads/171544750427720240511171144",
      "images2": "/uploads/uploads/171544750424520240511171144",
      "images3": "/uploads/uploads/171544750484420240511171144",
      "images4": "/uploads/uploads/171544750436320240511171144",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d056664b"
      },
      "Title": " Bajaj GX-1 Mixer Grinder 500W|Superior Mixie For Kitchen|2-in-1 for Dry Grinding| Blade Function With Titan Motor|3 Stainless Steel Mixer Jars|1 Year...",
      "color": "Black",
      "size": "500 Watt- 3 Jar",
      "storage": "",
      "selling_price": "379.79",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\"> Bajaj GX-1 Mixer Grinder 500W|Superior Mixie For Kitchen|2-in-1 for Dry Grinding| Blade Function With Titan Motor|3 Stainless Steel Mixer Jars|1 Year...</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">500 Watt- 3 Jar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7722</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/174069393062420250227220530",
      "images1": "/uploads/uploads/174069393062420250227220530",
      "images2": "/uploads/uploads/174069393076520250227220530",
      "images3": "/uploads/uploads/174069393044620250227220530",
      "images4": "/uploads/uploads/174069393057520250227220530",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d006fc84"
      },
      "Title": "Bajaj SWX 4 Deluxe 800-Watt 2-Slice Grill Sandwich Maker",
      "color": "Black",
      "size": "800-Watt ",
      "storage": "",
      "selling_price": "339.99",
      "mrp": "1699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Bajaj SWX 4 Deluxe 800-Watt 2-Slice Grill Sandwich Maker</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Sandwich Maker</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">800-Watt </td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹339.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6038</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171551567169520240512120751",
      "images1": "/uploads/uploads/171551567169520240512120751",
      "images2": "/uploads/uploads/171551567173220240512120751",
      "images3": "/uploads/uploads/171551567153120240512120751",
      "images4": "/uploads/uploads/171551567192820240512120751",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d01abd7a"
      },
      "Title": "Bosch TrueMixx Pro Mixer Grinder, 1000W 4 Jars Black MGM8842MIN",
      "color": "Black",
      "size": "1000 Watt",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "9000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Bosch TrueMixx Pro Mixer Grinder, 1000W 4 Jars Black MGM8842MIN</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1000 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">95%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6234</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/174069380715420250227220327",
      "images1": "/uploads/uploads/174069380715420250227220327",
      "images2": "/uploads/uploads/174069380785320250227220327",
      "images3": "/uploads/uploads/174069380727620250227220327",
      "images4": "/uploads/uploads/174069380768020250227220327",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d07502a8"
      },
      "Title": " NutriPro Juicer Mixer Grinder - Smoothie Maker - 500 Watts (2 Jar, Silver) - 2 Year Warranty",
      "color": "Silver",
      "size": "500 Watt-2 Jar",
      "storage": "",
      "selling_price": "389.79",
      "mrp": "6899",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\"> NutriPro Juicer Mixer Grinder - Smoothie Maker - 500 Watts (2 Jar, Silver) - 2 Year Warranty</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">500 Watt-2 Jar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6899</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7111</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/174069345262820250227215732",
      "images1": "/uploads/uploads/174069345262820250227215732",
      "images2": "/uploads/uploads/174069345268020250227215732",
      "images3": "/uploads/uploads/174069345252720250227215732",
      "images4": "/uploads/uploads/174069345293720250227215732",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d00a3494"
      },
      "Title": "Atomberg Zenova Mixer Grinder with Unique Coarse Mode | Advanced Safety Features | 4 Jars including Chopper Jar with Hands Free Operation (Red Wine)",
      "color": "Red Wine",
      "size": "550 Watt",
      "storage": "",
      "selling_price": "379.99",
      "mrp": "11999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Atomberg Zenova Mixer Grinder with Unique Coarse Mode | Advanced Safety Features | 4 Jars including Chopper Jar with Hands Free Operation (Red Wine)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Red Wine</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">550 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹11999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7005</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/174069209190520250227213451",
      "images1": "/uploads/uploads/174069209190520250227213451",
      "images2": "/uploads/uploads/174069209153020250227213451",
      "images3": "/uploads/uploads/174069209171720250227213451",
      "images4": "/uploads/uploads/174069209139920250227213451",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d04a7f58"
      },
      "Title": " Philips HL7756/01 750 Watt Mixer Grinder, 3 Stainless Steel Multipurpose Jars with 3 Speed Control and Pulse function (Black)",
      "color": "Black",
      "size": "750 Watt-3 Jar",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "9000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\"> Philips HL7756/01 750 Watt Mixer Grinder, 3 Stainless Steel Multipurpose Jars with 3 Speed Control and Pulse function (Black)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">750 Watt-3 Jar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6098</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/174069360330920250227220003",
      "images1": "/uploads/uploads/174069360330920250227220003",
      "images2": "/uploads/uploads/174069360353620250227220003",
      "images3": "/uploads/uploads/174069360310620250227220003",
      "images4": "/uploads/uploads/174069360383920250227220003",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d002dc88"
      },
      "Title": " Crompton DS 500 BLK 500-Watt Mixer Grinder with Powertron Motor & Motor Vent-X Technology (3 Stainless Steel Jars, Black & Grey)",
      "color": "Black",
      "size": "500 Watt- 3 Jar",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "9000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\"> Crompton DS 500 BLK 500-Watt Mixer Grinder with Powertron Motor & Motor Vent-X Technology (3 Stainless Steel Jars, Black & Grey)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">500 Watt- 3 Jar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7825</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/174069240359620250227214003",
      "images1": "/uploads/uploads/174069240359620250227214003",
      "images2": "/uploads/uploads/174069240320320250227214003",
      "images3": "/uploads/uploads/174069240356620250227214003",
      "images4": "/uploads/uploads/174069240361020250227214003",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0bd0f75"
      },
      "Title": "Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Black, 12GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life",
      "color": "Titanium Black,Titanium Blue,Titanium Gray,Titanium Silver",
      "size": "12GB RAM + 256GB Storage",
      "storage": "",
      "selling_price": "899.99",
      "mrp": "141999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Black, 12GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Titanium Black,Titanium Blue,Titanium Gray,Titanium Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12GB RAM + 256GB Storage</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹141999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹899.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6804</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/174025632878820250222203208",
      "images1": "/uploads/uploads/174025632878820250222203208",
      "images2": "/uploads/uploads/174025632843820250222203208",
      "images3": "/uploads/uploads/174025632899520250222203208",
      "images4": "/uploads/uploads/174025632818520250222203208",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d00a8943"
      },
      "Title": "Butterfly Rapid - 4J / Rapid 750 W Juicer Mixer Grinder (4 Jars, Black)",
      "color": "Black",
      "size": "Rapid 750 W ",
      "storage": "",
      "selling_price": "399.89",
      "mrp": "3999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Butterfly Rapid - 4J / Rapid 750 W Juicer Mixer Grinder (4 Jars, Black)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Rapid 750 W </td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7860</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544169538920240511153455",
      "images1": "/uploads/uploads/171544169538920240511153455",
      "images2": "/uploads/uploads/171544169583120240511153455",
      "images3": "/uploads/uploads/171544169591720240511153455",
      "images4": "/uploads/uploads/171544169580120240511153455",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d065eb75"
      },
      "Title": "boAt Lunar Connect Plus Smart Watch with 1.43\" AMOLED Display",
      "color": "Cherry Blossom, Active Black, Deep Blue",
      "size": "NA",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "2199",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Lunar Connect Plus Smart Watch with 1.43\" AMOLED Display</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Smart Watch</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Cherry Blossom, Active Black, Deep Blue</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2199</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7108</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604519598120240518151315",
      "images1": "/uploads/uploads/171604519598120240518151315",
      "images2": "/uploads/uploads/171604519532920240518151315",
      "images3": "/uploads/uploads/171604519532820240518151315",
      "images4": "/uploads/uploads/171604519526020240518151315",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0d7ef8e"
      },
      "Title": "vivo V27 5G (Magic Blue, 128 GB) (8 GB RAM)",
      "color": "Magic Blue",
      "size": "8+128 GB, 12+256GB",
      "storage": "",
      "selling_price": "599.89",
      "mrp": "25999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">vivo V27 5G (Magic Blue, 128 GB) (8 GB RAM)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Magic Blue</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8+128 GB, 12+256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹25999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹599.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8944</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544028344920240511151123",
      "images1": "/uploads/uploads/171544028344920240511151123",
      "images2": "/uploads/uploads/171544028386620240511151123",
      "images3": "/uploads/uploads/171544028374920240511151123",
      "images4": "/uploads/uploads/171544028324120240511151123",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d080913b"
      },
      "Title": "APPLE Watch SE GPS (2nd Gen) Heart Rate Monitor, Crash Detection, Sleep Tracking (Starlight Sport Strap, 40mm)",
      "color": "Space Gray,Star Light",
      "size": "40 MM,44 MM",
      "storage": "",
      "selling_price": "439.79",
      "mrp": "28999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">APPLE Watch SE GPS (2nd Gen) Heart Rate Monitor, Crash Detection, Sleep Tracking (Starlight Sport Strap, 40mm)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Watch</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Space Gray,Star Light</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">40 MM,44 MM</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹28999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹439.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8136</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544058228020240511151622",
      "images1": "/uploads/uploads/171544058228020240511151622",
      "images2": "/uploads/uploads/171544058217920240511151622",
      "images3": "/uploads/uploads/171544058242320240511151622",
      "images4": "/uploads/uploads/171544058278920240511151622",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d077a24b"
      },
      "Title": "APPLE Watch Ultra GPS + Cellular - ECG App, Temp sensor, Blood oxygen, Fall Detection (Orange Alpine Strap, Large)",
      "color": "Orange Alpine,Starlight Alpine",
      "size": "49 MM",
      "storage": "",
      "selling_price": "399.79",
      "mrp": "82998",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">APPLE Watch Ultra GPS + Cellular - ECG App, Temp sensor, Blood oxygen, Fall Detection (Orange Alpine Strap, Large)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Watch</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Orange Alpine,Starlight Alpine</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">49 MM</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹82998</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8103</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544082725720240511152027",
      "images1": "/uploads/uploads/171544082725720240511152027",
      "images2": "/uploads/uploads/171544082757620240511152027",
      "images3": "/uploads/uploads/171544082759420240511152027",
      "images4": "/uploads/uploads/171544082786120240511152027",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d05a7d21"
      },
      "Title": "boAt Rockerz 510 Super Extra Bass Bluetooth Headset (Raging Red, On the Ear)",
      "color": "Red",
      "size": "Free Size",
      "storage": "",
      "selling_price": "389.89",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Rockerz 510 Super Extra Bass Bluetooth Headset (Raging Red, On the Ear)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Rockerz</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Red</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Free Size</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8738</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544126243420240511152742",
      "images1": "/uploads/uploads/171544126243420240511152742",
      "images2": "/uploads/uploads/171544126298820240511152742",
      "images3": "/uploads/uploads/171544126264420240511152742",
      "images4": "/uploads/uploads/171544126250520240511152742",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d091dc98"
      },
      "Title": "Haier 240 L Frost Free Double Door 3 Star Convertible Refrigerator (Moon Silver, HEF-253GS-P)",
      "color": "Moon Silver",
      "size": "237L,240L",
      "storage": "",
      "selling_price": "599.49",
      "mrp": "25999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Haier 240 L Frost Free Double Door 3 Star Convertible Refrigerator (Moon Silver, HEF-253GS-P)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Refrigerator</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Moon Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">237L,240L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹25999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹599.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6092</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544136913420240511152929",
      "images1": "/uploads/uploads/171544136913420240511152929",
      "images2": "/uploads/uploads/171544136955420240511152929",
      "images3": "/uploads/uploads/171544136975020240511152929",
      "images4": "/uploads/uploads/171544136962920240511152929",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0475ab2"
      },
      "Title": "LG 9/5 kg with Wi-Fi EnabledAl Direct Drive Technology Ready to Wear Clothes Washer with Dryer with In-built Heater Silver",
      "color": "Silver",
      "size": "9 Kg",
      "storage": "",
      "selling_price": "499.99",
      "mrp": "59990",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">LG 9/5 kg with Wi-Fi EnabledAl Direct Drive Technology Ready to Wear Clothes Washer with Dryer with In-built Heater Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Washer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">9 Kg</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹59990</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7122</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544154517820240511153225",
      "images1": "/uploads/uploads/171544154517820240511153225",
      "images2": "/uploads/uploads/171544154568620240511153225",
      "images3": "/uploads/uploads/171544154549220240511153225",
      "images4": "/uploads/uploads/171544154591520240511153225",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0348517"
      },
      "Title": "atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote",
      "color": "White",
      "size": "1200mm",
      "storage": "",
      "selling_price": "306.89",
      "mrp": "3699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Fan</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1200mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹306.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8495</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544929290820240511174132",
      "images1": "/uploads/uploads/171544929290820240511174132",
      "images2": "/uploads/uploads/171544929287520240511174132",
      "images3": "/uploads/uploads/171544929240920240511174132",
      "images4": "/uploads/uploads/171544929252820240511174132",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d06f9fc7"
      },
      "Title": "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design (UA32T4380AKXXL)",
      "color": "Black",
      "size": "32 Inch",
      "storage": "",
      "selling_price": "379.99",
      "mrp": "17999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design (UA32T4380AKXXL)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">TV</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">32 Inch</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹17999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7304</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544198710820240511153947",
      "images1": "/uploads/uploads/171544198710820240511153947",
      "images2": "/uploads/uploads/171544198744920240511153947",
      "images3": "/uploads/uploads/171544198732520240511153947",
      "images4": "/uploads/uploads/171544198760920240511153947",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d056c9d1"
      },
      "Title": "SAMSUNG Galaxy S22 Ultra 5G (Phantom Black, 256 GB)  (12 GB RAM)",
      "color": "Phantom Black,Dark Red",
      "size": "8+128 GB, 12+256GB",
      "storage": "",
      "selling_price": "499.89",
      "mrp": "75999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">SAMSUNG Galaxy S22 Ultra 5G (Phantom Black, 256 GB)  (12 GB RAM)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Phantom Black,Dark Red</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8+128 GB, 12+256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹75999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8968</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544255685220240511154916",
      "images1": "/uploads/uploads/171544255685220240511154916",
      "images2": "/uploads/uploads/171544255663820240511154916",
      "images3": "/uploads/uploads/171544255621020240511154916",
      "images4": "/uploads/uploads/171544255685220240511154916",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d05fcd6e"
      },
      "Title": "APPLE AirPods Pro (2nd generation)",
      "color": "White",
      "size": "Free",
      "storage": "",
      "selling_price": "398.79",
      "mrp": "23499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">APPLE AirPods Pro (2nd generation)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Airpods</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Free</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹23499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹398.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8146</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544315285020240511155912",
      "images1": "/uploads/uploads/171544315285020240511155912",
      "images2": "/uploads/uploads/171544315235720240511155912",
      "images3": "/uploads/uploads/171544315264220240511155912",
      "images4": "/uploads/uploads/171544315254320240511155912",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0b33a8c"
      },
      "Title": "IBELL CLASSY P16 SB WHITE Pedestal Fan 5 Leaf with Remote and High Air Flow, 55W, LED Display, High",
      "color": "White",
      "size": "Free Size",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "3699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">IBELL CLASSY P16 SB WHITE Pedestal Fan 5 Leaf with Remote and High Air Flow, 55W, LED Display, High</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Fan</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Free Size</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8066</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544332667620240511160206",
      "images1": "/uploads/uploads/171544332667620240511160206",
      "images2": "/uploads/uploads/171544332613620240511160206",
      "images3": "/uploads/uploads/171544332644520240511160206",
      "images4": "/uploads/uploads/171544332637620240511160206",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0b6bba1"
      },
      "Title": "1 Ton 5 Star Wi-Fi Inverter Smart Split AC (Copper Condenser, 7 in 1 Convertible with True AI Mode, 4 Way Swing, PM 0.1 Air Purification Filter, Matter Certified, 2024 Model, White)",
      "color": "White",
      "size": "1 Ton",
      "storage": "",
      "selling_price": "599.99",
      "mrp": "38990",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">1 Ton 5 Star Wi-Fi Inverter Smart Split AC (Copper Condenser, 7 in 1 Convertible with True AI Mode, 4 Way Swing, PM 0.1 Air Purification Filter, Matter Certified, 2024 Model, White)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">AC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1 Ton</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹38990</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹599.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7955</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544351980620240511160519",
      "images1": "/uploads/uploads/171544351980620240511160519",
      "images2": "/uploads/uploads/171544351968120240511160519",
      "images3": "/uploads/uploads/171544351993520240511160519",
      "images4": "/uploads/uploads/171544351913020240511160519",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0356350"
      },
      "Title": "Apple iPhone 15",
      "color": "Blue,Black,Pink,White",
      "size": "128GB,256GB",
      "storage": "",
      "selling_price": "499.89",
      "mrp": "59499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple iPhone 15</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Blue,Black,Pink,White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">128GB,256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹59499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6545</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544410265520240511161502",
      "images1": "/uploads/uploads/171544410265520240511161502",
      "images2": "/uploads/uploads/171544410213920240511161502",
      "images3": "/uploads/uploads/171544410253920240511161502",
      "images4": "/uploads/uploads/171544410279020240511161502",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d09f365d"
      },
      "Title": "Samsung Galaxy Z Fold5 5G AI Smartphone (Black, 12GB RAM, 512GB Storage)",
      "color": "Blue,Black,Beige",
      "size": "256GB,512GB",
      "storage": "",
      "selling_price": "699.99",
      "mrp": "164999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy Z Fold5 5G AI Smartphone (Black, 12GB RAM, 512GB Storage)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Blue,Black,Beige</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">256GB,512GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹164999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹699.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7765</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544470629120240511162506",
      "images1": "/uploads/uploads/171544470629120240511162506",
      "images2": "/uploads/uploads/171544470693320240511162506",
      "images3": "/uploads/uploads/171544470612620240511162506",
      "images4": "/uploads/uploads/171544470629220240511162506",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d06c9bd5"
      },
      "Title": "Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White with Chrome Deco Strip, GLS18I3FWAGC)",
      "color": "White",
      "size": "1.5 Ton",
      "storage": "",
      "selling_price": "449.89",
      "mrp": "37999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White with Chrome Deco Strip, GLS18I3FWAGC)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">AC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 Ton</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹37999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹449.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7634</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544634019520240511165220",
      "images1": "/uploads/uploads/171544634019520240511165220",
      "images2": "/uploads/uploads/171544634088820240511165220",
      "images3": "/uploads/uploads/171544634043320240511165220",
      "images4": "/uploads/uploads/171544634073620240511165220",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d04ee875"
      },
      "Title": "IFB 24 L Solo Microwave Oven (24PM2S, Silver, 69 Indian and Continental Auto Cook Recipes)",
      "color": "Black",
      "size": "24L",
      "storage": "",
      "selling_price": "429.99",
      "mrp": "6499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">IFB 24 L Solo Microwave Oven (24PM2S, Silver, 69 Indian and Continental Auto Cook Recipes)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Microwave Oven</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">24L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹429.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6161</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544762169520240511171341",
      "images1": "/uploads/uploads/171544762169520240511171341",
      "images2": "/uploads/uploads/171544762132320240511171341",
      "images3": "/uploads/uploads/171544762159420240511171341",
      "images4": "/uploads/uploads/171544762151620240511171341",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0d80541"
      },
      "Title": "Whirlpool 260 L (253D) Frost Free Triple-Door Refrigerator (FP 253D PROTTON ROY GERMAN STEEL(Z)",
      "color": "German Steel",
      "size": "260 L",
      "storage": "",
      "selling_price": "499.49",
      "mrp": "26299",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Whirlpool 260 L (253D) Frost Free Triple-Door Refrigerator (FP 253D PROTTON ROY GERMAN STEEL(Z)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Refrigerator</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">German Steel</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">260 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹26299</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6368</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544969919020240511174819",
      "images1": "/uploads/uploads/171544969919020240511174819",
      "images2": "/uploads/uploads/171544969914120240511174819",
      "images3": "/uploads/uploads/171544969913220240511174819",
      "images4": "/uploads/uploads/171544969954620240511174819",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0208213"
      },
      "Title": "Women Pink Messenger Bag - Extra Spacious (Pack of: 3)",
      "color": "Light Pink",
      "size": "Free Size",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "1499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Women Pink Messenger Bag - Extra Spacious (Pack of: 3)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Purse</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Light Pink</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Free Size</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8540</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171551453971020240512114859",
      "images1": "/uploads/uploads/171551453971020240512114859",
      "images2": "/uploads/uploads/171551453977720240512114859",
      "images3": "/uploads/uploads/171551453990720240512114859",
      "images4": "/uploads/uploads/171551453949520240512114859",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d092ddc4"
      },
      "Title": "Hawkins Contura Black XT Induction Compatible Inner Lid Aluminium Pressure Cooker, 3 Litre, Black (CXT30)",
      "color": "Black",
      "size": "3L,5L",
      "storage": "",
      "selling_price": "311.79",
      "mrp": "3699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Hawkins Contura Black XT Induction Compatible Inner Lid Aluminium Pressure Cooker, 3 Litre, Black (CXT30)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Home Appliance</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">3L,5L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹311.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8962</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171551544782920240512120407",
      "images1": "/uploads/uploads/171551544782920240512120407",
      "images2": "/uploads/uploads/171551544766420240512120407",
      "images3": "/uploads/uploads/171551544770620240512120407",
      "images4": "/uploads/uploads/171551544764320240512120407",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d097661b"
      },
      "Title": "Philips HR3705/10 300 Watt Lightweight Hand Mixer, Blender with 5 speed control settings, stainless steel accessories and 2 years warranty(black color)",
      "color": "Black",
      "size": "300 Watt",
      "storage": "",
      "selling_price": "309.49",
      "mrp": "2499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Philips HR3705/10 300 Watt Lightweight Hand Mixer, Blender with 5 speed control settings, stainless steel accessories and 2 years warranty(black color)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Hand Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">300 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹309.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6427</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171551584259720240512121042",
      "images1": "/uploads/uploads/171551584259720240512121042",
      "images2": "/uploads/uploads/171551584296120240512121042",
      "images3": "/uploads/uploads/171551584236920240512121042",
      "images4": "/uploads/uploads/171551584283720240512121042",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d05301f8"
      },
      "Title": "Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023",
      "color": "WHITE",
      "size": "1.5 TON",
      "storage": "",
      "selling_price": "499.89",
      "mrp": "30000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹30000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8454</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603609022320240518124130",
      "images1": "/uploads/uploads/171603609022320240518124130",
      "images2": "/uploads/uploads/171603609043320240518124130",
      "images3": "/uploads/uploads/171603609018520240518124130",
      "images4": "/uploads/uploads/171603609022320240518124130",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0374a39"
      },
      "Title": "Symphony Diet 12T Personal Tower Air Cooler for Home with Honeycomb Pad, Powerful Blower, i-Pure Tec",
      "color": "WHITE",
      "size": ".",
      "storage": "",
      "selling_price": "399.79",
      "mrp": "15000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Symphony Diet 12T Personal Tower Air Cooler for Home with Honeycomb Pad, Powerful Blower, i-Pure Tec</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6788</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603623610720240518124356",
      "images1": "/uploads/uploads/171603623610720240518124356",
      "images2": "/uploads/uploads/171603623659920240518124356",
      "images3": "/uploads/uploads/171603623667120240518124356",
      "images4": "/uploads/uploads/171603623610720240518124356",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0ddc070"
      },
      "Title": "Noise Buds Combat Z",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "4900",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Noise Buds Combat Z</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4900</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7892</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603623841520240518124358",
      "images1": "/uploads/uploads/171603623841520240518124358",
      "images2": "/uploads/uploads/171603623850920240518124358",
      "images3": "/uploads/uploads/171603623858420240518124358",
      "images4": "/uploads/uploads/171603623813420240518124358",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0715eb6"
      },
      "Title": "Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023",
      "color": "WHITE",
      "size": "1.5 TON",
      "storage": "",
      "selling_price": "589.79",
      "mrp": "32000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹32000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹589.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7855</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603632297320240518124522",
      "images1": "/uploads/uploads/171603632297320240518124522",
      "images2": "/uploads/uploads/171603632257420240518124522",
      "images3": "/uploads/uploads/171603632224520240518124522",
      "images4": "/uploads/uploads/171603632297320240518124522",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0404e4b"
      },
      "Title": "OnePlus Buds 3 TWS",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "4900",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">OnePlus Buds 3 TWS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4900</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6228</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603633965120240518124539",
      "images1": "/uploads/uploads/171603633965120240518124539",
      "images2": "/uploads/uploads/171603633973020240518124539",
      "images3": "/uploads/uploads/171603633969720240518124539",
      "images4": "/uploads/uploads/171603633912520240518124539",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0f5dae0"
      },
      "Title": "Crompton Ozone Desert Air Cooler- 55L; with Everlast Pump, Auto Fill, 4-Way Air Deflection and High",
      "color": "WHITE",
      "size": "55 LITRE",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "15000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Crompton Ozone Desert Air Cooler- 55L; with Everlast Pump, Auto Fill, 4-Way Air Deflection and High</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">55 LITRE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8643</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603638785720240518124627",
      "images1": "/uploads/uploads/171603638785720240518124627",
      "images2": "/uploads/uploads/171603638763720240518124627",
      "images3": "/uploads/uploads/171603638717620240518124627",
      "images4": "/uploads/uploads/171603638757220240518124627",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d001045b"
      },
      "Title": "Atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote | Upto 65% Energy Savi",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "339.49",
      "mrp": "3699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote | Upto 65% Energy Savi</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹339.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6160</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603642452920240518124704",
      "images1": "/uploads/uploads/171603642452920240518124704",
      "images2": "/uploads/uploads/171603642452920240518124704",
      "images3": "/uploads/uploads/171603642452920240518124704",
      "images4": "/uploads/uploads/171603642452920240518124704",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0eff4c5"
      },
      "Title": "Hitachi 1 Ton Class 3 Star, ice Clean, Xpandable+, Inverter Split AC with 5 Year Comprehensive Warra",
      "color": "WHITE",
      "size": "1.0 TON",
      "storage": "",
      "selling_price": "499.79",
      "mrp": "30000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Hitachi 1 Ton Class 3 Star, ice Clean, Xpandable+, Inverter Split AC with 5 Year Comprehensive Warra</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.0 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹30000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6253</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603644021320240518124720",
      "images1": "/uploads/uploads/171603644021320240518124720",
      "images2": "/uploads/uploads/171603644059120240518124720",
      "images3": "/uploads/uploads/171603644072120240518124720",
      "images4": "/uploads/uploads/171603644021320240518124720",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0a7aa97"
      },
      "Title": "atomberg Renesa Enzel 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote | Upto 65% Energ",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "339.99",
      "mrp": "3699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">atomberg Renesa Enzel 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote | Upto 65% Energ</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹339.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6378</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603648885620240518124808",
      "images1": "/uploads/uploads/171603648885620240518124808",
      "images2": "/uploads/uploads/171603648885620240518124808",
      "images3": "/uploads/uploads/171603648885620240518124808",
      "images4": "/uploads/uploads/171603648885620240518124808",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0cd49b4"
      },
      "Title": "MILTON Ernesto Inner Stainless Steel Casserole Set of 3 (420 ml, 850 ml, 1.43 litres), Red | Easy to",
      "color": "DEFAULT",
      "size": "3",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "2000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">MILTON Ernesto Inner Stainless Steel Casserole Set of 3 (420 ml, 850 ml, 1.43 litres), Red | Easy to</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">3</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7908</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603652193620240518124841",
      "images1": "/uploads/uploads/171603652193620240518124841",
      "images2": "/uploads/uploads/171603652118320240518124841",
      "images3": "/uploads/uploads/171603652199620240518124841",
      "images4": "/uploads/uploads/171603652193620240518124841",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d08ce4a5"
      },
      "Title": "Havells 1200mm Stealth Prime BLDC BLDC Motor Ceiling Fan | Most Silent & Premium, 5 Star with RF Rem",
      "color": "DEFAULT",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "8000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Havells 1200mm Stealth Prime BLDC BLDC Motor Ceiling Fan | Most Silent & Premium, 5 Star with RF Rem</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8852</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603659243220240518124952",
      "images1": "/uploads/uploads/171603659243220240518124952",
      "images2": "/uploads/uploads/171603659243220240518124952",
      "images3": "/uploads/uploads/171603659243220240518124952",
      "images4": "/uploads/uploads/171603659243220240518124952",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d02bbeda"
      },
      "Title": "ACTIVA Gracia 1200 MM (28 Watts) BLDC Motor Fan With LED Light |Remote| 3 Blade Energy Saving Ceilin",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "349.79",
      "mrp": "2499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ACTIVA Gracia 1200 MM (28 Watts) BLDC Motor Fan With LED Light |Remote| 3 Blade Energy Saving Ceilin</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7020</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603662793620240518125027",
      "images1": "/uploads/uploads/171603662793620240518125027",
      "images2": "/uploads/uploads/171603662736920240518125027",
      "images3": "/uploads/uploads/171603662773420240518125027",
      "images4": "/uploads/uploads/171603662782820240518125027",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0572e0f"
      },
      "Title": "VINOD 25 Pcs Stainless Steel Cookware Set Induction Bottom Non-Stick Coated Cookware Set (Stainless",
      "color": "DEFAULT",
      "size": "25 pcs",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">VINOD 25 Pcs Stainless Steel Cookware Set Induction Bottom Non-Stick Coated Cookware Set (Stainless</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">25 pcs</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8714</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603667094620240518125110",
      "images1": "/uploads/uploads/171603667094620240518125110",
      "images2": "/uploads/uploads/171603667074420240518125110",
      "images3": "/uploads/uploads/171603667080020240518125110",
      "images4": "/uploads/uploads/171603667060420240518125110",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0c45db8"
      },
      "Title": "SUPER TOY Wireless Speaker with Colorful Light",
      "color": "MIX",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "3599",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">SUPER TOY Wireless Speaker with Colorful Light</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">MIX</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3599</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6385</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603672429520240518125204",
      "images1": "/uploads/uploads/171603672429520240518125204",
      "images2": "/uploads/uploads/171603672429520240518125204",
      "images3": "/uploads/uploads/171603672429520240518125204",
      "images4": "/uploads/uploads/171603672429520240518125204",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0180e7e"
      },
      "Title": "Havells 1200mm Stealth Air BLDC Motor Ceiling Fan",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "389.89",
      "mrp": "4900",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Havells 1200mm Stealth Air BLDC Motor Ceiling Fan</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4900</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6902</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603678292820240518125302",
      "images1": "/uploads/uploads/171603678292820240518125302",
      "images2": "/uploads/uploads/171603678279520240518125302",
      "images3": "/uploads/uploads/171603678268320240518125302",
      "images4": "/uploads/uploads/171603678266420240518125302",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d01461e7"
      },
      "Title": "IBELL 490GH HOB 3 Burner Glass Top Gas Stove with Auto Ignition, Toughened Glass",
      "color": "Black",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "379.89",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">IBELL 490GH HOB 3 Burner Glass Top Gas Stove with Auto Ignition, Toughened Glass</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7671</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603678779220240518125307",
      "images1": "/uploads/uploads/171603678779220240518125307",
      "images2": "/uploads/uploads/171603678779220240518125307",
      "images3": "/uploads/uploads/171603678779220240518125307",
      "images4": "/uploads/uploads/171603678779220240518125307",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d04d83c0"
      },
      "Title": "Crompton Optimus Desert Air Cooler- 65L; with 18?Fan, Everlast Pump, Large & Easy Clean Ice Chamber,",
      "color": "WHITE",
      "size": "65 L",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "13999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Crompton Optimus Desert Air Cooler- 65L; with 18?Fan, Everlast Pump, Large & Easy Clean Ice Chamber,</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">65 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹13999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8637</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603685276420240518125412",
      "images1": "/uploads/uploads/171603685276420240518125412",
      "images2": "/uploads/uploads/171603685275620240518125412",
      "images3": "/uploads/uploads/171603685295620240518125412",
      "images4": "/uploads/uploads/171603685276420240518125412",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d065b71e"
      },
      "Title": "Orient Electric Ultimo 50L Desert Air Cooler with Densenest Honeycomb pads, Ice chamber & High Air D",
      "color": "Black",
      "size": "50 L",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Orient Electric Ultimo 50L Desert Air Cooler with Densenest Honeycomb pads, Ice chamber & High Air D</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">50 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8066</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603689723020240518125457",
      "images1": "/uploads/uploads/171603689723020240518125457",
      "images2": "/uploads/uploads/171603689723020240518125457",
      "images3": "/uploads/uploads/171603689723020240518125457",
      "images4": "/uploads/uploads/171603689723020240518125457",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d063b75c"
      },
      "Title": "Maharaja Whiteline Rambo Ac-303 65 L Air Cooler, Standard, Grey And Black",
      "color": "WHITE",
      "size": "65 L",
      "storage": "",
      "selling_price": "379.89",
      "mrp": "13999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Maharaja Whiteline Rambo Ac-303 65 L Air Cooler, Standard, Grey And Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">65 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹13999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6532</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603695970520240518125559",
      "images1": "/uploads/uploads/171603695970520240518125559",
      "images2": "/uploads/uploads/171603695991020240518125559",
      "images3": "/uploads/uploads/171603695964420240518125559",
      "images4": "/uploads/uploads/171603695970520240518125559",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d02bc254"
      },
      "Title": "32L Wi-Fi enabled Bespoke Convection Microwave Oven, MC32B7382QC",
      "color": "Black",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "349.49",
      "mrp": "28999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">32L Wi-Fi enabled Bespoke Convection Microwave Oven, MC32B7382QC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹28999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6521</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603708152220240518125801",
      "images1": "/uploads/uploads/171603708152220240518125801",
      "images2": "/uploads/uploads/171603708118220240518125801",
      "images3": "/uploads/uploads/171603708152220240518125801",
      "images4": "/uploads/uploads/171603708152220240518125801",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d00ece9a"
      },
      "Title": "Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 256GB Storage)",
      "color": "Graphite,Mint,Phanton,Cream",
      "size": "12GB/256GB",
      "storage": "",
      "selling_price": "349.49",
      "mrp": "167000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 256GB Storage)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Graphite,Mint,Phanton,Cream</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12GB/256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹167000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8121</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603708680820240518125806",
      "images1": "/uploads/uploads/171603708680820240518125806",
      "images2": "/uploads/uploads/171603708671920240518125806",
      "images3": "/uploads/uploads/171603708673620240518125806",
      "images4": "/uploads/uploads/171603708641320240518125806",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d02f2eb7"
      },
      "Title": "32L, Masala & SunDry? Convection Microwave Oven, MC32K7056CR",
      "color": "Black",
      "size": "32 L",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "23999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">32L, Masala & SunDry? Convection Microwave Oven, MC32K7056CR</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">32 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹23999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8615</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603713099620240518125850",
      "images1": "/uploads/uploads/171603713099620240518125850",
      "images2": "/uploads/uploads/171603713020020240518125850",
      "images3": "/uploads/uploads/171603713099620240518125850",
      "images4": "/uploads/uploads/171603713099620240518125850",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0d68fef"
      },
      "Title": "Bespoke Jet Pet",
      "color": "DEFAULT",
      "size": ".",
      "storage": "",
      "selling_price": "289.89",
      "mrp": "17999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Bespoke Jet Pet</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹17999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6602</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603718554620240518125945",
      "images1": "/uploads/uploads/171603718554620240518125945",
      "images2": "/uploads/uploads/171603718521020240518125945",
      "images3": "/uploads/uploads/171603718554620240518125945",
      "images4": "/uploads/uploads/171603718554620240518125945",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d09890e8"
      },
      "Title": "Samsung Galaxy Z Flip3 5G (Cream, 8GB RAM, 128GB Storage) with No Cost EMI",
      "color": "Black,Cream",
      "size": "8GB/128GB",
      "storage": "",
      "selling_price": "349.49",
      "mrp": "37999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy Z Flip3 5G (Cream, 8GB RAM, 128GB Storage) with No Cost EMI</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black,Cream</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8GB/128GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹37999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8899</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603725031020240518130050",
      "images1": "/uploads/uploads/171603725031020240518130050",
      "images2": "/uploads/uploads/171603725029720240518130050",
      "images3": "/uploads/uploads/171603725061620240518130050",
      "images4": "/uploads/uploads/171603725073120240518130050",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d04945a1"
      },
      "Title": "Samsung Jet 70 Cordless Stick Vacuum Cleaner with 2-in-1 charging station",
      "color": "DEFAULT",
      "size": "5 FEET",
      "storage": "",
      "selling_price": "278.49",
      "mrp": "15999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Jet 70 Cordless Stick Vacuum Cleaner with 2-in-1 charging station</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">5 FEET</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹278.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7675</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603729472020240518130134",
      "images1": "/uploads/uploads/171603729472020240518130134",
      "images2": "/uploads/uploads/171603729411220240518130134",
      "images3": "/uploads/uploads/171603729453120240518130134",
      "images4": "/uploads/uploads/171603729472020240518130134",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0ef06c9"
      },
      "Title": "YNUR | INVERTER AC | 5 STAR | 1 TON",
      "color": "WHITE",
      "size": "1.0 TON",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "28999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">YNUR | INVERTER AC | 5 STAR | 1 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.0 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹28999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8738</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603735482420240518130234",
      "images1": "/uploads/uploads/171603735482420240518130234",
      "images2": "/uploads/uploads/171603735442720240518130234",
      "images3": "/uploads/uploads/171603735453020240518130234",
      "images4": "/uploads/uploads/171603735482420240518130234",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0857555"
      },
      "Title": "DCUHDAVS | INVERTER AC | 5 STAR | 1.5 TON",
      "color": "WHITE",
      "size": "1.5 TON",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "29999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">DCUHDAVS | INVERTER AC | 5 STAR | 1.5 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 TON</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹29999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6945</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603740678920240518130326",
      "images1": "/uploads/uploads/171603740678920240518130326",
      "images2": "/uploads/uploads/171603740660920240518130326",
      "images3": "/uploads/uploads/171603740687920240518130326",
      "images4": "/uploads/uploads/171603740678920240518130326",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d04b5d7d"
      },
      "Title": "MAXIMA (OA50MMA) | WINDOW COOLER | 50 LTRS",
      "color": "WHITE",
      "size": "50 L",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">MAXIMA (OA50MMA) | WINDOW COOLER | 50 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">50 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8318</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603746164920240518130421",
      "images1": "/uploads/uploads/171603746164920240518130421",
      "images2": "/uploads/uploads/171603746181820240518130421",
      "images3": "/uploads/uploads/171603746164920240518130421",
      "images4": "/uploads/uploads/171603746164920240518130421",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0f6a6ff"
      },
      "Title": "Apple iPhone 13 (256GB) - Pink",
      "color": "Star;ight,Pink,Blue,Green",
      "size": "128GB,256GB",
      "storage": "",
      "selling_price": "399.79",
      "mrp": "67800",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple iPhone 13 (256GB) - Pink</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Star;ight,Pink,Blue,Green</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">128GB,256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹67800</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8552</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603751649420240518130516",
      "images1": "/uploads/uploads/171603751649420240518130516",
      "images2": "/uploads/uploads/171603751699320240518130516",
      "images3": "/uploads/uploads/171603751667620240518130516",
      "images4": "/uploads/uploads/171603751690820240518130516",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0714da7"
      },
      "Title": "MAGNA (DA60EMA) | DESERT COOLER | 60 LTRS",
      "color": "DEFAULT",
      "size": "60 L",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "17999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">MAGNA (DA60EMA) | DESERT COOLER | 60 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">60 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹17999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6621</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603754565720240518130545",
      "images1": "/uploads/uploads/171603754565720240518130545",
      "images2": "/uploads/uploads/171603754546820240518130545",
      "images3": "/uploads/uploads/171603754585320240518130545",
      "images4": "/uploads/uploads/171603754565720240518130545",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0079e5a"
      },
      "Title": "MAXIMA (DA55PMA) | DESERT COOLER | 55 LTRS",
      "color": "WHITE",
      "size": "55 LITRE",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">MAXIMA (DA55PMA) | DESERT COOLER | 55 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">55 LITRE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6845</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603760196520240518130641",
      "images1": "/uploads/uploads/171603760196520240518130641",
      "images2": "/uploads/uploads/171603760176820240518130641",
      "images3": "/uploads/uploads/171603760112120240518130641",
      "images4": "/uploads/uploads/171603760196520240518130641",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d03bc988"
      },
      "Title": "Mivi Fort Q200 Soundbar with 200W Surround Sound, 2.1 Channel soundbar with",
      "color": "Default",
      "size": "200 Watt",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "49000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Mivi Fort Q200 Soundbar with 200W Surround Sound, 2.1 Channel soundbar with</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">200 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹49000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7469</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603761567820240518130655",
      "images1": "/uploads/uploads/171603761567820240518130655",
      "images2": "/uploads/uploads/171603761595720240518130655",
      "images3": "/uploads/uploads/171603761522020240518130655",
      "images4": "/uploads/uploads/171603761567820240518130655",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0a63c22"
      },
      "Title": "AURA DUO (DA80PMC) | DESERT COOLER | 80 LTRS",
      "color": "WHITE",
      "size": "80 L",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "15999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">AURA DUO (DA80PMC) | DESERT COOLER | 80 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">80 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8306</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603764641520240518130726",
      "images1": "/uploads/uploads/171603764641520240518130726",
      "images2": "/uploads/uploads/171603764685920240518130726",
      "images3": "/uploads/uploads/171603764641520240518130726",
      "images4": "/uploads/uploads/171603764641520240518130726",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d053fd5f"
      },
      "Title": "CELESTA (DA35LMA) | DESERT COOLER | 35 LTRS",
      "color": "DEFAULT",
      "size": "35 L",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "15999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">CELESTA (DA35LMA) | DESERT COOLER | 35 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">35 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6601</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603769191220240518130811",
      "images1": "/uploads/uploads/171603769191220240518130811",
      "images2": "/uploads/uploads/171603769158620240518130811",
      "images3": "/uploads/uploads/171603769191220240518130811",
      "images4": "/uploads/uploads/171603769191220240518130811",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0804fee"
      },
      "Title": "ZEBRONICS ZEB-Juke bar 9530WS Pro Dolby 5.1 340 W Bluetooth Soundbar (Black, 5.1 Channel)",
      "color": "Default",
      "size": "340 Watt",
      "storage": "",
      "selling_price": "249.49",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ZEBRONICS ZEB-Juke bar 9530WS Pro Dolby 5.1 340 W Bluetooth Soundbar (Black, 5.1 Channel)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">340 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8676</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603773547420240518130855",
      "images1": "/uploads/uploads/171603773547420240518130855",
      "images2": "/uploads/uploads/171603773578920240518130855",
      "images3": "/uploads/uploads/171603773539920240518130855",
      "images4": "/uploads/uploads/171603773547420240518130855",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d09f4dd3"
      },
      "Title": "ULTIMA (DA35MMA) | DESERT COOLER | 35 LTRS",
      "color": "WHITE",
      "size": "35 L",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "15999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ULTIMA (DA35MMA) | DESERT COOLER | 35 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">35 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6430</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603774327320240518130903",
      "images1": "/uploads/uploads/171603774327320240518130903",
      "images2": "/uploads/uploads/171603774338420240518130903",
      "images3": "/uploads/uploads/171603774327320240518130903",
      "images4": "/uploads/uploads/171603774327320240518130903",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d069d71e"
      },
      "Title": "AURA DUO (DA60PMC)| DESERT COOLER | 60 LTRS",
      "color": "WHITE",
      "size": "60 L",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">AURA DUO (DA60PMC)| DESERT COOLER | 60 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">60 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8094</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603777564720240518130935",
      "images1": "/uploads/uploads/171603777564720240518130935",
      "images2": "/uploads/uploads/171603777564720240518130935",
      "images3": "/uploads/uploads/171603777564720240518130935",
      "images4": "/uploads/uploads/171603777564720240518130935",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d071d93c"
      },
      "Title": "ASTRA (PA20MMA) | PERSONAL COOLER | 20 LTRS",
      "color": "WHITE",
      "size": "20 L",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ASTRA (PA20MMA) | PERSONAL COOLER | 20 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">20 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8916</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603782918520240518131029",
      "images1": "/uploads/uploads/171603782918520240518131029",
      "images2": "/uploads/uploads/171603782936220240518131029",
      "images3": "/uploads/uploads/171603782918520240518131029",
      "images4": "/uploads/uploads/171603782918520240518131029",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0b76090"
      },
      "Title": "ULTIMA (DA20MMA) | DESERT COOLER | 20 LTRS",
      "color": "MIX",
      "size": "20 L",
      "storage": "",
      "selling_price": "249.79",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ULTIMA (DA20MMA) | DESERT COOLER | 20 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">MIX</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">20 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6564</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603787550320240518131115",
      "images1": "/uploads/uploads/171603787550320240518131115",
      "images2": "/uploads/uploads/171603787550420240518131115",
      "images3": "/uploads/uploads/171603787561820240518131115",
      "images4": "/uploads/uploads/171603787550320240518131115",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d02aeb27"
      },
      "Title": "GOVO GOSURROUND 970 | 525W Soundbar,",
      "color": "Default",
      "size": "525 Watt",
      "storage": "",
      "selling_price": "249.49",
      "mrp": "11999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">GOVO GOSURROUND 970 | 525W Soundbar,</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">525 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹11999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8482</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603788512220240518131125",
      "images1": "/uploads/uploads/171603788512220240518131125",
      "images2": "/uploads/uploads/171603788544020240518131125",
      "images3": "/uploads/uploads/171603788564920240518131125",
      "images4": "/uploads/uploads/171603788549420240518131125",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0ccfe57"
      },
      "Title": "Symphony Diet 22T Portable Air Cooler For Home with Powerful Blower, Honeycomb Pads, i-Pure Technolo",
      "color": "WHITE",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "249.89",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Symphony Diet 22T Portable Air Cooler For Home with Powerful Blower, Honeycomb Pads, i-Pure Technolo</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6077</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603792561520240518131205",
      "images1": "/uploads/uploads/171603792561520240518131205",
      "images2": "/uploads/uploads/171603792546620240518131205",
      "images3": "/uploads/uploads/171603792523120240518131205",
      "images4": "/uploads/uploads/171603792561520240518131205",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d03a2e5f"
      },
      "Title": "AURA DUO (DA60PEC) | DESERT COOLER | 60 LTRS",
      "color": "WHITE",
      "size": "60 L",
      "storage": "",
      "selling_price": "269.89",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">AURA DUO (DA60PEC) | DESERT COOLER | 60 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">60 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹269.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6126</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603796419620240518131244",
      "images1": "/uploads/uploads/171603796419620240518131244",
      "images2": "/uploads/uploads/171603796419620240518131244",
      "images3": "/uploads/uploads/171603796419620240518131244",
      "images4": "/uploads/uploads/171603796419620240518131244",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d03e609b"
      },
      "Title": "boAt Aavante Bar 3600 Bluetooth Soundbar w/ 500W RMS Signature Sound,5.1 Channel",
      "color": "Default",
      "size": "500 Watt",
      "storage": "",
      "selling_price": "269.49",
      "mrp": "11999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 3600 Bluetooth Soundbar w/ 500W RMS Signature Sound,5.1 Channel</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">500 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹11999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹269.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7706</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603799776020240518131317",
      "images1": "/uploads/uploads/171603799776020240518131317",
      "images2": "/uploads/uploads/171603799783420240518131317",
      "images3": "/uploads/uploads/171603799772920240518131317",
      "images4": "/uploads/uploads/171603799769220240518131317",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d08b4320"
      },
      "Title": "Diet 3D 20i Tower Air Cooler 20-litres with Magnetic Full Function Remote",
      "color": "Black",
      "size": "20 L",
      "storage": "",
      "selling_price": "249.79",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Diet 3D 20i Tower Air Cooler 20-litres with Magnetic Full Function Remote</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">20 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7282</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603803435020240518131354",
      "images1": "/uploads/uploads/171603803435020240518131354",
      "images2": "/uploads/uploads/171603803445420240518131354",
      "images3": "/uploads/uploads/171603803435020240518131354",
      "images4": "/uploads/uploads/171603803435020240518131354",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d048eacb"
      },
      "Title": "Novamax 85 L AEON Honeycomb Cooling Evaporative Air Cooler",
      "color": "MIX",
      "size": "85 L",
      "storage": "",
      "selling_price": "289.79",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Novamax 85 L AEON Honeycomb Cooling Evaporative Air Cooler</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">MIX</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">85 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6006</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603807739920240518131437",
      "images1": "/uploads/uploads/171603807739920240518131437",
      "images2": "/uploads/uploads/171603807735420240518131437",
      "images3": "/uploads/uploads/171603807767020240518131437",
      "images4": "/uploads/uploads/171603807739920240518131437",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0ef6315"
      },
      "Title": "ZEBRONICS Juke BAR",
      "color": "Default",
      "size": "200 Watt",
      "storage": "",
      "selling_price": "289.89",
      "mrp": "11999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ZEBRONICS Juke BAR</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">200 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹11999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6585</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603810622120240518131506",
      "images1": "/uploads/uploads/171603810622120240518131506",
      "images2": "/uploads/uploads/171603810692620240518131506",
      "images3": "/uploads/uploads/171603810664120240518131506",
      "images4": "/uploads/uploads/171603810622120240518131506",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d01119cd"
      },
      "Title": "AURA DUO - DA90PEC",
      "color": "MIX",
      "size": "55 LITRE",
      "storage": "",
      "selling_price": "279.89",
      "mrp": "11999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">AURA DUO - DA90PEC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">MIX</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">55 LITRE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹11999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹279.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8059</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603811665820240518131516",
      "images1": "/uploads/uploads/171603811665820240518131516",
      "images2": "/uploads/uploads/171603811682520240518131516",
      "images3": "/uploads/uploads/171603811623620240518131516",
      "images4": "/uploads/uploads/171603811665820240518131516",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0bf2c7f"
      },
      "Title": "AURA NEO (DA60PMH) | DESERT COOLER | 60 LTRS",
      "color": "DEFAULT",
      "size": "60 L",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">AURA NEO (DA60PMH) | DESERT COOLER | 60 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">60 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6858</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603816269320240518131602",
      "images1": "/uploads/uploads/171603816269320240518131602",
      "images2": "/uploads/uploads/171603816246920240518131602",
      "images3": "/uploads/uploads/171603816258820240518131602",
      "images4": "/uploads/uploads/171603816269320240518131602",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d04db01b"
      },
      "Title": "MAXIMA (DB90PMA) | DESERT COOLER | 90 LTRS",
      "color": "WHITE",
      "size": "90 L",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "15999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">MAXIMA (DB90PMA) | DESERT COOLER | 90 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">90 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6775</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603821050620240518131650",
      "images1": "/uploads/uploads/171603821050620240518131650",
      "images2": "/uploads/uploads/171603821092220240518131650",
      "images3": "/uploads/uploads/171603821084520240518131650",
      "images4": "/uploads/uploads/171603821050620240518131650",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d09cbf42"
      },
      "Title": "JBL Cinema SB270 2.1",
      "color": "Default",
      "size": "200 Watt",
      "storage": "",
      "selling_price": "249.49",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">JBL Cinema SB270 2.1</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">200 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7006</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603823596120240518131715",
      "images1": "/uploads/uploads/171603823596120240518131715",
      "images2": "/uploads/uploads/171603823518020240518131715",
      "images3": "/uploads/uploads/171603823522420240518131715",
      "images4": "/uploads/uploads/171603823596820240518131715",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0b2e1d6"
      },
      "Title": "MAXIMA (DB75PMA) | DESERT COOLER | 75 LTRS",
      "color": "DEFAULT",
      "size": "75 L",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">MAXIMA (DB75PMA) | DESERT COOLER | 75 LTRS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">75 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6139</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603825476520240518131734",
      "images1": "/uploads/uploads/171603825476520240518131734",
      "images2": "/uploads/uploads/171603825442920240518131734",
      "images3": "/uploads/uploads/171603825489820240518131734",
      "images4": "/uploads/uploads/171603825476520240518131734",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d01e11f8"
      },
      "Title": "OnePlus Nord Buds",
      "color": "DEFAULT",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "329.89",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">OnePlus Nord Buds</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹329.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8601</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603831563820240518131835",
      "images1": "/uploads/uploads/171603831563820240518131835",
      "images2": "/uploads/uploads/171603831571320240518131835",
      "images3": "/uploads/uploads/171603831514020240518131835",
      "images4": "/uploads/uploads/171603831578620240518131835",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d05b8c6d"
      },
      "Title": "High Efficiency Honeycomb Pad With Anti-Microbial Property",
      "color": "249",
      "size": "65 L",
      "storage": "",
      "selling_price": "289.89",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">High Efficiency Honeycomb Pad With Anti-Microbial Property</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">249</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">65 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6173</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603835915820240518131919",
      "images1": "/uploads/uploads/171603835915820240518131919",
      "images2": "/uploads/uploads/171603835910520240518131919",
      "images3": "/uploads/uploads/171603835995920240518131919",
      "images4": "/uploads/uploads/171603835915820240518131919",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0dcefc0"
      },
      "Title": "Boult Audio Z60 Truly Wireless in Ear Earbuds",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "229.79",
      "mrp": "1299",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Boult Audio Z60 Truly Wireless in Ear Earbuds</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1299</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹229.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6875</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603841364920240518132013",
      "images1": "/uploads/uploads/171603841364920240518132013",
      "images2": "/uploads/uploads/171603841373020240518132013",
      "images3": "/uploads/uploads/171603841394620240518132013",
      "images4": "/uploads/uploads/171603841394820240518132013",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0ca6a61"
      },
      "Title": "boAt Ultima Chronos with 1.96\" AMOLED",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "259.89",
      "mrp": "2799",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Ultima Chronos with 1.96\" AMOLED</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2799</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹259.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6081</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603855576120240518132235",
      "images1": "/uploads/uploads/171603855576120240518132235",
      "images2": "/uploads/uploads/171603855552820240518132235",
      "images3": "/uploads/uploads/171603855562520240518132235",
      "images4": "/uploads/uploads/171603855563320240518132235",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d09664e8"
      },
      "Title": "Apple iPhone 11 ( 128 GB)",
      "color": "Black, Green, Yellow, Purple, RED, White",
      "size": "64 GB, 128 GB",
      "storage": "",
      "selling_price": "429.99",
      "mrp": "49999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple iPhone 11 ( 128 GB)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black, Green, Yellow, Purple, RED, White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">64 GB, 128 GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹49999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹429.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8674</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603866061320240518132420",
      "images1": "/uploads/uploads/171603866061320240518132420",
      "images2": "/uploads/uploads/171603866031920240518132420",
      "images3": "/uploads/uploads/171603866083120240518132420",
      "images4": "/uploads/uploads/171603866032720240518132420",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d03f0c5a"
      },
      "Title": "atomberg Renesa Enzel 1200mm",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "279.89",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">atomberg Renesa Enzel 1200mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹279.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8077</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603866144620240518132421",
      "images1": "/uploads/uploads/171603866144620240518132421",
      "images2": "/uploads/uploads/171603866134420240518132421",
      "images3": "/uploads/uploads/171603866123420240518132421",
      "images4": "/uploads/uploads/171603866196820240518132421",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d066fbcd"
      },
      "Title": "JBW Men's Phantom 1.00 ctw Diamond Chronograph",
      "color": "GOLD",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "359.89",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">JBW Men's Phantom 1.00 ctw Diamond Chronograph</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">GOLD</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹359.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6399</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603871353420240518132513",
      "images1": "/uploads/uploads/171603871353420240518132513",
      "images2": "/uploads/uploads/171603871353420240518132513",
      "images3": "/uploads/uploads/171603871353420240518132513",
      "images4": "/uploads/uploads/171603871353420240518132513",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0fb9238"
      },
      "Title": "Hindware 85 L Desert Air Cooler",
      "color": "Default",
      "size": "85L",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Hindware 85 L Desert Air Cooler</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">85L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6893</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603884624420240518132726",
      "images1": "/uploads/uploads/171603884624420240518132726",
      "images2": "/uploads/uploads/171603884638020240518132726",
      "images3": "/uploads/uploads/171603884648920240518132726",
      "images4": "/uploads/uploads/171603884624420240518132726",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0153c80"
      },
      "Title": "IZI Mini X Nano 4K Camera Drone UHD 20MP, CMOS, 4KM Live Video, 31-min Flight Time, GPS, 3-Axis Stab",
      "color": "GREEN",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "359.89",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">IZI Mini X Nano 4K Camera Drone UHD 20MP, CMOS, 4KM Live Video, 31-min Flight Time, GPS, 3-Axis Stab</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">GREEN</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹359.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7389</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603891448920240518132834",
      "images1": "/uploads/uploads/171603891448920240518132834",
      "images2": "/uploads/uploads/171603891448920240518132834",
      "images3": "/uploads/uploads/171603891448920240518132834",
      "images4": "/uploads/uploads/171603891448920240518132834",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d06ac026"
      },
      "Title": "Bajaj DMH 90 Neo 90L",
      "color": "Default",
      "size": "90L",
      "storage": "",
      "selling_price": "379.79",
      "mrp": "18399",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Bajaj DMH 90 Neo 90L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">90L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹18399</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6349</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603896617620240518132926",
      "images1": "/uploads/uploads/171603896617620240518132926",
      "images2": "/uploads/uploads/171603896653020240518132926",
      "images3": "/uploads/uploads/171603896657420240518132926",
      "images4": "/uploads/uploads/171603896678120240518132926",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0c7abb0"
      },
      "Title": "JioBook 11 (2023) NB1112MM(BLU) (Mediatek 8788 Octa-core 2 GHz/ARM Mali G72 MP3 @800 MHz/29.5cms 60",
      "color": "\tJioBlue",
      "size": "11.6 Inches",
      "storage": "",
      "selling_price": "349.79",
      "mrp": "24999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">JioBook 11 (2023) NB1112MM(BLU) (Mediatek 8788 Octa-core 2 GHz/ARM Mali G72 MP3 @800 MHz/29.5cms 60</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">\tJioBlue</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">11.6 Inches</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹24999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6135</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603899487220240518132954",
      "images1": "/uploads/uploads/171603899487220240518132954",
      "images2": "/uploads/uploads/171603899489920240518132954",
      "images3": "/uploads/uploads/171603899451220240518132954",
      "images4": "/uploads/uploads/171603899487220240518132954",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d00a2749"
      },
      "Title": "DesiDiya? Astronaut Galaxy Projector with Remote Control - 360? Adjustable Timer Kids Astronaut Nebu",
      "color": "MIX",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "6999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">DesiDiya? Astronaut Galaxy Projector with Remote Control - 360? Adjustable Timer Kids Astronaut Nebu</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">MIX</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8439</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603906667320240518133106",
      "images1": "/uploads/uploads/171603906667320240518133106",
      "images2": "/uploads/uploads/171603906680620240518133106",
      "images3": "/uploads/uploads/171603906624420240518133106",
      "images4": "/uploads/uploads/171603906621420240518133106",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0e542e7"
      },
      "Title": "SKYUP MiNi CoOlEr FoR RoOm CoOlInG MiNi CoOlEr AiR",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "1699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">SKYUP MiNi CoOlEr FoR RoOm CoOlInG MiNi CoOlEr AiR</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6119</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603909238820240518133132",
      "images1": "/uploads/uploads/171603909238820240518133132",
      "images2": "/uploads/uploads/171603909263320240518133132",
      "images3": "/uploads/uploads/171603909213320240518133132",
      "images4": "/uploads/uploads/171603909238820240518133132",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d03b2451"
      },
      "Title": "Fossil Gen 6 Digital Black Dial Men's Watch-FTW4059",
      "color": "BLACK",
      "size": "FREE SIZE",
      "storage": "",
      "selling_price": "319.89",
      "mrp": "17999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Fossil Gen 6 Digital Black Dial Men's Watch-FTW4059</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">FREE SIZE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹17999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹319.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7311</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603927487220240518133434",
      "images1": "/uploads/uploads/171603927487220240518133434",
      "images2": "/uploads/uploads/171603927482820240518133434",
      "images3": "/uploads/uploads/171603927488020240518133434",
      "images4": "/uploads/uploads/171603927487220240518133434",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0faaa9b"
      },
      "Title": "CITRODA Mini Handheld Fan",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">CITRODA Mini Handheld Fan</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8844</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603933270020240518133532",
      "images1": "/uploads/uploads/171603933270020240518133532",
      "images2": "/uploads/uploads/171603933283620240518133532",
      "images3": "/uploads/uploads/171603933274520240518133532",
      "images4": "/uploads/uploads/171603933252620240518133532",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d04d1ef4"
      },
      "Title": "Apple Watch Series 8 [GPS 45 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fit",
      "color": "Aluminum Midnight, Starlight, Silver and Product Red Stainless-steel Silver, Graphite and Gold",
      "size": "45 mm",
      "storage": "",
      "selling_price": "349.49",
      "mrp": "78999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple Watch Series 8 [GPS 45 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fit</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Aluminum Midnight, Starlight, Silver and Product Red Stainless-steel Silver, Graphite and Gold</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">45 mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹78999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6237</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171603941562520240518133655",
      "images1": "/uploads/uploads/171603941562520240518133655",
      "images2": "/uploads/uploads/171603941511520240518133655",
      "images3": "/uploads/uploads/171603941512920240518133655",
      "images4": "/uploads/uploads/171603941562520240518133655",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0d07ed7"
      },
      "Title": "Amazfit GTR 3 Pro Smart Watch with BT Phone Calls, Blood Pressure Monitoring, 1.45 AMOLED Display, 2",
      "color": "BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "17899",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Amazfit GTR 3 Pro Smart Watch with BT Phone Calls, Blood Pressure Monitoring, 1.45 AMOLED Display, 2</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹17899</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8908</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604005634220240518134736",
      "images1": "/uploads/uploads/171604005634220240518134736",
      "images2": "/uploads/uploads/171604005684720240518134736",
      "images3": "/uploads/uploads/171604005676820240518134736",
      "images4": "/uploads/uploads/171604005634220240518134736",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0c061dd"
      },
      "Title": "Noise Pulse 2 Max 1.85\" Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness",
      "color": "JET BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "28999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Noise Pulse 2 Max 1.85\" Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">JET BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹28999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8121</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604012320220240518134843",
      "images1": "/uploads/uploads/171604012320220240518134843",
      "images2": "/uploads/uploads/171604012320220240518134843",
      "images3": "/uploads/uploads/171604012320220240518134843",
      "images4": "/uploads/uploads/171604012320220240518134843",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d040f1f0"
      },
      "Title": "Panasonic 1.5 Ton 3 Star Wi-Fi Inverter Smart Split AC (Copper Condenser)",
      "color": "Default",
      "size": "1.5 Ton",
      "storage": "",
      "selling_price": "389.89",
      "mrp": "36990",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Panasonic 1.5 Ton 3 Star Wi-Fi Inverter Smart Split AC (Copper Condenser)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 Ton</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹36990</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8133</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604013023720240518134850",
      "images1": "/uploads/uploads/171604013023720240518134850",
      "images2": "/uploads/uploads/171604013042420240518134850",
      "images3": "/uploads/uploads/171604013025520240518134850",
      "images4": "/uploads/uploads/171604013014720240518134850",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0507a03"
      },
      "Title": "Fire-Boltt Ninja Call Pro Plus 1.83\" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sp",
      "color": "BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "289.89",
      "mrp": "4999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Fire-Boltt Ninja Call Pro Plus 1.83\" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sp</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6442</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604017712220240518134937",
      "images1": "/uploads/uploads/171604017712220240518134937",
      "images2": "/uploads/uploads/171604017744220240518134937",
      "images3": "/uploads/uploads/171604017714220240518134937",
      "images4": "/uploads/uploads/171604017712220240518134937",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d03bc8fc"
      },
      "Title": "Haier 1.5 Ton 3 Star Twin Inverter Split AC",
      "color": "Default",
      "size": "1.5 Ton",
      "storage": "",
      "selling_price": "389.89",
      "mrp": "65490",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Haier 1.5 Ton 3 Star Twin Inverter Split AC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 Ton</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹65490</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7205</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604026932220240518135109",
      "images1": "/uploads/uploads/171604026932220240518135109",
      "images2": "/uploads/uploads/171604026945020240518135109",
      "images3": "/uploads/uploads/171604026937020240518135109",
      "images4": "/uploads/uploads/171604026919020240518135109",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0d4b1b6"
      },
      "Title": "E MOTORAD - RIDE THE ELECTRIC REVOLUTION Youth X1 Mountain Electric Cycle",
      "color": "DEEP BLUE",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">E MOTORAD - RIDE THE ELECTRIC REVOLUTION Youth X1 Mountain Electric Cycle</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">DEEP BLUE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6917</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604033714620240518135217",
      "images1": "/uploads/uploads/171604033714620240518135217",
      "images2": "/uploads/uploads/171604033714620240518135217",
      "images3": "/uploads/uploads/171604033714620240518135217",
      "images4": "/uploads/uploads/171604033714620240518135217",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0c28e97"
      },
      "Title": "JBL Partybox 310 | Portable Bluetooth Party Speaker | 240W Monstrous Pro Sound | Dynamic Light Show",
      "color": "BLACK",
      "size": "240 WATT",
      "storage": "",
      "selling_price": "499.49",
      "mrp": "63999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">JBL Partybox 310 | Portable Bluetooth Party Speaker | 240W Monstrous Pro Sound | Dynamic Light Show</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">240 WATT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹63999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹499.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6593</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604040672020240518135326",
      "images1": "/uploads/uploads/171604040672020240518135326",
      "images2": "/uploads/uploads/171604040672020240518135326",
      "images3": "/uploads/uploads/171604040672020240518135326",
      "images4": "/uploads/uploads/171604040672020240518135326",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d01fe0ab"
      },
      "Title": "OnePlus 12",
      "color": "Flowy Emerlad,Silky Black",
      "size": "12GB/512GB",
      "storage": "",
      "selling_price": "449.79",
      "mrp": "69999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">OnePlus 12</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Flowy Emerlad,Silky Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12GB/512GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹69999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹449.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6020</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604042543320240518135345",
      "images1": "/uploads/uploads/171604042543320240518135345",
      "images2": "/uploads/uploads/171604042536520240518135345",
      "images3": "/uploads/uploads/171604042580720240518135345",
      "images4": "/uploads/uploads/171604042541920240518135345",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0016b9d"
      },
      "Title": "Wipro Vesta 1.5L BK205 Cool Touch Kettle",
      "color": "BLACK",
      "size": "1.5 L",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "2199",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Wipro Vesta 1.5L BK205 Cool Touch Kettle</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1.5 L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2199</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7038</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604047058020240518135430",
      "images1": "/uploads/uploads/171604047058020240518135430",
      "images2": "/uploads/uploads/171604047027520240518135430",
      "images3": "/uploads/uploads/171604047058020240518135430",
      "images4": "/uploads/uploads/171604047058020240518135430",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0d0e638"
      },
      "Title": "boAt Immortal 121 TWS Earbuds with Beast? Mode(40ms Low Latency) for Gaming, 40H Playtime, Blazing L",
      "color": "Black Sabre",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "289.79",
      "mrp": "15999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Immortal 121 TWS Earbuds with Beast? Mode(40ms Low Latency) for Gaming, 40H Playtime, Blazing L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black Sabre</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹15999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7542</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604052451220240518135524",
      "images1": "/uploads/uploads/171604052451220240518135524",
      "images2": "/uploads/uploads/171604052451220240518135524",
      "images3": "/uploads/uploads/171604052451220240518135524",
      "images4": "/uploads/uploads/171604052451220240518135524",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0fb993d"
      },
      "Title": "boAt AAVANTE Bar 3150D 260W 5.1 Channel Bluetooth Soundbar with Dolby Audio, Signature Sound,Wired S",
      "color": "BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "399.99",
      "mrp": "39999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt AAVANTE Bar 3150D 260W 5.1 Channel Bluetooth Soundbar with Dolby Audio, Signature Sound,Wired S</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹39999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7967</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604061444320240518135654",
      "images1": "/uploads/uploads/171604061444320240518135654",
      "images2": "/uploads/uploads/171604061445520240518135654",
      "images3": "/uploads/uploads/171604061429720240518135654",
      "images4": "/uploads/uploads/171604061444320240518135654",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0212591"
      },
      "Title": "Pixel 7 5G (Obsidian, 8GB RAM, 128GB Stoarge)",
      "color": "Snow,LemonGrass,Obsidian",
      "size": "8GB/128GB",
      "storage": "",
      "selling_price": "439.49",
      "mrp": "46999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Pixel 7 5G (Obsidian, 8GB RAM, 128GB Stoarge)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Snow,LemonGrass,Obsidian</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8GB/128GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹46999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹439.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8500</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604064763820240518135727",
      "images1": "/uploads/uploads/171604064763820240518135727",
      "images2": "/uploads/uploads/171604064763820240518135727",
      "images3": "/uploads/uploads/171604064713320240518135727",
      "images4": "/uploads/uploads/171604064785220240518135727",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0c98b43"
      },
      "Title": "Pioneer TS-WX3000T Coaxial Subwoofer",
      "color": "BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "249.49",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Pioneer TS-WX3000T Coaxial Subwoofer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8808</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604069460920240518135814",
      "images1": "/uploads/uploads/171604069460920240518135814",
      "images2": "/uploads/uploads/171604069490520240518135814",
      "images3": "/uploads/uploads/171604069413520240518135814",
      "images4": "/uploads/uploads/171604069460920240518135814",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0cafb59"
      },
      "Title": "JBL Tune 235NC in Ear Wireless ANC Earbuds",
      "color": "BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "4999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">JBL Tune 235NC in Ear Wireless ANC Earbuds</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6860</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604074168620240518135901",
      "images1": "/uploads/uploads/171604074168620240518135901",
      "images2": "/uploads/uploads/171604074164920240518135901",
      "images3": "/uploads/uploads/171604074184620240518135901",
      "images4": "/uploads/uploads/171604074168620240518135901",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0cc7772"
      },
      "Title": "Sony HT-S40R Real 5.1ch Dolby Audio Soundbar for TV with Subwoofer & Wireless Rear Speakers, 5.1ch H",
      "color": "BLACK",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "25999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Sony HT-S40R Real 5.1ch Dolby Audio Soundbar for TV with Subwoofer & Wireless Rear Speakers, 5.1ch H</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹25999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6063</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604078255720240518135942",
      "images1": "/uploads/uploads/171604078255720240518135942",
      "images2": "/uploads/uploads/171604078284320240518135942",
      "images3": "/uploads/uploads/171604078255720240518135942",
      "images4": "/uploads/uploads/171604078255720240518135942",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0af92fa"
      },
      "Title": "Sony WH-1000XM5 Wireless The Best Active Noise",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "439.89",
      "mrp": "100329",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Sony WH-1000XM5 Wireless The Best Active Noise</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹100329</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹439.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8467</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604083114520240518140031",
      "images1": "/uploads/uploads/171604083114520240518140031",
      "images2": "/uploads/uploads/171604083175320240518140031",
      "images3": "/uploads/uploads/171604083178320240518140031",
      "images4": "/uploads/uploads/171604083114920240518140031",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d038df9e"
      },
      "Title": "Canon EOS 3000D DSLR Camera 1Body 18-55mm Lance",
      "color": "BLACK",
      "size": "18-55mm",
      "storage": "",
      "selling_price": "289.79",
      "mrp": "35999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Canon EOS 3000D DSLR Camera 1Body 18-55mm Lance</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">18-55mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹35999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7303</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604084434620240518140044",
      "images1": "/uploads/uploads/171604084434620240518140044",
      "images2": "/uploads/uploads/171604084459820240518140044",
      "images3": "/uploads/uploads/171604084434620240518140044",
      "images4": "/uploads/uploads/171604084434620240518140044",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0e80cf8"
      },
      "Title": "Apple AirPods Pro (2nd Generation)",
      "color": "WHITE",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "19999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple AirPods Pro (2nd Generation)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹19999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8568</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604094012720240518140220",
      "images1": "/uploads/uploads/171604094012720240518140220",
      "images2": "/uploads/uploads/171604094042420240518140220",
      "images3": "/uploads/uploads/171604094027320240518140220",
      "images4": "/uploads/uploads/171604094054620240518140220",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0b47226"
      },
      "Title": "P9 Plus Compatible Air-pods On-Ear Headphone Max Bluetooth Headset with Mic",
      "color": "SILVER",
      "size": "FREE SIZE",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "49000",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">P9 Plus Compatible Air-pods On-Ear Headphone Max Bluetooth Headset with Mic</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">SILVER</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">FREE SIZE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹49000</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7071</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604100756820240518140327",
      "images1": "/uploads/uploads/171604100756820240518140327",
      "images2": "/uploads/uploads/171604100777220240518140327",
      "images3": "/uploads/uploads/171604100778120240518140327",
      "images4": "/uploads/uploads/171604100756820240518140327",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0a6b903"
      },
      "Title": "Samsung Galaxy S24 Ultra 5G AI Smartphone",
      "color": "Titanium Black, Titanium Gray, Titanium Violet",
      "size": "12 GB",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "139999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy S24 Ultra 5G AI Smartphone</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Titanium Black, Titanium Gray, Titanium Violet</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12 GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹139999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6234</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604110776020240518140507",
      "images1": "/uploads/uploads/171604110776020240518140507",
      "images2": "/uploads/uploads/171604110731620240518140507",
      "images3": "/uploads/uploads/171604110715720240518140507",
      "images4": "/uploads/uploads/171604110752620240518140507",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d08a5d4a"
      },
      "Title": "OnePlus 11R 5G",
      "color": "Galactic Silver, Solar Red, Sonic Black",
      "size": "12 GB",
      "storage": "",
      "selling_price": "319.79",
      "mrp": "32999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">OnePlus 11R 5G</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Galactic Silver, Solar Red, Sonic Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12 GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹32999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹319.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6821</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604117960120240518140619",
      "images1": "/uploads/uploads/171604117960120240518140619",
      "images2": "/uploads/uploads/171604117925620240518140619",
      "images3": "/uploads/uploads/171604117969420240518140619",
      "images4": "/uploads/uploads/171604117999620240518140619",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d01e64c6"
      },
      "Title": "Sandisk Extreme Portable 1TB, 1050MB/s R, 1000MB/s W, 3mtr Drop Protection, IP65 Water/dust Resistan",
      "color": "Default",
      "size": "1 TB",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "3799",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Sandisk Extreme Portable 1TB, 1050MB/s R, 1000MB/s W, 3mtr Drop Protection, IP65 Water/dust Resistan</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1 TB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3799</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7493</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604134753220240518140907",
      "images1": "/uploads/uploads/171604134753220240518140907",
      "images2": "/uploads/uploads/171604134742920240518140907",
      "images3": "/uploads/uploads/171604134744020240518140907",
      "images4": "/uploads/uploads/171604134739220240518140907",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0219060"
      },
      "Title": "Fossil Gen 6 Smartwatch Digital Black",
      "color": "Blue,Brown, Grey, Multicolour, Pink, Purple, Rose Gold, Silver",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Fossil Gen 6 Smartwatch Digital Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Blue,Brown, Grey, Multicolour, Pink, Purple, Rose Gold, Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8981</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604151745220240518141157",
      "images1": "/uploads/uploads/171604151745220240518141157",
      "images2": "/uploads/uploads/171604151761020240518141157",
      "images3": "/uploads/uploads/171604151722720240518141157",
      "images4": "/uploads/uploads/171604151782920240518141157",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0dcc16a"
      },
      "Title": "hakti Technology S5 High Pressure Car Washer Machine 1900 Watts, Pressure 125 Bar, 8L/Min Flow Rate",
      "color": "Default",
      "size": "1900 Watt",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "6099",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">hakti Technology S5 High Pressure Car Washer Machine 1900 Watts, Pressure 125 Bar, 8L/Min Flow Rate</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1900 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6099</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7216</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604151987220240518141159",
      "images1": "/uploads/uploads/171604151987220240518141159",
      "images2": "/uploads/uploads/171604151995220240518141159",
      "images3": "/uploads/uploads/171604151914320240518141159",
      "images4": "/uploads/uploads/171604151968320240518141159",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0fef4a5"
      },
      "Title": "Amazfit T-Rex Pro Smartwatch Fitness Watch with SpO2, Heart Rate, Sleep Monitor, Sports Watch with O",
      "color": "Meteorite Black",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "289.89",
      "mrp": "4999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Amazfit T-Rex Pro Smartwatch Fitness Watch with SpO2, Heart Rate, Sleep Monitor, Sports Watch with O</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Meteorite Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8277</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604165524920240518141415",
      "images1": "/uploads/uploads/171604165524920240518141415",
      "images2": "/uploads/uploads/171604165524920240518141415",
      "images3": "/uploads/uploads/171604165524920240518141415",
      "images4": "/uploads/uploads/171604165524920240518141415",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d044153a"
      },
      "Title": "Marshall Emberton Wireless Outdoor Speaker",
      "color": "Black And Brass, Cream",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "12999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Marshall Emberton Wireless Outdoor Speaker</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black And Brass, Cream</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8323</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604171447320240518141514",
      "images1": "/uploads/uploads/171604171447320240518141514",
      "images2": "/uploads/uploads/171604171413420240518141514",
      "images3": "/uploads/uploads/171604171447320240518141514",
      "images4": "/uploads/uploads/171604171447320240518141514",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d00f9db9"
      },
      "Title": "Samsung Galaxy Tab A9+ 27.94 cm (11.0 inch) Display, RAM 8 GB, ROM 128 GB Expandable, Wi-Fi Tablet,",
      "color": "Grey,Graphite,Silver",
      "size": "8GB/128GB",
      "storage": "",
      "selling_price": "389.99",
      "mrp": "18999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy Tab A9+ 27.94 cm (11.0 inch) Display, RAM 8 GB, ROM 128 GB Expandable, Wi-Fi Tablet,</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Grey,Graphite,Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8GB/128GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹18999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8640</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604174658220240518141546",
      "images1": "/uploads/uploads/171604174658220240518141546",
      "images2": "/uploads/uploads/171604174673320240518141546",
      "images3": "/uploads/uploads/171604174659020240518141546",
      "images4": "/uploads/uploads/171604174639520240518141546",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0951f17"
      },
      "Title": "FireBoltt DREAM The First Ever Wristphone",
      "color": "Aqua Black, Aqua Blue, Aqua Gold Black, Aqua Light Gold, Aqua Orenge",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "3599",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">FireBoltt DREAM The First Ever Wristphone</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Aqua Black, Aqua Blue, Aqua Gold Black, Aqua Light Gold, Aqua Orenge</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3599</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8254</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604180099420240518141640",
      "images1": "/uploads/uploads/171604180099420240518141640",
      "images2": "/uploads/uploads/171604180079620240518141640",
      "images3": "/uploads/uploads/171604180068920240518141640",
      "images4": "/uploads/uploads/171604180038620240518141640",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0ca8ba3"
      },
      "Title": "Airdopes 131 Iron Man Marvel Edition",
      "color": "RED",
      "size": "DEFAULT",
      "storage": "",
      "selling_price": "279.99",
      "mrp": "2999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Airdopes 131 Iron Man Marvel Edition</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">RED</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">DEFAULT</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹279.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7071</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604193121820240518141851",
      "images1": "/uploads/uploads/171604193121820240518141851",
      "images2": "/uploads/uploads/171604193160520240518141851",
      "images3": "/uploads/uploads/171604193146820240518141851",
      "images4": "/uploads/uploads/171604193121820240518141851",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0babb67"
      },
      "Title": "Philips CX 5535/11 High Performance Bladeless Technology Tower Fan with Touchscreen Panel and Remote",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "9199",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Philips CX 5535/11 High Performance Bladeless Technology Tower Fan with Touchscreen Panel and Remote</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9199</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6072</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604194147820240518141901",
      "images1": "/uploads/uploads/171604194147820240518141901",
      "images2": "/uploads/uploads/171604194147720240518141901",
      "images3": "/uploads/uploads/171604194175820240518141901",
      "images4": "/uploads/uploads/171604194111120240518141901",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d02f253c"
      },
      "Title": "Sony Alpha ZV-E10L 24.2 Mega Pixel Interchangeable-Lens Mirrorless vlog Optical zoom Camera with 16-",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "459.79",
      "mrp": "60999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Sony Alpha ZV-E10L 24.2 Mega Pixel Interchangeable-Lens Mirrorless vlog Optical zoom Camera with 16-</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹60999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹459.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6729</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604206499520240518142104",
      "images1": "/uploads/uploads/171604206499520240518142104",
      "images2": "/uploads/uploads/171604206469120240518142104",
      "images3": "/uploads/uploads/171604206418520240518142104",
      "images4": "/uploads/uploads/171604206465620240518142104",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0f60625"
      },
      "Title": "HP All-in-One PC Intel Pentium J5040 21.5-inch(54.6 cm) FHD Three-Sided Micro-Edge Display(8GB RAM/5",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "349.49",
      "mrp": "31999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">HP All-in-One PC Intel Pentium J5040 21.5-inch(54.6 cm) FHD Three-Sided Micro-Edge Display(8GB RAM/5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹31999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7212</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604213577820240518142215",
      "images1": "/uploads/uploads/171604213577820240518142215",
      "images2": "/uploads/uploads/171604213593920240518142215",
      "images3": "/uploads/uploads/171604213550920240518142215",
      "images4": "/uploads/uploads/171604213520120240518142215",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d03178b7"
      },
      "Title": "TECNO Phantom V Fold 5G Black (12GB RAM,256GB Storage) | The First Full Size Fold | LTPO AMOLED Disp",
      "color": "Black,White",
      "size": "12GB/256GB",
      "storage": "",
      "selling_price": "429.99",
      "mrp": "69999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">TECNO Phantom V Fold 5G Black (12GB RAM,256GB Storage) | The First Full Size Fold | LTPO AMOLED Disp</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black,White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12GB/256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹69999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹429.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">89%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7468</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604222582120240518142345",
      "images1": "/uploads/uploads/171604222582120240518142345",
      "images2": "/uploads/uploads/171604222531120240518142345",
      "images3": "/uploads/uploads/171604222554920240518142345",
      "images4": "/uploads/uploads/171604222512020240518142345",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0453e3a"
      },
      "Title": "Symphony Diet 3D 55i+ Portable Tower Air Cooler For Home with 3-Side Honeycomb Pads, Magnetic Remote",
      "color": "White",
      "size": "Regular",
      "storage": "",
      "selling_price": "389.49",
      "mrp": "12499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Symphony Diet 3D 55i+ Portable Tower Air Cooler For Home with 3-Side Honeycomb Pads, Magnetic Remote</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹12499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7988</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604237098720240518142610",
      "images1": "/uploads/uploads/171604237098720240518142610",
      "images2": "/uploads/uploads/171604237057920240518142610",
      "images3": "/uploads/uploads/171604237065520240518142610",
      "images4": "/uploads/uploads/171604237014220240518142610",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0219980"
      },
      "Title": "HILLSTAR Foldable Remote Control Drone with Camera HD Wide Angle Lens Optical Flow Positioning with",
      "color": "Default",
      "size": "1800 mAh",
      "storage": "",
      "selling_price": "299.49",
      "mrp": "1999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">HILLSTAR Foldable Remote Control Drone with Camera HD Wide Angle Lens Optical Flow Positioning with</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1800 mAh</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6571</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604247083920240518142750",
      "images1": "/uploads/uploads/171604247083920240518142750",
      "images2": "/uploads/uploads/171604247077720240518142750",
      "images3": "/uploads/uploads/171604247041320240518142750",
      "images4": "/uploads/uploads/171604247081620240518142750",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0f120ba"
      },
      "Title": "IZI Mini X Nano Fly More Combo 4K Camera Drone UHD 20MP, CMOS,4KM Live Video, 93-min Flight Time, GP",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "379.89",
      "mrp": "38999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">IZI Mini X Nano Fly More Combo 4K Camera Drone UHD 20MP, CMOS,4KM Live Video, 93-min Flight Time, GP</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹38999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7957</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604270640220240518143146",
      "images1": "/uploads/uploads/171604270640220240518143146",
      "images2": "/uploads/uploads/171604270630320240518143146",
      "images3": "/uploads/uploads/171604270694320240518143146",
      "images4": "/uploads/uploads/171604270610020240518143146",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0d11c77"
      },
      "Title": "Airdopes 161 ANC",
      "color": "Black, Green, White",
      "size": "NA",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "3999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Airdopes 161 ANC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black, Green, White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8054</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604276687420240518143246",
      "images1": "/uploads/uploads/171604276687420240518143246",
      "images2": "/uploads/uploads/171604276616820240518143246",
      "images3": "/uploads/uploads/171604276612420240518143246",
      "images4": "/uploads/uploads/171604276692820240518143246",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0f22cc4"
      },
      "Title": "Apple Watch Series 9 [GPS 41mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Band S/M.",
      "color": "Midnight,Starlight,Silver",
      "size": "41mm/45mm",
      "storage": "",
      "selling_price": "439.49",
      "mrp": "41999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple Watch Series 9 [GPS 41mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Band S/M.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Midnight,Starlight,Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">41mm/45mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹41999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹439.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6407</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604282246920240518143342",
      "images1": "/uploads/uploads/171604282246920240518143342",
      "images2": "/uploads/uploads/171604282217920240518143342",
      "images3": "/uploads/uploads/171604282266920240518143342",
      "images4": "/uploads/uploads/171604282246920240518143342",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0ace8c8"
      },
      "Title": "Apple Watch Series 8 [GPS 45 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fit",
      "color": "Red,Midnight,Graphite,Silver",
      "size": "45mm",
      "storage": "",
      "selling_price": "329.79",
      "mrp": "32999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple Watch Series 8 [GPS 45 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fit</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Red,Midnight,Graphite,Silver</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">45mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹32999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹329.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7250</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604293368320240518143533",
      "images1": "/uploads/uploads/171604293368320240518143533",
      "images2": "/uploads/uploads/171604293350720240518143533",
      "images3": "/uploads/uploads/171604293389320240518143533",
      "images4": "/uploads/uploads/171604293318420240518143533",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0bc21b5"
      },
      "Title": "Apple Watch SE (2nd Gen, 2023) [GPS 44mm] Smartwatch with Midnight Aluminum Case with Midnight Sport",
      "color": "Midnight,Starlight",
      "size": "44mm",
      "storage": "",
      "selling_price": "379.49",
      "mrp": "32999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Apple Watch SE (2nd Gen, 2023) [GPS 44mm] Smartwatch with Midnight Aluminum Case with Midnight Sport</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Midnight,Starlight</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">44mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹32999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8088</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604305816820240518143738",
      "images1": "/uploads/uploads/171604305816820240518143738",
      "images2": "/uploads/uploads/171604305878020240518143738",
      "images3": "/uploads/uploads/171604305849320240518143738",
      "images4": "/uploads/uploads/171604305815520240518143738",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0a8f294"
      },
      "Title": "Amazon Basics Wireless Bluetooth Multi-Device Keyboard for Windows, Apple iOS Android Or Chrome, Com",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "1199",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Amazon Basics Wireless Bluetooth Multi-Device Keyboard for Windows, Apple iOS Android Or Chrome, Com</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1199</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7436</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604313895020240518143858",
      "images1": "/uploads/uploads/171604313895020240518143858",
      "images2": "/uploads/uploads/171604313853820240518143858",
      "images3": "/uploads/uploads/171604313857420240518143858",
      "images4": "/uploads/uploads/171604313814920240518143858",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0111ff1"
      },
      "Title": "Safari Omega spacious/large laptop backpack with Raincover, college bag, travel bag for men and wome",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "2948",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Safari Omega spacious/large laptop backpack with Raincover, college bag, travel bag for men and wome</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2948</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">88%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8487</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604330072020240518144140",
      "images1": "/uploads/uploads/171604330072020240518144140",
      "images2": "/uploads/uploads/171604330075720240518144140",
      "images3": "/uploads/uploads/171604330085020240518144140",
      "images4": "/uploads/uploads/171604330091320240518144140",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0f55e9d"
      },
      "Title": "Havells 1200W Foldable Hair Dryer; 3 Heat Settings with Cool Shot (Hot/Cool/ Warm), Heat Balance Tec",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "249.89",
      "mrp": "1599",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Havells 1200W Foldable Hair Dryer; 3 Heat Settings with Cool Shot (Hot/Cool/ Warm), Heat Balance Tec</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1599</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7335</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604341876420240518144338",
      "images1": "/uploads/uploads/171604341876420240518144338",
      "images2": "/uploads/uploads/171604341896820240518144338",
      "images3": "/uploads/uploads/171604341882820240518144338",
      "images4": "/uploads/uploads/171604341839120240518144338",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d05868d3"
      },
      "Title": "Morphy Richards Idazzle Hd121Dc 1200W Hair Dryer|1200 Watt|Aqua Blue & Black",
      "color": "Default",
      "size": "1200 Watt",
      "storage": "",
      "selling_price": "239.89",
      "mrp": "899",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Morphy Richards Idazzle Hd121Dc 1200W Hair Dryer|1200 Watt|Aqua Blue & Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1200 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹899</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹239.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8985</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604356336620240518144603",
      "images1": "/uploads/uploads/171604356336620240518144603",
      "images2": "/uploads/uploads/171604356317620240518144603",
      "images3": "/uploads/uploads/171604356390120240518144603",
      "images4": "/uploads/uploads/171604356347920240518144603",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0db5bb2"
      },
      "Title": "WZATCO Yuva Plus (Upgraded) Native 1080P Full HD Projector with 4K Support, True 420 ANSI on Screen",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "389.49",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">WZATCO Yuva Plus (Upgraded) Native 1080P Full HD Projector with 4K Support, True 420 ANSI on Screen</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8709</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604366128220240518144741",
      "images1": "/uploads/uploads/171604366128220240518144741",
      "images2": "/uploads/uploads/171604366112820240518144741",
      "images3": "/uploads/uploads/171604366152620240518144741",
      "images4": "/uploads/uploads/171604366121220240518144741",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0f2187b"
      },
      "Title": "Enamor Athleisure-Padded Wirefree Full Coverage High Impact with Antimicrobial & Sweat Wicking Longl",
      "color": "Thai Green,Navy,Soft Pink",
      "size": "Free Size",
      "storage": "",
      "selling_price": "299.49",
      "mrp": "1499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Enamor Athleisure-Padded Wirefree Full Coverage High Impact with Antimicrobial & Sweat Wicking Longl</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Clothing</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Thai Green,Navy,Soft Pink</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Free Size</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6611</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604394424920240518145224",
      "images1": "/uploads/uploads/171604394424920240518145224",
      "images2": "/uploads/uploads/171604394499420240518145224",
      "images3": "/uploads/uploads/171604394483620240518145224",
      "images4": "/uploads/uploads/171604394473120240518145224",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d07ef204"
      },
      "Title": "Boult Audio Z40 Pro",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "1499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Boult Audio Z40 Pro</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8231</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604403767120240518145357",
      "images1": "/uploads/uploads/171604403767120240518145357",
      "images2": "/uploads/uploads/171604403784320240518145357",
      "images3": "/uploads/uploads/171604403740920240518145357",
      "images4": "/uploads/uploads/171604403720220240518145357",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0558b75"
      },
      "Title": "Noise Buds X Prime in-Ear",
      "color": "Silver Grey,Sheen Green,Champagne White",
      "size": "Regular",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "1499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Noise Buds X Prime in-Ear</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Silver Grey,Sheen Green,Champagne White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6904</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604415520020240518145555",
      "images1": "/uploads/uploads/171604415520020240518145555",
      "images2": "/uploads/uploads/171604415576620240518145555",
      "images3": "/uploads/uploads/171604415526220240518145555",
      "images4": "/uploads/uploads/171604415570120240518145555",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d070b0b2"
      },
      "Title": "Redmi Buds 5 Bluetooth TWS",
      "color": "Purple,Black",
      "size": "Regular",
      "storage": "",
      "selling_price": "279.89",
      "mrp": "2699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Redmi Buds 5 Bluetooth TWS</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Purple,Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹279.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6095</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604427048820240518145750",
      "images1": "/uploads/uploads/171604427048820240518145750",
      "images2": "/uploads/uploads/171604427033220240518145750",
      "images3": "/uploads/uploads/171604427053420240518145750",
      "images4": "/uploads/uploads/171604427050820240518145750",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d095a8be"
      },
      "Title": "DDLC V380 PRO WiFi CCTV Security Camera for Home Outdoor High HD",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "279.79",
      "mrp": "1499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">DDLC V380 PRO WiFi CCTV Security Camera for Home Outdoor High HD</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹1499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹279.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8683</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604444335320240518150043",
      "images1": "/uploads/uploads/171604444335320240518150043",
      "images2": "/uploads/uploads/171604444323620240518150043",
      "images3": "/uploads/uploads/171604444397720240518150043",
      "images4": "/uploads/uploads/171604444392420240518150043",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d023cecb"
      },
      "Title": "Nothing Phone (2) 5G (White, 12GB RAM, 512GB Storage) | 6.7 Inch LTPO OLED AMOLED Display | 50 MP(OI",
      "color": "White",
      "size": "12GB/512GB",
      "storage": "",
      "selling_price": "389.79",
      "mrp": "49999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Nothing Phone (2) 5G (White, 12GB RAM, 512GB Storage) | 6.7 Inch LTPO OLED AMOLED Display | 50 MP(OI</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12GB/512GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹49999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8127</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604466685320240518150426",
      "images1": "/uploads/uploads/171604466685320240518150426",
      "images2": "/uploads/uploads/171604466640520240518150426",
      "images3": "/uploads/uploads/171604466673620240518150426",
      "images4": "/uploads/uploads/171604466699120240518150426",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d00309dd"
      },
      "Title": "boAt Airdopes 141",
      "color": "Black, Cyan Cider, White Purity",
      "size": "NA",
      "storage": "",
      "selling_price": "289.79",
      "mrp": "4999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Airdopes 141</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black, Cyan Cider, White Purity</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7262</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604478420620240518150624",
      "images1": "/uploads/uploads/171604478420620240518150624",
      "images2": "/uploads/uploads/171604478415320240518150624",
      "images3": "/uploads/uploads/171604478443720240518150624",
      "images4": "/uploads/uploads/171604478420620240518150624",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d015fada"
      },
      "Title": "boAt Airdopes 131 - Make in India",
      "color": "Active Black Indi",
      "size": "NA",
      "storage": "",
      "selling_price": "289.79",
      "mrp": "2999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Airdopes 131 - Make in India</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Active Black Indi</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">77%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7844</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604482390520240518150703",
      "images1": "/uploads/uploads/171604482390520240518150703",
      "images2": "/uploads/uploads/171604482390520240518150703",
      "images3": "/uploads/uploads/171604482390520240518150703",
      "images4": "/uploads/uploads/171604482390520240518150703",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d02c1c66"
      },
      "Title": "realme TechLife Buds T100 Bluetooth Truly Wireless in Ear Earbuds with mic",
      "color": "Techlife Buds T100-B, Techlife Buds T100-G, Techlife Buds T100-W",
      "size": "NA",
      "storage": "",
      "selling_price": "289.89",
      "mrp": "2999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">realme TechLife Buds T100 Bluetooth Truly Wireless in Ear Earbuds with mic</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Techlife Buds T100-B, Techlife Buds T100-G, Techlife Buds T100-W</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8680</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604489226520240518150812",
      "images1": "/uploads/uploads/171604489226520240518150812",
      "images2": "/uploads/uploads/171604489240320240518150812",
      "images3": "/uploads/uploads/171604489239920240518150812",
      "images4": "/uploads/uploads/171604489242420240518150812",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0a0e7a2"
      },
      "Title": "JBL Tune Beam Wireless ANC Earbuds",
      "color": "Black, Blue, Purple, White",
      "size": "NA",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "3999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">JBL Tune Beam Wireless ANC Earbuds</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black, Blue, Purple, White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7321</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604497574220240518150935",
      "images1": "/uploads/uploads/171604497574220240518150935",
      "images2": "/uploads/uploads/171604497578120240518150935",
      "images3": "/uploads/uploads/171604497522220240518150935",
      "images4": "/uploads/uploads/171604497590320240518150935",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d09c6699"
      },
      "Title": "realme Buds T300 TWS Earbuds",
      "color": "Black",
      "size": "NA",
      "storage": "",
      "selling_price": "249.99",
      "mrp": "2599",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">realme Buds T300 TWS Earbuds</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2599</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹249.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6991</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604502178020240518151021",
      "images1": "/uploads/uploads/171604502178020240518151021",
      "images2": "/uploads/uploads/171604502153320240518151021",
      "images3": "/uploads/uploads/171604502178020240518151021",
      "images4": "/uploads/uploads/171604502178020240518151021",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0c1f9f3"
      },
      "Title": "boAt Immortal IM-200 7.1 Channel Wired Over Ear USB Gaming Headphone",
      "color": "Furious Blue",
      "size": "NA",
      "storage": "",
      "selling_price": "349.89",
      "mrp": "5999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Immortal IM-200 7.1 Channel Wired Over Ear USB Gaming Headphone</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Furious Blue</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹5999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6937</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604513119520240518151211",
      "images1": "/uploads/uploads/171604513119520240518151211",
      "images2": "/uploads/uploads/171604513140520240518151211",
      "images3": "/uploads/uploads/171604513142720240518151211",
      "images4": "/uploads/uploads/171604513119520240518151211",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0ac5b7d"
      },
      "Title": "TRebel Airdopes 601 ANC",
      "color": "WHITE",
      "size": "NA",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "9999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">TRebel Airdopes 601 ANC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">WHITE</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹9999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8882</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604529893620240518151458",
      "images1": "/uploads/uploads/171604529893620240518151458",
      "images2": "/uploads/uploads/171604529885520240518151458",
      "images3": "/uploads/uploads/171604529819020240518151458",
      "images4": "/uploads/uploads/171604529897020240518151458",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0808301"
      },
      "Title": "TRebel Airdopes 141",
      "color": "Cyan Cider, White Purity",
      "size": "NA",
      "storage": "",
      "selling_price": "299.79",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">TRebel Airdopes 141</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Cyan Cider, White Purity</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7340</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604538754320240518151627",
      "images1": "/uploads/uploads/171604538754320240518151627",
      "images2": "/uploads/uploads/171604538777120240518151627",
      "images3": "/uploads/uploads/171604538778920240518151627",
      "images4": "/uploads/uploads/171604538759120240518151627",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d04f3b94"
      },
      "Title": "boAt Airdopes 601 ANC",
      "color": "black, white",
      "size": "NA",
      "storage": "",
      "selling_price": "299.89",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Airdopes 601 ANC</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">black, white</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">85%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8520</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604557747420240518151937",
      "images1": "/uploads/uploads/171604557747420240518151937",
      "images2": "/uploads/uploads/171604557777820240518151937",
      "images3": "/uploads/uploads/171604557744320240518151937",
      "images4": "/uploads/uploads/171604557746820240518151937",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d06909f2"
      },
      "Title": "TRebel Airdopes 131",
      "color": "Lightpink, White",
      "size": "NA",
      "storage": "",
      "selling_price": "289.79",
      "mrp": "6999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">TRebel Airdopes 131</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Lightpink, White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">76%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8834</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604565940020240518152059",
      "images1": "/uploads/uploads/171604565940020240518152059",
      "images2": "/uploads/uploads/171604565910920240518152059",
      "images3": "/uploads/uploads/171604565960520240518152059",
      "images4": "/uploads/uploads/171604565935520240518152059",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0fb1656"
      },
      "Title": "TRebel Airdopes 181",
      "color": "cool greay, Spirit White",
      "size": "NA",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "8999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">TRebel Airdopes 181</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">cool greay, Spirit White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹8999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7168</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604578876420240518152308",
      "images1": "/uploads/uploads/171604578876420240518152308",
      "images2": "/uploads/uploads/171604578887220240518152308",
      "images3": "/uploads/uploads/171604578818720240518152308",
      "images4": "/uploads/uploads/171604578876420240518152308",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d09ff3f3"
      },
      "Title": "iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimes",
      "color": "Graphite Matte,Blue Lagoon",
      "size": "8GB/128GB",
      "storage": "",
      "selling_price": "389.79",
      "mrp": "24999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Graphite Matte,Blue Lagoon</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8GB/128GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹24999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8683</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604588318620240518152443",
      "images1": "/uploads/uploads/171604588318620240518152443",
      "images2": "/uploads/uploads/171604588340720240518152443",
      "images3": "/uploads/uploads/171604588349120240518152443",
      "images4": "/uploads/uploads/171604588390720240518152443",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d03cae28"
      },
      "Title": "boAt Airdopes 441 Made In India",
      "color": "Active Black Indi",
      "size": "NA",
      "storage": "",
      "selling_price": "289.99",
      "mrp": "4999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Airdopes 441 Made In India</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Active Black Indi</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹4999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7477</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604593563220240518152535",
      "images1": "/uploads/uploads/171604593563220240518152535",
      "images2": "/uploads/uploads/171604593569320240518152535",
      "images3": "/uploads/uploads/171604593531720240518152535",
      "images4": "/uploads/uploads/171604593524720240518152535",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0b5b529"
      },
      "Title": "boAt Airdopes 101 Made In India",
      "color": "Active Black, White",
      "size": "NA",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "5999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Airdopes 101 Made In India</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Active Black, White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹5999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6928</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604604418820240518152724",
      "images1": "/uploads/uploads/171604604418820240518152724",
      "images2": "/uploads/uploads/171604604498120240518152724",
      "images3": "/uploads/uploads/171604604465420240518152724",
      "images4": "/uploads/uploads/171604604456720240518152724",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0b5af71"
      },
      "Title": "Ambrane 20000mAh Powerbank, 22.5W Fast Charging, Triple Output (2 USB & 1 Type C), Power Delivery, Q",
      "color": "Default",
      "size": "20000 mAh",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "2499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Ambrane 20000mAh Powerbank, 22.5W Fast Charging, Triple Output (2 USB & 1 Type C), Power Delivery, Q</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">20000 mAh</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7333</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604608152820240518152801",
      "images1": "/uploads/uploads/171604608152820240518152801",
      "images2": "/uploads/uploads/171604608121720240518152801",
      "images3": "/uploads/uploads/171604608149320240518152801",
      "images4": "/uploads/uploads/171604608184020240518152801",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d033e238"
      },
      "Title": "boAt Aavante Bar 1500",
      "color": "BLACK",
      "size": "NA",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "17999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 1500</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹17999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7977</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604620533620240518153005",
      "images1": "/uploads/uploads/171604620533620240518153005",
      "images2": "/uploads/uploads/171604620518720240518153005",
      "images3": "/uploads/uploads/171604620564420240518153005",
      "images4": "/uploads/uploads/171604620590720240518153005",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d02d20d7"
      },
      "Title": "Dr Luxur Faux Leather Colossus Ergonomic Gaming Chair For Office Work From Home With Lumbar Support,",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "449.99",
      "mrp": "16999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Dr Luxur Faux Leather Colossus Ergonomic Gaming Chair For Office Work From Home With Lumbar Support,</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹16999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹449.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7571</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604624691120240518153046",
      "images1": "/uploads/uploads/171604624691120240518153046",
      "images2": "/uploads/uploads/171604624672120240518153046",
      "images3": "/uploads/uploads/171604624650820240518153046",
      "images4": "/uploads/uploads/171604624622620240518153046",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d01cd2d1"
      },
      "Title": "boAt Aavante Bar Thump",
      "color": "Carbon Black",
      "size": "NA",
      "storage": "",
      "selling_price": "299.49",
      "mrp": "21999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar Thump</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Carbon Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹21999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6064</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604626223520240518153102",
      "images1": "/uploads/uploads/171604626223520240518153102",
      "images2": "/uploads/uploads/171604626233620240518153102",
      "images3": "/uploads/uploads/171604626298120240518153102",
      "images4": "/uploads/uploads/171604626231620240518153102",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0416180"
      },
      "Title": "NXTGN Core i9 Gaming PC (Core i9 11th Gen Processor, 32GB RAM, 1TB SSD, 4TB Hard Drive, 12GB RTX3060",
      "color": "Default",
      "size": "32GB/1TB",
      "storage": "",
      "selling_price": "489.99",
      "mrp": "120499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">NXTGN Core i9 Gaming PC (Core i9 11th Gen Processor, 32GB RAM, 1TB SSD, 4TB Hard Drive, 12GB RTX3060</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">32GB/1TB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹120499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹489.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8084</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604631261920240518153152",
      "images1": "/uploads/uploads/171604631261920240518153152",
      "images2": "/uploads/uploads/171604631270820240518153152",
      "images3": "/uploads/uploads/171604631268820240518153152",
      "images4": "/uploads/uploads/171604631261920240518153152",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0509e67"
      },
      "Title": "boAt Aavante Orion",
      "color": "BLACK",
      "size": "NA",
      "storage": "",
      "selling_price": "299.49",
      "mrp": "19999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Orion</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹19999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6030</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604634817820240518153228",
      "images1": "/uploads/uploads/171604634817820240518153228",
      "images2": "/uploads/uploads/171604634852120240518153228",
      "images3": "/uploads/uploads/171604634812720240518153228",
      "images4": "/uploads/uploads/171604634870120240518153228",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d030f1e0"
      },
      "Title": "boAt Aavante Bar 3100D",
      "color": "BLACK",
      "size": "NA",
      "storage": "",
      "selling_price": "319.99",
      "mrp": "24999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 3100D</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹24999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹319.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8823</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604646118520240518153421",
      "images1": "/uploads/uploads/171604646118520240518153421",
      "images2": "/uploads/uploads/171604646170820240518153421",
      "images3": "/uploads/uploads/171604646192920240518153421",
      "images4": "/uploads/uploads/171604646194920240518153421",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0135788"
      },
      "Title": "boAt Aavante Bar 1800 v2",
      "color": "BLACK",
      "size": "NA",
      "storage": "",
      "selling_price": "319.89",
      "mrp": "26999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 1800 v2</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">NA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹26999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹319.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8373</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604655618620240518153556",
      "images1": "/uploads/uploads/171604655618620240518153556",
      "images2": "/uploads/uploads/171604655634420240518153556",
      "images3": "/uploads/uploads/171604655686720240518153556",
      "images4": "/uploads/uploads/171604655684420240518153556",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d00f14e4"
      },
      "Title": "boAt Aavante Bar 4000DA",
      "color": "BLACK",
      "size": "n",
      "storage": "",
      "selling_price": "299.49",
      "mrp": "24999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 4000DA</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">n</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹24999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7675</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604673251220240518153852",
      "images1": "/uploads/uploads/171604673251220240518153852",
      "images2": "/uploads/uploads/171604673268220240518153852",
      "images3": "/uploads/uploads/171604673217320240518153852",
      "images4": "/uploads/uploads/171604673273520240518153852",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d06cdb34"
      },
      "Title": "ACTIVA Lotus 5 Star 1200 mm BLDC Motor with Remote 4 Blade Ceiling Fan (ROSE WOOD, Pack of 1)",
      "color": "Default",
      "size": "Regular",
      "storage": "",
      "selling_price": "289.49",
      "mrp": "3999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">ACTIVA Lotus 5 Star 1200 mm BLDC Motor with Remote 4 Blade Ceiling Fan (ROSE WOOD, Pack of 1)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Default</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Regular</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹289.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.6 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7476</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604676192520240518153921",
      "images1": "/uploads/uploads/171604676192520240518153921",
      "images2": "/uploads/uploads/171604676124420240518153921",
      "images3": "/uploads/uploads/171604676172920240518153921",
      "images4": "/uploads/uploads/171604676194820240518153921",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0b6b2dc"
      },
      "Title": "boAt Aavante Bar 1750",
      "color": "BLACK",
      "size": "n",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "29999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 1750</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">n</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹29999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6981</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604684379520240518154043",
      "images1": "/uploads/uploads/171604684379520240518154043",
      "images2": "/uploads/uploads/171604684313520240518154043",
      "images3": "/uploads/uploads/171604684324720240518154043",
      "images4": "/uploads/uploads/171604684377920240518154043",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0340161"
      },
      "Title": "APPLE 2022 MacBook AIR M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLXW3HN/A (13.6 Inch, Space Grey, 1.24",
      "color": "Mid Night,Silver,Space Grey",
      "size": "8GB/256GB",
      "storage": "",
      "selling_price": "459.79",
      "mrp": "93999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">APPLE 2022 MacBook AIR M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLXW3HN/A (13.6 Inch, Space Grey, 1.24</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Electronics</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Mid Night,Silver,Space Grey</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">8GB/256GB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹93999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹459.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">80%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.9 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8348</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604689433620240518154134",
      "images1": "/uploads/uploads/171604689433620240518154134",
      "images2": "/uploads/uploads/171604689495620240518154134",
      "images3": "/uploads/uploads/171604689441120240518154134",
      "images4": "/uploads/uploads/171604689434320240518154134",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0e4b4ff"
      },
      "Title": "boAt Aavante Bar 1200D",
      "color": "BLACK",
      "size": "n",
      "storage": "",
      "selling_price": "299.99",
      "mrp": "27999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar 1200D</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">.</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">BLACK</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">n</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹27999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹299.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8794</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171604693568120240518154215",
      "images1": "/uploads/uploads/171604693568120240518154215",
      "images2": "/uploads/uploads/171604693567820240518154215",
      "images3": "/uploads/uploads/171604693599720240518154215",
      "images4": "/uploads/uploads/171604693594520240518154215",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d02b61ad"
      },
      "Title": "Cookwell Bullet Mixer Grinder 600 Watts",
      "color": "Black",
      "size": "5 Jar-3 Blade",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "2499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Cookwell Bullet Mixer Grinder 600 Watts</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">5 Jar-3 Blade</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹2499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">86%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.5 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7959</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544377266320240511160932",
      "images1": "/uploads/uploads/171544377266320240511160932",
      "images2": "/uploads/uploads/171544377222720240511160932",
      "images3": "/uploads/uploads/171544377249120240511160932",
      "images4": "/uploads/uploads/171544377266320240511160932",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0ab1610"
      },
      "Title": "boAt Aavante Bar Orion Plus Bluetooth 2.1-Channel Soundbar with 160 W Signature Sound, BT v5.3, Multi-Compatibility, Attractive Design, EQ Modes & Master Remote Control(Midnight Black)",
      "color": "Black",
      "size": "160 W",
      "storage": "",
      "selling_price": "399.79",
      "mrp": "14999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">boAt Aavante Bar Orion Plus Bluetooth 2.1-Channel Soundbar with 160 W Signature Sound, BT v5.3, Multi-Compatibility, Attractive Design, EQ Modes & Master Remote Control(Midnight Black)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Boat Soundbar</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">160 W</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹14999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">82%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6076</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171552634520920240512150545",
      "images1": "/uploads/uploads/171552634520920240512150545",
      "images2": "/uploads/uploads/171552634588320240512150545",
      "images3": "/uploads/uploads/171552634549520240512150545",
      "images4": "/uploads/uploads/171552634525720240512150545",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0b2b8c9"
      },
      "Title": "PHILIPS Mixer Grinder 3-in-1 750 Watt (Mixer Grinder + Juicer + Food Processor) 4 Jar, (HL7707/01)",
      "color": "Black",
      "size": "750 Watt",
      "storage": "",
      "selling_price": "389.49",
      "mrp": "7699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">PHILIPS Mixer Grinder 3-in-1 750 Watt (Mixer Grinder + Juicer + Food Processor) 4 Jar, (HL7707/01)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mixer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">750 Watt</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">84%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7814</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544992492220240511175204",
      "images1": "/uploads/uploads/171544992492220240511175204",
      "images2": "/uploads/uploads/171544992435120240511175204",
      "images3": "/uploads/uploads/171544992473420240511175204",
      "images4": "/uploads/uploads/171544992471120240511175204",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0c3caf6"
      },
      "Title": "Faber Hob 4 Burner | Auto-Ignition | Spillage Proof | HOB SUPERIA HT904 BR AI | Concealed Chamber | Metal Knobs ",
      "color": "Black",
      "size": "4 Burner",
      "storage": "",
      "selling_price": "369.49",
      "mrp": "19599",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Faber Hob 4 Burner | Auto-Ignition | Spillage Proof | HOB SUPERIA HT904 BR AI | Concealed Chamber | Metal Knobs </td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Stove</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">4 Burner</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹19599</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹369.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">6785</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544944852620240511174408",
      "images1": "/uploads/uploads/171544944852620240511174408",
      "images2": "/uploads/uploads/171544944883020240511174408",
      "images3": "/uploads/uploads/171544944828120240511174408",
      "images4": "/uploads/uploads/171544944867220240511174408",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0e6649a"
      },
      "Title": "Larah by Borosil Blue Eve Silk Series Opalware Dinner Set | 35 Pieces for Family of 6 | Microwave & Dishwasher Safe | Bone-Ash Free | Crockery Set for Dining & Gifting | Plates & Bowls | White",
      "color": "White",
      "size": "Full Set",
      "storage": "",
      "selling_price": "349.99",
      "mrp": "3499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Larah by Borosil Blue Eve Silk Series Opalware Dinner Set | 35 Pieces for Family of 6 | Microwave & Dishwasher Safe | Bone-Ash Free | Crockery Set for Dining & Gifting | Plates & Bowls | White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Home-Appliance</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Full Set</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹349.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">81%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.8 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7588</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544779485520240511171634",
      "images1": "/uploads/uploads/171544779485520240511171634",
      "images2": "/uploads/uploads/171544779487320240511171634",
      "images3": "/uploads/uploads/171544779478820240511171634",
      "images4": "/uploads/uploads/171544779428720240511171634",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0efcf8e"
      },
      "Title": "Crompton Ozone 88 Litres Desert Air Cooler for home | Large & Easy Clean Ice Chamber | 4-Way Air Deflection | High Density Honeycomb Pads | Everlast Pump | Auto Fill",
      "color": "White",
      "size": "55L,75L,88L",
      "storage": "",
      "selling_price": "389.89",
      "mrp": "7999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Crompton Ozone 88 Litres Desert Air Cooler for home | Large & Easy Clean Ice Chamber | 4-Way Air Deflection | High Density Honeycomb Pads | Everlast Pump | Auto Fill</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Cooler</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">White</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">55L,75L,88L</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹7999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹389.89</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">75%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.1 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8123</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544757120120240511171251",
      "images1": "/uploads/uploads/171544757120120240511171251",
      "images2": "/uploads/uploads/171544757126420240511171251",
      "images3": "/uploads/uploads/171544757165120240511171251",
      "images4": "/uploads/uploads/171544757171920240511171251",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0830a9a"
      },
      "Title": "atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote",
      "color": "Brown & Black",
      "size": "1200mm",
      "storage": "",
      "selling_price": "355.79",
      "mrp": "3699",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Fan</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Brown & Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">1200mm</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3699</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹355.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8052</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544873472220240511173214",
      "images1": "/uploads/uploads/171544873472220240511173214",
      "images2": "/uploads/uploads/171544873467120240511173214",
      "images3": "/uploads/uploads/171544873425920240511173214",
      "images4": "/uploads/uploads/171544873418420240511173214",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d096b5bb"
      },
      "Title": "APPLE iPhone 15 Pro Max ",
      "color": "Natural Titanium,Blue Titanium,White Titanium,Black Titanium",
      "size": "256GB,512GB,1TB",
      "storage": "",
      "selling_price": "399.79",
      "mrp": "159900",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">APPLE iPhone 15 Pro Max </td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Natural Titanium,Blue Titanium,White Titanium,Black Titanium</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">256GB,512GB,1TB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹159900</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">87%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.4 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7874</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544186911120240511153749",
      "images1": "/uploads/uploads/171544186911120240511153749",
      "images2": "/uploads/uploads/171544186991920240511153749",
      "images3": "/uploads/uploads/171544186922420240511153749",
      "images4": "/uploads/uploads/171544186917220240511153749",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d055c227"
      },
      "Title": "Pigeon Healthifry Digital Air Fryer, 360? High Speed Air Circulation Technology 1200 W with Non-Stic",
      "color": "Black",
      "size": "Free Size",
      "storage": "",
      "selling_price": "379.79",
      "mrp": "3499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Pigeon Healthifry Digital Air Fryer, 360? High Speed Air Circulation Technology 1200 W with Non-Stic</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Air-Fryer</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">Free Size</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹3499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹379.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">83%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8142</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171551472130720240512115201",
      "images1": "/uploads/uploads/171551472130720240512115201",
      "images2": "/uploads/uploads/171551472159620240512115201",
      "images3": "/uploads/uploads/171551472140420240512115201",
      "images4": "/uploads/uploads/171551472193820240512115201",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d08d2c14"
      },
      "Title": "Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage)",
      "color": "Titanium Black,Titanium Gray,Titanium Green,Titanium Violet",
      "size": "12+256 GB, 12+1 TB",
      "storage": "",
      "selling_price": "439.79",
      "mrp": "129999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Mobile</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Titanium Black,Titanium Gray,Titanium Green,Titanium Violet</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">12+256 GB, 12+1 TB</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹129999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹439.79</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">78%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.3 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8846</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544448153320240511162121",
      "images1": "/uploads/uploads/171544448153320240511162121",
      "images2": "/uploads/uploads/171544448176820240511162121",
      "images3": "/uploads/uploads/171544448189220240511162121",
      "images4": "/uploads/uploads/171544448153320240511162121",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d05c6378"
      },
      "Title": "Butterfly Smart Glass 3 Burner Gas Stove, Black, Manual Ignition",
      "color": "Black",
      "size": "3-Burner",
      "storage": "",
      "selling_price": "399.49",
      "mrp": "6499",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Butterfly Smart Glass 3 Burner Gas Stove, Black, Manual Ignition</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Stove</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">3-Burner</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹6499</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹399.49</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">90%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">No</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.2 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">7789</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171551526891720240512120108",
      "images1": "/uploads/uploads/171551526891720240512120108",
      "images2": "/uploads/uploads/171551526844420240512120108",
      "images3": "/uploads/uploads/171551526829320240512120108",
      "images4": "/uploads/uploads/171551526841520240512120108",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "686443d0c7b44f"
      },
      "Title": "Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens (Black)",
      "color": "Black",
      "size": "18MP",
      "storage": "",
      "selling_price": "429.99",
      "mrp": "37999",
      "features": "<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Specifications</b></p>\n<p data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">In The Box</b></p>\n<p data-mce-fragment=\"1\">1 Product</p>\n<table class=\"table table-bordered\" data-mce-fragment=\"1\">\n<tbody data-mce-fragment=\"1\">\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">General</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Product Title</td>\n<td data-mce-fragment=\"1\">Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens (Black)</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Category</td>\n<td data-mce-fragment=\"1\">Camera</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Color</td>\n<td data-mce-fragment=\"1\">Black</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Size</td>\n<td data-mce-fragment=\"1\">18MP</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Price Details</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">MRP</td>\n<td data-mce-fragment=\"1\">₹37999</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Selling Price</td>\n<td data-mce-fragment=\"1\">₹429.99</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Discount</td>\n<td data-mce-fragment=\"1\">79%</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Features</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Fast Delivery</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">EMI Available</td>\n<td data-mce-fragment=\"1\">Yes</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Bank Offers</td>\n<td data-mce-fragment=\"1\">Get ₹25 instant Cashback on Phone Pe UPI txns on order of ₹250 and above</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\"><b data-mce-fragment=\"1\">Customer Reviews</b></td>\n<td data-mce-fragment=\"1\"><br data-mce-fragment=\"1\"></td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Rating</td>\n<td data-mce-fragment=\"1\">4.7 out of 5</td>\n</tr>\n<tr data-mce-fragment=\"1\">\n<td data-mce-fragment=\"1\">Total Reviews</td>\n<td data-mce-fragment=\"1\">8385</td>\n</tr>\n</tbody>\n</table>\n<p data-mce-fragment=\"1\"> </p>",
      "images": "/uploads/uploads/171544034671320240511151226",
      "images1": "/uploads/uploads/171544034671320240511151226",
      "images2": "/uploads/uploads/171544034645420240511151226",
      "images3": "/uploads/uploads/171544034650420240511151226",
      "images4": "/uploads/uploads/171544034654720240511151226",
      "__v": 0
    }
  ]);
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
                      <a href="/cart" className="_3NH1qf">
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
                              <a href="/cartsearch" className="search-div">
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
                <div className='row' style={{ background: "#f1f2f4" }}>
                  {products?.length > 0 ?
                    products.flat(inherits)?.map((item, index) => {
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