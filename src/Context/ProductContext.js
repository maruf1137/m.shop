import React, { useContext, useEffect, useReducer } from "react";
import { ProductsData } from "../data";

const initialState = {
  products: ProductsData,
  singleProduct: [],
  cartItems: [],
};

const reducer = (state, action) => {
  if (action.type === "get_single_product") {
    return { ...state, singleProduct: action.payload };
  }
  if (action.type === "get_cart_items") {
    return { ...state, cartItems: action.payload };
  }
  return { ...state };
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getSingleProduct = (singleProductArr) => {
    dispatch({
      type: "get_single_product",
      payload: singleProductArr,
    });
  };

  const getCartItems = (cartItems) => {
    dispatch({
      type: "get_cart_items",
      payload: cartItems,
    });
  };

  console.log(state.cartItems);

  return (
    <ProductsContext.Provider
      value={{ ...state, getSingleProduct, getCartItems }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
