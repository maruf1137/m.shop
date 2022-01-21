import React from "react";
import { companyData } from "../data";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Companies = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        {companyData.map(({ image_url, name }, index) => (
          <div className="relative" key={index}>
            <div className=" block w-full h-[250px] aspect-w-10 aspect-h-7 rounded-lg focus-within:ring-2 focus-within:ring-offset-0 overflow-hidden flex justify-center items-center p-5">
              <img
                src={image_url}
                alt={name}
                className="object-cover pointer-events-none h-[70%]"
              />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Companies;
