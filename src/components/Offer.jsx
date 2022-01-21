import React from "react";
import { Link } from "react-router-dom";
import { Title } from "./Component";
import { LatestOffer } from "../data";

const Offer = () => {
  return (
    <>
      <div className="bg-gray-50 py-12 ">
        <Title title="latest offer" />
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-5 xl:max-w-7xl mx-auto px-6 xl:px-0">
          {LatestOffer.map((item) => {
            return (
              <Link to={item.url} key={item.id} className="w-full">
                <div className="w-full">
                  <img src={item.img_url} alt={item.name} className="w-full" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Offer;
