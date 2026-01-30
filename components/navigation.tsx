"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  language: "en" | "es"
  onLanguageChange: (lang: "en" | "es") => void
}

const translations = {
  en: {
    biography: "Biography",
    concerts: "Concerts",
    gallery: "Gallery",
    contact: "Contact",
  },
  es: {
    biography: "Biografía",
    concerts: "Conciertos",
    gallery: "Galería",
    contact: "Contacto",
  },
}

export default function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsHeroSection(heroBottom > 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinkColor = isHeroSection ? "text-white" : "text-charcoal"
  const navLinkHoverColor = isHeroSection ? "hover:text-gold" : "hover:text-gold"
  const logoColor = isHeroSection ? "text-white" : "text-charcoal"
  const menuButtonColor = isHeroSection ? "text-white" : "text-charcoal"
  const languageButtonActiveColor = "text-gold"
  const languageButtonInactiveColor = isHeroSection
    ? "text-white/60 hover:text-white"
    : "text-charcoal/60 hover:text-charcoal"
  const navBgColor = isHeroSection ? "bg-transparent" : "bg-white"
  const borderColor = isHeroSection ? "border-transparent" : "border-gray-100"
  const mobileMenuBg = isHeroSection ? "bg-charcoal/95 backdrop-blur-sm" : "bg-cream/95"
  const mobileLinkColor = isHeroSection ? "text-white" : "text-charcoal"

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed w-full ${navBgColor} ${isHeroSection ? "" : "backdrop-blur-sm"} z-50 border-b ${borderColor} transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Language Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onLanguageChange("en")}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isHeroSection 
                    ? (language === "en" ? "text-white" : "text-white/60 hover:text-white")
                    : (language === "en" ? "text-charcoal" : "text-charcoal/60 hover:text-charcoal")
                }`}
              >
                EN
              </button>
              <span className="text-[#b4a66d]">|</span>
              <button
                onClick={() => onLanguageChange("es")}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isHeroSection 
                    ? (language === "es" ? "text-white" : "text-white/60 hover:text-white")
                    : (language === "es" ? "text-charcoal" : "text-charcoal/60 hover:text-charcoal")
                }`}
              >
                ES
              </button>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <img 
                src="/images/logo-trazo.png" 
                alt="Trazo - Tito + Rothenberger Arquitectura" 
                className={`h-10 w-auto transition-opacity duration-300 ${isHeroSection ? "brightness-0 invert" : ""}`}
              />
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${menuButtonColor} transition-colors duration-300 z-[60]`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[998]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Panel Menu - fuera del nav para que funcione en toda la página */}
      <div
        className={`fixed top-0 right-0 h-screen w-[30%] min-w-[320px] bg-[#212f35]/95 backdrop-blur-md z-[999] transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-white/70 hover:text-[#b4a66d] transition-colors"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        {/* Menu content */}
        <div className="flex flex-col justify-between h-full py-24 px-16">
          {/* Navigation links */}
          <nav className="space-y-8 mt-8">
            <a
              href="#hero"
              onClick={() => setIsOpen(false)}
              className="block text-white/90 text-3xl font-extralight tracking-wide hover:text-[#b4a66d] transition-all duration-300 font-[family-name:var(--font-geist-sans)]"
            >
              Inicio
            </a>
            <a
              href="#gallery"
              onClick={() => setIsOpen(false)}
              className="block text-white/90 text-3xl font-extralight tracking-wide hover:text-[#b4a66d] transition-all duration-300 font-[family-name:var(--font-geist-sans)]"
            >
              Proyectos
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block text-white/90 text-3xl font-extralight tracking-wide hover:text-[#b4a66d] transition-all duration-300 font-[family-name:var(--font-geist-sans)]"
            >
              Servicios
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-white/90 text-3xl font-extralight tracking-wide hover:text-[#b4a66d] transition-all duration-300 font-[family-name:var(--font-geist-sans)]"
            >
              Contacto
            </a>
          </nav>

          {/* Bottom section */}
          <div className="space-y-6">
            {/* Divider */}
            <div className="w-12 h-[1px] bg-[#b4a66d]" />
            
            {/* Contact info */}
            <div className="space-y-3">
              <a href="mailto:info@trazoarquitectura.com" className="block text-white/50 text-sm hover:text-[#b4a66d] transition-colors font-[family-name:var(--font-geist-sans)]">
                info@trazoarquitectura.com
              </a>
              <a href="https://instagram.com/trazoarquitectura" target="_blank" rel="noopener noreferrer" className="block text-white/50 text-sm hover:text-[#b4a66d] transition-colors font-[family-name:var(--font-geist-sans)]">
                @trazoarquitectura
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
