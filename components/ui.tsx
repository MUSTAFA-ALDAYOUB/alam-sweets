"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "text-white bg-gradient-to-r from-rose-500 via-fuchsia-500 to-amber-400 hover:brightness-110 shadow-[0_12px_40px_rgba(244,63,94,0.25)]",
  secondary:
    "text-slate-900 bg-white/70 hover:bg-white/90 border border-white/40 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,.18),_0_20px_60px_rgba(2,6,23,.12)]",
  outline:
    "text-slate-900 bg-transparent border border-slate-200/70 hover:bg-white/60 backdrop-blur-xl",
  ghost: "text-slate-700 hover:text-slate-900 hover:bg-white/60",
  whatsapp:
    "text-white bg-gradient-to-r from-emerald-500 to-green-500 hover:brightness-110 shadow-[0_12px_40px_rgba(16,185,129,0.25)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: ButtonSize }
>(function Button({ className, variant = "primary", size = "md", ...props }, ref) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-rose-400/60 disabled:opacity-50 disabled:pointer-events-none",
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
        "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 border border-white/40 backdrop-blur-xl text-slate-700 hover:text-slate-900 hover:bg-white/90 transition shadow-[0_0_0_1px_rgba(255,255,255,.18),_0_20px_60px_rgba(2,6,23,.12)] focus:outline-none focus:ring-2 focus:ring-rose-400/60",
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
          "h-11 w-full rounded-xl bg-white/70 border border-white/40 backdrop-blur-xl px-4 text-slate-900 placeholder:text-slate-400 shadow-[0_0_0_1px_rgba(255,255,255,.18),_0_20px_60px_rgba(2,6,23,.12)] outline-none focus:ring-2 focus:ring-rose-400/60",
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
        "min-h-[90px] w-full rounded-xl bg-white/70 border border-white/40 backdrop-blur-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-[0_0_0_1px_rgba(255,255,255,.18),_0_20px_60px_rgba(2,6,23,.12)] outline-none focus:ring-2 focus:ring-rose-400/60",
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
        "h-9 px-3 rounded-full border text-sm font-semibold transition backdrop-blur-xl",
        active
          ? "bg-slate-900 text-white border-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.25)]"
          : "bg-white/60 text-slate-700 border-white/40 hover:bg-white/85",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
