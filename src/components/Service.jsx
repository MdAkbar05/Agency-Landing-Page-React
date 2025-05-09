import React from "react";
import feature1 from "../assets/features/feature-1.png";
import feature2 from "../assets/features/feature-2.png";
import MarkIcon from "./svg/MarkIcon";

export default function Service({ title, desc, list, overall, reverse }) {
  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 ">
      <div className="text-gray-500 sm:text-lg dark:text-gray-400 ">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-8 font-light lg:text-xl">{desc}</p>
        <ul
          role="list"
          className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
        >
          {list?.map((item) => (
            <li key={item} className="flex space-x-3">
              <MarkIcon />
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <p className="mb-8 font-light lg:text-xl">{overall}</p>
      </div>
      <img
        className={`hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex ${
          reverse ? "-order-1" : ""
        }`}
        src={reverse ? feature2 : feature1}
        alt="dashboard feature image"
      />
    </div>
  );
}
