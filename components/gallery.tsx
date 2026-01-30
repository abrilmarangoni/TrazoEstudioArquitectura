"use client"

import { useState } from "react"
import Link from "next/link"

interface GalleryProps {
  language: "en" | "es"
}

type Category = "all" | "residential" | "commercial"

const projects = [
  // Nuevo orden para "Todos"
  {
    id: 1,
    image: "/images/residencial/bosque-sur-2/2-2D - PROYECTO BOSQUE-.JPG",
    title: "Bosque Sur 2",
    category: "residential" as Category,
    href: "/proyectos/bosque-sur-2",
  },
  {
    id: 2,
    image: "/images/tom-constitucion/0- PORTADA.png",
    title: "Tom Constitución",
    category: "commercial" as Category,
    href: "/proyectos/tom-constitucion",
  },
  {
    id: 3,
    image: "/images/santo-cafe/IMG_6496.jpg",
    title: "Santo Café",
    category: "commercial" as Category,
    href: "/proyectos/santo-cafe",
  },
  {
    id: 4,
    image: "/images/tom-take-away/3.png",
    title: "Tom Take Away",
    category: "commercial" as Category,
    href: "/proyectos/tom-take-away",
  },
  {
    id: 5,
    image: "/images/residencial/bosque-sur-1/27-2D - PROYECTO BOSQUE-.JPG",
    title: "Bosque Sur 1",
    category: "residential" as Category,
    href: "/proyectos/bosque-sur-1",
  },
  {
    id: 6,
    image: "/images/residencial/25-de-mayo/IMG_5664.png",
    title: "25 de Mayo",
    category: "residential" as Category,
    href: "/proyectos/25-de-mayo",
  },
  {
    id: 7,
    image: "/images/residencial/taller-patagones/1..png",
    title: "Taller Patagones",
    category: "residential" as Category,
    href: "/proyectos/taller-patagones",
  },
]

export default function Gallery({ language }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  const totalCount = projects.length
  const residentialCount = projects.filter(p => p.category === "residential").length
  const commercialCount = projects.filter(p => p.category === "commercial").length

  const categories: { key: Category; label: string; count: number }[] = [
    { key: "all", label: "Todos", count: 6 },
    { key: "residential", label: "Residencial", count: residentialCount },
    { key: "commercial", label: "Comercial", count: commercialCount },
  ]

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Título PROYECTOS - centrado */}
        <h2 className="text-[#212f35] text-6xl md:text-8xl lg:text-[120px] font-normal tracking-tight mb-6 text-center font-[family-name:var(--font-geist-sans)]">
          PROYECTOS
        </h2>
        
        {/* Categorias */}
        <div className="mb-8">
          <p className="text-[#666] text-base md:text-lg font-semibold tracking-tight mb-3">
            Categorias
          </p>
          <div className="flex flex-wrap items-baseline gap-3 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className="flex items-baseline gap-1 transition-all duration-300"
              >
                <span 
                  className={`text-2xl md:text-[35px] font-medium tracking-tight ${
                    activeCategory === cat.key 
                      ? "text-[#b4a66d] underline underline-offset-4 decoration-[#b4a66d]" 
                      : "text-[#3d555b] hover:text-[#212f35]"
                  }`}
                >
                  {cat.label}
                </span>
                <span className="text-[#666] text-[12px] font-semibold">
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - 3x3 (solo 6 proyectos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredProjects.slice(0, 6).map((project) => (
            <Link
              key={project.id}
              href={project.href || "#"}
              className="relative group cursor-pointer overflow-hidden block"
            >
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay con título */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl md:text-2xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-[family-name:var(--font-geist-sans)]">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
