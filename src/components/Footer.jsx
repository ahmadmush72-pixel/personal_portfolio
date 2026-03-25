import React from "react";

export default function () {
  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },

    {
      name: "Projects",
      href: "#projects",
    },

    {
      name: "Contact Us",
      href: "#contact",
    },
  ];
  return (
    <footer>
      <div className="flex justify-between items-start py-10 px-6">
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <span className="hidden sm:flex justify-center text-lg sm:text-2xl items-center font-bold">
            MUSHTAQ
            <span className="text-primary text-lg sm:text-2xl">.</span>
          </span>
        </div>
        <div>
          <p>
            <span className="text-xs text-muted-foreground">
              2024 Mushtaq Ahmad. All right reserved
            </span>
          </p>
        </div>
        <div>
          <ul>
            <li className="flex justify-center gap-4 text-sm text-muted-foreground ">
              {navLinks.map((link, index) => (
                <a className="hover:text-primary font-black " href={link.href}>
                  {link.name}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
