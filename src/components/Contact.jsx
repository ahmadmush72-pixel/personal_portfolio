import { Facebook, Github, Instagram, Mail, MapPin } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row justify-between items-start px-4 sm:px-6 py-8 sm:py-10 gap-8"
    >
      <div className="px-0 sm:px-6 flex-1 min-w-0">
        <div>
          <h1 className="text-4xl font-black ">
            Ready to build
            <br />
            somthing
            <br />
            <span className="text-primary">extraordinary?</span>
          </h1>
          <p className="leading-relaxed max-w-lg text-sm mt-4 text-muted-foreground">
            I am currently available for senior-level opportunities or
            consulting on complex web projects.Let's discuss your vision.
          </p>
        </div>
        <div className="flex mt-8 items-center gap-3">
          <span className="bg-primary/30 rounded-full p-4">
            <Mail className="w-5 h-5 text-primary" />
          </span>
          <div className="px-3">
            <span className="text-xs text-muted-foreground font-bold">
              EMAIL ME
            </span>
            <br />
            <span className="font-bold text-sm">ahmadmush72@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-3">
          <span className="bg-primary/30 rounded-full p-4">
            <MapPin className="w-5 h-5 text-primary" />
          </span>
          <div className="px-3">
            <span className="text-xs text-muted-foreground font-bold">
              LOCATION
            </span>
            <br />
            <span className="font-bold text-sm">Lahore, Pakistan</span>
          </div>
        </div>
        <div className="flex mt-8 gap-4">
          <div>
            <span className=" rounded-full p-4">
              <a href="#">
                <Facebook className="w-6 h-6  " />
              </a>
            </span>
          </div>
          <div>
            <span className=" rounded-full p-4">
              <a href="#">
                <Github className="w-6 h-6  " />
              </a>
            </span>
          </div>
          <div>
            <span className=" rounded-full p-4">
              <a href="#">
                <Instagram className="w-6 h-6  " />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-primary/8 px-4 sm:px-6 rounded-2xl w-full md:w-1/2 max-w-lg h-auto md:h-96 mx-auto md:mx-0">
        <div className="flex flex-col sm:flex-row py-6 items-start gap-3 px-0 sm:px-7">
          <div className="w-full sm:w-1/2 pr-0 sm:pr-2 mb-4 sm:mb-0">
            <label
              htmlFor="text"
              className="text-xs text-muted-foreground font-bold"
            >
              FULL NAME
            </label>
            <br />
            <input
              type="text"
              className="bg-primary/5 rounded-md p-2 text-sm mt-2 w-full"
              placeholder="Mushtaq Ahm"
            />
          </div>
          <div className="w-full sm:w-1/2 pl-0 sm:pl-2">
            <label
              htmlFor="email"
              className="text-xs text-muted-foreground font-bold"
            >
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              className="bg-primary/5 text-sm rounded-md p-2 mt-2 w-full"
              placeholder="ahmadmush72@gmail.com"
            />
          </div>
        </div>
        <div className="py-3 items-center gap-3 px-0 sm:px-7">
          <label
            htmlFor="text"
            className="text-xs text-muted-foreground font-bold"
          >
            SUBJECT
          </label>
          <br />
          <input
            type="text"
            className="bg-primary/5 rounded-md p-2 text-sm mt-2 w-full"
            placeholder="Project inquiry"
          />
        </div>
        <div className="py-3 items-center gap-3 px-0 sm:px-7">
          <label
            htmlFor="textarea"
            className="text-xs text-muted-foreground font-bold"
          >
            MESSAGE
          </label>
          <br />
          <textarea
            rows="4"
            className="bg-primary/5 rounded-md p-2 text-sm mt-2 w-full"
            placeholder="tell me about your project and how I can help"
          />
        </div>
        <div className="flex justify-end px-0 sm:px-7 pb-6">
          <button
            type="submit"
            className="bg-primary text-white font-bold py-2 px-6 rounded-md shadow hover:bg-primary/80 transition-colors"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
