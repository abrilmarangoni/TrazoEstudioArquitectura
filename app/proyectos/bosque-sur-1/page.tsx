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
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <div className="bg-charcoal text-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/#gallery" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Proyectos
          </Link>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-charcoal text-4xl md:text-5xl font-serif mb-4">Bosque Sur 1</h1>
        <p className="text-charcoal/60 mb-12">Proyecto Residencial</p>

        {/* Image Grid 3x3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
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
      <div className="bg-charcoal text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60">© 2024 Arquitectos. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
}
