import React from 'react'

import image1 from "../images/project1/post-completion/IMG20230926104500.jpg"
import image2 from "../images/project1/post-completion/IMG20230926104531.jpg"
import image3 from "../images/project1/post-completion/IMG20230926104545.jpg"
import image4 from "../images/project1/post-completion/IMG20230926104550.jpg"
import image5 from "../images/project1/post-completion/IMG20230926104606.jpg"
import image6 from "../images/project1/post-completion/IMG20230926104612.jpg"
import image7 from "../images/project1/post-completion/IMG20230926104621.jpg"
import image8 from "../images/project1/post-completion/IMG20230926104650.jpg"
import image9 from "../images/project1/post-completion/IMG20230926104654.jpg"
import image10 from "../images/project1/post-completion/IMG20230926104713.jpg"
import image11 from "../images/project1/post-completion/IMG20230926104731.jpg"
import image12 from "../images/project1/post-completion/IMG20230926104749.jpg"
import image13 from "../images/project1/post-completion/IMG20230926104842.jpg"
import image14 from "../images/project1/post-completion/IMG20230926104903.jpg"
import image15 from "../images/project1/post-completion/IMG20230926104906.jpg"
import image16 from "../images/project1/post-completion/IMG20230926104910.jpg"
import image17 from "../images/project1/post-completion/IMG20230926104914.jpg"


export default function Rainbow() {
  return (
    <>
      <section className='font-semibold'>
        <section className='bg-[#0a3332] px-10 text-center text-white md:pb-20'>
          <h1 className='py-10 md:pt-20 md:pb-10 md:text-6xl text-4xl'>CromaSpectrum Terrace</h1>
          {/* <h3 className='pt-10 md:text-xl text-2xl'>Where Life Finds Its Colorful Rhythm</h3>
          <p className='py-10 md:pt-10 mx-auto max-w-[75vw] text-[20px]'>Discover the vibrant soul of urban living at a project we call Rainbow Retreat. These terrace buildings have been transformed into a harmonious celebration of colors, offering you a unique and spirited place to call home. Embrace the joyful spirit of the rainbow as it stretches across the skyline, and experience the warmth and energy that comes from living in a community where every color has its place.</p> */}
        </section>

        <section className='grid gris-cols-1 md:grid-cols-2 mx-5 my-20'>
          <div className='font-semibold md:text-center text-2xl mb-10'>
            <h1>Project Brief</h1>
          </div>
          <div className='font-semibold md:max-w-[500px] leading-relaxed'>
            <p className='opacity-80'>Involving a terrace of buildings, this project embraces a Rainbow concept with premium quality paints coating the exteriors. The high-quality finish proved irresistible to buyers, leading our company to be contracted by many new owners for interior beautification as the apartments were developed and sold.</p>
            <div className='mt-10 grid grid-cols-2 flex flex-row'>
              <div>
                <h1 className='opacity-50'>Location</h1>
                <p>Ikeja | Lagos</p>
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
            <img src={image9} alt="image9" className='rounded-lg mb-4'/>
            <img src={image10} alt="image10" className='rounded-lg mb-4'/>
            <img src={image11} alt="image11" className='rounded-lg mb-4'/>
            <img src={image12} alt="image12" className='rounded-lg mb-4'/>
            <img src={image13} alt="image13" className='rounded-lg mb-4'/>
            <img src={image14} alt="image14" className='rounded-lg mb-4'/>
            <img src={image15} alt="image15" className='rounded-lg mb-4'/>
            <img src={image16} alt="image16" className='rounded-lg mb-4'/>
            <img src={image17} alt="image17" className='rounded-lg mb-4'/>
         </div>
        </section>
      </section>
    </>
  )
}
