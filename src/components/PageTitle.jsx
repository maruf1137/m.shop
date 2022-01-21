import React from "react";

const PageTitle = ({
  title,
  image = "https://i.ibb.co/Fnz4RD7/pexels-skyler-ewing-10519841.jpg",
}) => {
  return (
    <>
      <div
        className="w-full py-20 text-center capitalize bg-no-repeat bg-center bg-cover"
        style={{
          background: `linear-gradient(190deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
      </div>
    </>
  );
};

export default PageTitle;
