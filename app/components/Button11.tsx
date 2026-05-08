// outline-glow-button.tsx

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface OutlineGlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function OutlineGlowButton({
  className,
  children,
  ...props
}: OutlineGlowButtonProps) {
  return (
    <button
      className={cn(
        "relative h-14 rounded-full px-8",
        "bg-black text-white text-lg font-medium",
        "border border-cyan-400/70",
        "shadow-[0_0_25px_rgba(34,211,238,0.35)]",
        "hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]",
        "transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}