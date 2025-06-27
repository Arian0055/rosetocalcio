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

export default function LaStoriaPage() {
  const years = [
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
    "2003",
    "2002",
    "2001",
    "2000",
    "1999",
    "1998",
  ]

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
            <Link href="/il-torneo" className="hover:text-[#1e3c72]">
              IL TORNEO
            </Link>
            <span>/</span>
            <span>LA STORIA</span>
          </div>

          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl font-light text-[#1e3c72] mb-12 text-center">La Storia</h1>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {years.map((year, index) => (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="aspect-square bg-gradient-to-br from-[#1e3c72] to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg hover:scale-105 transition-transform cursor-pointer shadow-lg border border-white/20"
                  >
                    {year}
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 text-lg">
                  Oltre 20 anni di storia del Torneo Internazionale Spiagge d'Abruzzo Cup
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
