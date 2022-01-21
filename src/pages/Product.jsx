import React from "react";
import {
  ProductContent,
  ProuctPageNav,
  Pagination,
} from "../components/Component";
import ProductList from "../components/ProductList";
import PageTitle from "../components/PageTitle";

const Product = () => {
  return (
    <>
      <PageTitle
        title="products"
        image="https://i.ibb.co/jD6dTMP/pexels-luiz-m-santos-760281.jpg"
      />
      {/* <ProuctPageNav />
      <ProductContent />
      <Test /> */}
      <div className="bg-gray-50">
        <div>
          {/* Mobile filter dialog */}

          <main>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <ProuctPageNav />
              <ProductContent />
              <Pagination />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Product;
