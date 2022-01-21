import React, { useState } from "react";
import { useProductsContext } from "../Context/ProductContext";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";

const SingleProduct = () => {
  const { singleProduct, getCartItems } = useProductsContext();

  const product = {
    name: singleProduct.name,
    price: singleProduct.price,
    rating: singleProduct.rating,
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
    ],
    description: `
      <p>${singleProduct.desc}</p>
    `,
    details: [
      {
        name: "Features",
        items: [
          "Multiple strap configurations",
          "Spacious interior with top zip",
          "Leather handle and tabs",
          "Interior dividers",
          "Stainless strap loops",
          "Double stitched construction",
          "Water-resistant",
        ],
      },
      // More sections...
    ],
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {singleProduct.map(
            ({
              name,
              price,
              imageSrc,
              rating,
              reviewCount,
              desc,
              id,
              brand,
              category,
            }) => {
              const cartItems = [
                {
                  name: name,
                  price: price,
                  rating: rating,
                  imageSrc: imageSrc,
                  reviewCount: reviewCount,
                  id: id,
                },
              ];
              return (
                <div
                  className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start"
                  key={id}
                >
                  <div className="h-[30rem] w-[100%]">
                    <img src={imageSrc} alt={name} className="h-full w-full" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold mb-6 mt-4">{name}</h2>
                    <h4 className="text-2xl font-bold mb-5 text-indigo-400">
                      {price}
                    </h4>
                    <p className="mb-8 text-lg">{desc}</p>
                    <h3 className="text-lg font-bold mb-3 capitalize">
                      <span>brand: </span>
                      <span>{brand}</span>
                    </h3>
                    <h3 className="text-lg font-bold mb-6 capitalize">
                      <span>category: </span>
                      <span>{category}</span>
                    </h3>
                    <div className="flex justify-items-start items-center">
                      <button
                        className="py-4 px-8 bg-indigo-400 mr-16 capitalize text-white hover:bg-indigo-600 transition-all ease-in-out delay-150 rounded-sm"
                        onClick={() => getCartItems(cartItems)}
                      >
                        add to cart
                      </button>
                      <button className="py-4 px-8 bg-indigo-400 capitalize text-white hover:bg-indigo-600 transition-all ease-in-out delay-150 rounded-sm">
                        add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
