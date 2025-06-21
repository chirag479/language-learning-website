"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Mic, Headphones, PenTool, RotateCcw, Check, X, Volume2, Play } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

interface FlashCard {
  id: number
  front: string
  back: string
  difficulty: "easy" | "medium" | "hard"
  category: string
}

export default function PracticePage() {
  const params = useParams()
  const practiceType = params.type as string

  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)

  // Sample flashcards data
  const flashcards: FlashCard[] = [
    {
      id: 1,
      front: "Hello",
      back: "नमस्ते (Namaste)",
      difficulty: "easy",
      category: "Greetings",
    },
    {
      id: 2,
      front: "Thank you",
      back: "धन्यवाद (Dhanyawad)",
      difficulty: "easy",
      category: "Greetings",
    },
    {
      id: 3,
      front: "Family",
      back: "परिवार (Parivar)",
      difficulty: "medium",
      category: "Family",
    },
    {
      id: 4,
      front: "Beautiful",
      back: "सुंदर (Sundar)",
      difficulty: "medium",
      category: "Adjectives",
    },
    {
      id: 5,
      front: "I love you",
      back: "मैं तुमसे प्यार करता हूँ (Main tumse pyaar karta hun)",
      difficulty: "hard",
      category: "Expressions",
    },
  ]

  const practiceConfig = {
    reading: {
      title: "Reading Comprehension",
      description: "Master vocabulary through interactive flashcards",
      icon: BookOpen,
      color: "bg-blue-500",
    },
    speaking: {
      title: "Speaking Practice",
      description: "Perfect your pronunciation with AI feedback",
      icon: Mic,
      color: "bg-red-500",
    },
    listening: {
      title: "Listening Skills",
      description: "Train your ear to understand native speakers",
      icon: Headphones,
      color: "bg-green-500",
    },
    writing: {
      title: "Writing Practice",
      description: "Express yourself clearly in your target language",
      icon: PenTool,
      color: "bg-purple-500",
    },
  }

  const config = practiceConfig[practiceType as keyof typeof practiceConfig]
  const currentFlashcard = flashcards[currentCard]
  const progress = ((currentCard + 1) / flashcards.length) * 100

  const handleAnswer = (isCorrect: boolean) => {
    setTotalAnswered(totalAnswered + 1)
    if (isCorrect) {
      setCorrectCount(correctCount + 1)
    }

    setTimeout(() => {
      if (currentCard < flashcards.length - 1) {
        setCurrentCard(currentCard + 1)
        setShowAnswer(false)
      } else {
        // Practice session completed
        alert(`Practice completed! Score: ${correctCount + (isCorrect ? 1 : 0)}/${totalAnswered + 1}`)
      }
    }, 1500)
  }

  const resetSession = () => {
    setCurrentCard(0)
    setShowAnswer(false)
    setCorrectCount(0)
    setTotalAnswered(0)
  }

  const playAudio = (text: string) => {
    // Simulate text-to-speech
    console.log(`Playing audio for: ${text}`)
  }

  if (!config) {
    return <div>Practice type not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${config.color}`}>
                  <config.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="font-bold">{config.title}</h1>
                  <p className="text-sm text-muted-foreground">{config.description}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium">
                  {correctCount}/{totalAnswered} correct
                </div>
                <div className="text-xs text-muted-foreground">
                  Card {currentCard + 1} of {flashcards.length}
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={resetSession}>
                <RotateCcw className="h-4 w-4 mr-1" />
                Reset
              </Button>
            </div>
          </div>

          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="lesson-card min-h-[400px]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge
                variant={
                  currentFlashcard.difficulty === "easy"
                    ? "secondary"
                    : currentFlashcard.difficulty === "medium"
                      ? "default"
                      : "destructive"
                }
              >
                {currentFlashcard.difficulty}
              </Badge>
              <Badge variant="outline">{currentFlashcard.category}</Badge>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col items-center justify-center space-y-8 py-12">
            {/* Front of card */}
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-primary mb-4">{currentFlashcard.front}</div>

              {practiceType === "listening" && (
                <Button size="lg" onClick={() => playAudio(currentFlashcard.front)} className="rounded-full w-16 h-16">
                  <Volume2 className="h-6 w-6" />
                </Button>
              )}
            </div>

            {/* Show answer section */}
            {showAnswer && (
              <div className="text-center space-y-4 animate-fade-in">
                <div className="text-3xl font-bold text-accent">{currentFlashcard.back}</div>

                {practiceType === "speaking" && (
                  <Button variant="outline" onClick={() => playAudio(currentFlashcard.back)}>
                    <Play className="h-4 w-4 mr-2" />
                    Listen to pronunciation
                  </Button>
                )}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex space-x-4 w-full max-w-md">
              {!showAnswer ? (
                <Button onClick={() => setShowAnswer(true)} className="flex-1" size="lg">
                  Show Answer
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={() => handleAnswer(false)}
                    className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
                    size="lg"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Hard
                  </Button>
                  <Button
                    onClick={() => handleAnswer(true)}
                    className="flex-1 bg-success hover:bg-success/90"
                    size="lg"
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Easy
                  </Button>
                </>
              )}
            </div>

            {/* Practice type specific content */}
            {practiceType === "writing" && showAnswer && (
              <div className="w-full max-w-md">
                <textarea
                  placeholder="Try writing this in your own words..."
                  className="w-full p-3 border rounded-lg resize-none"
                  rows={3}
                />
              </div>
            )}

            {practiceType === "speaking" && showAnswer && (
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Try saying this out loud and compare with the audio</p>
                <Button variant="outline" size="sm">
                  <Mic className="h-4 w-4 mr-2" />
                  Record yourself
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Practice Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">{correctCount}</div>
              <div className="text-sm text-muted-foreground">Correct</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{totalAnswered}</div>
              <div className="text-sm text-muted-foreground">Total</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent">
                {totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0}%
              </div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
