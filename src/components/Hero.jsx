import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const bgImage =
    "https://i.ibb.co/gvrmpz3/set-of-fruits-isolated-on-white-background.jpg";
  return (
    <>
      <div
        className="relative overflow-hidden capitalize h-[80vh]"
        style={{
          background: `linear-gradient(190deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl uppercase tracking-wide">
                <span className="block xl:inline text-white mr-6">
                  foods and fruits
                </span>
                <span className="block text-indigo-600 xl:inline">organic</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                ut, voluptatum reiciendis mollitia, velit qui sit illo alias,
                consequatur beatae fuga corporis aspernatur at!.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    to="/product"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    start shopping
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Hero;
