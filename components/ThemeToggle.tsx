"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null;
    const preferred =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    setTheme(stored ?? preferred);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme((s) => (s === "dark" ? "light" : "dark"))}
      className="theme-toggle"
    >
      {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
