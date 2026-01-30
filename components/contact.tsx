"use client"

import { useState, useRef, useEffect } from "react"

interface ContactProps {
  language: "en" | "es"
}

export default function Contact({ language }: ContactProps) {
  const formColRef = useRef<HTMLDivElement>(null)
  const [formHeight, setFormHeight] = useState<number | null>(null)

  useEffect(() => {
    const el = formColRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setFormHeight(el.offsetHeight))
    ro.observe(el)
    setFormHeight(el.offsetHeight)
    return () => ro.disconnect()
  }, [])

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipo: "",
    mensaje: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Título */}
        <h2 className="text-[#212f35] text-6xl md:text-8xl lg:text-[120px] font-normal tracking-tight text-center font-[family-name:var(--font-geist-sans)] mb-16">
          CONTACTANOS
        </h2>

        {/* 50/50 Layout - imagen misma altura que formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Imagen izquierda - altura = formulario, recorte 70px arriba */}
          <div
            className="relative w-full overflow-hidden"
            style={formHeight != null ? { height: formHeight } : { minHeight: 440 }}
          >
            <img
              src="/images/arquis.png"
              alt="Arquitectos TRAZO"
              className="w-full object-cover"
              style={{
                height: formHeight != null ? formHeight + 90 : "calc(100% + 90px)",
                marginTop: -90,
                objectPosition: "center top",
              }}
            />
          </div>

          {/* Formulario derecha */}
          <div ref={formColRef} className="flex flex-col justify-center">
            <h3 className="text-[#212f35] text-2xl md:text-3xl font-light mb-3 font-[family-name:var(--font-geist-sans)]">
              ¿Tenés un proyecto en mente?
            </h3>
            <p className="text-[#666] text-base mb-8 font-[family-name:var(--font-geist-sans)]">
              Completá el formulario y nos pondremos en contacto a la brevedad.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nombre y Email en fila */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-[#ccc] focus:border-[#b4a66d] focus:outline-none transition-colors text-[#212f35] placeholder-[#999] font-[family-name:var(--font-geist-sans)]"
                    placeholder="Nombre *"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-[#ccc] focus:border-[#b4a66d] focus:outline-none transition-colors text-[#212f35] placeholder-[#999] font-[family-name:var(--font-geist-sans)]"
                    placeholder="Email *"
                  />
                </div>
              </div>

              {/* Teléfono y Tipo en fila */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-[#ccc] focus:border-[#b4a66d] focus:outline-none transition-colors text-[#212f35] placeholder-[#999] font-[family-name:var(--font-geist-sans)]"
                    placeholder="Teléfono"
                  />
                </div>
                <div>
                  <select
                    id="tipo"
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-[#ccc] focus:border-[#b4a66d] focus:outline-none transition-colors text-[#212f35] font-[family-name:var(--font-geist-sans)] appearance-none cursor-pointer"
                    style={{ color: formData.tipo ? '#212f35' : '#999' }}
                  >
                    <option value="" disabled>Tipo de consulta</option>
                    <option value="proyecto">Proyecto nuevo</option>
                    <option value="remodelacion">Remodelación</option>
                    <option value="interiorismo">Interiorismo</option>
                    <option value="asesoria">Asesoría</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-0 py-3 bg-transparent border-b border-[#ccc] focus:border-[#b4a66d] focus:outline-none transition-colors resize-none text-[#212f35] placeholder-[#999] font-[family-name:var(--font-geist-sans)]"
                  placeholder="Mensaje *"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-4 bg-[#212f35] text-white py-4 px-10 font-light tracking-wider hover:bg-[#b4a66d] transition-colors duration-300 font-[family-name:var(--font-geist-sans)]"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
