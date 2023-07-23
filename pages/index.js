import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Brands from '@/components/Brands'
import Solutions from '@/components/Solutions'
import Features from '@/components/Features'
import Team from '@/components/Team'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/layout/Footer'
import Stats from '@/components/Stats'
import NavBar from '@/components/layout/NavBar'
import Faq from '@/components/Faq'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`bg-white  min-h-screen   ${inter.className}`}
    >
     <NavBar/>
      <Hero/>
      <Brands/>
      <Stats/>
      <Solutions/>
      <Features/>
      <Team/>
      <Faq/>
      <ContactUs/>
      <Footer/>
    </main>
  )
}
