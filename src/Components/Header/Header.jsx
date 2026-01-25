import React from 'react'

const Header = ({ children }) => {
  return (
    <header className='w-full flex flex-col sm:flex-row pt-2.5 pl-4 sticky top-0 right-0 left-0 bg-gradient-to-t from-gray-950/80 to-black ring-1'>
        <h1 className='text-gray-400 font-bold text-4xl first-letter:text-[#00FF41]'>VENZA</h1>
        {children}
    </header>
  )
}

export default Header