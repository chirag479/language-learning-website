"use client"

import { useState, useEffect } from "react"

// Define the shape of user progress data
interface UserProgress {
  points: number
  streak: number
  completedLessons: { [key: string]: string[] } // e.g., { hindi: ["1", "3"], spanish: ["1"] }
  lastCompletedDate: string | null
}

const INITIAL_PROGRESS: UserProgress = {
  points: 0,
  streak: 0,
  completedLessons: {},
  lastCompletedDate: null,
}

export const useUserProgress = () => {
  const [progress, setProgress] = useState<UserProgress>(INITIAL_PROGRESS)

  // Load progress from local storage on mount
  useEffect(() => {
    try {
      const storedProgress = localStorage.getItem("user-progress")
      if (storedProgress) {
        setProgress(JSON.parse(storedProgress))
      }
    } catch (error) {
      console.error("Failed to load user progress:", error)
    }
  }, [])

  // Function to update progress and save to local storage
  const updateProgress = (newProgress: Partial<UserProgress>) => {
    setProgress((prev) => {
      const updated = { ...prev, ...newProgress }
      localStorage.setItem("user-progress", JSON.stringify(updated))
      return updated
    })
  }

  const completeLesson = (language: string, lessonId: string) => {
    const today = new Date().toISOString().split("T")[0]
    let newStreak = progress.streak

    if (progress.lastCompletedDate) {
      const lastDate = new Date(progress.lastCompletedDate)
      const todayDate = new Date(today)
      const diffTime = todayDate.getTime() - lastDate.getTime()
      const diffDays = diffTime / (1000 * 60 * 60 * 24)

      if (diffDays === 1) {
        newStreak += 1 // Increment streak
      } else if (diffDays > 1) {
        newStreak = 1 // Reset streak
      }
    } else {
      newStreak = 1 // First lesson
    }

    const newCompletedLessons = { ...progress.completedLessons }
    if (!newCompletedLessons[language]) {
      newCompletedLessons[language] = []
    }

    if (!newCompletedLessons[language].includes(lessonId)) {
      newCompletedLessons[language].push(lessonId)

      updateProgress({
        points: progress.points + 100,
        streak: newStreak,
        completedLessons: newCompletedLessons,
        lastCompletedDate: today,
      })
    }
  }
  
  return { progress, completeLesson }
} 