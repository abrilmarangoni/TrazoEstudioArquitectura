"use client"

interface FooterProps {
  language: "en" | "es"
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="section-container text-center">
        <img 
          src="/images/logo-trazo.png" 
          alt="Tito + Rothenberger Arquitectura" 
          className="h-20 md:h-32 w-auto mx-auto"
        />
      </div>
    </footer>
  )
}
