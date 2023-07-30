import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function Faq() {
    const ques=[
        {
            que:"What industries does Boujee's platform cater to?",
            ans:"Boujee's platform is versatile and applicable to various industries. Our solutions are tailored to support supply chains dealing with coffee, seafood, timber, minerals, cotton, palm oil, and more. Whether you are a producer, manufacturer, or retailer, our technology provides comprehensive traceability and sustainability metrics."
        },
        {
            que:"How does Boujee ensure the authenticity of supply chain data?",
            ans:"We employ blockchain technology to guarantee the authenticity and immutability of supply chain data. Each step in the supply chain is recorded on the blockchain, creating a tamper-proof and transparent ledger. This ensures that all data, from origin to consumer, is trustworthy and can be audited for accuracy."
        },
        {
            que:"Can Boujee's platform be integrated with existing systems?",
            ans:"Yes, absolutely. Boujee's SaaS platform offers configurable solutions that can be seamlessly integrated with existing systems. We provide APIs that enable easy embedding into websites, supply chain management systems, point-of-sale systems, and more, ensuring a smooth integration process."
        },
        {
            que:"What sets Boujee apart from other traceability solutions?",
            ans:"Boujee stands out for its comprehensive and measurable accountability. Our platform offers unparalleled traceability across supply chains, providing transparent insights from producer to consumer. Moreover, we prioritize sustainability and deploy our technology in emerging economies, creating a positive impact on local communities."
        },
        {
            que:"Does Boujee offer partnership opportunities?",
            ans:"Yes, we believe in the power of collaboration to drive positive change. If you are interested in exploring partnership opportunities, joint ventures, or collaborative projects, we would be delighted to discuss potential collaborations."
        }
    ]
  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-2">
        <h2 className='text-gray-800 text-3xl font-bold text-center mb-8'>FAQ's</h2>
        {ques.map((q)=>(
        <Disclosure key={q.que}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 my-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>{q.que}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
               {q.ans}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
      </div>
    </div>
  )
}
