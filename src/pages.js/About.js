import React, {useState} from 'react'
import { LiaPlusSolid, LiaMinusSolid } from 'react-icons/lia';
import { about_dropdown } from '../components/data';


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
    

  return (
    <>
        <section className='my-10 mx-20'>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex flex-column justify-between items-center'>
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
        </section>
    </>
  )
}
