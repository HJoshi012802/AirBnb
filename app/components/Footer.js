import React from 'react';

const Footer = () => {
    return ( 
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-200'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Airbnb Work</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Nice clone</p>
                <p>Arpit Bala</p>
                <p>DrakeXArpit Bala</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p>Prepresnt</p>
                <p>Server</p>
                <p>Client</p>
                <p>Airbnb API</p>
                <p>Airbnb API+</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>NEXT.js</p>
                <p>Javascript</p>
                <p>Tailwind css</p>
                <p>Config file problem</p>
                <p>Correct it </p>
            </div>
            
        </div>
     );
}
 
export default Footer;