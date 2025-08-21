"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Pause, SkipForward, SkipBack } from "lucide-react"

export default function FloatingPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Card className="fixed bottom-6 right-6 p-4 bg-card/95 backdrop-blur-sm border-primary/20 shadow-2xl z-50 max-w-sm">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-background rounded-full"></div>
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm truncate">Midnight Echoes</p>
          <p className="text-xs text-muted-foreground truncate">The Neon Collective</p>
        </div>

        <div className="flex items-center space-x-1">
          <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
            <SkipBack className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="w-8 h-8 p-0 text-primary"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
            <SkipForward className="w-4 h-4" />
          </Button>
        </div>

        <Button size="sm" variant="ghost" className="w-8 h-8 p-0" onClick={() => setIsVisible(false)}>
          ×
        </Button>
      </div>

      <div className="mt-3 space-y-2">
        <div className="w-full bg-muted rounded-full h-1">
          <div className="bg-primary h-1 rounded-full w-1/3"></div>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1:23</span>
          <span>3:45</span>
        </div>
      </div>
    </Card>
  )
}
