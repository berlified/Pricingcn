"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface AuroraButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const AuroraButton = React.forwardRef<HTMLButtonElement, AuroraButtonProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        className={cn(
          "group relative inline-flex h-11 cursor-pointer items-center justify-center overflow-hidden rounded-2xl px-6 font-medium text-white transition-all duration-300",
          "bg-black",
          "border border-white/10",
          "shadow-[0_0_40px_rgba(120,119,198,0.35)]",
          "hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(168,85,247,0.45)]",
          "active:scale-[0.98]",
          "before:absolute before:inset-0",
          "before:bg-[linear-gradient(135deg,#00F5A0,#8B5CF6,#FF006E,#00F5A0)]",
          "before:bg-[length:300%_300%]",
          "before:animate-[aurora_8s_ease_infinite]",
          "before:opacity-70",
          "after:absolute after:inset-[1px]",
          "after:rounded-[inherit]",
          "after:bg-black",
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)]" />
        </span>

        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Comp>
    )
  }
)

AuroraButton.displayName = "AuroraButton"

export { AuroraButton }