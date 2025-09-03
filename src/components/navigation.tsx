"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  onRegisterClick: () => void
}

export default function Navigation({ onRegisterClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const openRegistration = () => {
    onRegisterClick()
    setIsOpen(false) // Close mobile menu if open
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl text-primary cursor-pointer">ReidXtreme 3.0</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("introduction")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Introduction
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToSection("prizes")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Prizes
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
            <Button size="sm" className="ml-4 cursor-pointer " onClick={openRegistration}>
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 cursor-pointer">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("introduction")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              >
                Introduction
              </button>
              <button
                onClick={() => scrollToSection("timeline")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              >
                Timeline
              </button>
              <button
                onClick={() => scrollToSection("prizes")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              >
                Prizes
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              >
                Contact
              </button>
              <Button size="sm" className="w-fit mt-4 cursor-pointer" onClick={openRegistration}>
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
