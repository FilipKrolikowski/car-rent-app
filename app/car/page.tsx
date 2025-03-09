import { useRouter } from "next/navigation";
import { HomeProps } from "@/types";
import { fetchSingleCar } from "@/utils";

const page = async ({ searchParams }: any) => {
  console.log(searchParams.id);

  const carInfo = await fetchSingleCar(searchParams.id);

  console.log(carInfo);

  return <div></div>;
};

export default page;
