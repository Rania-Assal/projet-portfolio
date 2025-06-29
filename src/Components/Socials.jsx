import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram  } from "react-icons/fa"

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub size={20} />,
    color: "bg-pink-600 hover:bg-pink-500",
    link: "https://github.com/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    color: "bg-blue-600 hover:bg-blue-500",
    link: "linkedin.com/in/rania-assal-a52893371",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={20} />,
    color:
      "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:opacity-80",
    link: "https://www.instagram.com/",
  },
]

export default function Socials() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white p-3 rounded-full shadow-lg transition ${social.color}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  )
}
