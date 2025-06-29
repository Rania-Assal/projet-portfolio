import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-900 via-black to-green-800 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold italic text-green-400 tracking-wider">
          my <span className="text-pink-500">portfolio</span>
        </h1>

        <div 
          className="md:hidden text-white text-3xl cursor-pointer select-none transition-transform duration-300"
          onClick={toggleMenu}
          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        >
           {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className="hidden md:flex gap-10 text-lg font-medium text-white">
          {['/', '/Projects', '/About', '/Contacte'].map((path, i) => (
            <li
              key={i}
              className="hover:text-pink-400 transition duration-300 cursor-pointer"
            >
              <Link to={path}>
                {path === '/' ? 'Home' : path.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

  
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col gap-4 items-center bg-black/90 py-6 text-white font-medium text-lg shadow-md"
          >
            <li onClick={toggleMenu}><Link to="/">Home</Link></li>
            <li onClick={toggleMenu}><Link to="/Projects">Projects</Link></li>
            <li onClick={toggleMenu}><Link to="/About">About</Link></li>
            <li onClick={toggleMenu}><Link to="/Contacte">Contact</Link></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
