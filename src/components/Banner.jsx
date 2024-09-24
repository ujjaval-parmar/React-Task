import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <section className='min-w-full'>

            <Swiper
                // navigation={true}
                modules={[ Autoplay]}
                loop={true}
                autoplay={{
                    delay: 2000,
                }}
                className=" ">

                <SwiperSlide >


                    <div className="relative  w-full h-96">


                        <div className='w-full h-full absolute z-0 inset-0'>
                            <img src="banner-3.jpg" alt="" className='w-full h-full object-left object-cover ' />
                            <div className='absolute inset-0 backdrop-blur-sm bg-gradient-to-r from-black/30 to-black/60'></div>
                        </div>


                        <div className=' relative z-10 w-full h-full overflow-hidden flex justify-end pl-1 items-center'>


                            <div className="w-[500px] lg:w-[600px] xl:w-[800px] h-96 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.8)),url('chip.PNG')] bg-cover bg-center absolute left-0  lg:left-10  xl:left-32 top-0 mix-blend-multiply">

                            </div>


                            <div className='text-white  relative z-10 lg:mr-10 px-3'>
                                <h1 className='md:ml-3 text-lg md:text-3xl lg:text-4xl text-[#FDBD5C] uppercase font-semibold'>get advanced simulation software for.</h1>

                                <ul className='list-disc   text-sm md:text-base lg:text-xl font-semibold list-inside'>
                                    <li>Nanotechnology</li>
                                    <li>Spintronics devices</li>
                                    <li>Semiconductor Nano devices</li>
                                    <li>Molecular Device Simulation</li>
                                    <li>Graphene and other 1D/2D materials & devices.</li>
                                    <li>Phonon,hear transport and thermolelctric</li>
                                    <li>Light emitting diodes(QD-LED,O-LED,Perovskite-LED)</li>
                                    <li>Photovoltaic devices(Perovskites,Tandem,THin Film,Organic)</li>
                                    <li>Quantum Simulation for Spin Qubit Devices.</li>
                                </ul>

                            </div>



                        </div>

                    </div>



                </SwiperSlide>

                <SwiperSlide >


                    <div className="relative  w-full h-96">


                        <div className='w-full h-full absolute z-0 inset-0'>
                            <img src="banner-3.jpg" alt="" className='w-full h-full object-left object-cover ' />
                            <div className='absolute inset-0 backdrop-blur-sm bg-gradient-to-r from-black/30 to-black/60'></div>
                        </div>


                        <div className=' relative z-10 w-full h-full overflow-hidden flex justify-end pl-1 items-center'>


                            <div className="w-[500px] lg:w-[600px] xl:w-[800px] h-96 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.8)),url('chip.PNG')] bg-cover bg-center absolute left-0  lg:left-10  xl:left-32 top-0 mix-blend-multiply">

                            </div>


                            <div className='text-white  relative z-10 lg:mr-10 px-3'>
                                <h1 className='md:ml-3 text-lg md:text-3xl lg:text-4xl text-[#FDBD5C] uppercase font-semibold'>get advanced simulation software for.</h1>

                                <ul className='list-disc   text-sm md:text-base lg:text-xl font-semibold list-inside'>
                                    <li>Nanotechnology</li>
                                    <li>Spintronics devices</li>
                                    <li>Semiconductor Nano devices</li>
                                    <li>Molecular Device Simulation</li>
                                    <li>Graphene and other 1D/2D materials & devices.</li>
                                    <li>Phonon,hear transport and thermolelctric</li>
                                    <li>Light emitting diodes(QD-LED,O-LED,Perovskite-LED)</li>
                                    <li>Photovoltaic devices(Perovskites,Tandem,THin Film,Organic)</li>
                                    <li>Quantum Simulation for Spin Qubit Devices.</li>
                                </ul>

                            </div>



                        </div>

                    </div>



                </SwiperSlide>

                <SwiperSlide >


                    <div className="relative  w-full h-96">


                        <div className='w-full h-full absolute z-0 inset-0'>
                            <img src="banner-3.jpg" alt="" className='w-full h-full object-left object-cover ' />
                            <div className='absolute inset-0 backdrop-blur-sm bg-gradient-to-r from-black/30 to-black/60'></div>
                        </div>


                        <div className=' relative z-10 w-full h-full overflow-hidden flex justify-end pl-1 items-center'>


                            <div className="w-[500px] lg:w-[600px] xl:w-[800px] h-96 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.8)),url('chip.PNG')] bg-cover bg-center absolute left-0  lg:left-10  xl:left-32 top-0 mix-blend-multiply">

                            </div>


                            <div className='text-white  relative z-10 lg:mr-10 px-3'>
                                <h1 className='md:ml-3 text-lg md:text-3xl lg:text-4xl text-[#FDBD5C] uppercase font-semibold'>get advanced simulation software for.</h1>

                                <ul className='list-disc   text-sm md:text-base lg:text-xl font-semibold list-inside'>
                                    <li>Nanotechnology</li>
                                    <li>Spintronics devices</li>
                                    <li>Semiconductor Nano devices</li>
                                    <li>Molecular Device Simulation</li>
                                    <li>Graphene and other 1D/2D materials & devices.</li>
                                    <li>Phonon,hear transport and thermolelctric</li>
                                    <li>Light emitting diodes(QD-LED,O-LED,Perovskite-LED)</li>
                                    <li>Photovoltaic devices(Perovskites,Tandem,THin Film,Organic)</li>
                                    <li>Quantum Simulation for Spin Qubit Devices.</li>
                                </ul>

                            </div>



                        </div>

                    </div>



                </SwiperSlide>





            </Swiper>


        </section>
    )
}

export default Banner


