import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  ShoppingCartIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header>
      {/* {Top Nav} */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 ml-2 flex items-center flex-grow sm:flex-grow-0">
          {/* {Logo} */}
          <Image
            src="https://links.papareact.com/f90"
            width={100}
            height={20}
            objectFit="contain" // for aspect ratio
            className="cursor-pointer"
          />
        </div>
        
        <div className="hidden md:block text-white items-center text-xs mx-6 whitespace-nowrap">
          <p>Delivering to New Delhi 110043</p>
          <div className="flex items-center space-x-2">
            <MapPinIcon className="h-4 w-4" />
            <p className="font-extrabold text-sm">Update Location</p>
          </div>
        </div>

        {/* {Search} */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 flex items-center ml-6"> {/* Adjusted margin-left */}
        <div className="h-10 pl-2 cursor-pointer text-center bg-gray-300 items-center rounded-l-md flex absolute font-semibold text-sm ">
            All
            <ChevronDownIcon className="h-10 p-3" />
          </div>
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* {Right Side} */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Mayank Singh</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Return</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* {Bottom Nav} */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deal</p>
        <p className="hidden lg:inline-flex">Electronics</p>
        <p className="hidden lg:inline-flex">Beauty</p>
        <p className="hidden lg:inline-flex">Home Decor</p>
        <p className="hidden lg:inline-flex">Mobile And Laptops</p>
        <p className="hidden lg:inline-flex">Food & Grocery</p>
        <p className="hidden lg:inline-flex">Prime</p>
        <p className="hidden lg:inline-flex">Buy Again</p>
        <p className="hidden lg:inline-flex">Shopper toolkit</p>
        <p className="hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;