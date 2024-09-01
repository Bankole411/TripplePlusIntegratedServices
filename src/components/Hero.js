import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectGrid from './ProjectGrid';
import ApproachSection from './ApproachSection';
import { paint_products } from "./data";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';


import image1 from '../images/PK-apartments/img3.jpg';
import image2 from '../images/white-project/img1.jpg';
import image3 from '../images/vintage-blush/IMG_20220503_093053.jpg';
import image4 from '../images/coah/IMG20231010121700.jpg';
import image5 from '../images/citrus-grove/IMG20231031105128.jpg';
import image6 from '../images/project1/post-completion/IMG20230926104903.webp';
import image7 from '../images/project1/post-completion/IMG20230926104906.webp';
import image8 from '../images/citrus-serenity/img2.jpg';
import image9 from '../images/harbor-haven/img1.jpg';

const images = [
    { src: image1, alt: 'Slide 1' },
    { src: image9, alt: 'Slide 9' },
    { src: image3, alt: 'Slide 3' },
    { src: image8, alt: 'Slide 8' },
    { src: image5, alt: 'Slide 5' },
    { src: image6, alt: 'Slide 6' },
    { src: image7, alt: 'Slide 7' },
    { src: image4, alt: 'Slide 4' },
    { src: image2, alt: 'Slide 2' }
];

export default function Hero() {
    const [isInterior, setIsInterior] = useState(true);

    function handleClick() {
        setIsInterior(prevState => !prevState);
    }

    const interiorCards = paint_products.filter(card => card.interior);
    const exteriorCards = paint_products.filter(card => card.exterior);

    const renderCards = (cards) => {
        return cards.map(card => (
            <Link to="/" key={card.id}>
                <div className='relative breathing-div bg-white-800 pl-10 pr-5 rounded-md shadow-2xl flex flex-col'>
                    <span className='absolute px-3 pb-2 pt-2 rounded-full right-6 top-5 font-semibold'>{card.tag}</span>
                    <div className='newImage mt-20 w-[80%] h-[250px] bg-red-300 object-cover'>
                        <img src={`./images/product-images/${card.img_url}`} alt={card.name} loading="lazy" />
                    </div>
                    <h2 className='pt-10 pb-5 text-3xl font-bold'>{card.name}</h2>
                    <p className='pb-5 font-semibold'>{card.mini_description}</p>
                    <Link to="/"><h4 className='pb-10 font-semibold'>Learn more</h4></Link>
                </div>
            </Link>
        ));
    };

    return (
        <>
            <div className='hidden md:block lg:block mx-10 my-10'>
                <section className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex flex-row items-center'>
                    <div className='font-semibold'>
                        <h1 className='text-3xl mb-5'>Tripple Plus Integrated Services</h1>
                        <div className='w-full h-[1px] bg-[#000000] mb-5'></div>
                        <p className='tag-line text-4xl'>Let's add a <pre className=' inline text-pink-600 italic'>plus</pre> to your property</p>
                    </div>
                    <div>
                        <div className='hero-carousel'>
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
                                {images.map((image, index) => (
                                    <SwiperSlide key={index} className='bg-[#222] rounded-lg'>
                                        <img src={image.src} alt={image.alt} loading="lazy" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
            </div>

            <div className='md:hidden lg:hidden xl:hidden px-5 py-5'>
                <div className='font-extrabold mx-auto text-center mb-5'>
                    <p className='mb-3 text-2xl'>Tripple Plus Integrated Services</p>
                    <p className='tag-line font-bold text-[25px]'>let's add a <pre className=' inline text-pink-600 italic'>plus</pre> to your property</p>
                </div>
                <div className='grid grid-cols-12 flex flex-row items-center'>
                    <div className='hero-carousel col-span-12'>
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
                            {images.map((image, index) => (
                                <SwiperSlide key={index} className='bg-[#222] rounded-lg flex items-center justify-center overflow-hidden'>
                                    <img src={image.src} alt={image.alt} loading="lazy" className='w-full h-full object-cover'/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <section className='mx-5 mb-30 justify-center items-center md:ml-10'>
                <div className="lg:mt-10 mt-5 max-w-[600px]">
                    <h1 className='mb-5 text-xl md:text-4xl font-extrabold'>Everything You Crave.</h1>
                    <div className='w-full h-[1px] bg-[#000000] mb-5'></div>
                    <p className='mb-10 text-1xl font-bold'>Our Grid empowers your space with a stunning array of wall paint choices, allowing you to infuse color, style, and life into every corner.</p>
                </div>

                <div className={`mx-auto cursor-pointer max-w-[300px] hero-switch-div items-center justify-center rounded-full pt-2 pb-2`}>
                    <Link>
                        <div onClick={handleClick} className={`rounded-full hero-switch-items font-bold mx-auto pr-7 pl-7 pt-2 pb-2 ml-2 items-center justify-center ${isInterior ? 'bg-white' : ''}`}>Interior</div>
                    </Link>
                    <Link>
                        <div onClick={handleClick} className={`rounded-full font-bold mx-auto pr-7 pl-7 pt-2 pb-2 mr-2 items-center justify-center ${!isInterior ? 'bg-white' : ''}`}>Exterior</div>
                    </Link>
                </div>
                {interiorCards.length > 0 && <div className={`${isInterior ? 'block' : 'hidden'} max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:ml-10 md:mr-10 mt-10 md:mt-20 mb-10`}>
                    {renderCards(interiorCards)}
                </div>}
                {exteriorCards.length > 0 && <div className={`${!isInterior ? 'block' : 'hidden'} max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:ml-10 md:mr-10 mt-10 md:mt-20 mb-10`}>
                    {renderCards(exteriorCards)}
                </div>}
            </section>
            <section className='mx-5 mb-30 justify-center items-center'>
                <ProjectGrid />
                <ApproachSection />
            </section>
        </>
    );
}
