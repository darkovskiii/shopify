import React, { useState } from "react";
import classes from "./AddProduct.module.css";
import ErrorModalBox from "../UI/ErrorModalBox";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddProduct = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState("");
  const [error, setError] = useState();

  const addProductHandler = (event) => {
    event.preventDefault();
    if (
      enteredName.trim().length === 0 ||
      enteredPrice.trim().length === 0 ||
      enteredQuantity.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "please entered valid text",
      });
      return;
    }
    if (+enteredPrice < 1 || +enteredQuantity < 1) {
      setError({
        title: "Invalid price and quantity",
        message: "please entered valid quantity and price",
      });
      return;
    }
    console.log(enteredName, enteredPrice, enteredQuantity);
    props.onAddProduct(enteredName, enteredPrice, enteredQuantity);
    setEnteredName("");
    setEnteredPrice("");
    setEnteredQuantity("");
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    console.log("Vnesen e user", event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
    console.log("Vnesena e cena", enteredPrice);
  };
  const quantityChangeHandler = (event) => {
    setEnteredQuantity(event.target.value);
    console.log("Vnesena e kolicina", enteredQuantity);
  };
  // const clickHandler = (event) => {
  //   event.preventDefault();
  // };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModalBox
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addProductHandler}>
          <label htmlFor="username">Product Name</label>
          <input
            id="name"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <label htmlFor="price">Product Price</label>
          <input
            id="price"
            type="number"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
          <label htmlFor="quantity">Product Quantity</label>
          <input
            id="quantity"
            type="number"
            value={enteredQuantity}
            onChange={quantityChangeHandler}
          ></input>
          <Button
            type="submit"
            // onClick={clickHandler}
          >
            Add Product
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;
