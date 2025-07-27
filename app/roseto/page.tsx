"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

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

export default function RosetoPage() {
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
            <Link href="/speciale" className="hover:text-[#1e3c72]">
              SPECIALE
            </Link>
            <span>/</span>
            <span>ROSETO</span>
          </div>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-light text-[#1e3c72] mb-12 text-center">Roseto</h1>

              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="w-80 h-80 mx-auto bg-white rounded-2xl overflow-hidden shadow-xl">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/fotoroseto1.jpg"
                        alt="Roseto Beach"
                        fill
                        className="object-cover"
                        sizes="320px"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Località turistica ambita sin dai primi anni del secolo per le sue caratteristiche naturali. Posta
                    ai piedi di una verdissima collina che lambita dal mare con la sua spiaggia naturale crea uno
                    spettacolo naturale denso di sfumature di colore e profumi di rarissima bellezza.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Roseto offre un lungomare per passeggiare, fare moto o rilassarsi ma si può anche pedalare nei
                    controviali alberati, o rinfrancarsi nei diversi giardini pubblici di cui dispone.
                  </p>

                  <div className="text-center">
                    <Link
                      href="http://www.comune.roseto.te.it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-[#1e3c72] to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-[#1e3c72] transition-all duration-300 font-medium"
                    >
                      Clicca qui per il sito istituzione di ROSETO
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
