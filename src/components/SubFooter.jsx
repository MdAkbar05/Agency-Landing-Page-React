import React from "react";

export default function SubFooter() {
  const quickMenu = [
    {
      id: 1,
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Brand Center", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      id: 2,
      title: "Help center",
      links: [
        { name: "Discord Server", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
    },
    {
      id: 3,
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Licensing", href: "#" },
        { name: "Terms", href: "#" },
      ],
    },
    {
      id: 4,
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Support", href: "#" },
        { name: "Community", href: "#" },
      ],
    },
    {
      id: 5,
      title: "Download",
      links: [
        { name: "iOS", href: "#" },
        { name: "Android", href: "#" },
        { name: "Windows", href: "#" },
        { name: "MacOS", href: "#" },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
      {quickMenu.map((menu) => (
        <div key={menu.id}>
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            {menu.title}
          </h3>
          <ul className="text-gray-500 dark:text-gray-400">
            {menu.links.map((link) => (
              <li key={link.name} className="mb-4">
                <a href={link.href} className=" hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
