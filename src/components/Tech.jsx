import React from 'react'

const Tech = () => {
  return (
    <div className='max-w-7xl mx-auto px-2'>


     <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5'>

        <div className='relative rounded-3xl'>
            <img src="1.jpg" alt="tech" className='rounded-3xl' />
            <div className='absolute inset-0 bg-gradient-to-b  from-black/40 to-black/90 rounded-3xl'></div>
            <p className='capitalize text-3xl text-white font-bold absolute z-10 left-6 bottom-3'>nanoacademic technologies</p>
        </div>

        <div className='relative'>
            <img src="2.jpg" alt="tech" className='rounded-3xl' />
            <div className='absolute  inset-0  bg-gradient-to-b from-black/40 to-black/90 rounded-3xl'></div>
            <p className='capitalize text-3xl text-white font-bold absolute z-10 left-6 bottom-3'>fluxim</p>

        </div>

        <div className='relative'>
            <img src="3.jpg" alt="tech" className='rounded-3xl' />
            <div className='absolute inset-0  bg-gradient-to-b from-black/40 to-black/90 rounded-3xl'></div>
            <p className='capitalize text-3xl text-white font-bold absolute z-10 left-6 bottom-3'>paios equipment</p>
        </div>


     </div>



    </div>
  )
}

export default Tech