import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/solid";
import { useProductsContext } from "../Context/ProductContext";

const Products = ({
  name,
  price,
  rating,
  imageSrc,
  reviewCount,
  imageAlt,
  href,
  id,
  desc,
  brand,
  category,
}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const { getSingleProduct } = useProductsContext();
  const singleProductArr = [
    {
      name: name,
      price: price,
      rating: rating,
      imageSrc: imageSrc,
      reviewCount: reviewCount,
      imageAlt: imageAlt,
      href: href,
      id: id,
      desc: desc,
      brand: brand,
      category: category,
    },
  ];

  return (
    <>
      <Link
        to={`/product/${id}`}
        onClick={() => getSingleProduct(singleProductArr)}
      >
        <div className="bg-white relative p-4 sm:p-6 cursor-pointer">
          <div className="rounded-lg overflow-hidden aspect-w-1 aspect-h-1 hover:opacity-75">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="pt-5 text-center">
            <h3 className="text-sm font-medium text-gray-900">
              <h3>{name}</h3>
            </h3>
            <div className=" flex flex-col items-center">
              <p className="sr-only">{rating} out of 5 stars</p>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      rating > rating ? "text-yellow-400" : "text-gray-200",
                      "flex-shrink-0 h-5 w-5"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {reviewCount} reviews
              </p>
            </div>
            <p className="mt-2 text-base font-medium text-gray-900">{price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Products;
