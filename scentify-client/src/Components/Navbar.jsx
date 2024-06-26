import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

    //nav bar stick cheydh nikan
    const [isSticky, setSticky] = useState(false);

    //handle scroll function
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    const navItems = (
        <>
            <li><a href='/' className='text-red'>Home</a></li>
            <li>
                <details>
                    <summary>New Arrivals</summary>
                    <ul className="p-2">
                        <li><a href='/menu'>All</a></li>
                        <li><a>Men</a></li>
                        <li><a>Women</a></li>
                    </ul>
                </details>
            </li>
            <li><a>Deodorant</a></li>
            <li><a>Body Spary</a></li>
            <li>
                <details>
                    <summary>Services</summary>
                    <ul className="p-2">
                        <li><a>Online Order</a></li>
                        <li><a>Order Tracking</a></li>
                    </ul>
                </details>
            </li>
        </>
    )

    return (
        <header className='max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-50'>
      <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out" : ""}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a href='/'><h2 className='md:text-3xl text-2xl'><span className='font-bold md:leading-snug text-white bg-brown rounded text-3xl'>S</span>centify</h2></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>

          {/* cartitems */}
          <Link to='cart-page'> <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-3 lg:flex item-center justify-center hidden">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </div></Link>

                </div>
            </div>
        </header>
    )
}

export default Navbar
