import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logos from "../../public/images/logos.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Mid1() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="home"
      className="pt-20 pb-12 px-4 sm:px-8 md:px-12 lg:px-20 
             bg-gradient-to-r from-black via-slate-700 to-purple-800 
             animate-gradient-flow
             min-h-screen flex items-center"
    >
      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left"> */}
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">

        {/* Left Content */}
        <div data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 leading-tight">
            Hi, I’m <span className="text-teal-500">Shavan D. Singh</span> 👋
          </h2>

          <p className="mt-4 text-gray-200 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0">
            A passionate{" "}
            <span className="font-semibold text-red-500 text-lg sm:text-xl md:text-2xl">
              Full-Stack Developer{" "}
            </span>
            crafting modern and scalable web applications.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition w-full sm:w-auto text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition w-full sm:w-auto text-center"
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex justify-center md:justify-start gap-5 flex-wrap">
            <a href="https://www.instagram.com/itz_me_sa1/" target="_blank" rel="noreferrer"
              className="p-3 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white text-2xl hover:scale-110 transition-transform shadow-lg">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/shavan.singh.197977/" target="_blank" rel="noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white text-2xl hover:scale-110 transition-transform shadow-lg">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com/in/shavan-singh-95b703322" target="_blank" rel="noreferrer"
              className="p-3 rounded-full bg-blue-500 text-white text-2xl hover:scale-110 transition-transform shadow-lg">
              <FaLinkedin />
            </a>
            <a href="https://github.com/shavan810" target="_blank" rel="noreferrer"
              className="p-3 rounded-full bg-gray-800 text-white text-2xl hover:scale-110 transition-transform shadow-lg">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div data-aos="zoom-in" className="flex justify-center">
          <img
            src={logos}
            alt="Profile"
            className="rounded-full shadow-lg w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover border-4 border-teal-500"
          />
        </div>
      </div>
    </section>
  );
}
