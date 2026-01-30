"use client"

interface HeroProps {
  language: "en" | "es"
}

export default function Hero({ language }: HeroProps) {
  return (
    <>
      {/* Hero Section - Solo imagen */}
      <section id="hero" className="relative h-screen">
        {/* Background Image - casa de Bosque Sur */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/residencial/bosque-sur-1/25-2D - PROYECTO BOSQUE-.JPG"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient negro en la parte superior para el header */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
        </div>
      </section>

      {/* About Section - Texto sobre fondo blanco */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col items-center">
          <div className="max-w-5xl w-full">
            <p className="text-[#212f35] text-xl md:text-2xl lg:text-[36px] font-extralight leading-relaxed tracking-tight text-left font-[family-name:var(--font-geist-sans)]">
              TRAZO Arquitectura es un estudio de arquitectura y diseño con sede en Mar del Plata, formado por un grupo multidisciplinar de profesionales, que realiza proyectos residenciales, culturales, corporativos y públicos a nivel nacional.
            </p>
            <div className="w-40 h-[3px] bg-[#b4a66d] mt-10 self-start" />
          </div>
        </div>
      </section>
    </>
  )
}
