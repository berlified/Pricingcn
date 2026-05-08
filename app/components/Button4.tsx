"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        className={cn(
          "group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl px-8",
          "bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600",
          "text-white font-semibold text-lg",
          "shadow-[0_10px_30px_rgba(255,115,0,0.35)]",
          "transition-all duration-300",
          "hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(255,115,0,0.45)]",
          "active:scale-[0.98]",
          "before:absolute before:inset-0",
          "before:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35),transparent_40%)]",
          "after:absolute after:inset-[1px]",
          "after:rounded-[inherit]",
          "after:bg-[linear-gradient(to_bottom,#ff9a1f,#ff7300)]",
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 rounded-[inherit] ring-1 ring-white/20" />

        <span className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-[inherit]">
          <span className="absolute -left-[30%] top-0 h-full w-[30%] skew-x-[-20deg] bg-white/20 blur-xl transition-all duration-1000 group-hover:left-[130%]" />
        </span>

        <span className="relative z-10">{children}</span>
      </Comp>
    )
  }
)

GlowButton.displayName = "GlowButton"

export { GlowButton }