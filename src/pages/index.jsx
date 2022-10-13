import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import Example from '@/components/Products'
import CTA from '@/components/CTA'
import Filosophy from '@/components/Filosophy'
import { CallToAction } from '@/components/CallToAction'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Medkit Health</title>
        <link rel="icon" href="/MedkiT.png" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Example />
        <CTA />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
