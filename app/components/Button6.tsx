// chrome-button.tsx

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ChromeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ChromeButton({
  className,
  children,
  ...props
}: ChromeButtonProps) {
  return (
    <button
      className={cn(
        "relative h-14 overflow-hidden rounded-full px-8",
        "bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-500",
        "text-black font-semibold text-lg",
        "border border-white/70",
        "shadow-[0_12px_35px_rgba(139,92,246,0.45)]",
        "before:absolute before:inset-0",
        "before:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9),transparent_40%)]",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}