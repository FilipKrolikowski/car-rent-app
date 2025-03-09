import { MouseEventHandler } from "react";
import type { ReactNode } from "react";

export interface CarProps {
  id: number;
  make_model_id: number;
  year: number;
  name: string;
  description: string;
  msrp: number;
  invoice: number;
  created: string;
  modified: string;
  make_model: {
    id: number;
    make_id: number;
    name: string;
    make: {
      id: number;
      name: string;
    };
  };
}

export interface CarMakeProps {
  id: number;
  name: string;
}

export interface FilterProps {
  make?: string;
  year?: number;
  model?: string;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchCarMakeProps {
  carMake: string;
  setCarMake: (carMake: string) => void;
}

export type ChildrenProps = {
  children: ReactNode;
};
