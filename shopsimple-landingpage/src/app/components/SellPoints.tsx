'use client';
import React, { useEffect } from 'react';
import '../styles/sellpoints.css';

const SellPoints = () => {
  useEffect(() => {
    // Trigger animation after component mounts
    const points = document.querySelectorAll('.relative');
    points.forEach((point, index) => {
      setTimeout(() => {
        point.classList.add('opacity-100', 'translate-x-0');
      }, (index + 1) * 500); // Adjust the delay as needed
    });
  }, []);

  return( 
    <div className="container min-h-screen flex flex-col items-center">
      <div className="relative point1 opacity-0 translate-x-[-20px] transition-opacity transition-transform duration-500 ease-in-out">
        <img src="/circle-icon.svg" className="mx-auto" alt="Circle Icon" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-20">
          <h1 className="text-3xl font-extrabold text-violet-700">All-in-One Shopping</h1>
          <p className='text-xl text-violet-700'>Access a wide range of products from multiple sites in one place.</p>
        </div>
      </div>
    
      <div className="relative point2 opacity-0 translate-x-[-20px] transition-opacity transition-transform duration-500 ease-in-out mt-8">
        <img src="/flower-icon.svg" className="mx-auto" alt="Flower Icon" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-20">
          <h1 className="text-3xl font-semibold text-violet-700">Personalized Recommendations</h1>
          <p className='text-xl text-violet-700'>Get tailored product suggestions based on your preferences.</p>
        </div>
      </div>
    
      <div className="relative point3 opacity-0 translate-x-[-20px] transition-opacity transition-transform duration-500 ease-in-out">
        <img src="/flower2-icon.svg" className="mx-auto" alt="Flower 2 Icon" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-20">
          <h1 className="text-3xl font-semibold text-violet-700">Best Price Guarantee</h1>
          <p className='text-xl text-violet-700'>Compare prices from various retailers to secure the best deals.</p>
        </div>
      </div>
    </div>
  );
}; 

export default SellPoints;

