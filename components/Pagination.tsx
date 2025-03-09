"use client";

import { updateSearchParams } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Pagination as PaginationMui } from "@mui/material";

export const Pagination = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const handleUpdateParams = (event: React.ChangeEvent<unknown>, value: number) => {
    const newPathName = updateSearchParams("page", `${value}`);

    router.push(newPathName);
  };

  return (
    <div className="flex justify-center mb-4 mt-8">
      <PaginationMui count={totalPages} page={parseInt(page as string) || 1} onChange={handleUpdateParams} />
    </div>
  );
};
