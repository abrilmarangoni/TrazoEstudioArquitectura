"use client"

interface ServicesProps {
  language: "en" | "es"
}

export default function Services({ language }: ServicesProps) {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-[#212f35] text-6xl md:text-8xl lg:text-[120px] font-normal tracking-tight text-center font-[family-name:var(--font-geist-sans)]">
          SERVICIOS
        </h2>
      </div>
    </section>
  )
}
