"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Biography from "@/components/biography"
import Gallery from "@/components/gallery"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "es">("es")

  return (
    <div className="min-h-screen bg-background">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <Biography language={language} />
      <Gallery language={language} />
      <Services language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  )
}
