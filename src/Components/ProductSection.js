import React, { useState } from "react";
import { productstree } from "../Assets/productstree.json";
import "../Css/ProductSection.css";
import { Products } from "./Products";

export const ProductSection = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const [dataJson, setDataJson] = useState(productstree);

  const handleAddItem = (item) => {
    const newData = dataJson.map((product) => {
      if (product.id === item) {
        console.log(product);
        console.log(product.stock);
        if (product.stock >= 1) {
          return { ...product, stock: product.stock - 1 };
        } else {
          alert("no mas productos en el stock");
          return product;
        }
      } else {
        return product;
      }
    });
    setDataJson(newData);
  };

  return (
    <div className="card">
      {dataJson.map((item) => (
        <div className="card-body" key={item.id}>
          <h2 className="card-title">{item.name}</h2>
          <img className="card-img" src={item.img} alt="img-product" />
          <h4 className="card-price">{item.unit_price}</h4>
          <p className="card-stock">{item.stock}</p>
          <div className="button">
            <button
              onClick={() => handleAddItem(item.id)}
              className="btn btn-primary"
            >
              <i className="fas fa-shopping-cart"></i>add to cart
            </button>
          </div>
        </div>
      ))}
      <Products cartProduct={cartProduct} />
    </div>
  );
};
