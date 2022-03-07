import React, { useState } from "react";
import AddProduct from "./Components/Users/AddProduct";
import ProductList from "./Components/Users/ProductList";

function App() {
  const [productsList, setProductsList] = useState([]);
  const addProductsHandler = (productName, productPrice, productQuantity) => {
    setProductsList((prevProductList) => {
      return [
        ...prevProductList,
        {
          name: productName,
          price: productPrice,
          quantity: productQuantity,
          id: Math.random().toString(),
        },
      ];
      // console.log(productsList);
      // console.log(productName, productPrice, productQuantity);
    });
  };
  return (
    <div>
      <AddProduct onAddProduct={addProductsHandler} />
      <ProductList products={productsList} />
    </div>
  );
}

export default App;
