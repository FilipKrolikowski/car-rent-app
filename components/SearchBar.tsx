"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import SearchCarMake from "./SearchCarMake";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchButton = () => (
  <button type="submit" className="ml-3 z-10">
    <FaMagnifyingGlass size={25} fill="#dd601d" />
  </button>
);

const SearchBar = () => {
  const [carMake, setCarMake] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (carMake.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(model.toLowerCase(), carMake.toLowerCase());
  };

  const updateSearchParams = (model: string, carMake: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (carMake) {
      searchParams.set("make", carMake);
    } else {
      searchParams.delete("make");
    }

    searchParams.delete("page");

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchCarMake carMake={carMake} setCarMake={setCarMake} />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className={`searchbar__input`}
        />
      </div>
      <SearchButton />
    </form>
  );
};

export default SearchBar;
