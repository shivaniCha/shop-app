const Footer = () => {
  return (
    // <footer
    //   className="flex w-screen bg-[#34373F] items-center justify-between
    //     h-36 xl:h-28 md:h-20 sm:h-18
    //     px-14 xl:px-12 md:px-10 sm:px-8 text-white"
    // >
    //   <div className="text-xl xl:text-lg md:text-base sm:text-sm">
    //     <div>www.website.com</div>
    //     <div className="text-sm xl:text-xs md:text-xs sm:text-xs">
    //       © All right Reserved. Inspired Codes...
    //     </div>
    //   </div>
    //   <div className="flex space-x-4">
    //     <div>Contact Us</div>
    //     <div>Rule and Policy</div>
    //   </div>
    // </footer>

    <div className=" bg-[#34373F] flex items-center ">
      <div className="footer lg:h-[105px] h-[141px] lg:flex-row lg:gap-[0px] gap-[21px]  flex-col flex items-center lg:justify-between justify-center lg:pr-[61px] lg:pl-[61px]  pr-[30px] pl-[30px] w-full">
        <div className="flex flex-col lg:items-start items-center gap-2">
          <div className="text-white text-xl cursor-pointer hover:underline">
            www.website.com
          </div>
          <div className="text-white capitalize text-sm cursor-pointer hover:underline">
            © All right Reserved. Inspired Codes...
          </div>
        </div>
        <div className="flex gap-[43px]">
          <a
            href="/"
            className="text-white capitalize lg:text-xl text-sm cursor-pointe hover:underline "
          >
            Contact Us
          </a>
          <a
            href="/"
            className="text-white capitalize lg:text-xl text-sm cursor-pointer hover:underline"
          >
            Rule and Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
