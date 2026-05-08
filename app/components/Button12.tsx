// glassy-button.tsx

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function GlassyButton({
  className,
  children,
  ...props
}: GlassyButtonProps) {
  return (
    <button
      className={cn(
        "relative h-14 overflow-hidden rounded-2xl px-8",
        "bg-gradient-to-b from-white to-zinc-200",
        "text-black font-semibold text-lg",
        "border border-white",
        "shadow-[0_10px_30px_rgba(255,255,255,0.25)]",
        "before:absolute before:left-0 before:top-0 before:h-full before:w-full",
        "before:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.8),transparent_45%)]",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}