import React from "react"
import SectionOne from "./SectionOne"
import CardSection from "./CardSection"
import FaqSection from "./FaqSection"
import Footer from "./Footer"
import CarouselBanner from "./CarouselBanner"
import ContractSection from "./ContractSection"
import LibSection from "./LibSection"
import HeroSection from "./HeroSection"

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
      <HeroSection />
      <CarouselBanner />
      <SectionOne />
      <CardSection />
      <FaqSection />
      <LibSection />
      <ContractSection />
      <Footer />
    </div>
  )
}
