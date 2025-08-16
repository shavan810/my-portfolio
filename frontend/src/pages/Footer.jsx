export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Shavan D. Singh, All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#about" className="hover:text-red-400 transition">About</a>
          <a href="#skills" className="hover:text-red-400 transition">Skills</a>
          <a href="#projects" className="hover:text-red-400 transition">Projects</a>
          <a href="#contact" className="hover:text-red-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}
