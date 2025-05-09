import React from "react";
import Button from "./Button";

export default function Trial() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Start your free trial today
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Try Landwind Platform for 30 days. No credit card required.
          </p>
          <Button title={`Free trial for 30 days`} varient={`pink`} />
        </div>
      </div>
    </section>
  );
}
