import { FC, useMemo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import { PaginationProps } from "./Pagination.types";

const Pagination: FC<PaginationProps> = ({ productsData, page, setPage }) => {
  const numbersToDisplay = useMemo(
    () => Math.ceil(productsData.length / 8),
    [productsData]
  );

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white py-3">
      <div className="flex flex-1 justify-between">
        <div></div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm text-[14px]"
            aria-label="Pagination"
          >
            <div className="relative inline-flex items-center rounded-l-md border-gray-300 bg-white px-2 py-2 text-[#4E5BD1]  font-normal hover:bg-gray-50 focus:z-20">
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon
                className="h-5 w-5"
                aria-hidden="true"
                onClick={() =>
                  setPage((prev) => (prev === 1 ? prev : prev - 1))
                }
              />
            </div>
            {Array.from({ length: numbersToDisplay }, (_, index) => (
              <div
                aria-current="page"
                key={index}
                className={
                  index + 1 === page
                    ? "relative z-10 inline-flex items-center border-indigo-500 bg-indigo-50 px-4 py-2  font-black  text-[#4E5BD1] focus:z-20"
                    : "relative inline-flex items-center  border-gray-300 bg-white px-4 py-2  font-normal hover:bg-gray-50 focus:z-20"
                }
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </div>
            ))}
            <div className="relative inline-flex items-center rounded-r-md border-gray-300 bg-white px-2 py-2  text-[#4E5BD1]  hover:bg-gray-50 focus:z-20">
              <span className="sr-only">Next</span>
              <ChevronRightIcon
                className="h-5 w-5"
                aria-hidden="true"
                onClick={() =>
                  setPage((prev) =>
                    numbersToDisplay === prev ? prev : prev + 1
                  )
                }
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
