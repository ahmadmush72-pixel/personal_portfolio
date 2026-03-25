import React from "react";
import { Compass, Code2, Cloud, Zap } from "lucide-react";

export default function Experience() {
  const designs = [
    {
      title: "Architecture",
      desc: "Designing robust microservices and serverless architecture for high-traffic applications.",
      icon: <Compass className="text-primary" size={32} />,
    },
    {
      title: "Full-Stack Dev",
      desc: "Buildings seamless user interfaces integrated with powerful, secure backend systems.",
      icon: <Code2 className="text-primary" size={35} />,
    },
    {
      title: "DevOps",
      desc: "Continuous integration and deployment using Docker,Kubernetes and AWS/Azure.",
      icon: <Cloud className="text-primary" size={35} />,
    },
    {
      title: "Optimization",
      desc: "Fine_tuning database queries and front-end performance for lightning-fast speed",
      icon: <Zap className="text-primary" size={35} />,
    },
  ];
  return (
    <section className="relative overflow-hidden w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1">
          <div>
            <h1 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Over 8 years of <br />
              <span className="text-primary border-b-4 border-primary">
                Experience.
              </span>
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-xs text-xs sm:text-sm md:text-base mt-3 sm:mt-4">
              I am Mushtaq Ahmad, a software engineer passionate about clean
              code and efficient architectures. My journey started with PHP
              Laravel and has evolved into mastering the modern JavaScript
              ecosystem.
            </p>
          </div>
          <div className="flex gap-6 sm:gap-8 mt-6 sm:mt-8">
            <div>
              <h1 className="text-primary font-black text-2xl sm:text-3xl">
                50+
              </h1>
              <span className="text-xs sm:text-sm text-muted-foreground">
                PROJECTS COMPLETED
              </span>
            </div>
            <div>
              <h1 className="text-primary font-black text-2xl sm:text-3xl">
                12+
              </h1>
              <span className="text-muted-foreground text-xs sm:text-sm">
                TECH STACKS
              </span>
            </div>
          </div>
        </div>

        {/* Right Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {designs.map((design, index) => (
            <div
              className="bg-secondary p-4 sm:p-6 md:p-8 rounded-lg border-2 border-secondary/20 hover:border-primary/50 transition"
              key={index}
            >
              <div className="text-xl sm:text-2xl">{design.icon}</div>
              <div>
                <h1 className="mt-2 sm:mt-3 font-black text-sm sm:text-base md:text-lg">
                  {design.title}
                </h1>
              </div>
              <div>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {design.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
