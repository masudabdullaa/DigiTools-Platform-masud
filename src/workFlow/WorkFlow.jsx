import React from 'react';

const WorkFlow = () => {
    return (
        <div className='bg-indigo-600 py-30'>
            <div className='max-w-300 m-auto mt-10 text-center text-white space-y-5'>
                <h2 className='text-4xl font-bold'>Ready to Transform Your Workflow?</h2>
                <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <div className=' flex justify-center items-center gap-5'>
                    <button className='bg-white text-indigo-800 py-2 px-4 rounded-3xl mr-5'>Explore Products</button>
                    <button className=' bg-transparent text-white py-2 px-4 rounded-3xl mr-5 border-2'>View Pricing</button>
                </div>
                    <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default WorkFlow;