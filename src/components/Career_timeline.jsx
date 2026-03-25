import React from "react";

export default function Career_timeline() {
  const timeline = [
    {
      year: "2021 — Present",
      role: "Senior Software Engineer",
      company: "TechVision Solutions",
      desc: "Leading the migration of legacy monolithic architectures to modern microservices, improving deployment frequency by 40%.",
      side: "left",
    },
    {
      year: "2018 — 2021",
      role: "Full Stack Developer",
      company: "Streamline Digital",
      desc: "Developed core features for a real-time analytics dashboard used by over 500k active monthly users.",
      side: "right",
    },
    {
      year: "2016 — 2018",
      role: "Web Developer",
      company: "Innovate Agency",
      desc: "Responsible for developing custom WordPress themes and complex e-commerce solutions using Laravel and Vue.",
      side: "left",
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        Career <span className="text-primary">Timeline</span>
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line - Hidden on mobile, shown on md+ */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-primary/40" />
        {/* Mobile Side Line */}
        <div className="md:hidden absolute left-3 top-0 h-full w-[2px] bg-primary/40" />

        <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start md:items-center ${
                item.side === "left" ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Content - Responsive positioning */}
              {item.side === "left" && (
                <div className="md:w-1/2 text-left md:text-right md:pr-10 pl-12 md:pl-0">
                  <p className="text-primary text-xs sm:text-sm font-semibold">
                    {item.year}
                  </p>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-1 md:mt-0">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {item.company}
                  </p>
                  <p className="text-muted-foreground mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )}

              {/* Dot */}
              <div className="relative z-10 -left-7 md:left-0 mt-3 md:mt-0">
                <span className="block w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary border-2 border-white" />
              </div>

              {/* Right Content */}
              {item.side === "right" && (
                <div className="md:w-1/2 text-left md:pl-10 pl-12">
                  <p className="text-primary text-xs sm:text-sm font-semibold">
                    {item.year}
                  </p>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-1 md:mt-0">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {item.company}
                  </p>
                  <p className="text-muted-foreground mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
