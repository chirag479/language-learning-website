"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Globe,
  Users,
  Award,
  Play,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  CheckCircle,
  Clock,
  Target,
  Headphones,
  MessageSquare,
  PenTool,
  ArrowRight,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate authentication
    localStorage.setItem("user", JSON.stringify({ email, name: name || "User" }))
    window.location.href = "/dashboard"
  }

  const features = [
    {
      icon: Headphones,
      title: "Audio Lessons",
      description: "Learn pronunciation with native speakers and interactive audio exercises",
    },
    {
      icon: MessageSquare,
      title: "Conversation Practice",
      description: "Practice real conversations with AI tutors and language partners",
    },
    {
      icon: PenTool,
      title: "Writing Exercises",
      description: "Improve your writing skills with guided exercises and feedback",
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description: "AI-powered curriculum that adapts to your learning pace and goals",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Learn at your own pace with bite-sized lessons that fit your schedule",
    },
    {
      icon: Award,
      title: "Progress Tracking",
      description: "Track your progress with detailed analytics and achievement badges",
    },
  ]

  const languages = [
    {
      name: "Hindi",
      flag: "🇮🇳",
      description: "Learn the world's 4th most spoken language",
      difficulty: "Beginner Friendly",
      learners: "25K+",
    },
    {
      name: "English",
      flag: "🇺🇸",
      description: "Master the global language of business and communication",
      difficulty: "All Levels",
      learners: "50K+",
    },
    {
      name: "Spanish",
      flag: "🇪🇸",
      description: "Connect with over 500 million Spanish speakers worldwide",
      difficulty: "Beginner Friendly",
      learners: "30K+",
    },
  ]

  const stats = [
    { number: "100K+", label: "Active Learners" },
    { number: "150+", label: "Countries" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/langsphere-logo.png" alt="LangSphere Logo" width={40} height={40} />
              <div>
                <h1 className="text-2xl font-bold text-black">LangSphere</h1>
                <p className="text-xs text-gray-600">Language Learning Platform</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#languages"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                Languages
              </Link>
              <Link
                href="#pricing"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                Pricing
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => setIsSignUp(false)}
                className="text-gray-600 hover:text-blue-500"
              >
                Sign In
              </Button>
              <Button
                onClick={() => setIsSignUp(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                Trusted by 100K+ learners worldwide
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-black">
                Master
                <span className="text-blue-500 block">Three Languages</span>
                <span className="text-2xl lg:text-3xl text-gray-600 block mt-4">
                  Hindi • English • Spanish
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Learn Hindi, English, and Spanish with our comprehensive platform. 
                Interactive lessons, native speakers, and AI-powered personalization.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-white border border-gray-200"
                >
                  <div className="text-3xl font-bold text-blue-500">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6"
                onClick={() => setIsSignUp(true)}
              >
                <Play className="h-5 w-5 mr-2" />
                Start Learning Free
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-blue-500 text-blue-500 hover:bg-blue-50"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                View Courses
              </Button>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div>
            <Card className="max-w-md mx-auto border border-gray-200">
              <CardHeader className="text-center space-y-4 pb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-black">
                    {isSignUp ? "Create Account" : "Welcome Back"}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {isSignUp ? "Start your language learning journey" : "Continue your progress"}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {isSignUp && (
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-black">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-black">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-black">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 h-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg py-6"
                  >
                    {isSignUp ? "Create Account" : "Sign In"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setIsSignUp(!isSignUp)}
                      className="text-sm text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Languages Section */}
        <section id="languages" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">
              Choose Your Language
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with one language or learn all three. Our platform adapts to your goals and schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <Card
                key={index}
                className="cursor-pointer group border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4">
                    {language.flag}
                  </div>
                  <CardTitle className="text-2xl font-bold text-black">{language.name}</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {language.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                    {language.difficulty}
                  </Badge>
                  <div className="text-sm text-gray-600 mb-4">
                    {language.learners} learners
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Start Learning {language.name}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">
              Why Choose LangSphere?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach combines technology with proven learning methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-black">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20">
          <Card className="text-center border border-gray-200 bg-gray-50">
            <CardContent className="py-16">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-8 w-8 text-blue-500 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-2xl font-medium text-black mb-6 leading-relaxed">
                "LangSphere helped me learn Spanish in just 6 months. The interactive lessons and native speakers made all the difference."
              </blockquote>
              <cite className="text-gray-600 font-medium">
                — Sarah Johnson, Marketing Manager
              </cite>

              <div className="mt-12 flex justify-center space-x-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">
                    6 months
                  </div>
                  <div className="text-sm text-gray-600">Average to fluency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">
                    98%
                  </div>
                  <div className="text-sm text-gray-600">Success rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Learning support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
