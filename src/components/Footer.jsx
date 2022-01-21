import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../data";
import { SocialItems } from "../data";
import { footerNavigation } from "../data";
import Logo from "../img/m.shop-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-md mx-auto pt-12 pb-5 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Link to="/">
                <img className="h-10" src={Logo} alt="Company name" />
              </Link>
              <p className="text-warm-gray-500 text-base">
                Making the world a better place through constructing elegant
                hierarchies.
              </p>
              <div className="flex space-x-6">
                {SocialItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-warm-gray-400 hover:text-warm-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-bold text-warm-gray-700 tracking-wider uppercase">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {Navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-warm-gray-500 hover:text-warm-gray-900 capitalize"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-bold text-warm-gray-700 tracking-wider uppercase">
                    Support
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-warm-gray-500 hover:text-warm-gray-900 capitalize"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-bold text-warm-gray-700 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {Navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-warm-gray-500 hover:text-warm-gray-900 capitalize"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-bold text-warm-gray-700 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-warm-gray-500 hover:text-warm-gray-900 capitalize"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-warm-gray-200 pt-8">
            <p className="text-base text-warm-gray-400 xl:text-center capitalize">
              &copy; by maruf 2022 Workflow, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
