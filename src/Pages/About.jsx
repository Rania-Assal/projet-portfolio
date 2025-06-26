import { motion } from 'framer-motion'
import women from '../assets/images/women.webp'

export default function About() {
  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Git", icon: "https://th.bing.com/th/id/OIP.q0DQLwqov4XeEv1FvaWwwAHaHa?rs=1&pid=ImgDetMain" },
    { name: "GitHub", icon: "https://th.bing.com/th/id/OIP.uZCk0Kwcik5zgX3wlOiq1wAAAA?rs=1&pid=ImgDetMain" },
    { name: "Bash", icon: "https://www.pngrepo.com/png/376359/180/bash.png" },
    { name: "Sass", icon: "https://th.bing.com/th/id/OIP.zWS-vOgxNdTsJOfGyvIFdgHaHa?rs=1&pid=ImgDetMain" },
    { name: "Bootstrap", icon: "https://th.bing.com/th/id/OIP.LOkNVysZMaPe_6cHJNVn9gHaHa?rs=1&pid=ImgDetMain" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", icon: "https://th.bing.com/th/id/OIP.cGXT3YkgwDahQTNt5haqKgHaHa?rs=1&pid=ImgDetMain" },
  ]

  return (
    <section className="py-40 bg-gradient-to-br from-green-900 via-black to-green-800 text-white px-6 md:px-20">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.img
          src={women}
          alt="Development Illustration"
          className="w-64 h-64 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="md:flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="mb-4 text-gray-300 leading-relaxed">
            Hello! I’m Rania Assal, a Frontend Developer passionate about building beautiful, performant, and accessible websites.
          </p>
          <p className="mb-8 text-gray-400">
            I am always eager to learn new technologies and improve my skills to deliver the best possible solutions.
          </p>

          <h3 className="text-2xl font-semibold mb-6">Skills</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center transition transform hover:-translate-y-2 duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-14 h-14 mb-2 group-hover:scale-110 transition"
                />
                <span className="text-sm text-gray-300 group-hover:text-green-400 transition">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
