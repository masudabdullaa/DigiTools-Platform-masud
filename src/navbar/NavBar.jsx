import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm text-[#9514FA] max-w-300 mx-auto">
            <div className="flex-1">
                <a className="text-4xl font-bold">DigiTools</a>
            </div>
            <div>
                <ul className='flex justify-center items-center'>
                    <li className=' mx-5 px-4 text-black'><a href="">Products</a></li>
                    <li className=' mx-5 px-4 text-black'><a href="">Features</a></li>
                    <li className=' mx-5 px-4 text-black'><a href="">Pricing</a></li>
                    <li className=' mx-5 px-4 text-black'><a href="">Testimonials</a></li>
                    <li className=' mx-5 px-4 text-black'><a href="">FAQ</a></li>
                </ul>
            </div>
            <div className="flex justify-center items-center">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-black">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>

                </div>
                <div className=' px-2'>
                    <button className='text-black cursor-pointer'>Login</button>
                    <button className='bg-[#9514FA] text-white py-1 px-2 ml-2 rounded-3xl cursor-pointer'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;