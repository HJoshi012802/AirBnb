import React from 'react';
import Image from 'next/image';
import Landing from '@/public/Banner.jpg'

const Banner = () => {
    return (  
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden'>
           <Image
           className='hover:scale-110 transition duration-300 ease-in-out '
           src={Landing}
           alt="Banner Travel"
           layout='fill'
           objectFit='cover'
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg m-3'>Not Sure Were To Go? Perfect</p>
             <button
              className='text-purple-500 bg-white px-10 py-4 shadow-lg rounded-full font-bold my-3 hover:shadow-xl active:scale-90  transition duration-150'
             >I'm Flexible</button>
        </div>
        </div>
       
    );
}
 
export default Banner;