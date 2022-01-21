import React from "react";
import PageTitle from "../components/PageTitle";
import { AboutUs, Team, Companies } from "../components/Component";

const About = () => {
  return (
    <div>
      <PageTitle
        title="about us"
        image="https://i.ibb.co/9WrFFsX/pexels-nataliya-vaitkevich-6942034.jpg"
      />
      <AboutUs />
      <Team />
      <Companies />
    </div>
  );
};

export default About;
