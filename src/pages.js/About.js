import React, {useState} from 'react'
import { LiaPlusSolid, LiaMinusSolid } from 'react-icons/lia';
import { about_dropdown, coreValues } from '../components/data';


function ApproachItem({ item, handleClick }) {
    return (
      <li className='my-2 hover:cursor-pointer' onClick={() => handleClick(item.id)}>
        <div>
          <span className={`flex flex-row justify-between font-semibold items-center text-xl`}>
            <p className={`${item.on ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' : ''} my-3`}>{item.text}</p>
            {item.on ? <LiaMinusSolid /> : <LiaPlusSolid />}
          </span>
          <hr />
          <div className={`subText my-4 font-semibold ${item.on ? 'block' : 'hidden'}`}>{item.subText}</div>
        </div>
      </li>
    );
  }

export default function About() {
    const [isExpanded, setIsExpanded] = useState(about_dropdown);

    function handleClick(id) {
      setIsExpanded((prevState) =>
        prevState.map((value) => {
          return value.id === id ? { ...value, on: !value.on } : value;
        })
      );
    }

    const Cards = coreValues.map(card => {
      return(
        <div key={card.id} className='text-white px-1 py-2 bg-transparent flex flex-col'>
          <span className='text-[50px] mb-5'>
            {card.svg}
          </span>
          <h1 className='font-semibold text-xl mb-3'>{card.value}</h1>
          <p className='font-semibold core-values-text'>{card.subText}</p>
        </div>
      )
    })
    

  return (
    <>
        <section className='my-10'>
            <section className='mx-10 md:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex flex-column justify-between items-center'>
                <div>
                    <span className='bg-[#C41313] py-1 px-3 rounded-full font-semibold text-white'>ABOUT US</span>
                    <p className='font-semibold text-2xl my-4 md:max-w-[500px] leading-relaxed tracking-wide'>Creative digital media and design agency based by the valley in Palo Alto.</p>
                </div>
                <div>
                      <div className='my-10'>
                          <ul>
                              {isExpanded.map((item) => (
                                  <ApproachItem key={item.id} item={item} handleClick={handleClick} />
                              ))}
                          </ul>
                      </div>
                </div>
            </section>
            <section className='max-w-screen bg-[#0a3332]'>
              <div className='pt-10 md:pb-10 px-10 md:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-end my-10'>
                <div className='flex flex-col my-3'>
                <span className='mb-3 max-w-[150px] bg-[#C41313] py-1 px-2 rounded-full font-semibold text-white'>Our core values</span>
                <h1 className='max-w-[350px] leading-relaxed text-3xl font-semibold text-white'>These are the values and morals we stand by</h1>
                </div>
                <div className='py-1 my-3 md:col-span-2 lg:col-span-2 md:ml-2'>
                  <p className="core-values-text md:max-w-[450px] leading-5">We build and activate brands through cultural insight, strategic vision, and the power of emotion across every element.</p>
                </div> 
              </div>

              <div className='pb-10 px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
                <div className='hidden lg:block'></div>
                <div className='col-span-3 lg:col-span-2'>
                  <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                      {Cards}
                  </div>
                </div>
              </div>
            </section>
        </section>
    </>
  )
}
