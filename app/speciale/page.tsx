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

export default function SpecialePage() {
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
            <span>SPECIALE</span>
          </div>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-light text-[#1e3c72] mb-12 text-center">Speciale</h1>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 border-l-4 border-[#1e3c72] mb-12">
                <h2 className="text-2xl font-light text-[#1e3c72] mb-6">Caro papà.</h2>

                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Lo sai che quasi mi mettevo a piangere dalla rabbia quando ti sei arrampicato sulla rete di
                    recinzione, urlando contro l'arbitro? Io non ti avevo mai visto così arrabbiato!
                  </p>
                  <p>
                    Papà, capisci, io voglio solo giocare, ti prego, lasciamela questa gioia, non darmi suggerimenti che
                    mi fanno solo innervosire...
                  </p>
                  <p>
                    E ascoltami papà: al termine della partita, non venire nello spogliatoio per vedere se faccio bene
                    la doccia o se so vestirmi. Devo imparare da solo!
                  </p>
                  <p>
                    Non prenderla, papà, se ti ho detto queste cose, lo sai che ti voglio tanto bene... ma adesso è già
                    tardi. Devo correre al campo per l'allenamento!
                  </p>
                </div>
              </div>

              {/* Hall of Fame Section */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8">
                <h2 className="text-2xl font-light text-[#1e3c72] mb-6 text-center">Albo d'oro</h2>
                <p className="text-gray-600 mb-4 text-center">Scarica l'albo d'oro delle passate edizioni.</p>

                <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500">Hall of Fame Table</span>
                </div>

                <div className="text-center">
                  <Link
                    href="#"
                    className="inline-block bg-gradient-to-r from-[#1e3c72] to-blue-600 text-white px-6 py-2 rounded hover:from-blue-600 hover:to-[#1e3c72] transition-all duration-300"
                  >
                    Download Albo d'oro
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
