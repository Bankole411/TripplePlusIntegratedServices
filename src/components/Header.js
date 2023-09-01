import React, {useState} from 'react'
import {Link} from "react-router-dom"
import logo from "../images/Bankole.svg"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className='header pl-1 lg:pl-20 pr-5 mt-7 mb-5 font-bold'>
        <div className='logo-div'><Link to="/"><img src={logo} alt='Tripple plus logo'></img></Link></div>
        <div className='menu-icon cursor-pointer sm:hidden' onClick={toggleMenu}>
        <div className={`bar w-6 h-1 bg-black my-1 transition ${menuOpen ? 'transform rotate-45 translate-y-1' : ''}`}></div>
        <div className={`bar w-6 h-1 bg-black my-1 transition ${menuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`bar w-6 h-1 bg-black my-1 transition ${menuOpen ? 'transform -rotate-45 -translate-y-1' : ''}`}></div>
      </div>
        <nav className= {`nav-mobile ${menuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <ul>
            <li className='mx-3 mb-3'><Link to="/">Home</Link></li>
            <li className='mx-3 mb-3'><Link to="/about">About</Link></li>
            <li className='mx-3 mb-3'><Link to="/products">Products</Link></li>
            <li className='mx-3 mb-3'><Link to="/projects">Projects</Link></li>
            <li className='mx-3 mb-3'><button className='nav--button text-white'>Send message</button></li>
          </ul>
        </nav>
        <nav className="nav hidden sm:block">
          <ul>
            <li className='mx-3'><Link to="/">Home</Link></li>
            <li className='mx-3'><Link to="/about">About</Link></li>
            <li className='mx-3'><Link to="/products">Products</Link></li>
            <li className='mx-3'><Link to="/projects">Projects</Link></li>
            <li className='mx-3'><a href="mailto: trippleplus.ng@gmail.com" target='_blank' rel="noopener noreferrer">
            <button className='relative animate-bounce nav--button text-white relative'>
              Send message 
              {/* <div>
                <span class="absolute flex h-3 w-3 inline-flex top-0 right-0">
                  <span class="animate-ping absolute h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
              </div> */}
            </button></a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
