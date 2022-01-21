import React from "react";
import { Title } from "./Component";
import Products from "./Products";
import { useProductsContext } from "../Context/ProductContext";

const ProductList = () => {
  const { products } = useProductsContext();

  return (
    <>
      <div className="bg-gray-50 py-8">
        <Title title="latest products" />

        <div className="xl:max-w-7xl mx-auto px-6 xl:px-0 overflow-hidden sm:px-6 lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="-mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-3">
            {products.slice(0, 8).map((product, index) => (
              <Products key={index} {...product} id={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
