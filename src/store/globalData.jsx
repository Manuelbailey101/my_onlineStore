import DataContext from "./dataContext";
import { useState } from "react";

function GlobalData(props) {
  const [cart, setCart] = useState([]);
  const [fakeUser, setFakeUser] = useState({ name: "Manny" });

  function addProductToCart(product) {
    console.log("global fn called");

    // modify an state var with obj {} or array []
    // create a copy , modify the copy , set the copy

    var copy=[...cart];
    copy.push(product);
    setCart(copy);
    //no spaces between
  }

  function removeProductFromCart() {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        user: fakeUser,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalData;
