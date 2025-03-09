"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import {
  Combobox,
  Transition,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import { SearchCarMakeProps, CarMakeProps } from "@/types";
import LoadingSpinner from "./LoadingSpinner";

export default function SearchCarMake({ carMake, setCarMake }: SearchCarMakeProps) {
  const [query, setQuery] = useState("");
  const [carMakes, setCarMakes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filteredCarMakes =
    query === "" && carMakes.length > 0
      ? carMakes
      : carMakes.filter((item: CarMakeProps) =>
          item.name.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  useEffect(() => {
    async function fetchCarMakes() {
      setIsLoading(true);
      const headers: HeadersInit = {
        "x-rapidapi-key": "2e4adbde49mshd069f5b1e4d8af8p1cc601jsn5067a6953d35",
        "x-rapidapi-host": "car-api2.p.rapidapi.com",
      };

      const response = await fetch("https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=name", {
        headers: headers,
      });
      const result = await response.json();

      setCarMakes(result.data);
      setIsLoading(false);
    }
    fetchCarMakes();
  }, []);

  return (
    <div className="search-car-make">
      <Combobox value={carMake} onChange={(e: any) => setCarMake(e?.name)}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="car logo" />
          </ComboboxButton>
          {isLoading && (
            <div className="absolute top-[14px] right-[10px]">
              <LoadingSpinner />
            </div>
          )}
          <ComboboxInput
            className={`search-car-make__input border-4 disabled:bg-gray-200`}
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Volkswagen..."
            disabled={isLoading}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions
              className="absolute mt-1 z-50 max-h-60 w-full scrollbar overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredCarMakes?.length === 0 && query !== "" ? (
                <ComboboxOption value={query} className="search-car-make__option">
                  Create "{query}"
                </ComboboxOption>
              ) : (
                filteredCarMakes?.map((item: CarMakeProps) => (
                  <ComboboxOption
                    key={item.id}
                    className={({ active }) =>
                      `relative search-car-make__option ${active ? "bg-primary-orange text-white" : "text-gray-900"}`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-pribg-primary-purple"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
