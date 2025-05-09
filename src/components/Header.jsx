import React from "react";
import Button from "./Button";
import Logo from "./Logo";

export default function Header() {
  const navItem = [
    { name: "Home", href: "#" },
    { name: "Company", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Features", href: "#" },
    { name: "Team", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <Logo />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Learn with Sumit
            </span>
          </a>

          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navItem.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center lg:order-2">
            <Button title={`Download`} varient={`pink`} link={`#`} />
          </div>
        </div>
      </nav>
    </header>
  );
}
