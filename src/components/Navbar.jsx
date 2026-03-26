import React, { useState } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="w-full py-3 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between bg-primary/10 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <div className="bg-primary rounded-lg w-10 h-10 sm:w-12 sm:h-12 text-lg sm:text-2xl items-center font-bold flex justify-center">
          M
        </div>
        <span className="hidden sm:flex justify-center text-lg sm:text-2xl items-center font-bold">
          MUSHTAQ
          <span className="text-primary text-lg sm:text-2xl">.</span>
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-3 lg:gap-6 text-xs lg:text-sm">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                className="inline-block hover:text-primary transition px-1 font-black"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA & Theme & Mobile Menu Button */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 flex-shrink-0">
        <Button
          className="hidden sm:block bg-primary font-xs sm:font-sm md:font-md text-foreground hover:text-white px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm"
          size="sm"
        >
          HIRE ME
        </Button>
        <ModeToggle />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-primary/20 rounded-lg transition"
        >
          {isMenuOpen ? (
            <X size={24} className="text-primary" />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-primary/20 md:hidden">
          <nav className="p-4 sm:p-6">
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="inline-block hover:text-primary transition py-2 px-3 rounded-lg hover:bg-primary/10 w-full"
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-primary/20">
                <Button className="w-full bg-primary text-foreground hover:text-primary text-sm py-2">
                  HIRE ME
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
