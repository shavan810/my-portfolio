import logo2 from "../../public/images/shavannn.png";

export default function About() {
  return (
    <section id="about" className="bg-slate-600 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
               {/* Left Image */}
        <div data-aos="fade-right">
          <img
            src={logo2}// 👈 apni photo ya illustration
            alt="About Me"
            className="rounded-xl shadow-lg h-[500px] w-[400px]"
          />
        </div>

        {/* Right Content */}
        <div data-aos="fade-left" className="text-white">
          <h2 className="text-5xl font-extrabold mb-6 tracking-wide">
            About <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-lg leading-relaxed">
            I’m a passionate{" "}
            <span className="font-semibold text-yellow-400">
              Full Stack Developer
            </span>{" "}
            with a love for creating interactive, modern, and scalable web
            applications. I enjoy turning ideas into reality with clean code and
            creative designs.
          </p>
          <p className="mt-6 text-lg leading-relaxed">
            Outside of coding, I enjoy{" "}
            <span className="text-teal-300 font-medium">problem-solving</span>, 
            exploring new technologies, and contributing to{" "}
            <span className="text-yellow-400 font-medium">open-source projects</span>.
          </p>
          <button onClick={() => window.open("https://github.com/shavan810", "_blank")} className="mt-8 px-8 py-3 bg-teal-500 text-white rounded-xl shadow-lg hover:bg-teal-600 transition-all duration-300">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
