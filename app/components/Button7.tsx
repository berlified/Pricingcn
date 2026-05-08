// neumo-button.tsx

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface NeumoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function NeumoButton({
  className,
  children,
  ...props
}: NeumoButtonProps) {
  return (
    <button
      className={cn(
        "h-14 rounded-full px-8",
        "bg-[#ececec]",
        "text-zinc-700 font-medium text-lg",
        "shadow-[-8px_-8px_18px_rgba(255,255,255,0.9),8px_8px_18px_rgba(0,0,0,0.08)]",
        "active:shadow-[inset_-6px_-6px_10px_rgba(255,255,255,0.7),inset_6px_6px_10px_rgba(0,0,0,0.08)]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}