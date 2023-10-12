import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import { ProductProps } from "../pages/Products/Products.types";

const Routers: FC<ProductProps> = ({ setDrawerVisible, isDrawerVisible }) => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route
        path="/product"
        element={
          <Products
            setDrawerVisible={setDrawerVisible}
            isDrawerVisible={isDrawerVisible}
          />
        }
      />
      <Route path="/about" element={<About />} />
      <Route
        path="*"
        element={
          <Products
            setDrawerVisible={setDrawerVisible}
            isDrawerVisible={isDrawerVisible}
          />
        }
      />
    </Routes>
  );
};
export default Routers;
