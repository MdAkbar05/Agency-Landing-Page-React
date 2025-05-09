import React from "react";
import Figma from "./svg/Figma";
import Github from "./svg/Github";

export default function Button({ title, varient, link = `#` }) {
  const pinkButton =
    "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800";
  const transparentButton =
    "inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800";
  const solid =
    "inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";
  return (
    <a
      href={link}
      target="_blank"
      className={`${
        varient === `pink`
          ? pinkButton
          : varient === "solid"
          ? solid
          : transparentButton
      }`}
    >
      {varient === `pink` ? null : varient === "solid" ? <Figma /> : <Github />}
      {title}
    </a>
  );
}
