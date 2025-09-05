"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Trophy, Users, Mail, Globe, Facebook, Linkedin, Instagram, Twitter } from "lucide-react"
import Navigation from "@/components/navigation"
import RegistrationModal from "@/components/registration-modal"

export default function ReidXtremePage() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation onRegisterClick={() => setIsRegistrationOpen(true)} />

      {/* Hero Section */}
      <section id="home" className="relative bg-primary text-primary-foreground py-20 px-4 pt-32">
        <div className="absolute inset-0 bg-[url('/tech-grid-pattern.png')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">ReidXtreme 3.0</h1>
          <p className="text-xl md:text-2xl mb-4 text-balance">Inter-University Competitive Programming Hackathon</p>
          <div className="flex items-center justify-center gap-4 mb-8 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>October 20–21, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>24 Hours</span>
            </div>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-3 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup"
            onClick={() => setIsRegistrationOpen(true)}
          >
            Register Now
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About ReidXtreme 3.0</h2>
          <Card className="p-8">
            <CardContent className="text-lg leading-relaxed space-y-4">
              <p>
                ReidXtreme 3.0 is an Inter-University Competitive Programming Hackathon organized by the
                <strong className="text-primary"> IEEE Student Branch of UCSC</strong> in collaboration with the
                <strong className="text-primary"> ACM Student Chapter of UCSC</strong>.
              </p>
              <p>
                This hackathon series aims to build up the competitive programming skills of undergraduates, empowering
                them to successfully compete in global challenges such as IEEEXtreme.
              </p>
              <p>
                The competition not only tests problem-solving and algorithmic thinking but also encourages teamwork,
                endurance, and innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Event Timeline</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Day 1 – October 20, 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Opening Ceremony</span>
                  <Badge variant="outline">9:00 AM</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Hackathon Begins</span>
                  <Badge variant="outline">10:00 AM</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Mentoring & Guidance</span>
                  <Badge variant="outline">12:00 PM</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Day 2 – October 21, 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Hackathon Ends</span>
                  <Badge variant="outline">10:00 AM</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Evaluation & Presentations</span>
                  <Badge variant="outline">11:00 AM</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Awards & Closing</span>
                  <Badge variant="outline">2:00 PM</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Prizes & Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Champion */}
            <Card className="border-2 border-secondaryote transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-6xl">🥇</div>
                <CardTitle className="text-secondary">Champion Team</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="text-2xl font-bold text-secondary">LKR 100,000</div>
                <div className="text-muted-foreground">+ Trophy + Certificates</div>
              </CardContent>
            </Card>

            {/* 1st Runner-up */}
            <Card className="border-2 border-primary transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-6xl">🥈</div>
                <CardTitle className="text-primary">1st Runner-up</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">LKR 50,000</div>
                <div className="text-muted-foreground">+ Certificates</div>
              </CardContent>
            </Card>

            {/* 2nd Runner-up */}
            <Card className="border-2 border-primary transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-6xl">🥉</div>
                <CardTitle>2nd Runner-up</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="text-2xl font-bold">LKR 25,000</div>
                <div className="text-muted-foreground">+ Certificates</div>
              </CardContent>
            </Card>

            {/* Special Recognitions */}
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  Special Recognitions
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-center gap-4 ">
                <Badge variant="secondary" className="text-lg py-2 px-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup">
                  🎖️ Best Female Team
                </Badge>
                <Badge variant="secondary" className="text-lg py-2 px-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup">
                  🎖️ Best Newcomer
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup">
              <CardHeader>
                <CardTitle className="text-lg">Who can participate?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Open to undergraduates from Sri Lankan universities.</p>
              </CardContent>
            </Card>

            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup">
              <CardHeader>
                <CardTitle className="text-lg">How many per team?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Teams of up to 3 members.</p>
              </CardContent>
            </Card>

            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup">
              <CardHeader>
                <CardTitle className="text-lg">Is it online or onsite?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Onsite at UCSC with hybrid options.</p>
              </CardContent>
            </Card>

            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup">
              <CardHeader>
                <CardTitle className="text-lg">Do I need prior experience?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>No, all skill levels are welcome.</p>
              </CardContent>
            </Card>

            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup">
              <CardHeader>
                <CardTitle className="text-lg">What is the duration?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>24 hours continuous hackathon.</p>
              </CardContent>
            </Card>

            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-popup">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Team Formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>You can register individually or as a team.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:ieee@ucsc.cmb.ac.lk" className="hover:text-accent">
                    ieee@ucsc.cmb.ac.lk
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <a href="https://ieee.ucsc.lk/reidxtreme" className="hover:text-accent">
                    ieee.ucsc.lk/reidxtreme
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Facebook className="h-5 w-5 hover:text-accent cursor-pointer" />
                <Linkedin className="h-5 w-5 hover:text-accent cursor-pointer" />
                <Instagram className="h-5 w-5 hover:text-accent cursor-pointer" />
                <Twitter className="h-5 w-5 hover:text-accent cursor-pointer" />
              </div>
            </div>

            {/* Credits */}
            <div>
              <h3 className="text-lg font-bold mb-4">Organized By</h3>
              <p className="text-sm leading-relaxed">
                IEEE Student Branch of UCSC in collaboration with ACM Student Chapter of UCSC
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm">
            <p>© 2025 ReidXtreme 3.0. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

       <RegistrationModal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} /> 
    </div>
  )
}
