import React from 'react'
import Lottie from "lottie-react";
import features from "../anim/features.json";

const Features = () => {
  return (
    <div>
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="max-w-5xl px-5 py-24 mx-auto flex flex-wrap">
  <div className="flex flex-col text-center w-full mb-20">
    
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-100">USP's</h1>
    </div>
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">Comprehensive Traceability</h2>
            <p className="leading-relaxed">Our advanced blockchain-based technology ensures end-to-end traceability.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">Sustainability Excellence</h2>
            <p className="leading-relaxed">At Bext360, sustainability is at the core of what we do.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">Configurable Solutions</h2>
            <p className="leading-relaxed">Our SaaS platform offers configurable solutions tailored to your industry and business needs.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">Data-Driven Insights</h2>
            <p className="leading-relaxed">Unlock the power of data with our comprehensive business intelligence tools.</p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">Expertise and Trust</h2>
            <p className="leading-relaxed">With a track record of successful implementations and a team of industry experts.</p>
          </div>
        </div>
      </div>
      {/* <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step"/>
       */}
       <div className='lg:w-3/5 md:w-1/2'>
       <Lottie className=' w-full' animationData={features} loop={true} />
       </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Features