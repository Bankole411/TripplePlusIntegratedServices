import React from 'react'

import image1 from "../images/Lekki phase 1-project 2/20150117_083443.jpg"
import image2 from "../images/Lekki phase 1-project 2/20150117_083448.jpg"
import image3 from "../images/Lekki phase 1-project 2/20150117_083704.jpg"
import image4 from "../images/Lekki phase 1-project 2/20150117_083746.jpg"
import image5 from "../images/Lekki phase 1-project 2/20150117_083820.jpg"
import image6 from "../images/Lekki phase 1-project 2/20150117_083838.jpg"
import image7 from "../images/Lekki phase 1-project 2/20150117_083925.jpg"
import image8 from "../images/Lekki phase 1-project 2/20150117_083838.jpg"


export default function BrownProject() {
  return (
    <>
      <section className='font-semibold'>
        <section className='bg-[#0a3332] px-10 text-center text-white md:pb-20'>
          <h1 className='py-10 md:pt-20 md:pb-10 md:text-6xl text-4xl'>Shades of Brown</h1>
          {/* <h3 className='pt-10 md:text-xl text-2xl'>Where Life Finds Its Colorful Rhythm</h3>
          <p className='py-10 md:pt-10 mx-auto max-w-[75vw] text-[20px]'>Discover the vibrant soul of urban living at a project we call Rainbow Retreat. These terrace buildings have been transformed into a harmonious celebration of colors, offering you a unique and spirited place to call home. Embrace the joyful spirit of the rainbow as it stretches across the skyline, and experience the warmth and energy that comes from living in a community where every color has its place.</p> */}
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
                <p>Lekki | Lagos</p>
              </div>
              <div>
                <h1 className='opacity-50'>Date</h1>
                <p>2023</p>
              </div>
            </div>
          </div>
        </section>

        <section className='mx-10 md:w-[70vw] max-h-[600px] overflow-auto md:mx-auto my-10 bg-[#80808030] p-5'>
         <div className=''>
            <img src={image1} alt="image1" className='rounded-lg mb-4'/>
            <img src={image2} alt="image2" className='rounded-lg mb-4'/>
            <img src={image3} alt="image3" className='rounded-lg mb-4'/>
            <img src={image4} alt="image4" className='rounded-lg mb-4'/>
            <img src={image5} alt="image5" className='rounded-lg mb-4'/>
            <img src={image6} alt="image6" className='rounded-lg mb-4'/>
            <img src={image7} alt="image7" className='rounded-lg mb-4'/>
            <img src={image8} alt="image8" className='rounded-lg mb-4'/>
         </div>
        </section>
      </section>
    </>
  )
}
