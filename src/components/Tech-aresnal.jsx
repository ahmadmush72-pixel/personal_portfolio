import React from "react";
import { Button } from "./ui/button";

export default function Tech_Aresnal() {
  const techStacks = [
    {
      name: "FRONTEND",
      stacks: [
        "React/Next.js",
        "JavaScript",
        "TailwindCSS",
        "Vue.js",
        "HTML",
        "CSS",
      ],
    },
    {
      name: "BACKEND",
      stacks: [
        "Node.js",
        "PHP Laravel",
        "Phython.Django",
        "Vue.js",
        "HTML",
        "CSS",
      ],
    },
    {
      name: "TOOLS & OTHERS",
      stacks: ["BOOTSTRAP", "Shadcn", "Xympp", "Git", "GitHub", "SQL"],
    },
  ];
  return (
    <section className="w-full overflow-hidden relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Title */}
      <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
        <h1 className="font-black text-2xl sm:text-3xl md:text-4xl text-center">
          MY TECH <span className="text-primary">ARSENAL</span>
        </h1>
      </div>

      {/* Tech Stacks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {techStacks.map((stack, index) => (
          <div key={index} className="">
            <span className="text-primary text-sm sm:text-base font-bold block mb-3 sm:mb-4">
              {stack.name}
            </span>
            <hr className="border-primary/30 mb-4 sm:mb-5" />
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {stack.stacks.map((tech, i) => (
                <Button
                  key={i}
                  className="bg-outline text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 text-muted-foreground border hover:border-primary hover:text-white transition"
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
