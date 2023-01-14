
import { useContext } from "react";
import DataContext from "../store/dataContext";
import "./cart.css";

function Cart() {
  const cart = useContext(DataContext).cart;

  return (
    <div className="cart">
      <h1>Are you ready to pay?</h1>
      <h3>you have {cart.length} items in your Cart</h3>

      {cart.map((prod) => (
        <div className="prod-row">
          <img src={'/images/' + prod.image} alt=""></img>

          <h6>{prod.title}</h6>

          <label>{prod.price}</label>

          <button className="btn btn-sm btn-danger">delete</button>
         
        </div>
      ))}
    </div>
  );
}

export default Cart;
