import dynamic from "next/dynamic"

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })

import Hero from "@/components/Hero"
import Services from "@/components/Services"

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Services/>
    </main>
  )
}
