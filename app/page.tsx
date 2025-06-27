"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-[#1e3c72] via-blue-600 to-blue-800"></div>
          </div>
        </motion.div>

        <div className="relative z-10 h-full flex items-center justify-center pt-20">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <FloatingElement>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-wide">Benvenuti su</h1>
              </FloatingElement>
              <FloatingElement delay={0.5}>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-yellow-300">ASD ROSETO CALCIO</h2>
              </FloatingElement>
            </motion.div>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg md:text-xl mb-8 leading-relaxed font-light"
            >
              ... dove da piu' di 20 anni, si celebra una delle piu' prestigiose manifestazioni giovanili di calcio italiane... SPIAGGE D'ABRUZZO CUP
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                size="lg"
                className="bg-white text-[#1e3c72] hover:bg-yellow-300 hover:text-[#1e3c72] px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                SCOPRI DI PIÙ
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3c72] mb-8">La Società</h2>
            <div className="text-gray-600 leading-relaxed space-y-6">
              <p>
                La società <strong>AS Roseto Calcio</strong> è organizzata come società di puro settore, rivolta allo
                sviluppo e all'avviamento allo sport dei giovani dai 6 ai 16 anni.
              </p>
              <p>
                Fiorente è l'attività di <strong>Scuola Calcio</strong> che conta ben <strong>300 iscritti</strong>.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Tournament Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-[#1e3c72] mb-4">Il Torneo</h2>
              <p className="text-xl text-gray-600">Spiagge d'Abruzzo Cup</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg font-medium text-[#1e3c72]">
                    La più grande manifestazione a livello dilettantistico in Italia
                  </p>
                  <ul className="space-y-2">
                    <li>• 19ª Edizione</li>
                    <li>• 10 Nazioni - Tutte le regioni d'Italia</li>
                    <li>• Premio del Presidente della Repubblica</li>
                    <li>• 150 squadre e 3000 atleti</li>
                  </ul>
                </div>
              </div>

              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Tournament Image</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Sponsors Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-[#1e3c72] to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">Partnership</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {["Roseto Calcio", "Nike Football", "Team Wear"].map((sponsor, index) => (
              <motion.div
                key={sponsor}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center h-24 border border-white/20"
              >
                <span className="text-white font-medium text-sm">{sponsor}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#1e3c72] to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">RC</span>
              </div>
              <span className="text-lg font-medium">ASD Roseto Calcio</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Via Mazzola snc, 64026 Roseto Degli Abruzzi (TE) | info@rosetocalcio.it
            </p>
            <p className="text-gray-400 text-sm mb-2">© 2024 ASD Roseto Calcio. All rights reserved.</p>
            <p className="text-gray-500 text-xs">
              Developed by{" "}
                <a href="https://parlanticonsulting.agency" className="text-blue-400 hover:text-blue-300 transition-colors underline">
                  Parlanti Consulting
                </a>

            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
