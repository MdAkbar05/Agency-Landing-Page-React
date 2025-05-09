import React from "react";
import Service from "./Service";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Work with tools you already use",
      desc: "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
      list: [
        "Continuous integration and deployment",
        "Development workflow",
        "Knowledge management",
      ],
      overall:
        "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
    },
    {
      id: 2,
      reverse: true,
      title: "We invest in the world’s potential",
      desc: "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
      list: [
        "Dynamic reports and dashboards",
        "Templates for everyone",
        "Development workflow",
        "Limitless business automation",
        "Knowledge management",
      ],
      overall:
        "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
    },
  ];
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {services.map((service) => (
          <Service
            key={service.id}
            title={service.title}
            desc={service.desc}
            list={service.list}
            overall={service.overall}
            reverse={service.reverse}
          />
        ))}
      </div>
    </section>
  );
}
