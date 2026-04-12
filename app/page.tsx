import { motion } from "framer-motion";
export default function Home() {
  return (
<main className="min-h-screen bg-slate-900 text-white px-6 py-10">
      {/* Hero Section */}
      <section className="text-center mb-16">
  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
    Hi, I'm Asiah Mahmood
  </h1>
  <p className="text-gray-400 mt-2">
    Bioinformatics Graduate | IT Specialist
  </p>
</section>
{/* Navbar */}
<nav className="flex justify-between items-center mb-10">
  <h1 className="text-xl font-bold text-blue-400">Asiah Mahmood</h1>

  <ul className="flex gap-6 text-gray-300">
    <li><a href="#about" className="hover:text-blue-400">About</a></li>
    <li><a href="#education" className="hover:text-blue-400">Education</a></li>
    <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
    <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
    <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
  </ul>
</nav>
      {/* About */}
      <section id="about" className="mb-12"></section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-blue-400"></h2>
        <p className="text-gray-300">
          I have a Bachelor's degree in Bioinformatics and a Master's in Information Technology.
          I enjoy working at the intersection of biology and technology, especially in data analysis
          and web development.
        </p>
      </section>

      {/* Education */}
      <section id="education" className="mb-12"></section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        <ul className="list-disc ml-5 text-gray-300">
          <li>BS Bioinformatics</li>
          <li>MS Information Technology</li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-12"></section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Python", "JavaScript", "Next.js", "Machine Learning", "Data Analysis"].map(skill => (
            <span key={skill} className="bg-gray-800 px-3 py-1 rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </section>
{/* Projects */}

<section id="projects" className="mb-12"></section>
<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-3">Projects</h2>

  <div className="grid md:grid-cols-2 gap-4">

    <div className="bg-gray-800 p-4 rounded-xl">
      <h3 className="text-xl font-semibold">Bioinformatics Analysis Tool</h3>
      <p className="text-gray-400 mt-2">
        A project focused on analyzing biological data using Python.
      </p>
    </div>

    <div className="bg-gray-800 p-4 rounded-xl">
      <h3 className="text-xl font-semibold">Portfolio Website</h3>
      <p className="text-gray-400 mt-2">
        A personal portfolio built using Next.js and Tailwind CSS.
      </p>
    </div>

  </div>
</section>
      {/* Contact */}
      <section>
        <section id="contact"></section>
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <p className="text-gray-300">Email: asiah.mahmood89@gmail.com</p>
      </section>

    </main>
  );
}