import React from 'react';

const Status = () => {
    return (
        <div className=' bg-purple-800 py-15 my-5'>
            <div className='flex items-center justify-around max-w-300 m-auto text-white'>
                <div>
                <h2 className='text-5xl font-bold'>50K+</h2>
                <p>Active Users</p>
            </div>
              <div className="divider divider-horizontal"></div>
            <div>
                <h2 className='text-5xl font-bold'>200+</h2>
                <p>Premium Tools</p>
            </div>
              <div className="divider divider-horizontal"></div>
            <div>
                <h2 className='text-5xl font-bold'>4.9</h2>
                <p>Rating</p>
            </div>
            </div>
        </div>
    );
};

export default Status;