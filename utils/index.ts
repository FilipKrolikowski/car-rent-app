import { CarProps, FilterProps } from "@/types";
import { fakeCarImages } from "@/constants";

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  const newSearchParams = new URLSearchParams(window.location.search);
  newSearchParams.delete(type.toLocaleLowerCase());

  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { make, year, model, fuel } = filters;

  const headers: HeadersInit = {
    "x-rapidapi-key": "2e4adbde49mshd069f5b1e4d8af8p1cc601jsn5067a6953d35",
    "x-rapidapi-host": "car-api2.p.rapidapi.com",
  };

  const response = await fetch(
    `https://car-api2.p.rapidapi.com/api/trims?limit=12&direction=asc&sort=name&model=${model}&make=${make}&year=${
      year || "2020"
    }&verbose=yes`,
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}

export async function fetchSingleCar(id: number) {
  const headers: HeadersInit = {
    "x-rapidapi-key": "2e4adbde49mshd069f5b1e4d8af8p1cc601jsn5067a6953d35",
    "x-rapidapi-host": "car-api2.p.rapidapi.com",
  };

  const response = await fetch(`https://car-api2.p.rapidapi.com/api/trims/${id}`, {
    headers: headers,
  });

  const result = await response.json();
  console.log(result);

  return result;
}

// Couldn't find free api with car images, so this are just random images
export const generateCarImageUrl = () => {
  return fakeCarImages[Math.floor(Math.random() * fakeCarImages.length)];
};

export const handleScrollToCarList = () => {
  const nextSection = document.getElementById("discover");

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};
