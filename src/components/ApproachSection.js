import React, { useState } from 'react';
import { BiMinus } from 'react-icons/bi';
import { LiaPlusSolid, LiaMinusSolid } from 'react-icons/lia';
import { approach_items } from './data';

function ApproachItem({ item, handleClick }) {
  return (
    <li className='my-2 hover:cursor-pointer' onClick={() => handleClick(item.id)}>
      <div>
        <span className='flex flex-row justify-between font-semibold items-center'>
          <p className='my-3'>{item.text}</p>
          {item.on ? <LiaMinusSolid /> : <LiaPlusSolid />}
        </span>
        <hr />
        <div className={`subText my-4 font-semibold ${item.on ? 'block' : 'hidden'}`}>{item.subText}</div>
      </div>
    </li>
  );
}

export default function ApproachSection() {
  const [isExpanded, setIsExpanded] = useState(approach_items);

  function handleClick(id) {
    setIsExpanded((prevState) =>
      prevState.map((value) => {
        return value.id === id ? { ...value, on: !value.on } : value;
      })
    );
  }
  

  return (
    <>
      <section className='mx-5 md:ml-10 my-10 md:px-10'>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:mr-10 mt-10 md:mt-20'>
          <div className=''>
            <div className='font-semibold flex flex-row items-center mb-10'>
              <BiMinus />
              <p className='mx-2'>Our Approach</p>
            </div>
            <span className='font-semibold text-3xl lg:leading-loose leading-relaxed'>
              Our web development starts and ends with a{' '}
              <pre className='bg-[#0a3332] inline hover:bg-[#ff0000]'>best-in-class</pre> experience strategy.
            </span>

            <div className='my-10'>
              <ul>
                {isExpanded.map((item) => (
                  <ApproachItem key={item.id} item={item} handleClick={handleClick} />
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className='sm:h-[264px] md:h-[350px] lg:h-full moving-image rounded'></div>
          </div>
        </div>
      </section>
    </>
  );
}
