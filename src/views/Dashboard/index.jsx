import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import KeyFeatures from "./components/KeyFeatures";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import cloudVideo from "../../assets/cloud.mp4";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen min-w-screen">
      <div className="fixed inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={cloudVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10">
        <div className="min-h-screen bg-gradient-to-b from-[#0B1D2600] to-[#0B1D26]">
          <Header />
          <Banner />
        </div>
        <Services />
        <Gallery />
        <KeyFeatures />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
