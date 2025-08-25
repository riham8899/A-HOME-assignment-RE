import React, { useState } from 'react'

import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [isScroll, setscorol] = useState(false);
    function handelscroll() {

        if (window.scrollY > 10) {
            setscorol(true);

        } else {
            setscorol(false);

        }

    }
    window.addEventListener("scroll", handelscroll);


    return (
        <nav className={`bg-[#2c3e50] text-white fixed  start-0 end-0 top-0 ${isScroll ? "py-3" : "py-4"}`}>
            <div className="container flex justify-content-around align-items-center">
                <div className="logo">
                    <Link className='text-uppercase text-3xl font-bold'>Start Framework</Link>
                </div>
                

                <div className='hidden sm:inline-block '>
                    <ul className=' flex  justify-content-around  gap-3 text-uppercase font-bold  '>
                        <li>
                            <NavLink className='rounded-md ' to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className='rounded-md' to="/portfolio">portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink className='rounded-md' to="/contact">contact

                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='block sm:hidden text-white'>
                    <i class="fa-solid fa-bars"></i>
                </div>

            </div>


        </nav>



    )
}

export default Navbar