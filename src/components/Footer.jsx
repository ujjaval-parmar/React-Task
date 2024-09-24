import React from 'react'
import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-[#101010] mt-36 text-white'>

            <div className='relative '>


                <div className='bg-[#200D66] flex flex-col md:flex-row w-[80%] md:w-[756px] lg:w-[1024px] xl:w-[1200px]  justify-between px-2 md:px-6 items-center py-6 rounded-3xl absolute left-[50%] -translate-x-[50%] -top-16 md:-top-16 lg:-top-20 xl:-top-24 mx-1 gap-4 text-center'>

                    <h3 className='text-white text-base lg:text-4xl xl:text-5xl font-bold  tracking-wider md:max-w-[70%] md:leading-[60px] uppercase'>we're delivering the best customer experience</h3>


                    <button className='text-[12px] md:text-[15px] lg:text-[18px] bg-[#E31E25] px-8 py-4 rounded-full text-white uppercase font-semibold tracking-wider w-fit'>
                        discover more
                    </button>


                </div>


                <div className='max-w-[1600px] mx-auto pt-32 md:pt-28 flex flex-col gap-6 lg:flex-row pb-5 justify-between px-4 md:px-24'>


                    <div className='max-w-sm flex flex-col gap-5'>

                        <div>
                            <img src="footer_logo.PNG" alt="logo" className='mix-blend-normal' />

                        </div>

                        <p className='text-sm'>IMPULSE TECHNOLOGY an ISO 9001:2015 certified company recognised by Government of India Ministry of Commerce & Industry Department for Promotion of Industry and Internal Trade (DPIIT) under #startupindia Program.</p>

                        <div className='flex gap-5 items-center'>
                            <div className=' bg-[#E31E25] rounded-full text-white p-3 text-xl'>
                                <LiaFacebookF />
                            </div>
                            <FaTwitter />
                            <FaLinkedinIn />
                            <CiInstagram />
                            <FaYoutube />
                        </div>


                    </div>


                    <div className='flex flex-col gap-4'>
                        <h3 className='text-xl uppercase tracking-wide'>useful links</h3>

                        <a href="">Home</a>
                        <a href="">About Us</a>
                        <a href="">Contanct Us</a>

                    </div>

                    <div className='flex flex-col gap-4'>
                        <h3 className='text-xl uppercase tracking-wide'>our services</h3>

                        <a href="">NanoDCAL</a>
                        <a href="">RESCU</a>
                        <a href="">QTCAD</a>
                        <a href="">SETFOS</a>
                        <a href="">LAOSS</a>

                    </div>

                    <div className='flex flex-col gap-4'>

                        <h3 className='text-xl uppercase tracking-wide'>contact us</h3>

                        <div>
                            <h4 className='text-sm'>Address</h4>
                            <p className='max-w-[80%]'>Unit No. 911, 9th Floor, Vipul Business Park, Sohna Road,
                                Sector-48, Gurugram, Haryana - 122018.</p>
                        </div>

                        <div>
                            <h4 className='text-sm'>MOBILE</h4>
                            <p>+91 70000 16509, +91 78384 23945</p>
                        </div>

                        <div>
                        <h4 className='text-sm'>EMAIL</h4>
                        <p>info@impulsetechnology.in</p>
                        </div>

                          



                    </div>





                </div>


                <div className='bg-black text-white flex items-center justify-center py-3 font-semibold text-center px-3'>
                    Copyright 2023 IMPULSE TECHNOLOGY. All Rights Reserved. | Design & Developed By MWT
                </div>






            </div>





        </footer>
    )
}

export default Footer