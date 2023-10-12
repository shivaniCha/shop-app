import { Product } from "../../utils/types/product";

type SetPageParameterType = (value: number) => number;

export type PaginationProps = {
  productsData: Product[];
  page: number;
  setPage(value: SetPageParameterType | number): void;
};
