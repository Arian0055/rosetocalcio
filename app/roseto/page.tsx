"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"

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
                  <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-blue-800">Roseto Beach</span>
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

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-[#1e3c72] p-4 rounded">
                    <p className="text-[#1e3c72] font-medium">
                      {"<<< "}
                      <Link href="#" className="hover:underline">
                        Clicca qui per il sito istituzione di ROSETO
                      </Link>
                      {" >>>"}
                    </p>
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
