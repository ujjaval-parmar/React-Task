import React, { useState } from 'react'
import Button from './common/Button'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);




    return (
        <header className='w-full bg-[#E1DFEA] px-4 py-4 relative '>


            <div className='max-w-7xl mx-auto flex justify-between items-center lg:gap-2 xl:gap-6 relative z-50'>

                <div className='w-32 relative z-50'>
                    <img src="logo.PNG" alt="logo" />
                </div>

                <div className=' hidden lg:flex  justify-between gap-2 flex-1 relative z-50'>

                    <nav className='text-[#3F3E44]   uppercase font-semibold  ml-5   lg:flex items-center lg:gap-7 xl:gap-10 relative z-50'>

                        <a href="#home" className='text-[#E1353C]'>Home</a>
                        <a href="#about" className='hover:text-[#E1353C]'>About Us</a>
                        <a href="#nanoacademic" className='hover:text-[#E1353C]'>Nanoacademic</a>
                        <a href="#fluxim" className='hover:text-[#E1353C]'>Fluxim</a>
                        <a href="#matra" className='hover:text-[#E1353C]'>Matra</a>
                        <a href="#training" className='hover:text-[#E1353C]'>Training Program</a>

                    </nav>

                    <div>
                        <Button title="contact us" />
                    </div>

                </div>

                <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <button className='flex flex-col justify-between lg:hidden w-10 h-8  relative'>
                        <span className={`bar bar-1  ${isMenuOpen ? 'active' : ''}`}></span>
                        <span className={`bar bar-2 ${isMenuOpen ? 'active' : ''}`}></span>
                        <span className={`bar bar-3 ${isMenuOpen ? 'active' : ''}`}></span>
                    </button>
                </div>





            </div>


            <div className={`flex flex-col lg:hidden  absolute bg-[#E1DFEA]  w-full top-[86px]  left-0 gap-3 px-4 pb-3 z-30 ${isMenuOpen ? 'scale-100 rounded-none' : 'scale-0 '} transition-all duration-300 origin-top-right`}>
                <nav className='text-[#3F3E44]   uppercase font-semibold flex flex-col gap-4 px-4 relative z-30'>

                    <a href="#home" className='text-[#E1353C]'>Home</a>
                    <a href="#about">About Us</a>
                    <a href="#nanoacademic">Nanoacademic</a>
                    <a href="#fluxim">Fluxim</a>
                    <a href="#matra">Matra</a>
                    <a href="#training">Training Program</a>

                </nav>

                <div className='relative z-30'>
                    <Button title="contact us" />
                </div>
            </div>


        </header>
    )
}

export default Header