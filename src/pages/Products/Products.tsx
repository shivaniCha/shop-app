import { useState, useEffect, useMemo, FC } from "react";
import {
  Pagination,
  ProductItem,
  Search,
  Sidebar,
  SortDropDown,
} from "../../components";
import {
  getAllProducts,
  getProductsByCategory,
} from "../../utils/apis/products";
import { getAllCategories } from "../../utils/apis/categories";

import { Product } from "../../utils/types/product";
import { ProductProps, RangeType } from "./Products.types";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Products: FC<ProductProps> = ({ setDrawerVisible, isDrawerVisible }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("asc");
  const [category, setCategory] = useState<string>("");
  const [range, setRange] = useState<RangeType>({
    min: 0,
    max: 1000,
  });
  const [drawerClasses, setDrawerClasses] = useState<string>("");
  const [categoryList, setCategories] = useState<string[]>([]);


  useEffect(() => {
    getProducts(sort, category);
    setPage(1)
  }, [category, sort]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const categories = await getAllCategories();
    setCategories(categories.data);
  };

  const getProducts = async (order: string, category: string = "") => {
    const productList = category
      ? await getProductsByCategory(category, order)
      : await getAllProducts(order);
    setProducts(productList.data);
  };

  useEffect(() => {
    let drawerStyle = "side-drawer";
    if (isDrawerVisible)
      drawerStyle = "side-drawer open md:w-3/5 sm:w-11/12 p-8";
    setDrawerClasses(drawerStyle);
  }, [isDrawerVisible]);

  const searchedProducts = useMemo(
    () =>
      products.filter(
        (prevProduct) =>
          prevProduct.title.toLowerCase().includes(search) &&
          prevProduct.price > range.min &&
          prevProduct.price < range.max
      ),
    [products, search, range]
  );

  const paginatedProducts = useMemo(
    () => searchedProducts.slice((page - 1) * 8, page * 8),
    [searchedProducts, page]
  );

  return (
    <main className="flex">
      <div className="flex w-full">
        <div className={drawerClasses}>
          <div className="flex w-full justify-end mb-5">
            <XMarkIcon
              className="block h-8 w-8 border p-1 rounded"
              onClick={setDrawerVisible}
            />
          </div>
          {isDrawerVisible && <Sidebar {...{ setCategory, range, setRange, categoryList }} />}
        </div>
        <div className="h-full w-1/2 lg:block hidden border-r border-[#C2C3C6]">
          {!isDrawerVisible && <Sidebar {...{ setCategory, range, setRange, categoryList }} />}
        </div>
        <div className="lg:pl-[28px] lg:pr-[28px] pl-[15px] pr-[15px]">
          <div className="bg-white">
            <div className="flex place-content-between lg:items-center items-end py-[17px] flex-col lg:flex-row lg:gap-[0] gap-[15px]">
              <Search setSearch={setSearch} />
              <SortDropDown setSort={setSort} />
            </div>
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-5">
              {paginatedProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
            <div>
              <Pagination
                productsData={searchedProducts}
                page={page}
                setPage={setPage}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
