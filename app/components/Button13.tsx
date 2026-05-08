// gradient-button.tsx

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function GradientButton({
  className,
  children,
  ...props
}: GradientButtonProps) {
  return (
    <button
      className={cn(
        "h-14 rounded-full px-8",
        "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500",
        "text-white font-semibold text-lg",
        "shadow-[0_12px_35px_rgba(168,85,247,0.45)]",
        "hover:scale-[1.02]",
        "transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}