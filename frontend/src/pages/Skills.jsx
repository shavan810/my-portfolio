// src/pages/Skills.jsx
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "bg-orange-500", text: "text-white" },
    { name: "CSS", icon: <FaCss3Alt />, color: "bg-blue-500", text: "text-white" },
    { name: "JavaScript", icon: <FaJs />, color: "bg-yellow-400", text: "text-black" },
    { name: "React", icon: <FaReact />, color: "bg-cyan-500", text: "text-white" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-sky-400", text: "text-white" },
    { name: "Node.js", icon: <FaNodeJs />, color: "bg-green-600", text: "text-white" },
    { name: "Express.js", icon: <SiExpress />, color: "bg-gray-800", text: "text-white" },
    { name: "MongoDB", icon: <SiMongodb />, color: "bg-green-500", text: "text-white" },
  ];

  return (
    <section id="skills" className="py-16 px-6 md:px-20 bg-slate-600">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10">My Skills</h2>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`${skill.color} ${skill.text} flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg hover:scale-105 transform transition`}
              data-aos="zoom-in"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
