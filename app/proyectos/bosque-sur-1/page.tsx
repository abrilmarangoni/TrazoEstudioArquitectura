"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectImages = [
  "/images/residencial/bosque-sur-1/25-2D - PROYECTO BOSQUE-.JPG",
  "/images/residencial/bosque-sur-1/27-2D - PROYECTO BOSQUE-.JPG",
  "/images/residencial/bosque-sur-1/28-2D - PROYECTO BOSQUE-.JPG",
  "/images/residencial/bosque-sur-1/34-2D - PROYECTO BOSQUE-.JPG",
  "/images/residencial/bosque-sur-1/37-2D - PROYECTO BOSQUE-.JPG",
  "/images/residencial/bosque-sur-1/43-2D - PROYECTO BOSQUE-.JPG",
]

export default function BosqueSur1Page() {
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
        <h1 className="text-[#212f35] text-4xl md:text-5xl font-light mb-4 font-[family-name:var(--font-geist-sans)]">Bosque Sur 1</h1>
        <p className="text-[#212f35]/60 mb-12 font-[family-name:var(--font-geist-sans)] max-w-3xl">
          Proyecto residencial ubicado en el barrio Bosque Sur.
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
                alt={`Bosque Sur 1 - Imagen ${index + 1}`}
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
