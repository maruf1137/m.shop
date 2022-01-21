import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <div className="text-center mb-8 mt-12">
        <h2 className="text-4xl capitalize font-semibold mb-3 ">{title}</h2>
        <div className="h-0.5 w-40 mx-auto bg-indigo-600 "></div>
      </div>
    </>
  );
};

export default Title;
