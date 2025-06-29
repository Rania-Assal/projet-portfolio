import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profil from '../assets/images/profil.jpg'

export default function App() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-800 text-white flex items-center justify-center px-6 sm:px-10 md:px-32">
      <motion.div
        className="max-w-7xl flex flex-col md:flex-row items-center gap-12 md:gap-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={profil}
          alt="Rania Assal"
          className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-8 border-pink-500 object-cover shadow-lg mx-auto"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="flex-1 text-center md:text-left px-4 md:px-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
            Rania Assal
          </motion.h1>

          <motion.p className="text-pink-400 text-xl sm:text-2xl mb-6 font-semibold tracking-wide">
            Full-Stack Developer
          </motion.p>

          <motion.p className="text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed text-base sm:text-lg">
            Passionate about building modern, elegant, and responsive websites
            using React, Tailwind, and best UI practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contacte"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-md transition"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
