import React, { FC, memo } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import { SidebarProps } from "./Sidebar.types";
import { RangeType } from "../../pages/Products/Products.types";

const otherOptions = [
  { value: "new-arrivals", label: "New Arrivals", checked: false },
  { value: "sale", label: "Sale", checked: false },
];

const Sidebar: FC<SidebarProps> = memo(({ setCategory, range, setRange, categoryList }) => {

  const handleCategorySelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategory(event.target.value);
  };

  return (
    <div className="h-full pl-4 ml-0 sm:ml-[50px] mr-[10px]">
      <Disclosure as="div" className="py-6">
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="text-black text-xl font-bold">Category</span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <ChevronUpIcon
                      className="h-5 w-5 text-[#4E5BD1]"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDownIcon
                      className="h-5 w-5 text-[#4E5BD1]"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-[26px]">
              <div className="space-y-4">
                {categoryList.map((option, optionIdx) => (
                  <div
                    key={`${option}-${optionIdx}`}
                    className="flex items-center"
                  >
                    <input
                      name="category"
                      value={option}
                      type="radio"
                      className="h-4 w-4 rounded-[5px] border-gray-300 text-[#4E5BD1] focus:text-[#4E5BD1]"
                      onChange={handleCategorySelection}
                    />
                    <label className="ml-3 text-sm text-black">{option}</label>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="py-6">
        <div className="-my-3 flow-root">
          <div className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
            <span className="text-black text-xl font-bold">Price Range</span>
          </div>
          <div className="bg-[rgba(227, 234, 244, 0.65)] p-5">
            <InputRange
              maxValue={1000}
              minValue={0}
              value={range}
              onChange={(value) => setRange(value as RangeType)}
            />
          </div>
        </div>
      </div>
      <Disclosure as="div" className="py-6">
        {({ open }) => (
          <>
            <div className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="text-black text-xl font-bold">Other</span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <ChevronUpIcon
                      className="h-5 w-5 text-[#4E5BD1]"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDownIcon
                      className="h-5 w-5 text-[#4E5BD1]"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className="pt-6">
              <div className="space-y-4">
                {otherOptions.map((option, optionIdx) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      name={`category`}
                      defaultValue={option.value}
                      type="radio"
                      defaultChecked={option.checked}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label className="ml-3 text-sm text-black">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
});
export default Sidebar;
