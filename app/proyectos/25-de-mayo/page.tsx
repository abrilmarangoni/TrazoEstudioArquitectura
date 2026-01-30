"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectImages = [
  "/images/residencial/25-de-mayo/IMG_5664.png",
  "/images/residencial/25-de-mayo/IMG_5669.png",
  "/images/residencial/25-de-mayo/IMG_5674.png",
  "/images/residencial/25-de-mayo/IMG_6744.png",
  "/images/residencial/25-de-mayo/IMG_6745.png",
  "/images/residencial/25-de-mayo/IMG_6746.png",
  "/images/residencial/25-de-mayo/IMG_6747.png",
  "/images/residencial/25-de-mayo/IMG_8214.png",
]

export default function VeinticincoDeMayoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Project Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link 
          href="/#gallery" 
          className="inline-flex items-center gap-2 text-[#212f35]/60 hover:text-[#212f35] transition-colors font-[family-name:var(--font-geist-sans)] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Proyectos
        </Link>

        {/* Title */}
        <h1 className="text-[#212f35] text-4xl md:text-5xl font-light mb-4 font-[family-name:var(--font-geist-sans)]">25 de Mayo</h1>
        <p className="text-[#212f35]/60 mb-12 font-[family-name:var(--font-geist-sans)] max-w-3xl">
          Proyecto residencial.
        </p>

        {/* Image Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-[4/3] overflow-hidden bg-gray-100"
            >
              <img
                src={image}
                alt={`25 de Mayo - Imagen ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#212f35]/60 font-[family-name:var(--font-geist-sans)]">© 2024 TRAZO Arquitectura. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
}
