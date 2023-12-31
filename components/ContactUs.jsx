import React from 'react'

const ContactUs = () => {
  return (
    <div>
    <section id='contactUs' className="text-gray-400 bg-gray-900 body-font">
  <div className="max-w-5xl px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-white">Contact Us</h1>
      <p className="leading-relaxed mt-4">We appreciate your interest in Boujee and are eager to connect with you. For any inquiries, collaboration requests, or further information about our supply chain traceability and sustainability solutions, please don't hesitate to contact us.</p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      {/* <h2 className="text-white text-lg font-medium title-font mb-5">Sign Up</h2> */}
      <div className="relative mb-4">
        <label for="full-name" className="leading-7 text-sm text-gray-400">Full Name</label>
        <input type="text" id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-8">
        <label for="Message" className="leading-7 text-sm text-gray-400">Message</label>
        {/* <input type="text" id="Message" name="Message" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> */}
        <textarea id="Message" name="Message" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Send</button>
      <p className="text-xs mt-3">Your info is safe with us.</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default ContactUs