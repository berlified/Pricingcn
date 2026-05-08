// frosted-button.tsx

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface FrostedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function FrostedButton({
  className,
  children,
  ...props
}: FrostedButtonProps) {
  return (
    <button
      className={cn(
        "relative h-14 overflow-hidden rounded-full px-8",
        "bg-white/10 backdrop-blur-xl",
        "border border-white/20",
        "text-white text-lg font-medium",
        "shadow-[0_8px_40px_rgba(139,92,246,0.35)]",
        "before:absolute before:inset-0",
        "before:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.25),transparent)]",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}