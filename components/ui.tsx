"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "text-white bg-gradient-to-r from-[#1a2f23] to-[#2c4a38] hover:from-[#2c4a38] hover:to-[#3e664d] shadow-[0_8px_30px_rgba(26,47,35,0.3)] border border-[#d4af37]/40",
  secondary:
    "text-[#1a2f23] bg-white/80 hover:bg-white border border-[#d4af37]/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(212,175,55,0.15)]",
  outline:
    "text-[#1a2f23] bg-transparent border-2 border-[#1a2f23]/20 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-[#1a2f23]/5 backdrop-blur-xl",
  ghost: "text-slate-600 hover:text-[#d4af37] hover:bg-[#1a2f23]/5",
  whatsapp:
    "text-white bg-[#128C7E] hover:bg-[#075E54] shadow-[0_8px_30px_rgba(18,140,126,0.3)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base font-bold tracking-wide",
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: ButtonSize }
>(function Button({ className, variant = "primary", size = "md", ...props }, ref) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
});

export const IconButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function IconButton({ className, ...props }, ref) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 border border-[#d4af37]/30 backdrop-blur-xl text-[#1a2f23] hover:text-[#d4af37] hover:bg-white hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60",
        className
      )}
      {...props}
    />
  );
});

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          "h-12 w-full rounded-2xl bg-white/60 border border-[#1a2f23]/10 backdrop-blur-md px-4 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 hover:border-[#d4af37]/50 shadow-sm transition-all outline-none",
          className
        )}
        {...props}
      />
    );
  }
);

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[120px] w-full rounded-2xl bg-white/60 border border-[#1a2f23]/10 backdrop-blur-md px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 hover:border-[#d4af37]/50 shadow-sm transition-all outline-none",
        className
      )}
      {...props}
    />
  );
});

export function Chip({
  active,
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      className={cn(
        "h-10 px-5 rounded-full border text-sm font-medium transition-all duration-300 backdrop-blur-xl",
        active
          ? "bg-[#1a2f23] text-white border-[#1a2f23] shadow-[0_8px_20px_rgba(26,47,35,0.25)]"
          : "bg-white/80 text-[#1a2f23] border-[#1a2f23]/10 hover:border-[#d4af37]/50 hover:text-[#d4af37] hover:bg-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
