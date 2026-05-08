"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function NeonButton({
  className,
  children,
  ...props
}: NeonButtonProps) {
  return (
    <button
      className={cn(
        "relative h-14 overflow-hidden rounded-full px-8",
        "bg-black text-white font-semibold text-lg",
        "border border-pink-500/40",
        "shadow-[0_0_30px_rgba(236,72,153,0.5),0_0_60px_rgba(59,130,246,0.35)]",
        "before:absolute before:inset-0",
        "before:bg-[linear-gradient(90deg,rgba(255,0,128,0.35),transparent,rgba(59,130,246,0.35))]",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}