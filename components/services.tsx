"use client"

import Link from "next/link"

interface ServicesProps {
  language: "en" | "es"
}

const services = [
  {
    id: 1,
    title: "Anteproyecto",
    description: "Desarrollo de ideas preliminares y estudios de factibilidad. Análisis del terreno, normativas y primeras propuestas de diseño que definen el concepto general del proyecto.",
    image: "/images/services/anteproyecto.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "Proyecto",
    description: "Documentación técnica completa para la ejecución de la obra. Planos arquitectónicos, estructurales e instalaciones con todos los detalles constructivos necesarios.",
    image: "/images/services/proyecto.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "Dirección de Obra",
    description: "Supervisión y control de la construcción para garantizar la correcta ejecución del proyecto. Coordinación de equipos y seguimiento de calidad en cada etapa.",
    image: "/images/services/direccion-obra.jpg",
    href: "#",
  },
  {
    id: 4,
    title: "Gestiones Municipales",
    description: "Tramitación de permisos, habilitaciones y toda la documentación requerida por organismos municipales para la aprobación y regularización de proyectos.",
    image: "/images/services/gestiones.jpg",
    href: "#",
  },
  {
    id: 5,
    title: "Interiorismo",
    description: "Diseño integral de espacios interiores. Selección de materiales, mobiliario, iluminación y elementos decorativos que definen la identidad de cada ambiente.",
    image: "/images/services/interiorismo.jpg",
    href: "#",
  },
  {
    id: 6,
    title: "Asesoramiento",
    description: "Consultoría profesional en todas las etapas del proyecto. Orientación técnica y estratégica para tomar las mejores decisiones en tu inversión inmobiliaria.",
    image: "/images/services/asesoramiento.jpg",
    href: "#",
  },
]

export default function Services({ language }: ServicesProps) {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Título */}
        <h2 className="text-[#212f35] text-6xl md:text-8xl lg:text-[120px] font-normal tracking-tight text-center font-[family-name:var(--font-geist-sans)] mb-8">
          SERVICIOS
        </h2>
        
        {/* Introducción */}
        <p className="text-[#666] text-lg md:text-xl text-center max-w-3xl mx-auto mb-16 font-[family-name:var(--font-geist-sans)]">
          Ofrecemos un servicio integral de arquitectura, acompañando cada proyecto desde la idea inicial hasta su materialización final.
        </p>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group block"
            >
              {/* Imagen */}
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-4">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Imagen</span>
                </div>
              </div>
              
              {/* Título */}
              <h3 className="text-[#212f35] text-xl md:text-2xl font-normal mb-3 group-hover:text-[#b4a66d] transition-colors duration-300 font-[family-name:var(--font-geist-sans)]">
                {service.title}
              </h3>
              
              {/* Descripción */}
              <p className="text-[#666] text-sm leading-relaxed font-[family-name:var(--font-geist-sans)]">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
