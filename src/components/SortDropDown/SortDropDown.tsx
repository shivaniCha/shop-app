import React, { FC } from "react";
import { SortDropDownProps } from "./SortDropDown.types";

const SortDropDown: FC<SortDropDownProps> = ({ setSort }) => {
  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSort(event.target.value);
  };

  return (
    <div className="flex gap-[41px]  border-l border-[#000000] w-[100%] 2xl:w-[20%] xl:w-[30%] items-center justify-end">
      <span className="lg:text-xl text-base text-black font-normal  uppercase">SORT BY PRICE</span>
      <select name="sort-by" onChange={handleSelectionChange} className="h-full rounded-md text-[#4E5BD1] border-none text-base border-transparent bg-transparent py-0 pl-2 pr-7 focus:border-transparent focus:ring-0 focus:outline-none">
        <option className="bg-[#34373F] text-white border-none " value="asc">Asc</option>
        <option className="bg-[#34373F] text-white border-none" value="desc">Desc</option>
      </select>
    </div>
  );
};

export default SortDropDown;
