import React from 'react'

const Button = ({ title }) => {
  return (
    <button className='bg-[#200D66] text-xs sm:text-sm lg:text-base text-white uppercase px-6 py-4 font-semibold rounded-full block '>
        {title}
    </button>
  )
}

export default Button