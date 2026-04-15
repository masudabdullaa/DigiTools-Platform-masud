import React from 'react';

const GetStarted = () => {
    return (
        <div className=' max-w-300 m-auto my-8'>
            <div className=' text-center mb-20'>
                <h2 className=' text-4xl font-bold'>Get Started in 3 Steps</h2>
                <p className=' my-4'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className=' shadow-sm rounded-xl  p-5'>
                    <button className=' bg-[#627382] py-2 px-3 text-white rounded-full '>01</button>
                    <img className='' src="/src/assets/user.png" alt="" />
                    <h3 className=' text-3xl my-4 text-center font-bold'>Create Account</h3>
                    <p>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className=' shadow-sm rounded-xl p-5'>
                    <button className=' bg-[#627382] py-2 px-3 text-white rounded-full '>02</button>
                    <img className='' src="/src/assets/package.png" alt="" />
                    <h3 className=' text-3xl my-4 text-center font-bold'>Choose Products</h3>
                    <p>Browse our catalog and select the toolsthat fit your needs.</p>
                </div>
                <div className=' shadow-sm rounded-xl p-5'>
                    <button className=' bg-[#627382] py-2 px-3 text-white rounded-full '>03</button>
                    <img className='' src="/src/assets/rocket.png" alt="" />
                    <h3 className=' text-3xl my-4 text-center font-bold'>Start Creating</h3>
                     <p>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;