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
                    Lo sai che quasi mi mettevo a piangere dalla rabbia quando ti sei arrampicato sulla rete di recinzione, urlando contro l'arbitro? Io non ti avevo mai visto così arrabbiato! Forse sarà anche vero che lui ha sbagliato, ma quante volte io ho fatto degli errori senza che tu mi dicessi niente……
                  </p>
                  <p>
                    Anche se ho perso la partita …..per colpa dell'arbitro….., come dici tu, mi sono divertito lo stesso. Ho ancora molte gare da giocare e sono sicuro che se non griderai più, l'arbitro sbaglierà di meno…
                  </p>
                  <p>
                    Papà, capisci, io voglio solo giocare, ti prego, lasciamela questa gioia, non darmi suggerimenti che mi fanno solo innervosire: …….tiraaaa!, …..passaaaaa!!!, …….buttalo giù!!! ….Mi hai sempre insegnato a rispettare tutti, anche l'arbitro e gli avversari, e di essere sempre educato…E se buttassero giù me?, quante parolacce diresti?
                  </p>
                  <p>
                    Un'altra cosa, papà :quando il mister mi sostituisce o non mi fa giocare, non arrabbiarti. Io mi diverto anche a vedere i miei amici stando seduto in panchina. Siamo in tanti ed è giusto fare giocare tutti.
                  </p>
                  <p>
                    E, per piacere, insegnami a pulire le scarpe da calcio. Non è bello che tu lo faccia al posto mio.
                  </p>
                  <p>
                    Scusami, papà, ma non dire alla mamma al ritorno della partita: "oggi ha vinto" o "ha perso": dille solo che mi sono divertito e basta: E poi non raccontare che ho vinto perché ha fatto un goal bellissimo. Ho battuto il pallone dentro la porta perché il mio amico mi ha fatto un bel passaggio, il mio portiere ha parato tutto, perché, insieme agli altri miei amici, ci siamo impegnati moltissimo: per questo abbiamo vinto.
                  </p>
                  <p>
                    E ascoltami papà: al termine della partita, non venire nello spogliatoio per vedere se faccio bene la doccia o se so vestirmi. Che importanza ha se mi metto la maglietta storta? Papà, devo imparare da solo! Sta sicuro che diventerò grande lo stesso anche se avrò la maglietta rovesciata.
                  </p>
                  <p>
                    E lascia portare a me il borsone: vedi? C'è stampato sopra il nome della mia squadra e mi fa piacere far vedere a tutti che gioco io a pallone.
                  </p>
                  <p>
                    Non prendertela, papà, se ti ho detto queste cose, lo sai che ti voglio tanto bene……ma adesso è già tardi. Devo correre al campo per l'allenamento: Se arrivo ultimo il mister non mi farà giocare, la prossima volta…Ciao!
                  </p>
                </div>
              </div>

              {/* Hall of Fame Section */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8">
                <h2 className="text-2xl font-light text-[#1e3c72] mb-6 text-center">Albo d'oro</h2>
                <p className="text-gray-600 mb-4 text-center">Scarica l'albo d'oro delle passate edizioni.</p>

                <div className="w-full h-64 bg-white rounded-lg overflow-hidden shadow-lg mb-4 relative">
                  <Image
                    src="/images/albo_oro.jpg"
                    alt="Albo d'oro - Hall of Fame"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="text-center">
                  <Link
                    href="/albo_d_-oro.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-[#1e3c72] to-blue-600 text-white px-6 py-2 rounded hover:from-blue-600 hover:to-[#1e3c72] transition-all duration-300"
                  >
                    Download Albo d'oro (PDF)
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
