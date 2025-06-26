import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar'
// import profil from '../assets/images/profil.jpg'

export default function App() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-800 text-white flex items-center justify-center">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          // src={profil}
          // alt="Rania Assal"
          className="w-40 h-40 mx-auto rounded-full border-4 border-pink-500 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Rania Assal
        </motion.h1>

        <motion.p
          className="text-pink-400 text-lg mb-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Full-Stack Developer
        </motion.p>

        <motion.p
          className="max-w-xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Passionate about building modern, elegant, and responsive websites
          using React, Tailwind, and best UI practices.
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
