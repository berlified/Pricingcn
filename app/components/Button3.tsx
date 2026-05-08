"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface MeteorButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const MeteorButton = React.forwardRef<HTMLButtonElement, MeteorButtonProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        className={cn(
          "group relative inline-flex h-11 cursor-pointer items-center justify-center overflow-hidden rounded-2xl px-6",
          "bg-zinc-950 text-white",
          "border border-white/10",
          "transition-all duration-300",
          "hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]",
          "active:scale-[0.98]",
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 overflow-hidden rounded-[inherit]">
          <span className="absolute -left-[40%] top-0 h-full w-[40%] rotate-12 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.35),transparent)] blur-xl transition-all duration-1000 group-hover:left-[140%]" />
        </span>

        <span className="absolute inset-[1px] rounded-[inherit] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%),#09090b]" />

        <span className="absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

        <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
          {children}
        </span>
      </Comp>
    )
  }
)

MeteorButton.displayName = "MeteorButton"

export { MeteorButton }