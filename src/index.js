import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./Context/ProductContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
