import React from "react";
import Airbnb from "./svg/Airbnb";
import Google from "./svg/Google";
import Mailchimp from "./svg/Mailchimp";
import Mashable from "./svg/Mashable";
import Microsoft from "./svg/Microsoft";
import Spotify from "./svg/Spotify";

export default function CompanyLogo() {
  const logos = [
    { id: 1, logo: <Airbnb key="airbnb" /> },
    { id: 2, logo: <Google key="google" /> },
    { id: 3, logo: <Microsoft key="microsoft" /> },
    { id: 4, logo: <Spotify key="spotify" /> },
    { id: 5, logo: <Mailchimp key="mailchimp" /> },
    { id: 6, logo: <Mashable key="mashable" /> },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {logos.map((l) => (
            <a
              key={l.id}
              href="#"
              className="flex items-center lg:justify-center"
            >
              {l.logo}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
