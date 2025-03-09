"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { generateCarImageUrl } from "@/utils";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { CustomTag } from "./CustomTag";
import { FaUser } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import { MdLocalGasStation } from "react-icons/md";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const {
    year,
    name: modelName,
    description,
    id,
    make_model: {
      name: seriesName,
      make: { name: carMakeName },
    },
  } = car;

  const router = useRouter();

  // Couldn't find API with car prices so this is just fake number
  const carRent = Math.floor(Math.random() * 6 + 1) * 100;

  return (
    <div className="car-card group" onClick={() => router.push(`/car/?id=${id}`)}>
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {carMakeName} {modelName}
        </h2>
      </div>
      <h3 className="car-card__content-series">{seriesName}</h3>
      <div className="my-2 flex gap-2">
        <div>
          <CustomTag icon={<FaUser />} text="5" />
        </div>
        <div>
          <CustomTag icon={<GiGearStickPattern />} text="Manual" />
        </div>
        <div>
          <CustomTag icon={<MdLocalGasStation />} text="Gas" />
        </div>
      </div>

      <div className="relative w-full h-60 my-3 object-contain">
        <Image src={generateCarImageUrl()} alt="car model" fill priority className="object-contain" />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="w-full">
          <h3 className="car-card__content-series">{description}</h3>
          <h3 className="car-card__content-series">Year of production: {year}</h3>
        </div>
      </div>
      <p className="flex mt-6 text-[24px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] leading-[24px] font-medium">/day</span>
      </p>
    </div>
  );
};

export default CarCard;
