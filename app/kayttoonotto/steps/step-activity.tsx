"use client"

import { cn } from "@/lib/utils"
import type { ActivityLevel } from "@/lib/onboarding-store"

const LEVELS: { value: ActivityLevel; title: string }[] = [
  { value: "sedentary", title: "Istumatyö" },
  { value: "light", title: "Kevyt liikunta" },
  { value: "moderate", title: "Kohtalainen liikunta" },
  { value: "active", title: "Runsas liikunta" },
]

export function StepActivity({
  value,
  onChange,
}: {
  value: ActivityLevel | null
  onChange: (level: ActivityLevel) => void
}) {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-display text-3xl font-medium text-foreground text-balance sm:text-4xl">
        Kuinka aktiivinen olet?
      </h1>
      <div className="flex flex-col gap-1">
        {LEVELS.map((level) => {
          const selected = value === level.value
          return (
            <button
              key={level.value}
              type="button"
              onClick={() => onChange(level.value)}
              className={cn(
                "border-b border-border py-4 text-left font-display text-xl transition-colors sm:text-2xl",
                selected ? "text-primary" : "text-foreground/70 hover:text-foreground",
              )}
            >
              {level.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}
