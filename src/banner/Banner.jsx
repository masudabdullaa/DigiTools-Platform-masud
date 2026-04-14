import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { IoPlayOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className=' max-w-[1200px] m-auto flex justify-between items-center gap-x-5 my-18'>
            <div className='max-w-[640px]'>
                <button className='flex items-center bg-[#E1E7FF] text-[#9514FA] py-2 px-4 rounded-3xl'>
                    <FaCircle className='mr-2'></FaCircle> New: AI-Powered Tools Available</button>
                <h2 className='text-6xl font-bold text-[#101727] my-8'>Supercharge Your Digital Workflow</h2>
                <p>Access premium AI tools, design assets, templates, and productivity <br></br> software—all in one place. Start creating faster today. <br />Explore Products
                </p>
                <div className=' flex my-5'>
                    <button className='btn1 rounded-3xl p-2'>Explore Products</button>
                    <button className=' flex justify-center items-center ml-5 btn2'> <IoPlayOutline></IoPlayOutline> Watch Demo</button>
                </div>
            </div>
            <div>
                <img className='banner-image' src="/src/assets/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;