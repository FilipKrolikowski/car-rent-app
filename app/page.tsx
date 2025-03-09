import { Hero, SearchBar, CustomFilter, CarCard, Pagination } from "@/components";
import Image from "next/image";
import { fetchCars } from "@/utils";
import { yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {
  const { data: allCars, collection: fetchCollectionInfo } = await fetchCars({
    make: searchParams.make || "",
    year: searchParams.year || 2020,
    fuel: searchParams.fuel || "",
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  const pages = fetchCollectionInfo?.pages;

  console.log(fetchCollectionInfo?.pages);
  console.log(pages);

  return (
    <div className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-y bg-white text-black" id="discover">
        <div className="max-width padding-x mt-16">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore out cars you might like</p>
          </div>
          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>

          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car) => (
                  <CarCard car={car} key={car.id} />
                ))}
              </div>

              <Pagination totalPages={pages} />
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-white text-xl font-bold">Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
