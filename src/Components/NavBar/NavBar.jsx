import React, { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex flex-row justify-start sm:justify-center sm:w-full m-2'>
      <section className='absolute top-0.5 right-0.5 mt-2 mr-5 sm:hidden border-2 rounded-sm border-primary p-1 cursor-pointer' onClick={toggleMenu}>
        <div className={`w-6 border-2 border-primary my-0.5 transition duration-150 ease-in-out ${isOpen ? 'rotate-45 transition duration-150 ease-in-out translate-y-[0.30em]' : ''}`}></div>
        <div className={`w-6 border-2 border-primary my-0.5 transition duration-150 ease-in-out ${isOpen ? 'scale-0' : ''}`}></div>
        <div className={`w-6 border-2 border-primary my-0.5 transition duration-150 ease-in-out ${isOpen ? '-rotate-45 transition duration-150 ease-in-out -translate-y-[0.400em]' : ''}`}></div>
      </section>
        <ul className={`flex flex-col sm:flex-row gap-4 text-left sm:flex ${isOpen || 'hidden'}`}>
            <li onClick={toggleMenu}><a className='text-xs font-bold tracking-widest uppercase 
            text-gray-400 hover:text-primary transition-colors' href="#Home">Inicio</a></li>
            <li onClick={toggleMenu}><a className='text-xs font-bold tracking-widest uppercase 
            text-gray-400 hover:text-primary transition-colors' href="#Services">Servicios</a></li>
            <li onClick={toggleMenu}><a className='text-xs font-bold tracking-widest uppercase 
            text-gray-400 hover:text-primary transition-colors' href="">Portfolio</a></li>
            <li onClick={toggleMenu}><a className='text-xs font-bold tracking-widest uppercase 
            text-gray-400 hover:text-primary transition-colors' href="">Contacto</a></li>
        </ul>
    </nav>
  )
}

export default NavBar