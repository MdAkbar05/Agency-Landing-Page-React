import React from "react";
import Button from "./Button";

export default function PricingCard({ item }) {
  return (
    <div
      key={item.id}
      className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
    >
      <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {item.desc}
      </p>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-extrabold">${item.price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {item.feature.map((f) => (
          <li key={f.desc} className="flex items-center space-x-3">
            {f.svg}
            <span>{f.desc}</span>
          </li>
        ))}
      </ul>
      <Button title="Get started" varient="pink" />
    </div>
  );
}
