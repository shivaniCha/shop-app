import AxiosService from "../service/axios-service";

export const getAllCategories = () => AxiosService.get(`products/categories`);
