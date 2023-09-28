import React from 'react'

import image1 from "../images/citrus-serenity/img1.jpg"
import image2 from "../images/citrus-serenity/img2.jpg"
import image3 from "../images/citrus-serenity/img3.jpg"
import image4 from "../images/citrus-serenity/img4.jpg"
import image5 from "../images/citrus-serenity/img5.jpg"
import image6 from "../images/citrus-serenity/img6.jpg"
import image7 from "../images/citrus-serenity/img7.jpg"


export default function CitrusSerenity() {
  return (
    <>
      <section className='font-semibold'>
        <section className='bg-[#0a3332] px-10 text-center text-white md:pb-20'>
          <h1 className='pt-10 md:pt-20 md:pb-10 md:text-6xl text-4xl'>Citrus Serenity</h1>
          {/* <h3 className='pt-10 md:text-xl text-2xl'>Where Green and Orange Converge</h3>
          <p className='py-10 md:pt-10 mx-auto max-w-[75vw] text-[20px]'>This project embodies the perfect fusion of green and orange, creating an atmosphere of refreshing tranquility. Imagine waking up to the soothing embrace of nature's green and the invigorating zest of orange hues. This meticulously designed living space harmoniously blends the calm of green with the energy of orange, offering a unique and rejuvenating living experience. Welcome to a home where Citrus Serenity is not just a tagline, but a way of life, where every day feels like a fresh, sun-kissed morning in your very own citrus-scented paradise.</p> */}
        </section>

        <section className='grid gris-cols-1 md:grid-cols-2 mx-5 my-20'>
          <div className='font-semibold md:text-center text-2xl mb-10'>
            <h1>Project Brief</h1>
          </div>
          <div className='font-semibold md:max-w-[500px] leading-relaxed'>
            <p className='mb-5 opacity-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor justo nec nisi congue, id bibendum neque tincidunt.</p>
            <p className='opacity-80'>Integer nec massa id elit tincidunt fermentum non id sapien. Curabitur vitae urna ac ex efficitur rhoncus in sit amet libero. Etiam sed nunc id libero consequat ultrices. Nullam nec eros vitae turpis finibus auctor.</p>
            <div className='mt-10 grid grid-cols-2 flex flex-row'>
              <div>
                <h1 className='opacity-50'>Location</h1>
                <p>Abeokuta | Ogun</p>
              </div>
              <div>
                <h1 className='opacity-50'>Date</h1>
                <p>Confirm</p>
              </div>
            </div>
          </div>
        </section>

        <section className='mx-10 md:mx-20 mb-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
            <img src={image1} alt="image1" className='max-h-[250px] rounded-lg mb-4 md:grid-cols-1'/>
            <img src={image2} alt="image2" className='max-h-[250px] rounded-lg mb-4 md:grid-cols-1'/>
            <img src={image3} alt="image3" className='max-h-[250px] rounded-lg mb-4 md:grid-cols-1'/>
            <img src={image4} alt="image4" className='max-h-[250px] rounded-lg mb-4 md:grid-cols-1'/>
            <img src={image5} alt="image5" className='max-h-[250px] rounded-lg mb-4 md:grid-cols-1'/>
            <img src={image6} alt="image6" className='max-h-[250px] rounded-lg mb-4 md:grid-cols-1'/>
            <img src={image7} alt="image7" className='max-h-[250px] rounded-lg mb-4 md:grid-cols-1'/>
        </section>
      </section>
    </>
  )
}
