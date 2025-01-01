"use client";

import dynamic from "next/dynamic"

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })

import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Team from "@/components/Team"
import Projects from "@/components/Projects"
import Reviews from "@/components/Reviews"
import Trusted from "@/components/Trusted"
import WhoWeAre from "@/components/WhoWeAre"


export default function Home() {
  return (
    <main className="container mx-auto ">
      {/* <Hero/>
      <Trusted/>
      <Services/> */}
      {/* <Team/>  */}
      <WhoWeAre/>
      {/* <Projects/>
      <Reviews/> */}
    </main>
  )
}
