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
                {/* Google Maps */}
                <div>
                  <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.7948344881984!2d14.019764440341998!3d42.66570291585754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331968e43111df1%3A0x525fb649634b35e!2sA.S.D.%20Roseto!5e0!3m2!1sit!2sit!4v1753574080217!5m2!1sit!2sit" 
                      width="100%" 
                      height="100%" 
                      style={{border: 0}} 
                      allowFullScreen={true}
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="A.S.D. Roseto Location"
                    />
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
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
