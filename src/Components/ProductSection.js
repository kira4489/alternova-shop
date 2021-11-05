import React, { useState } from "react";
import { productstree } from "../Assets/productstree.json";
import "../Css/ProductSection.css";
import { Products } from "./Products";

export const ProductSection = () => {
  const [itemsProduct, setItemsProduct] = useState([]);

  const handleChangeItem = (stock) => {
    /* setItemsProduct(prev => prev + 1) */
    console.log(stock);
    console.log(itemsProduct);
    if (itemsProduct >= stock) {
    }
  };

  const handleAddItem = (product) => {
    if (itemsProduct.length === 0) {
      setItemsProduct([...itemsProduct, { ...product, count: 1 }]);
    } else {
      const newItems = [...itemsProduct];
      const index = newItems.findIndex((item) => item.id === product.id);
      if (index === -1) {
        newItems.push({ ...product, count: 1 });
      } else {
        newItems[index].count++;
      }
      setItemsProduct(newItems);
    }
    /* setItemsProduct([...itemsProduct,{...product,count:1}]); */
    itemsProduct?.map((product) => {
      if (product.count === product.stock) {
        setItemsProduct((prev) => prev + 1);
        console.log("no hay mas plata",product.stock);
        setItemsProduct(...itemsProduct);
      }
    });
  };
  console.log(itemsProduct);
  
  return (
    <div className="card">
      {productstree.map((item) => (
        <div className="card-body" key={item.id}>
          <h2 className="card-title">{item.name}</h2>
          <img className="card-img" src={item.img} alt="img-product" />
          {/*  <div>{itemsProduct}</div> */}
          {/*  <button onClick={()=>handleAddItem(item.id)}>+</button> */}
        <div className="button">
          <button>-</button>
          <button onClick={handleChangeItem}>+</button>
          <button
            onClick={() => handleAddItem(item)}
            className="btn btn-primary"
          >
            <i className="fas fa-shopping-cart"></i>add to cart
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};
