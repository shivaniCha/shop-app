import { FC } from "react";
import { Link } from "react-router-dom";
import { navigation } from "./Header.data";
import { HeaderProps } from "./Header.types";

const Header: FC<HeaderProps> = ({ setDrawerVisible }) => {
  return (
    <div>
      <div className=" lg:h-[149px] bg-[#34373F] h-[117px]">
        <div className="flex lg:justify-between justify-center h-full lg:pr-[44px] lg:pl-[61px] pr-[20px]  pl-[20px] lg:flex-row flex-col lg:items-center items-start lg:gap-[0px] gap-[21px]">
          <h1 className="lg:text-[40px] text-[24px] text-[#ACBEFF] font-normal cursor-pointer lg:text-start text-center lg:w-min w-full">
            Shop<span className="text-white">App</span>
          </h1>
          <ul className="flex items-center font-normal text-xl lg:gap-10 gap-[0]">
            <li
              className="text-white hover:text-[#ACBEFF] lg:hidden"
              onClick={setDrawerVisible}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </li>
            <li className=" text-white hover:text-[#ACBEFF] cursor-pointer">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-[#ACBEFF] font-normal lg:px-4 lg:py-2  px-2 py-2 rounded-md  text-xl xl:text-lg md:text-base sm:text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
