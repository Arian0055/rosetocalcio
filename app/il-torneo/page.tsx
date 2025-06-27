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

export default function IlTorneoPage() {
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
                  <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-gray-500">Stadium Image</span>
                  </div>
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
                  {["Award 1", "Award 2", "Award 3"].map((award, index) => (
                    <div key={award} className="text-center">
                      <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-gray-500">{award}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
