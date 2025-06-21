"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Volume2, Moon, Sun, Bell, Shield, User, Palette, Accessibility } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState(true)
  const [soundEffects, setSoundEffects] = useState(true)
  const [autoPlay, setAutoPlay] = useState(false)
  const [dailyGoal, setDailyGoal] = useState([30])
  const [fontSize, setFontSize] = useState([16])
  const [highContrast, setHighContrast] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("hindi")

  const languages = [
    { code: "hindi", name: "Hindi", flag: "🇮🇳" },
    { code: "english", name: "English", flag: "🇺🇸" },
    { code: "spanish", name: "Spanish", flag: "🇪🇸" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Settings</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Profile Settings */}
          <Card className="lesson-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </CardTitle>
              <CardDescription>Manage your account and learning preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Primary Language</Label>
                  <p className="text-sm text-muted-foreground">Choose your main language to learn</p>
                </div>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <div className="flex items-center space-x-2">
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Daily Goal</Label>
                  <p className="text-sm text-muted-foreground">Set your daily XP target: {dailyGoal[0]} XP</p>
                </div>
                <Slider value={dailyGoal} onValueChange={setDailyGoal} max={100} min={10} step={5} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10 XP (5 min)</span>
                  <span>50 XP (25 min)</span>
                  <span>100 XP (50 min)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card className="lesson-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="h-5 w-5" />
                <span>Appearance</span>
              </CardTitle>
              <CardDescription>Customize the look and feel of the app</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Theme</Label>
                  <p className="text-sm text-muted-foreground">Choose between light and dark mode</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4" />
                  <Switch
                    checked={theme === "dark"}
                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                  />
                  <Moon className="h-4 w-4" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Font Size</Label>
                  <p className="text-sm text-muted-foreground">
                    Adjust text size for better readability: {fontSize[0]}px
                  </p>
                </div>
                <Slider value={fontSize} onValueChange={setFontSize} max={24} min={12} step={1} className="w-full" />
              </div>
            </CardContent>
          </Card>

          {/* Accessibility Settings */}
          <Card className="lesson-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Accessibility className="h-5 w-5" />
                <span>Accessibility</span>
              </CardTitle>
              <CardDescription>Make the app more accessible for your needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">High Contrast Mode</Label>
                  <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                </div>
                <Switch checked={highContrast} onCheckedChange={setHighContrast} />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Screen Reader Support</Label>
                  <p className="text-sm text-muted-foreground">Enhanced support for screen readers</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Audio Settings */}
          <Card className="lesson-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Volume2 className="h-5 w-5" />
                <span>Audio</span>
              </CardTitle>
              <CardDescription>Configure audio and sound preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Sound Effects</Label>
                  <p className="text-sm text-muted-foreground">Play sounds for correct/incorrect answers</p>
                </div>
                <Switch checked={soundEffects} onCheckedChange={setSoundEffects} />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Auto-play Audio</Label>
                  <p className="text-sm text-muted-foreground">Automatically play pronunciation audio</p>
                </div>
                <Switch checked={autoPlay} onCheckedChange={setAutoPlay} />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="lesson-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
              </CardTitle>
              <CardDescription>Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Daily Reminders</Label>
                  <p className="text-sm text-muted-foreground">Get reminded to practice daily</p>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Streak Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified when your streak is at risk</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Achievement Notifications</Label>
                  <p className="text-sm text-muted-foreground">Celebrate your learning milestones</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="lesson-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Privacy & Security</span>
              </CardTitle>
              <CardDescription>Control your data and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Data Collection</Label>
                  <p className="text-sm text-muted-foreground">Allow anonymous usage data to improve the app</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Voice Recording</Label>
                  <p className="text-sm text-muted-foreground">Save voice recordings for pronunciation analysis</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Export Data</Label>
                  <p className="text-sm text-muted-foreground">Download your learning progress and data</p>
                </div>
                <Button variant="outline">Export My Data</Button>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <Button className="flex-1">Save Changes</Button>
            <Button variant="outline" className="flex-1">
              Reset to Defaults
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
