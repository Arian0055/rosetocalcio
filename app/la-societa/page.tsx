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

export default function LaSocietaPage() {
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
            <span>LA SOCIETÀ</span>
          </div>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-light text-[#1e3c72] mb-12 text-center">La Società</h1>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-1 text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2 shadow-lg">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/Logo.png"
                        alt="Roseto Calcio Logo"
                        fill
                        className="object-contain"
                        sizes="96px"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="prose prose-lg text-gray-600 space-y-6">
                    <p>
                      La società <strong>AS Roseto Calcio</strong> è organizzata come{" "}
                      <strong>"società di puro settore"</strong> e quindi necessariamente rivolta allo sviluppo e
                      all'avviamento allo sport dei giovani dai 6 ai 16 anni.
                    </p>
                    <p>
                      Al termine di ogni anno o dell'intero ciclo di formazione i giovani sono completamente liberi
                      nella scelta dell'eventuale proseguimento della loro carriera sportiva.
                    </p>
                    <p>
                      Fiorente è l'attività di <strong>Scuola Calcio</strong> che conta ben{" "}
                      <strong>300 iscritti</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Photo Section */}
              <div className="mb-12">
                <div className="w-full max-w-4xl mx-auto h-96 bg-white rounded-lg overflow-hidden shadow-lg relative">
                  <Image
                    src="/images/organico_scuola_calcio.jpeg"
                    alt="Organico Scuola Calcio ASD Roseto"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              </div>

              {/* Staff Section */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8">
                <h2 className="text-2xl font-light text-[#1e3c72] mb-8 text-center">Staff Tecnico</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
                  <div>
                    <h3 className="font-semibold text-[#1e3c72] mb-3">DIRIGENZA</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>Presidente: CAMILLO CERASI</li>
                      <li>Vice-Presidente: REPETTO MASSIMO</li>
                      <li>Segretario: FERRETTI GIUSEPPE</li>
                    </ul>

                    <h3 className="font-semibold text-[#1e3c72] mb-3 mt-6">CONSIGLIERI</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>MARCELLI GIUSEPPE</li>
                      <li>CARLO PAVONE</li>
                      <li>DE SANTE GUERINO</li>
                      <li>NICOLA LEGGE</li>
                    </ul>

                    <h3 className="font-semibold text-[#1e3c72] mb-3 mt-6">DIRIGENTI UFFICIALI</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>ADRIANO RECANATINI</li>
                      <li>ARRIGHETTI SANDRO</li>
                      <li>DE CARLO ANDREA</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1e3c72] mb-3">TECNICI</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>MARINI IRMO - Responsabile attività di base</li>
                      <li>DI NICOLANTONIO LUIGI - Responsabile agonistica</li>
                      <li>DI NICOLANTONIO LUIGI - Direttore Tecnico squadra Allievi</li>
                      <li>TALAMONTI FRANCO - Allenatore squadra Allievi Provinciali</li>
                      <li>DI MARTINO FABRIZIO - Direttore Tecnico squadra Giovanissimi</li>
                      <li>DE SIMONE RODOLFO - Allenatore squadra Giovanissimi</li>
                      <li>MARINI GIANLUIGI - Allenatore degli esordienti</li>
                      <li>MARINI GIANMARIO - Allenatore degli esordienti</li>
                    </ul>

                    <h3 className="font-semibold text-[#1e3c72] mb-3 mt-6">ALLENATORI PORTIERI</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>CHRISTIAN DE SCHRYVER</li>
                      <li>FABIO CERASI</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1e3c72] mb-3">ISTRUTTORI SCUOLA CALCIO</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>PAGLIAROLI LUANA</li>
                      <li>NARDINOCCHI BARBARA</li>
                      <li>CIRIOLO MARCO</li>
                      <li>BONADUCE MARCO</li>
                      <li>RECINELLA GIANLUCA</li>
                    </ul>

                    <h3 className="font-semibold text-[#1e3c72] mb-3 mt-6">ALTRI RUOLI</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>MATTIOLI ROSA - Coordinatrice Coppa Spiagge d'Abruzzo</li>
                      <li>PIETRINFERNI VIRGINIA - Magazziniere</li>
                      <li>DE CARLO ANDREA - Custode</li>
                      <li>MARILENA PALUMBI - Consulente Marketing</li>
                      <li>MAIORANI GIANNI - Consulente Informatico</li>
                    </ul>
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
