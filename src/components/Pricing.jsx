import React from "react";
import PricingCard from "./PricingCard";
import Done from "./svg/Done";

export default function Pricing() {
  const pricingList = [
    {
      id: 1,
      title: "Starter",
      desc: "Best option for personal use &amp; for your next project.",
      price: 29,
      feature: [
        { svg: <Done />, desc: "Individual configuration" },
        { svg: <Done />, desc: "No setup, or hidden fees" },
        { svg: <Done />, desc: "Team size: 1 developer" },
        { svg: <Done />, desc: "Premium support: 6 months" },
        { svg: <Done />, desc: "Free updates: 6 months" },
      ],
    },
    {
      id: 2,
      title: "Company",
      desc: "Relevant for multiple users, extended &amp; premium support.",
      price: 99,
      feature: [
        { svg: <Done />, desc: "Individual configuration" },
        { svg: <Done />, desc: "No setup, or hidden fees" },
        { svg: <Done />, desc: "Team size: 10 developers" },
        { svg: <Done />, desc: "Premium support: 24 months" },
        { svg: <Done />, desc: "Free updates: 24 months" },
      ],
    },
    {
      id: 3,
      title: "Enterprise",
      desc: "Best for large scale uses and extended redistribution rights.",
      price: 499,
      feature: [
        { svg: <Done />, desc: "Individual configuration" },
        { svg: <Done />, desc: "No setup, or hidden fees" },
        { svg: <Done />, desc: "Team size: 100+ developers" },
        { svg: <Done />, desc: "Premium support: 36 months" },
        { svg: <Done />, desc: "Free updates: 36 months" },
      ],
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingList.map((item) => (
            <PricingCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
