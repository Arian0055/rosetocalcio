"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const ImageModal = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onPrevious, 
  onNext 
}: {
  isOpen: boolean
  onClose: () => void
  images: string[]
  currentIndex: number
  onPrevious: () => void
  onNext: () => void
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X size={32} />
        </button>
        
        <button
          onClick={onPrevious}
          className="absolute left-4 text-white hover:text-gray-300 z-10"
        >
          <ChevronLeft size={32} />
        </button>
        
        <button
          onClick={onNext}
          className="absolute right-4 text-white hover:text-gray-300 z-10"
        >
          <ChevronRight size={32} />
        </button>
        
        <div className="relative w-full h-full max-w-3xl max-h-[80vh]">
          <Image
            src={images[currentIndex]}
            alt={`Tournament photo ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="90vw"
          />
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

export default function IlTorneoPage() {
  const images = [
    "/images/TORNEO-2017-e1492799561833.jpg",
    "/images/copertina-2016.jpg",
    "/images/copertina-2015.jpg",
    "/images/2014_18.jpg",
    "/images/TORNEO14A-744x1024.jpg",
    "/images/TORNEO14B-744x1024.jpg",
    "/images/fronte_2013.jpg",
    "/images/retro_2013.jpg",
    "/images/fronte_2012.jpg",
    "/images/retro_2012.jpg",
    "/images/TORNEO12A-722x1024.jpg",
    "/images/TORNEO12B-718x1024.jpg",
    "/images/TORNEO11A-744x1024.jpg",
    "/images/TORNEO11B-744x1024.jpg",
    "/images/TORNEO10A-737x1024.jpg",
    "/images/TORNEO10B-722x1024.jpg",
    "/images/TORNEO9A.jpg",
    "/images/TORNEO7A-732x1024.jpg",
    "/images/TORNEO7B-731x1024.jpg",
    "/images/TORNEO6A-723x1024.jpg",
    "/images/TORNEO6B-726x1024.jpg",
    "/images/TORNEO5A-702x1024.jpg",
    "/images/TORNEO5B-739x1024.jpg",
    "/images/TORNEO4A.jpg",
    "/images/TORNEO3A-718x1024.jpg",
    "/images/TORNEO3B-717x1024.jpg",
    "/images/TORNEO2A-725x1024.jpg",
    "/images/TORNEO2B-725x1024.jpg",
    "/images/scansione0024-744x1024.jpg",
    "/images/scansione00251-744x1024.jpg"
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 px-4 py-8">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#1e3c72]">
              HOME
            </Link>
            <span>/</span>
            <span>IL TORNEO</span>
          </div>

          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl font-light text-[#1e3c72] mb-12 text-center">Il Torneo</h1>

              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-lg font-medium text-[#1e3c72] mb-4">La Storia</h3>
                  <div className="grid grid-cols-4 gap-1 max-w-md">
                    {images.slice(0, 8).map((image, index) => (
                      <div 
                        key={index} 
                        className="aspect-square bg-gray-100 rounded overflow-hidden relative group cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openModal(index)}
                      >
                        <Image
                          src={image}
                          alt={`Tournament photo ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => openModal(0)}
                    className="mt-2 text-sm text-[#1e3c72] hover:underline"
                  >
                    Vedi tutto ({images.length})
                  </button>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-[#1e3c72] mb-4">
                    Torneo Internazionale "Spiagge d'Abruzzo Cup"
                  </h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      Il Torneo Internazionale "Spiagge d'Abruzzo Cup", riservato esclusivamente alle categorie
                      giovanili, nasce nel 1997 con il nome di "Città di Roseto".
                    </p>
                    <p>L'edizione di quest'anno (la 19ª) si svolgerà dal 30 aprile al 3 maggio 2015.</p>
                    <p>
                      Complessivamente verranno giocate 292 partite in 14 campi in erba e 6 campi ridotti. Il torneo è
                      approvato F.I.G.C. – U.E.F.A. e F.I.F.A.
                    </p>
                  </div>
                </div>
              </div>

              {/* Age Categories */}
              <div className="bg-gradient-to-r from-[#1e3c72] to-blue-600 text-white rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-light mb-6 text-center">Categorie</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li>
                      <span className="text-yellow-300 font-semibold">ALLIEVI:</span> 15/16 anni
                    </li>
                    <li>
                      <span className="text-yellow-300 font-semibold">GIOVANISSIMI:</span> 13/14 anni
                    </li>
                    <li>
                      <span className="text-yellow-300 font-semibold">ESORDIENTI:</span> 11/12 anni
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li>
                      <span className="text-yellow-300 font-semibold">PULCINI:</span> 9/10 anni
                    </li>
                    <li>
                      <span className="text-yellow-300 font-semibold">PRIMI CALCI:</span> 9/10 anni
                    </li>
                    <li>
                      <span className="text-yellow-300 font-semibold">PICCOLI AMICI:</span> 6/8 anni
                    </li>
                  </ul>
                </div>
              </div>

              {/* Awards */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8">
                <h2 className="text-2xl font-light text-[#1e3c72] mb-6 text-center">Riconoscimenti</h2>
                <p className="text-gray-600 mb-6 text-center">
                  Per il 13° anno consecutivo alla manifestazione è stata riconosciuta una Coppa d'Argento del
                  Presidente della Repubblica Italiana.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Rosa d’oro opera dello scultore rosetano Luciano Astolfi,premio Torneo Internazionale.", image: "/images/coppa1.png" },
                    { title: "Coppa d’argento del “Presidente della Repubblica” al torneo Spiagge d’Abruzzo Cup ", image: "/images/coppa21.png" },
                    { title: "Diploma di merito della F.I.G.C. per migliore scuola calcio stagione 2000/2001", image: "/images/coppa3.png" }
                  ].map((award) => (
                    <div key={award.title} className="text-center">
                      <div className="w-full h-72 bg-white rounded-lg overflow-hidden shadow-lg mb-4 relative">
                        <Image
                          src={award.image}
                          alt={award.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-[#1e3c72] mt-2">{award.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
        currentIndex={currentImageIndex}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </div>
  )
}
