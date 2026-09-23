"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Project Lab", href: "#lab" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85">
      <nav className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-sm font-semibold tracking-tight text-zinc-950 transition hover:opacity-60 dark:text-white"
          >
            Martin Brown
          </a>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-6 text-sm text-zinc-600 md:flex dark:text-zinc-300">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-zinc-950 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle light and dark mode"
                title="Toggle light and dark mode"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                {resolvedTheme === "dark" ? "☀" : "☾"}
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 flex gap-5 overflow-x-auto whitespace-nowrap pb-1 text-sm text-zinc-600 md:hidden dark:text-zinc-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 transition hover:text-zinc-950 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}