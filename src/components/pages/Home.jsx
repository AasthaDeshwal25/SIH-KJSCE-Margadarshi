import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Hero />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
};

export default Home;
