import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
        <div className='py-24 flex flex-col md:flex-row-reverse justify-between item-center gap-8'>

             {/* text */}
             <div className='md:w-1/2 space-y-7 px-4'>
                    <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Discover the Fragrance of<span className='text-bwown'>Elegance</span></h2>
                    <p className='text-xl text-[#4A4A4A]'>No Elegance is Possible Without Perfume. It is the Unseen, Unforgettable, Ultimate Accessory.</p>
                    <button className='btn bg-brown px-8 py-3 font-semibold text-white rounded-full'>Explore Now</button>
                </div>

             
        </div>
        </div>
  )
}

export default Banner