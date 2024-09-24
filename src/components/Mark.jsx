import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';


// Import Swiper styles

import 'swiper/css/navigation';
import 'swiper/css/free-mode';


const MARKS = [
    'mark-1.PNG',
    'mark-2.PNG',
    'mark-3.PNG',
    'mark-4.PNG',
    'mark-5.PNG',
    'mark-6.PNG',
]


const Mark = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>


            <Swiper

                modules={[Navigation, FreeMode]}
                navigation={true}
                // loop={true}
                freeMode={true}
                slidesPerView={2}
                spaceBetween={20}


                breakpoints={{
                    500: {
                        slidesPerView: 2,

                    },
                    
                    1024: {
                        slidesPerView: 3,

                    },
                    1280: {
                        slidesPerView: 4,

                    },
                }}



                className='mySwiper  flex items-center'>

                {MARKS.map(img => {
                    return (
                        <SwiperSlide className='flex justify-center items-center' key={img}>
                            <img src={img} alt="mark" className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-contain p-10 border border-gray-400 rounded-full' />
                        </SwiperSlide>
                    )
                })}

            </Swiper>

        </div>
    )
}

export default Mark

{/* <div className='p-10 border border-gray-400 rounded-full flex items-center justify-center'>


<img src="mark-1.PNG" alt="mark" className='w-full h-full object-contain' />
</div>


<div className='p-10 border border-gray-400 rounded-full flex items-center justify-center'>


<img src="mark-2.PNG" alt="mark" className='w-full h-full object-contain' />
</div>


<div className='p-10 border border-gray-400 rounded-full flex items-center justify-center'>


<img src="mark-3.PNG" alt="mark" className='w-full h-full object-contain' />
</div>

<div className='p-10 border border-gray-400 rounded-full flex items-center justify-center'>


<img src="mark-4.PNG" alt="mark" className='w-full h-full object-contain' />
</div>

<div className='p-10 border border-gray-400 rounded-full flex items-center justify-center'>


<img src="mark-5.PNG" alt="mark" className='w-full h-full object-contain' />
</div>

<div className='p-10 border border-gray-400 rounded-full flex items-center justify-center'>


<img src="mark-6.PNG" alt="mark" className='w-full h-full object-contain' />
</div> */}