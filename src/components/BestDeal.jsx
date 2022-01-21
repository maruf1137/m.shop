import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Title } from "./Component";
import BestDealPhoto from "../img/best-deal.png";

const BestDeal = () => {
  const [getday, setgetday] = useState("00");
  const [gethour, setgethour] = useState("00");
  const [getmin, setgetmin] = useState("00");
  const [getsec, setgetsec] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("jan 20 2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        setgetday(days);
        setgethour(hours);
        setgetmin(min);
        setgetsec(sec);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <>
      <div className="bg-gray-50">
        <div className="xl:max-w-7xl mx-auto px-6 xl:px-0 py-12">
          <Title title="todays best offer" />
          <div className="grid sm:grid-cols-2 grid-cols-1 bg-white py-8 px-5">
            <div className="">
              <h2 className="text-2xl font-semibold mb-4">
                Donec feugiat sem nec ipsum fermentum sodales.
              </h2>
              <p className="text-base mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                quidem doloremque ad recusandae unde, dolorum beatae in iure
                cupiditate eaque aliquam neque, ratione maxime fugit porro
                ullam, a alias consectetur!
              </p>
              <div className="flex mb-4">
                <div className="mr-5 flex justify-center items-center flex-col">
                  <span className="bg-indigo-600 h-12 w-12 rounded-full text-lg text-white flex justify-center items-center mb-2">
                    {getday}
                  </span>
                  <span className="capitalize font-medium">days</span>
                </div>
                <div className="mr-5 flex justify-center items-center flex-col">
                  <span className="bg-indigo-600 h-12 w-12 rounded-full text-lg text-white flex justify-center items-center mb-2">
                    {gethour}
                  </span>
                  <span className="capitalize font-medium">hours</span>
                </div>
                <div className="mr-5 flex justify-center items-center flex-col">
                  <span className="bg-indigo-600 h-12 w-12 rounded-full text-lg text-white flex justify-center items-center mb-2">
                    {getmin}
                  </span>
                  <span className="capitalize font-medium">minute</span>
                </div>
                <div className="mr-5 flex justify-center items-center flex-col">
                  <span className="bg-indigo-600 h-12 w-12 rounded-full text-lg text-white flex justify-center items-center mb-2">
                    {getsec}
                  </span>
                  <span className="capitalize font-medium">second</span>
                </div>
              </div>
              <Link
                to="/product"
                className="bg-indigo-600 py-2 px-5 rounded-full inline-block text-white hover:bg-indigo-500 transition ease-in-out duration-300 capitalize"
              >
                shop now
              </Link>
            </div>
            <div className="hidden sm:block transform translate-x-20 translate-y-14">
              <img src={BestDealPhoto} alt="best deal" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestDeal;
