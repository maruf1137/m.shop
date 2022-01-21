import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Navigation from "../data";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import Logo from "../img/m.shop-logo.png";
import { useProductsContext } from "../Context/ProductContext";

const Navbar = () => {
  const { cartItems } = useProductsContext();
  return (
    <Popover>
      <div className=" px-4 sm:px-6 bg-gray-50">
        <nav
          className="max-w-7xl mx-auto relative flex items-center justify-between sm:h-10 md:justify-center py-8"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img src={Logo} alt="m.shop" className="h-16" />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
            {Navigation.map((item, index) => (
              <Link
                to={item.href}
                key={index}
                className="capitalize font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex rounded-md shadow mr-8">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                log in
              </button>
              {/* <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                logout
              </button> */}
            </span>
            <Link to="/cart">
              <button className="inline-flex items-center relative">
                <BsHandbag className="text-4xl" />
                <span className="h-6 w-6 rounded-full bg-indigo-400 text-white text-sm flex justify-center items-center absolute -right-3 top-0 outline-0">
                  {cartItems.length}
                </span>
              </button>
            </Link>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link to="/">
                  <span className="sr-only">Workflow</span>
                  <img src={Logo} alt="m.shop" className="h-16" />
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3">
              {Navigation.map((item, index) => (
                <Link
                  to={item.href}
                  key={index}
                  className="capitalize block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button className="iblock w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
              log in
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
