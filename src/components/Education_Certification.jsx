import {
  CircleCheck,
  GraduationCap,
  SquareArrowOutUpRight,
} from "lucide-react";
import React from "react";

export default function Education_Certification() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      desc: "Amazon Web Services",
      icon: <SquareArrowOutUpRight />,
    },
    {
      title: "Google Professional Cloud Developer",
      desc: "Google cloud",
      icon: <SquareArrowOutUpRight />,
    },
    {
      title: "Meta Front-End Developer Professional",
      desc: "Coursera/Meta",
      icon: <SquareArrowOutUpRight />,
    },
  ];
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
        {/* Education Section */}
        <div className="flex-1">
          <div className="mb-4 sm:mb-6">
            <h1 className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl font-bold">
              <GraduationCap className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
              <span>Education</span>
            </h1>
          </div>
          <div className="p-4 sm:p-6 md:p-8 bg-primary-foreground border border-primary/30 rounded-lg hover:border-primary/50 transition">
            <h2 className="font-bold text-sm sm:text-base md:text-lg">
              B.S IN INFORMATION TECHNOLOGY
              <br />
              <span className="text-primary text-xs sm:text-sm md:text-base">
                UNIVERSITY OF SWAT · 2016 - 2023
              </span>
            </h2>
            <p className="leading-relaxed text-xs sm:text-sm md:text-base py-3 sm:py-4 text-muted-foreground">
              Focus on Advanced Algorithms, Machine Learning, and Distributed
              Systems. Graduated with honors.
            </p>
          </div>
        </div>

        {/* Certification Section */}
        <div className="flex-1">
          <div className="mb-4 sm:mb-6">
            <h1 className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl font-bold">
              <CircleCheck className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
              <span>Certification</span>
            </h1>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex justify-between items-start sm:items-center gap-3 sm:gap-4 bg-primary-foreground border border-primary/30 rounded-lg p-3 sm:p-4 md:p-5 hover:border-primary/50 transition"
              >
                <div className="flex-1">
                  <h3 className="font-black text-xs sm:text-sm md:text-base leading-tight">
                    {cert.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-muted-foreground block mt-1">
                    {cert.desc}
                  </span>
                </div>
                <div className="text-primary flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                  {cert.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
