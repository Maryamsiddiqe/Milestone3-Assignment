import React from "react";
import Navbar from "../app/components/Navbar";
import Carousel from "./components/Carousel";
import Progressor from "./components/Progressor";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Testimonals from "./components/Testimonals";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";
import Reservation from "./components/Reservation";
import Menu from "./components/Menuitem"; // Updated to match the component export

export default function App() {
  return (
    <div className='bg-gradient-to-r from-black to-grey-700 min-h-screen'>
      <Navbar />
      <Carousel />
      <Progressor />
      <Pizza />
      <Banner />
      <ProductList />
      <Menu /> 
      <Offer />
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}