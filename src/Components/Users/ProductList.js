import React from "react";
import classes from "./ProductList.module.css";
import Card from "../UI/Card";

const ProductList = (props) => {
  return (
    <Card className={classes.products}>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            {product.name} {product.price} {product.quantity}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProductList;
