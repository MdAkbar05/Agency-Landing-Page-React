import React from "react";

export default function Feature({ feature }) {
  return (
    <div key={feature.id}>
      {feature.svg}
      <h3 className="mb-2 text-2xl font-bold dark:text-white">
        {feature.title}
      </h3>
      <p className="font-light text-gray-500 dark:text-gray-400">
        {feature.desc}
      </p>
    </div>
  );
}
