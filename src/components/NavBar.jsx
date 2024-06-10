import React from "react";

const NavBar = () => {
  const nav = {
    logo: {
      text: "Virborg Haveservice",
    },
    links: [
      {
        text: "om os",
        href: "#about",
      },
      {
        text: "ydelser",
        href: "#services",
      },
      {
        text: "galleri",
        href: "#gallery",
      },
      {
        text: "det siger kunderne",
        href: "#users",
      },
      {
        text: "kontakt",
        href: "#contact",
      },
    ],
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 text-secondaryTitle w-full shadow-md bg-neutral-700 py-5 z-10">
      <div className="wrapper flex items-center justify-between">
        <div className="text-xl px-2 py-1">{nav.logo.text}</div>
        <nav>
          <ul className="flex gap-3">
            {nav.links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="uppercase  hover:text-darkGreen px-2 py-1">{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
