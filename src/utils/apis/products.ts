import AxiosService from "../service/axios-service";

export const getAllProducts = (sortingOrder: string) =>
  AxiosService.get(`products?sort=${sortingOrder}`);

export const getProductsByCategory = (
  category: string = "",
  sortingOrder: string
) => {
  return AxiosService.get(`products/category/${category}?sort=${sortingOrder}`);
};
