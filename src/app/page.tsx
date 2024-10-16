'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DocumentTextIcon,
  PresentationChartBarIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function LandingPage() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900 text-white transition-colors duration-500">
      {/* Header */}
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-gray-900/80 backdrop-blur-md z-50 transition-colors duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link className="flex items-center justify-center" href="#">
            <DocumentTextIcon className="h-6 w-6 text-blue-400" />
            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              abcxyz
            </span>
          </Link>
        </motion.div>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {["Features", "Pricing", "About", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                href="#"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="ml-4 text-gray-300 hover:text-white"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </motion.header>

      {/* Main Section */}
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Transform Your Content with
                  <motion.span
                    className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  >
                    AI-Powered Insights
                  </motion.span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Generate reports, presentations, and quizzes from various media
                  sources with our cutting-edge AI platform.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                  Get Started <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Animated How It Works Section */}
        <section
          ref={targetRef}
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-800/50 backdrop-blur-lg transition-colors duration-500"
        >
          <motion.div style={{ opacity, scale }} className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              How It Works
            </h2>
            <Tabs defaultValue="reports" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 text-gray-300">
                <TabsTrigger value="reports" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Reports
                </TabsTrigger>
                <TabsTrigger value="presentations" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Presentations
                </TabsTrigger>
                <TabsTrigger value="quizzes" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Quizzes
                </TabsTrigger>
              </TabsList>
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="reports" className="mt-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="flex flex-col items-center space-y-4"
                    >
                      <DocumentTextIcon className="h-12 w-12 text-blue-400" />
                      <h3 className="text-xl font-bold">Generate Comprehensive Reports</h3>
                      <p className="text-center text-gray-300">
                        Upload your documents or provide links, and our AI will create detailed
                        reports in minutes.
                      </p>
                    </motion.div>
                  </TabsContent>
                  <TabsContent value="presentations" className="mt-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="flex flex-col items-center space-y-4"
                    >
                      <PresentationChartBarIcon className="h-12 w-12 text-blue-400" />
                      <h3 className="text-xl font-bold">Create Stunning Presentations</h3>
                      <p className="text-center text-gray-300">
                        Turn media files into captivating slideshows with just a few clicks.
                      </p>
                    </motion.div>
                  </TabsContent>
                  <TabsContent value="quizzes" className="mt-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="flex flex-col items-center space-y-4"
                    >
                      <QuestionMarkCircleIcon className="h-12 w-12 text-blue-400" />
                      <h3 className="text-xl font-bold">Auto-Generate Quizzes</h3>
                      <p className="text-center text-gray-300">
                        Our AI analyzes your media and generates custom quizzes to test knowledge.
                      </p>
                    </motion.div>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-900 via-blue-900 to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Ready to Elevate Your Content?
                </h2>
                <p className="mx-auto max-w-2xl text-gray-300 mt-2">
                  Sign up today and see how our platform can transform your workflow.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                  Get Started Now <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
