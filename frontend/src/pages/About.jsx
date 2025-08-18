import logo2 from "../../public/images/shavannn.png";

export default function About() {
  return (
    <section id="about" className="bg-slate-600 py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div data-aos="fade-right" className="flex justify-center">
          <img
            src={logo2}
            alt="About Me"
            className="rounded-xl shadow-lg w-64 sm:w-80 md:w-[400px] h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div data-aos="fade-left" className="text-white text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-wide">
            About <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            I’m a passionate{" "}
            <span className="font-semibold text-yellow-400">
              Full Stack Developer
            </span>{" "}
            with a love for creating interactive, modern, and scalable web
            applications.
          </p>
          <p className="mt-6 text-base sm:text-lg leading-relaxed">
            Outside of coding, I enjoy{" "}
            <span className="text-teal-300 font-medium">problem-solving</span>, 
            exploring new technologies, and contributing to{" "}
            <span className="text-yellow-400 font-medium">open-source projects</span>.
          </p>
          <button 
            onClick={() => window.open("https://github.com/shavan810", "_blank")} 
            className="mt-8 px-8 py-3 bg-teal-500 text-white rounded-xl shadow-lg hover:bg-teal-600 transition-all duration-300"
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
