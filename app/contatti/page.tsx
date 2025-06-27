"use client"

import type React from "react"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
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

export default function ContattiPage() {
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
            <span>CONTATTI</span>
          </div>

          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl font-light text-[#1e3c72] mb-12 text-center">Contatti</h1>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Map Placeholder */}
                <div>
                  <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Map</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-light text-[#1e3c72] mb-6">Informazioni di Contatto</h2>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1e3c72] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-white" size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Indirizzo:</h3>
                          <p className="text-gray-700">A.S. Roseto Calcio</p>
                          <p className="text-gray-700">Via Mazzola snc</p>
                          <p className="text-gray-700">64026 Roseto Degli Abruzzi (TE)</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1e3c72] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="text-white" size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Telefono:</h3>
                          <p className="text-gray-700">0858930789</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1e3c72] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="text-white" size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">E-mail:</h3>
                          <a href="mailto:info@rosetocalcio.it" className="text-blue-600 hover:underline">
                            info@rosetocalcio.it
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-light text-[#1e3c72] mb-4">Invia un Messaggio</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3c72]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3c72]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Messaggio</label>
                        <textarea
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3c72]"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#1e3c72] to-blue-600 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-[#1e3c72] transition-all duration-300"
                      >
                        Invia Messaggio
                      </button>
                    </form>
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
