import React from 'react'
import {Link} from "react-router"




export default function Navbar() {

  return (
    
   <>

   <nav className='fixed top-0 p-7 flex flex-col text-stone-100'>
    <ul className=' flex items-center justify-between gap-20 w-400 '>
      <h1 className='text-[30px] italic text-4xl font-bold'>my portfolio</h1>

      <Link to={{ pathname: '/' }}>
          <li>Home</li>
        </Link>

        <Link to={{ pathname: '/Projects' }}>
          <li> Projects</li>
        </Link>

        
        <Link to={{ pathname: '/About' }}>
          <li>About</li>
        </Link>


       
        <Link to={{ pathname: '/Contacte' }}>
          <li>Contacte</li>
        </Link>

        
    
    </ul>
   </nav>
   </>
  )
}
