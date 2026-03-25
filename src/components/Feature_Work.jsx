import assets from "@/assets/assets";

import React, { useState } from "react";

export default function Feature_Work() {
  const navlink = [
    { name: "All", href: "#all" },
    { name: "Saas", href: "#saas" },
    { name: "Web App", href: "#web" },
    { name: "API", href: "#api" },
  ];

  const projects = [
    {
      title: "NexuAnalytics SaaS",
      desc: "Real-time data visualization platform with multi-tenant support and Stripe integration.",
      languages: ["React", "Laravel"],
      category: "Saas",
      image: assets.Saas,
    },
    {
      title: "SyncCode IDE",
      desc: "Browser-based collaborative code editor with real-time compilation and chat features.",
      languages: ["Node.js", "SQL"],
      category: "Web App",
      image: assets.pg,
    },
    {
      title: "PayShield Gateway",
      desc: "Highly secure payment gateway API handling 10k+ requests per second with 99.9% uptime.",
      languages: ["PHP", "Laravel"],
      category: "API",
      image: assets.Me,
    },
  ];

  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-full">
        {/* Header & Navigation */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-0 mb-8 sm:mb-10 md:mb-12">
          <div className="w-full lg:w-auto">
            <h2 className="text-foreground font-bold text-xl sm:text-2xl md:text-3xl">
              Featured <span className="text-primary">Work.</span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base relative mt-3 sm:mt-4 leading-relaxed max-w-lg">
              Selection of my most challenging and impactful engineering
              projects.
            </p>
          </div>

          {/* Navigation */}
          <nav className="w-full lg:w-auto">
            <ul className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
              {navlink.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => setActive(link.name)}
                    className={`transition font-medium px-2 sm:px-3 pb-1 whitespace-nowrap ${
                      active === link.name
                        ? "text-primary border-b-2 border-primary"
                        : "text-gray-400 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Projects Grid */}
        <div className="py-4 sm:py-6 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {filtered.map((project, index) => (
              <article
                key={index}
                className="bg-card rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300"
              >
                {/* Image Container */}
                <div className="w-full h-40 sm:h-48 md:h-56 lg:h-60 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    alt={project.title}
                  />
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base py-2 sm:py-3 text-muted-foreground leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Language Tags */}
                  <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                    {project.languages.map((lang, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-primary/40 rounded-md text-primary font-medium whitespace-nowrap"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
