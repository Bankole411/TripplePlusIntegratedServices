import React from 'react'
import {GiPencil} from "react-icons/gi"

export default function Footer() {
  return (
    <>
          <div className='w-full bg-[#0a3332] py-10'>
              <section className="md:mx-5 my-10">
                  <footer className='mx-10 md:px-10'>
                      <div className='grid grid-cols-1 md:grid-cols-2 flex flex-row items-center'>
                          <div className='my-5'>
                            <h1 className='footer-transparent-text font-semibold text-3xl md:max-w-[500px] leading-relaxed tracking-tight hover:tracking-wide'>Collaboration, work enquires or just say hello</h1>
                            <a href="mailto: trippleplus.ng@gmail.com" rel="noopener noreferrer" target="_blank">
                                <h1 className='font-semibold md:text-3xl mt-5 text-white'>trippleplus.ng@gmail.com</h1>
                            </a>

                            <a href="mailto: trippleplus.ng@gmail.com" rel="noopener noreferrer" target='_blank'>
                            <button className='hover:animate-bounce footer--button text-white mt-10 px-10 py-5 flex flex-row justify-between items-center'>
                                Send message
                                <span className='ml-2 .hover-icon'><GiPencil /> </span>
                            </button>
                            </a>
                          </div>
                          <div className='md:justify-end text-white my-5 flex flex-row justify-between font-semibold'>
                            <a href="https://www.behance.net/triplearchive" target='_blank' rel="noopener noreferrer" className='md:pl-5'>Behance</a>
                            <a href="https://www.behance.net/triplearchive" target='_blank' rel="noopener noreferrer" className='pl-5'>Behance</a>
                          </div>
                      </div>
                  </footer>
              </section>
          </div>
    </>
  )
}
