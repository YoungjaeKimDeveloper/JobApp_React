import React from "react";
import Hero from "../src/components/Hero";
import Cards from "../src/components/Cards";
import Joblistings from "../src/components/Joblistings";
import Button from "../src/components/Button";
const HomePage = () => {
  return (
    <>
      <Hero title={"Become a Web Developer"} subtitle={"Start From Here"} />
      <Cards />
      <Joblistings isHomePage ={true} />
      <Button />
    </>
  );
};

export default HomePage;
