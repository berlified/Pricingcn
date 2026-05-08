// soft-button.tsx

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SoftButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function SoftButton({
  className,
  children,
  ...props
}: SoftButtonProps) {
  return (
    <button
      className={cn(
        "h-14 rounded-full px-8",
        "bg-[#f4b6a6]",
        "text-white text-lg font-semibold",
        "shadow-[0_12px_30px_rgba(244,182,166,0.55)]",
        "border border-white/30",
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