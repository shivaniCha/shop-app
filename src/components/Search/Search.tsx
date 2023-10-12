import React, { FC } from "react";

import { SearchProps } from "./Search.types";

const Search: FC<SearchProps> = ({ setSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase());
  };

  return (
    <div className=" 2xl:w-[75%] xl:w-[70%] lg:w-[50%] w-full">
      <div className="flex border rounded border-[#4E5BD1] h-[30px] lg:max-w-[100%] xl:max-w-[404px] max-w-[100%] text-sm  pl-[14px] pr-[3px] items-center ">
        <input
          type="text"
          onChange={handleSearch}
          className="block w-full bg-transparent rounded-md font-normal text-base border-0  border-transparent focus:border-transparent focus:ring-0 focus:outline-none sm:text-sm placeholder-gray-700  text-[#454853]"
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6 text-[#4E5BD1]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
    </div>
  );
};

export default Search;
