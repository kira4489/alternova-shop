import React,{useState} from "react";
import { productstree } from "../Assets/productstree.json"
import "../Css/ProductSection.css"
import { Products } from "./Products";

export const ProductSection = () => {
  const [itemsProduct, setItemsProduct] = useState(0);
  
  const handleAddItem = (e, idProduct) => {
    setItemsProduct(prev => prev + 1)
    if(e.preventDefault.value >= idProduct.stock) {
      console.log('superaste la cantida de productos....')
    }
  }

  return (
    <div className="card">
     {productstree.map((item) => (
      <div className="card-body" key={item.id}>
        <h2 className="card-title">{item.name}</h2>
        <img className="card-img" src={item.img} alt="img-product"/>
        <input onChange={(e) => handleAddItem(e, item.stock)}/>+
        <button className="btn btn-primary">
        <i class="fas fa-shopping-cart"></i>add to cart
        </button>
      </div>
        ))}
    </div>
  );
};
