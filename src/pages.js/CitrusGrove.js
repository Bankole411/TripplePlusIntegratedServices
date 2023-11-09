import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import image1 from "../images/citrus-grove/IMG20231031105128.jpg"
import image2 from "../images/citrus-grove/IMG20231031105138.jpg"
import image3 from "../images/citrus-grove/IMG20231031105151.jpg"
import image4 from "../images/citrus-grove/IMG20231031105220.jpg"
import image5 from "../images/citrus-grove/IMG20231031105247.jpg"
import image6 from "../images/citrus-grove/IMG20231031105306.jpg"
import image7 from "../images/citrus-grove/IMG20231031105316.jpg"
import image8 from "../images/citrus-grove/IMG20231031105322.jpg"
import image9 from "../images/citrus-grove/IMG20231031105342.jpg"
import image10 from "../images/citrus-grove/IMG20231031105406.jpg"
import image11 from "../images/citrus-grove/IMG20231031105648.jpg"
import image12 from "../images/citrus-grove/IMG20231031105702.jpg"
import image13 from "../images/citrus-grove/IMG20231031105708.jpg"


export default function CitrusGrove() {
  return (
    <>
      <section className='font-semibold'>
        <section className='bg-[#0a3332] px-10 text-center text-white md:pb-20'>
          <h1 className='py-10 md:pt-20 md:pb-10 md:text-6xl text-4xl'>Citrus Grove</h1>
          {/* <h3 className='pt-10 md:text-xl text-2xl'>A Peach & Wine Abode</h3>
          <p className='py-10 md:pt-10 mx-auto max-w-[75vw] text-[20px]'>Welcome to 'Vintage Blush,' where the delicate warmth of peach intertwines with the rich allure of wine, creating an enchanting tapestry of residential elegance that evokes timeless sophistication.</p> */}
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
                <p>Abeoukuta | Ogun</p>
              </div>
              <div>
                <h1 className='opacity-50'>Date</h1>
                <p>2023</p>
              </div>
            </div>
          </div>
        </section>

        <section className='md:w-[70vw] max-h-[1000px] overflow-hidden mx-auto my-10'>
        <div className='hero-carousel px-5'>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className='mySwiper'
                            >
                                <SwiperSlide className='bg-[#222] rounded-lg'><img src={image1} alt='Slide 1' className='object-cover rounded-lg'/></SwiperSlide>
                                <SwiperSlide className='bg-[#222] rounded-lg'><img src={image2} alt='Slide 2' className='object-cover rounded-lg'/></SwiperSlide>
                                <SwiperSlide className='bg-[#222] rounded-lg'><img src={image3} alt='Slide 3' className='object-cover rounded-lg'/></SwiperSlide>
                                <SwiperSlide className='bg-[#222] rounded-lg'><img src={image4} alt='Slide 4' className='object-cover rounded-lg'/></SwiperSlide>
                                <SwiperSlide className='bg-[#222] rounded-lg'><img src={image5} alt='Slide 5' className='object-cover rounded-lg'/></SwiperSlide>
                                <SwiperSlide className='bg-[#222] rounded-lg'><img src={image6} alt='Slide 6' className='object-cover rounded-lg'/></SwiperSlide>
                                <SwiperSlide className='bg-[#222] rounded-lg'><img src={image7} alt='Slide 7' className='object-cover rounded-lg'/></SwiperSlide>
                                <SwiperSlide className='bg-[#222] rounded-lg'><img src={image8} alt='Slide 8' className='object-cover rounded-lg'/></SwiperSlide>
                                <SwiperSlide className='bg-[#222] rounded-lg'><img src={image9} alt='Slide 9' className='object-cover rounded-lg'/></SwiperSlide>
                                <SwiperSlide className='bg-[#222] rounded-lg'><img src={image10} alt='Slide 10' className='object-cover rounded-lg'/></SwiperSlide>
                                <SwiperSlide className='bg-[#222] rounded-lg'><img src={image11} alt='Slide 11' className='object-cover rounded-lg'/></SwiperSlide>
                                <SwiperSlide className='bg-[#222] rounded-lg'><img src={image12} alt='Slide 12' className='object-cover rounded-lg'/></SwiperSlide>
                                <SwiperSlide className='bg-[#222] rounded-lg'><img src={image13} alt='Slide 13' className='object-cover rounded-lg'/></SwiperSlide>
                            </Swiper>
                        </div>
        </section>
      </section>
    </>
  )
}
