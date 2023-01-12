// INTERNAL 

import { createContext } from "react";

// interface, promise , blueprint 
// should not  have any value or implementation
// just described the structure of the data
const DataContext = createContext ({
      cart: [],
      user: [],
      addProductToCart: () => {},
      removeProductFromCart: () => {},
    });

    export default DataContext;