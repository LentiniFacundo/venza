import React from 'react'

const Header = ({ children }) => {
  return (
    <header className='w-full flex flex-col sm:flex-row mt-2 pl-4'>
        <h1 className='text-gray-400 font-bold text-4xl first-letter:text-[#00FF41]'>VENZA</h1>
        {children}
    </header>
  )
}

export default Header