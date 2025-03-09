"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import { FaGlobeAmericas, FaHandHoldingHeart } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { handleScrollToCarList } from "@/utils";

const Info = () => (
  <div>
    <div>
      <div className="mt-8 flex items-center gap-4 text-lg">
        <FaGlobeAmericas /> Global reach
      </div>
      <div className="font-bold text-2xl mt-2">1,000+ stations in over 55 countries</div>
    </div>
    <div>
      <div className="mt-8 flex items-center gap-4 text-lg">
        <FaCar /> Distinctive fleet
      </div>
      <div className="font-bold text-2xl mt-2">From high-end convertibles to premium SUVs</div>
    </div>
    <div>
      <div className="mt-8 flex items-center gap-4 text-lg">
        <FaHandHoldingHeart /> Exceptional service
      </div>
      <div className="font-bold text-2xl mt-2">Stress-free, trustworthy, no hidden costs</div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title text-primary-orange md:text-nowrap">
          Don't rent a car. <br /> Rent THE car.
        </h1>
        <p className="hero__subtitle">Premium car rental at affordable rates. Worldwide.</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-orange text-white rounded-full mt-10 hover:bg-white hover:text-primary-orange ease-in transition-all"
          handleClick={handleScrollToCarList}
        />
        <div className="max-xl:hidden">
          <Info />
        </div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
      <div className="xl:hidden padding-x">
        <Info />
      </div>
    </div>
  );
};

export default Hero;
