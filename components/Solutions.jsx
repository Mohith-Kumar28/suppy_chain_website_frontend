import React from 'react'


const Solutions = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">How can we help you today..?</h2>
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">Our Solutions</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Traceability & Transparency</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Our advanced blockchain-powered technology enables end-to-end traceability for coffee, seafood, timber, minerals, cotton, and palm oil supply chains. With real-time data collection and immutable records, businesses gain unprecedented transparency, allowing them to identify potential bottlenecks, optimize processes, and ensure ethical sourcing. From farm to shelf, we help you build trust with your consumers and stakeholders.</p>
            {/* <a className="mt-3 text-green-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
             
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Sustainability Measurement</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">At Boujee, we are committed to sustainability. Our platform provides quantifiable measurements for the environmental and social impact of your supply chain. By tracking key sustainability metrics, such as carbon footprint, water usage, fair labor practices, and more, you can make informed decisions and drive positive change. Join us in creating a more sustainable future for our planet.</p>
            {/* <a className="mt-3 text-green-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
             
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Data-Driven Business Intelligence</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Harness the power of data to gain a competitive edge. Our configurable SaaS platform equips you with comprehensive business intelligence, enabling data-driven decision-making at every stage of the supply chain. From predictive analytics to demand forecasting, our solutions empower you to optimize inventory, reduce waste, and improve overall efficiency.</p>
            <a className="mt-3 text-green-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Solutions