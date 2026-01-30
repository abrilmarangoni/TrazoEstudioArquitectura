"use client"

interface FooterProps {
  language: "en" | "es"
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
        <img 
          src="/images/logo-trazo.png" 
          alt="Tito + Rothenberger Arquitectura" 
          className="h-20 md:h-32 w-auto mx-auto"
        />
      </div>
    </footer>
  )
}
