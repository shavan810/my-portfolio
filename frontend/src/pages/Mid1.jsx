import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logos from "../../public/images/shavan.png"

export default function Mid1() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
   <section id="home" className="py-16 px-6 md:px-20  bg-gradient-to-r from-slate-600 via-blue-500 to-purple-600 
  bg-[length:200%_200%] animate-gradient">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left Content */}
    <div data-aos="fade-right">
      <h2 className="text-4xl font-bold text-gray-900 leading-tight">
        Hi, I’m <span className="text-teal-500">Shavan D. Singh</span> 👋
      </h2>
      <p className="mt-4 text-gray-100 text-lg">
        A passionate <span className="font-semibold text-red-600 text-2xl">Full-Stack Developer </span> 
        crafting modern and scalable web applications.  
        I love turning ideas into reality using clean and efficient code.
      </p>
      <div className="mt-6 flex gap-4">
        <a 
          href="#projects"
          className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition"
        >
          View My Work
        </a>
        <a 
          href="#contact"
          className="px-6 py-3 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </div>

   
    <div data-aos="zoom-in">
      <img
        src={logos}  
        alt="Profile"
        className="rounded-full shadow-lg"
      />
    </div>

  </div>
</section>

  );
}
