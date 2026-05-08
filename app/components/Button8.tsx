// brut-button.tsx

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface BrutButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function BrutButton({
  className,
  children,
  ...props
}: BrutButtonProps) {
  return (
    <button
      className={cn(
        "h-14 rounded-full px-8",
        "bg-yellow-300 text-black font-black text-lg",
        "border-[3px] border-black",
        "shadow-[6px_6px_0px_#000]",
        "hover:translate-x-[2px] hover:translate-y-[2px]",
        "hover:shadow-[2px_2px_0px_#000]",
        "transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}