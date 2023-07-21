import React from 'react'
import Lottie from "lottie-react";
import hero from "../anim/hero.json";

const Hero = () => {
  return (
    <div>
        <section className="text-gray-400 body-font bg-gray-900">
  <div className=" mx-auto flex pl-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-50">Bringing Unparalleled Transparency and Sustainability to Supply Chains
  
      </h1>
      <p className="mb-8 leading-relaxed font-medium">At Bext360, we revolutionize supply chain management with cutting-edge technology and a relentless commitment to transparency.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-l-full border-y-4 border-l-4 border-green-500 overflow-hidden">
    <Lottie className='w-full' animationData={hero} loop={true} />
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero