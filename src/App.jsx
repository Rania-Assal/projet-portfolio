import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Socials from './Components/Socials';
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects' 
import Contacte from './Pages/Contacte'






function App() {
  return (
   <>
   
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />   
          <Route path="/about" element={<About />} />  
           <Route path="/contacte" element={<Contacte />} /> 
           
      </Routes>
    <Socials />
    <Footer />
   </>
  )
}

export default App

