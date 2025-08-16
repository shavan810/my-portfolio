// src/pages/Projects.jsx
import { FaPython, FaJsSquare, FaPhp, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiDjango, SiMongodb, SiMysql, SiReact } from "react-icons/si";
import { FaComments } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "NASA Space (Hackathon Project)",
      desc: "A frontend Orrery web app developed during the NASA Hackathon. It visualizes near-Earth objects and provides an interactive solar system experience.",
      img: "YOUR_PROJECT_IMAGE2.png",
      link: "https://mrdavilboy.github.io/Nasa-Space/",
      tech: [<FaHtml5 className="text-orange-600" />, <FaCss3Alt className="text-blue-500" />, <FaJs className="text-yellow-400" />],
      color: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },
    {
  title: "Real-Time Chat App",
  desc: "A full-stack chat application built with MERN and Socket.io, featuring real-time messaging and live communication.",
  img: "YOUR_PROJECT_IMAGE2.png",
  link: "https://realtimechatingapp-ggoc.onrender.com/",
  tech: [
    <SiReact className="text-blue-400" />,
    <FaJsSquare className="text-yellow-500" />,
    <SiMongodb className="text-green-500" />,
    <FaComments className="text-purple-500" />
  ],
  color: "bg-gradient-to-r from-blue-500 to-purple-500",
},
{
  title: "Swiggy Clone",
  desc: "A React-based food delivery web app clone of Swiggy with restaurant listings, ordering, and cart management features.",
  img: "YOUR_PROJECT_IMAGE3.png",
  link: "https://github.com/shavan810/my-swigy-clone",
  tech: [
    <SiReact className="text-blue-400" />
  ],
  color: "bg-gradient-to-r from-blue-500 to-green-500",
}


  ];

  return (
    <section id="projects" className="bg-slate-600 py-16 px-6 md:px-20 flex items-center justify-center min-h-screen">
  <div className="max-w-6xl w-full text-center">
    <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>

    <div className="grid md:grid-cols-3 gap-8 justify-center">
      {projects.map((project, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
        >
          {/* Title Bar */}
          <div className={`${project.color} p-4 text-white font-semibold`}>
            {project.title}
          </div>

          {/* Content Box */}
          <div className="p-5 text-left bg-white h-[220px] flex flex-col justify-between">
            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed">{project.desc}</p>

            {/* Tech Icons */}
            <div className="flex gap-3 text-xl mt-2">
              {project.tech.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>

            {/* Button */}
            <a
              href={project.link}
              className="mt-3 inline-block px-3 py-1.5 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition text-center text-sm"
            >
              View Project →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
