"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    registerNumber: "",
    email: "",
    year: "",
    contactNumber: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Registration data:", formData)
    // Reset form and close modal
    setFormData({
      name: "",
      registerNumber: "",
      email: "",
      year: "",
      contactNumber: "",
    })
    onClose()
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Register for ReidXtreme 3.0</DialogTitle>
          <DialogDescription>
            Fill in your details to register for the Inter-University Competitive Programming Hackathon
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="registerNumber">Register Number</Label>
            <Input
              id="registerNumber"
              type="text"
              placeholder="Enter your register number"
              value={formData.registerNumber}
              onChange={(e) => handleInputChange("registerNumber", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">University Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your university email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="year">Academic Year</Label>
            <Select value={formData.year} onValueChange={(value: string) => handleInputChange("year", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your academic year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first-year">First Year</SelectItem>
                <SelectItem value="second-year">Second Year</SelectItem>
                <SelectItem value="third-year">Third Year</SelectItem>
                <SelectItem value="fourth-year">Fourth Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactNumber">Contact Number</Label>
            <Input
              id="contactNumber"
              type="tel"
              placeholder="Enter your contact number"
              value={formData.contactNumber}
              onChange={(e) => handleInputChange("contactNumber", e.target.value)}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 cursor-pointer">
              Register Now
            </Button>
            <Button type="button" className="cursor-pointer" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
