"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MidnightButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function MidnightButton({
  className,
  children,
  ...props
}: MidnightButtonProps) {
  return (
    <button
      className={cn(
        "relative h-14 rounded-full px-8 overflow-hidden",
        "bg-gradient-to-b from-zinc-800 to-black",
        "text-zinc-100 font-medium text-lg",
        "border border-white/10",
        "shadow-[0_15px_40px_rgba(0,0,0,0.6)]",
        "before:absolute before:inset-0",
        "before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_50%)]",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}