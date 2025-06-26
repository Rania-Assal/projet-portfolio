import { motion } from 'framer-motion'
import tastebite from '../assets/images/MyProjects/tastebite.PNG'
import movies from '../assets/images/MyProjects/movies.PNG'

export default function Projects() {
  const projects = [
    {
      title: "Tastebite",
      image: tastebite,
      description: "Landing page for a restaurant with responsive design.",
    },
    {
      title: "Movies",
      image: movies,
      description: "An elegant movie app to browse and explore films with responsive design.",
    },
  ]

  return (
    <section id="projects" className="py-40 bg-gradient-to-br from-green-900 via-black to-green-800 text-white px-6 md:px-20">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
