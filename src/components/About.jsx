import React from 'react'
import Button from './common/Button'

const About = () => {
    return (
        <div className='max-w-7xl mx-auto my-7 '>

            <div className='w-full flex flex-col px-3 md:px-0 md:flex-row gap-10 items-center'>

                <div className='md:min-w-96 w-full h-full' >
                    <img src="welcome.PNG" alt="about" className=' rounded-3xl' />
                </div>


                <div className='flex flex-col gap-2 lg:gap-5 pr-1 '>

                    <div className=''>

                        <p className='text-[#D74247] uppercase lg:text-base xl:text-xl font-bold  '>welcome to</p>

                        <h1 className='uppercase lg:text-3xl text-4xl font-extrabold tracking-wider'>impulse technology</h1>
                    </div>


                    <p className='text-xs lg:text-sm text-gray-600 font-medium tracking-wide leading-5 '><span className='text-[#D74247] '>IMPULSE TECHNOLOGY</span> an ISO 9001:2015 certified company recognised by Government of India Ministry of Commerce & Industry Department for
                        Promotion of Industry and Internal Trade (DPIIT) under #startupindia Program.</p>

                    <p className='text-xs lg:text-sm text-gray-600 font-medium tracking-wide leading-5 '><span className='text-[#D74247]'>IMPULSE TECHNOLOGY</span> provide cutting technology of next generation nanoscale material and device (Nanotechnology), Semiconductor devices TCAD
                        and Quantum Technology (QTCAD) Spin Qubit quantum dot Semiconductor device Simulation software for education, commercial and R&D sector in India
                        through our partnership with world leaders in these technologies like Nanoacademic Technologies, FLUXiM AG and Mat3ra (Cloud Software).</p>

                    <div>
                        <Button title=' discover more' />
                    </div>

                </div>




            </div>



        </div>
    )
}

export default About