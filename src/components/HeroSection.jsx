import React from "react";
import { Button } from "./ui/button";
import assets from "@/assets/assets";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden z-10 min-h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center py-8 sm:py-12 md:py-16 lg:py-0 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Background Gradients */}
      <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-primary/30 rounded-full absolute right-0 top-0 -z-10 blur-2xl"></div>
      <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] bg-primary/20 rounded-full absolute -left-10 sm:-left-20 top-0 -z-10 blur-2xl"></div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-start mb-6 lg:mb-0">
        <div className="">
          <p className="text-xs sm:text-sm md:text-base font-semibold mb-2 sm:mb-3">
            SENIOR FULL STACK DEVELOPER
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black capitalize mb-3 sm:mb-4 leading-tight">
            Building <br />
            <span className="text-primary">Scalable</span>
            <br />
            <span className="text-primary">Tech</span>
            <br /> with precision.
          </h1>
        </div>

        <div>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-sm md:max-w-lg mb-4 sm:mb-6">
            I architect and develop high-performance web applications using
            modern stacks. Specialized in React, PHP Laravel.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
          <Button className="border-2 text-white-400 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
            View my work
          </Button>
          <Button className="bg-outline border-2 text-white-400 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
            Let's talk
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 w-full flex justify-center items-center mt-6 lg:mt-0">
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <img
            src={assets.Me}
            className="rounded-2xl w-full h-full object-cover"
            alt="my photo"
          />
        </div>
      </div>
    </section>
  );
}
