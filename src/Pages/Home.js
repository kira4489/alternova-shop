import React from "react";
import { Navbar } from "../Components/Navbar";
import { Products } from "../Components/Products";
import { ProductSection } from "../Components/ProductSection";

export const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <ProductSection/>
    </div>
  );
};
