"use client"

import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Shield,
  User,
  MessageSquare,
  Search,
  Plus,
  ChevronRight,
  Edit,
  Check,
  X,
  Brain,
  Fingerprint,
  Lock,
  Eye,
  Music,
  Video,
  BookOpen,
  Layers,
  Hexagon,
  Upload,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { ChatInterface } from "@/components/chat-interface"

export default function MirroApp() {
  const [activeTab, setActiveTab] = useState<"home" | "profile" | "messages" | "discover">("home")
  const isMobile = useMobile()
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="flex flex-col h-screen w-full max-w-md mx-auto overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <FluidBackground />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full"
            >
              <HomeScreen />
            </motion.div>
          )}
          {activeTab === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full"
            >
              <ProfileScreen onBack={() => setActiveTab("home")} />
            </motion.div>
          )}
          {activeTab === "messages" && (
            <motion.div
              key="messages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full"
            >
              <MessagesScreen onBack={() => setActiveTab("home")} />
            </motion.div>
          )}
          {activeTab === "discover" && (
            <motion.div
              key="discover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full"
            >
              <DiscoverScreen onBack={() => setActiveTab("home")} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Interface */}
        {showChat && <ChatInterface onClose={() => setShowChat(false)} />}
      </main>

      {/* Navigation */}
      <div className="px-6 py-4 bg-black/20 backdrop-blur-md border-t border-white/5 z-10">
        <div className="flex items-center justify-between relative">
          {/* Curved background for nav */}
          <div className="absolute inset-0 bg-indigo-900/10 rounded-full -top-6 h-[120%] blur-xl"></div>

          <NavButton
            icon={<Hexagon className="h-5 w-5" />}
            isActive={activeTab === "home"}
            onClick={() => setActiveTab("home")}
          />
          <NavButton
            icon={<MessageSquare className="h-5 w-5" />}
            isActive={activeTab === "messages"}
            onClick={() => setActiveTab("messages")}
          />
          <div className="relative -mt-10">
            <div className="absolute -inset-3 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-full blur-xl"></div>
            <Button
              size="icon"
              className="h-16 w-16 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-400 hover:from-violet-500 hover:to-indigo-300 shadow-lg shadow-indigo-500/30 relative z-10"
              onClick={() => setShowChat(true)}
            >
              <Plus className="h-7 w-7" />
            </Button>
          </div>
          <NavButton
            icon={<Search className="h-5 w-5" />}
            isActive={activeTab === "discover"}
            onClick={() => setActiveTab("discover")}
          />
          <NavButton
            icon={<User className="h-5 w-5" />}
            isActive={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
          />
        </div>
      </div>
    </div>
  )
}

function FluidBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-900/20 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-violet-900/20 blur-3xl"></div>
      <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-blue-900/20 blur-3xl"></div>

      {/* Animated grid with curved lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 C 30 10, 10 10, 0 0" fill="none" stroke="rgba(129, 140, 248, 0.2)" strokeWidth="0.5" />
            <path d="M 0 40 C 10 30, 30 30, 40 40" fill="none" stroke="rgba(129, 140, 248, 0.2)" strokeWidth="0.5" />
            <path d="M 0 0 C 10 10, 10 30, 0 40" fill="none" stroke="rgba(129, 140, 248, 0.2)" strokeWidth="0.5" />
            <path d="M 40 40 C 30 30, 30 10, 40 0" fill="none" stroke="rgba(129, 140, 248, 0.2)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-indigo-400"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

function NavButton({ icon, isActive, onClick }: { icon: React.ReactNode; isActive: boolean; onClick: () => void }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "relative h-12 w-12 rounded-full z-10",
        isActive ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5",
      )}
      onClick={onClick}
    >
      {icon}
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-1 left-1/2 w-1 h-1 bg-indigo-400 rounded-full"
          initial={false}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          style={{ x: "-50%" }}
        />
      )}
    </Button>
  )
}

function HomeScreen() {
  const [thoughts, setThoughts] = useState<string[]>([])
  const thoughtsRef = useRef<HTMLDivElement>(null)

  // Stream of consciousness thoughts
  const possibleThoughts = [
    "Analyzing your emotional patterns...",
    "Your creativity seems higher today...",
    "Processing your recent interactions...",
    "Detecting increased focus on quantum computing...",
    "Your sleep patterns suggest mild fatigue...",
    "Noticing a pattern in your music choices...",
    "Your writing style has evolved recently...",
    "Detecting interest in neural interfaces...",
    "Your communication patterns show increased confidence...",
    "Analyzing your productivity cycles...",
    "Your reading speed has increased by 12%...",
    "Noticing changes in your social interactions...",
    "Your problem-solving approach is becoming more abstract...",
    "Detecting a shift in your creative outputs...",
    "Your language patterns suggest deep thinking...",
  ]

  // Add new thoughts periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const newThought = possibleThoughts[Math.floor(Math.random() * possibleThoughts.length)]
      setThoughts((prev) => [...prev, newThought].slice(-8)) // Keep only the last 8 thoughts
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Scroll to bottom when new thoughts are added
  useEffect(() => {
    if (thoughtsRef.current) {
      thoughtsRef.current.scrollTop = thoughtsRef.current.scrollHeight
    }
  }, [thoughts])

  return (
    <div className="flex flex-col h-full p-6 overflow-auto">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-white">Hello, Alex</h1>
            <p className="text-sm text-indigo-300">Mirro Alex884 is active</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Avatar className="h-12 w-12 ring-2 ring-indigo-500/30 bg-black/20">
              <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
              <AvatarFallback className="bg-indigo-900 text-indigo-200">AM</AvatarFallback>
            </Avatar>
          </motion.div>
        </div>
      </motion.div>

      {/* Stream of Consciousness */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 flex-1"
      >
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-5 border border-white/10 shadow-xl shadow-indigo-900/10 h-[60vh] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-900/50 p-2 rounded-full">
                <Brain className="h-4 w-4 text-indigo-400" />
              </div>
              <h2 className="text-sm font-medium text-white">Inner World</h2>
            </div>
          </div>

          <div ref={thoughtsRef} className="flex-1 overflow-y-auto bg-black/20 rounded-2xl p-4 text-sm text-slate-300">
            {thoughts.map((thought, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-3 p-3 bg-white/5 rounded-xl border border-white/5"
              >
                <p className="text-indigo-300 text-sm">{thought}</p>
              </motion.div>
            ))}
          </div>

          {/* Upload Document Section */}
          <div className="mt-4">
            <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl py-4 flex items-center justify-center gap-2">
              <Upload className="h-4 w-4" />
              <span>Upload Document to Mirro</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

interface ConnectionRequestItemProps {
  name: string
  avatar: string
  request: string
  time: string
  onAllow: () => void
  onDeny: () => void
}

function ConnectionRequestItem({ name, avatar, request, time, onAllow, onDeny }: ConnectionRequestItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/5"
    >
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10 ring-1 ring-indigo-500/30">
          <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
          <AvatarFallback className="bg-indigo-900 text-indigo-200">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-medium text-white">{name}</h4>
            <p className="text-xs text-indigo-300">{time}</p>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">{request}</p>
          <div className="flex items-center gap-2 mt-3">
            <Button
              size="sm"
              className="h-8 px-4 text-xs bg-indigo-600 hover:bg-indigo-500 text-white rounded-full"
              onClick={onAllow}
            >
              Allow
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-8 px-4 text-xs border-white/10 text-slate-300 hover:bg-white/5 rounded-full"
              onClick={onDeny}
            >
              Deny
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProfileScreen({ onBack }: { onBack: () => void }) {
  const [editingInsight, setEditingInsight] = useState<number | null>(null)

  // Public insights data
  const [publicInsights, setPublicInsights] = useState([
    {
      id: 1,
      content: "Interested in quantum computing and AI research",
      isPublic: true,
    },
    {
      id: 2,
      content: "Currently reading 'The Physics of Consciousness'",
      isPublic: true,
    },
    {
      id: 3,
      content: "Working on a neural interface project",
      isPublic: false,
    },
  ])

  const handleToggleInsightVisibility = (id: number) => {
    setPublicInsights(
      publicInsights.map((insight) => (insight.id === id ? { ...insight, isPublic: !insight.isPublic } : insight)),
    )
  }

  const handleUpdateInsight = (id: number, content: string) => {
    setPublicInsights(publicInsights.map((insight) => (insight.id === id ? { ...insight, content } : insight)))
    setEditingInsight(null)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="mr-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full h-10 w-10"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
        </Button>
        <h2 className="text-lg font-light text-white">Neural Identity</h2>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-6 space-y-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-indigo-600/20 to-violet-600/20 rounded-full blur-xl"></div>
              <Avatar className="h-28 w-28 ring-2 ring-indigo-500/30 bg-black/20 relative z-10">
                <AvatarImage src="/placeholder.svg?height=112&width=112" alt="User" />
                <AvatarFallback className="bg-indigo-900 text-indigo-200 text-xl">AM</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 z-20">
                <Button
                  size="icon"
                  className="h-10 w-10 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <h3 className="text-xl font-light text-white mt-6">Alex Morgan</h3>
            <p className="text-sm text-indigo-300">Alex884</p>

            <div className="flex gap-6 mt-6">
              <div className="text-center">
                <p className="text-white font-light text-lg">42</p>
                <p className="text-xs text-indigo-300">Connections</p>
              </div>
              <div className="text-center">
                <p className="text-white font-light text-lg">128</p>
                <p className="text-xs text-indigo-300">Moments</p>
              </div>
              <div className="text-center">
                <p className="text-white font-light text-lg">7</p>
                <p className="text-xs text-indigo-300">Insights</p>
              </div>
            </div>
          </div>

          {/* Public Insights */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-indigo-900/50 p-2 rounded-full">
                  <Eye className="h-4 w-4 text-indigo-400" />
                </div>
                <h2 className="text-sm font-medium text-white">Public Insights</h2>
              </div>
              <Button size="sm" className="h-8 px-4 text-xs bg-indigo-600 hover:bg-indigo-500 text-white rounded-full">
                <Plus className="h-3 w-3 mr-1" />
                Add
              </Button>
            </div>

            <div className="space-y-3">
              {publicInsights.map((insight) => (
                <motion.div
                  key={insight.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {editingInsight === insight.id ? (
                    <EditableInsight
                      content={insight.content}
                      onSave={(content) => handleUpdateInsight(insight.id, content)}
                      onCancel={() => setEditingInsight(null)}
                    />
                  ) : (
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm text-slate-300">{insight.content}</p>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-slate-400 hover:text-white hover:bg-white/5 rounded-full"
                          onClick={() => setEditingInsight(insight.id)}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Switch
                          checked={insight.isPublic}
                          onCheckedChange={() => handleToggleInsightVisibility(insight.id)}
                          className="data-[state=checked]:bg-indigo-600"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-900/50 p-2 rounded-full">
                <Lock className="h-4 w-4 text-indigo-400" />
              </div>
              <h2 className="text-sm font-medium text-white">Privacy Controls</h2>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/5 space-y-5 shadow-lg shadow-indigo-900/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white">Location Precision</p>
                  <p className="text-xs text-slate-400">Control how precisely your location is shared</p>
                </div>
                <div className="w-32">
                  <Slider
                    defaultValue={[1]}
                    max={3}
                    step={1}
                    className="[&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-indigo-600 [&_[role=slider]]:rounded-full"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-slate-400">City</span>
                    <span className="text-xs text-slate-400">None</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white">Auto-Accept Connections</p>
                  <p className="text-xs text-slate-400">From people with mutual connections</p>
                </div>
                <Switch className="data-[state=checked]:bg-indigo-600" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white">Neural Data Sharing</p>
                  <p className="text-xs text-slate-400">Share insights with your connections</p>
                </div>
                <Switch className="data-[state=checked]:bg-indigo-600" />
              </div>
            </div>
          </div>

          {/* Connected Apps */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-900/50 p-2 rounded-full">
                <Layers className="h-4 w-4 text-indigo-400" />
              </div>
              <h2 className="text-sm font-medium text-white">Connected Systems</h2>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/5 space-y-4 shadow-lg shadow-indigo-900/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-violet-900/50 flex items-center justify-center">
                    <Video className="h-4 w-4 text-violet-300" />
                  </div>
                  <div>
                    <p className="text-sm text-white">Video Platform</p>
                    <p className="text-xs text-slate-400">Last synced 2 hours ago</p>
                  </div>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-indigo-600" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-sm text-white">Messaging Apps</p>
                    <p className="text-xs text-slate-400">Last synced 30 minutes ago</p>
                  </div>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-indigo-600" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-900/50 flex items-center justify-center">
                    <Music className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm text-white">Music Services</p>
                    <p className="text-xs text-slate-400">Last synced 1 day ago</p>
                  </div>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-indigo-600" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-amber-900/50 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-amber-300" />
                  </div>
                  <div>
                    <p className="text-sm text-white">Browser History</p>
                    <p className="text-xs text-slate-400">Last synced 4 hours ago</p>
                  </div>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

interface EditableInsightProps {
  content: string
  onSave: (content: string) => void
  onCancel: () => void
}

function EditableInsight({ content, onSave, onCancel }: EditableInsightProps) {
  const [value, setValue] = useState(content)

  return (
    <div className="space-y-3">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-sm text-white resize-none focus:outline-none focus:ring-1 focus:ring-indigo-500"
        rows={2}
      />
      <div className="flex justify-end gap-2">
        <Button
          size="sm"
          variant="ghost"
          className="h-8 px-3 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-full"
          onClick={onCancel}
        >
          <X className="h-3 w-3 mr-1" />
          Cancel
        </Button>
        <Button
          size="sm"
          className="h-8 px-3 text-xs bg-indigo-600 hover:bg-indigo-500 text-white rounded-full"
          onClick={() => onSave(value)}
        >
          <Check className="h-3 w-3 mr-1" />
          Save
        </Button>
      </div>
    </div>
  )
}

function MessagesScreen({ onBack }: { onBack: () => void }) {
  const [showConnectionRequests, setShowConnectionRequests] = useState(true)

  // Connection requests data
  const connectionRequests = [
    {
      id: 1,
      name: "Taylor Kim",
      avatar: "/placeholder.svg?height=48&width=48",
      request: "requested access to your plans for next week",
      time: "10 min ago",
    },
    {
      id: 2,
      name: "Jordan Lee",
      avatar: "/placeholder.svg?height=48&width=48",
      request: "wants to connect about AI research",
      time: "2 hours ago",
    },
  ]

  const conversations = [
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "That's a great idea! Let's discuss it more tomorrow.",
      time: "2h ago",
      unread: 2,
    },
    {
      id: 2,
      name: "Neural Design Team",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I've shared the new interface mockups in our shared space.",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 3,
      name: "MrFancyPants",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the quantum computing article recommendation!",
      time: "3d ago",
      unread: 0,
    },
    {
      id: 4,
      name: "Moonshine",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Let me know when you're free to collaborate on the project.",
      time: "1w ago",
      unread: 0,
    },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="mr-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full h-10 w-10"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
        </Button>
        <h2 className="text-lg font-light text-white">Neural Threads</h2>
      </div>

      <div className="px-6 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
        </div>
      </div>

      <ScrollArea className="flex-1 px-6">
        <div className="space-y-4 pb-6">
          {/* Access Requests Section */}
          <AnimatePresence>
            {showConnectionRequests && connectionRequests.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-5 border border-white/10 shadow-xl shadow-indigo-900/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-indigo-900/50 p-2 rounded-full">
                        <Shield className="h-4 w-4 text-indigo-400" />
                      </div>
                      <h2 className="text-sm font-medium text-white">Access Requests</h2>
                    </div>
                    <Badge variant="outline" className="text-xs border-indigo-500/30 text-indigo-300 rounded-full px-3">
                      {connectionRequests.length} New
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {connectionRequests.map((request) => (
                      <ConnectionRequestItem
                        key={request.id}
                        name={request.name}
                        avatar={request.avatar}
                        request={request.request}
                        time={request.time}
                        onAllow={() => setShowConnectionRequests(false)}
                        onDeny={() => setShowConnectionRequests(false)}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Conversations */}
          {conversations.map((conversation, index) => (
            <motion.div
              key={conversation.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/5 hover:bg-white/8 hover:border-white/10 transition-colors shadow-lg shadow-indigo-900/10">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 ring-1 ring-indigo-500/30">
                    <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                    <AvatarFallback className="bg-indigo-900 text-indigo-200">
                      {conversation.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-white truncate">{conversation.name}</h4>
                      <span className="text-xs text-indigo-300">{conversation.time}</span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-1">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="bg-indigo-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

function DiscoverScreen({ onBack }: { onBack: () => void }) {
  const people = [
    {
      id: 1,
      name: "Moonshine",
      avatar: "/placeholder.svg?height=48&width=48",
      reasons: [
        "Working on a similar neural interface project",
        "Interested in quantum computing",
        "Located in your region",
      ],
      distance: "Same region",
    },
    {
      id: 2,
      name: "Taylor Kim",
      avatar: "/placeholder.svg?height=48&width=48",
      reasons: [
        "Looking for collaborators on AI research",
        "Shared connections with Sarah and Alex",
        "Complementary skill set to yours",
      ],
      distance: "Nearby area",
    },
    {
      id: 3,
      name: "Jordan Smith",
      avatar: "/placeholder.svg?height=48&width=48",
      reasons: ["Can help with your current project", "Expert in neural networks", "Attended same virtual conference"],
      distance: "Connected region",
    },
    {
      id: 4,
      name: "Casey Wong",
      avatar: "/placeholder.svg?height=48&width=48",
      reasons: [
        "Skilled in areas you're learning",
        "Similar content consumption patterns",
        "Mutual interest in emerging tech",
      ],
      distance: "Global",
    },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="mr-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full h-10 w-10"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
        </Button>
        <h2 className="text-lg font-light text-white">Neural Discovery</h2>
      </div>

      <div className="px-6 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for people or interests..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
        </div>
      </div>

      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-900/50 p-2 rounded-full">
            <Fingerprint className="h-4 w-4 text-indigo-400" />
          </div>
          <h3 className="text-sm font-medium text-white">Neural Matches</h3>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-indigo-300">Location Precision</p>
          <Switch className="data-[state=checked]:bg-indigo-600" />
        </div>
      </div>

      <ScrollArea className="flex-1 px-6">
        <div className="space-y-5 pb-6">
          {people.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/5 hover:bg-white/8 hover:border-white/10 transition-colors shadow-lg shadow-indigo-900/10">
                <div className="flex items-start gap-4">
                  <Avatar className="h-14 w-14 ring-1 ring-indigo-500/30">
                    <AvatarImage src={person.avatar || "/placeholder.svg"} alt={person.name} />
                    <AvatarFallback className="bg-indigo-900 text-indigo-200">{person.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-white">{person.name}</h4>
                      <Badge
                        variant="outline"
                        className="text-xs border-indigo-500/30 text-indigo-300 rounded-full px-3"
                      >
                        {person.distance}
                      </Badge>
                    </div>

                    <div className="mt-3 space-y-1.5">
                      {person.reasons.map((reason, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5"></div>
                          <p className="text-xs text-slate-300">{reason}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <Button
                        size="sm"
                        className="h-9 px-4 text-xs bg-indigo-600 hover:bg-indigo-500 text-white rounded-full"
                      >
                        Connect
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-9 px-4 text-xs border-white/10 text-slate-300 hover:bg-white/5 rounded-full"
                      >
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
