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
                language === "en" ? "text-gold" : `${logoColor} opacity-60 hover:opacity-100`
              }`}
            >
              EN
            </button>
            <span className={`${logoColor} opacity-40`}>|</span>
            <button
              onClick={() => onLanguageChange("es")}
              className={`text-sm font-medium transition-colors duration-300 ${
                language === "es" ? "text-gold" : `${logoColor} opacity-60 hover:opacity-100`
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
            className={`${menuButtonColor} transition-colors duration-300`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className={`absolute top-16 right-4 w-48 py-4 px-4 rounded-lg shadow-lg border ${borderColor} ${mobileMenuBg} transition-all duration-300`}
          >
            <a
              href="#biography"
              onClick={() => setIsOpen(false)}
              className={`block text-sm ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-2`}
            >
              {t.biography}
            </a>
            <a
              href="#concerts"
              onClick={() => setIsOpen(false)}
              className={`block text-sm ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-2`}
            >
              {t.concerts}
            </a>
            <a
              href="#gallery"
              onClick={() => setIsOpen(false)}
              className={`block text-sm ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-2`}
            >
              {t.gallery}
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`block text-sm ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-2`}
            >
              {t.contact}
            </a>
            
            {/* Language Selector */}
            <div className={`flex gap-3 pt-3 mt-3 border-t ${borderColor}`}>
              {(["en", "es"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    onLanguageChange(lang)
                    setIsOpen(false)
                  }}
                  className={`text-xs font-medium transition-colors duration-300 ${
                    language === lang ? "text-gold" : `${mobileLinkColor} opacity-60 hover:opacity-100`
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
