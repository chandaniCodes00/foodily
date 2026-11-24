import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
import Juice from "./pages/juice";
import Beverages from "../src/pages/beverages";

import Deals from "../src/pages/deals"
import Soothie from "../src/pages/soothie";
import Upcomingproducts from "./pages/upcomingproducts";
import Testimonial from "./pages/testimonial";
import Blog from "../src/pages/blog";

function App()
{
  return(
    <BrowserRouter>
      <Navbar />
      <Juice />
      <Beverages />
      <Deals />
      <Soothie />
      <Upcomingproducts />
      <Testimonial />
      <Blog />
      <Footer />
    </BrowserRouter>
  )
}

export default App;