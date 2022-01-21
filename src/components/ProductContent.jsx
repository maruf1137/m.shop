import React from "react";
import Products from "./Products";
import { useProductsContext } from "../Context/ProductContext";

const ProductContent = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const { products } = useProductsContext();
  return (
    <>
      <div className="xl:max-w-7xl mx-auto px-6 xl:px-0 overflow-hidden sm:px-6 lg:px-8 py-12">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-3">
          {products.map((product, index) => (
            <Products key={index} {...product} id={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductContent;
