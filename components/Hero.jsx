import React from 'react'
import Lottie from "lottie-react";
import hero from "../anim/hero.json";

const Hero = () => {
  return (
    <div>
        {/* <section className="text-gray-400 body-font rounded-b-full bg-gray-900">
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
</section> */}




<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 pb-24 items-center justify-center flex-col">

  <div className=" w-2/5 max-h-[65vh] rounded-b-3xl border-x-8 border-b-8 border-gray-700 overflow-hidden">
    <Lottie className='w-full' animationData={hero} loop={true} />
    </div>

    {/* <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Bringing Unparalleled Transparency and Sustainability to Supply Chains</h1>
      <p className="leading-relaxed mb-8">At Bext360, we revolutionize supply chain management with cutting-edge technology and a relentless commitment to transparency.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
      </div>
    </div> */}

<section className="text-gray-400 bg-gray-900 body-font">
  <div className="max-w-4xl px-5 pt-12 mx-auto flex items-center md:flex-row flex-col">
    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h1 className="md:text-4xl text-2xl font-bold title-font text-white">Bringing Unparalleled <span className='text-green-500'>Transparency</span> and <span className='text-green-500'> Sustainability</span> to Supply Chain</h1>
      <h2 className=" text-gray-400 tracking-widest  title-font mt-2">At Bext360, we revolutionize supply chain management with cutting-edge technology and a relentless commitment to transparency.</h2>
    </div>
    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          {/* <span className="text-xs text-gray-500 mb-1"></span> */}
          <span className="title-font font-medium">Mail Us</span>
        </span>
      </button>

    </div>
  </div>
</section>


  </div>
</section>
    </div>
  )
}

export default Hero