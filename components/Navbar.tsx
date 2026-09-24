"use client";

import Link from "next/link";
import { useTheme } from "@teispace/next-themes";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

const links = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Research", href: "/#research" },
  { label: "Technical Studies", href: "/#technical-studies" },
  { label: "Teaching", href: "/#teaching" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85">
      <nav className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-zinc-950 transition hover:text-blue-700 dark:text-white dark:hover:text-blue-300"
          >
            Martin Brown
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-5 text-sm text-zinc-600 lg:flex dark:text-zinc-300">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-blue-700 dark:hover:text-blue-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle light and dark mode"
              title="Toggle light and dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-sm transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              <span className="dark:hidden">☾</span>
              <span className="hidden dark:inline">☀</span>
            </button>
          </div>
        </div>

        <div className="mt-4 flex gap-5 overflow-x-auto whitespace-nowrap pb-1 text-sm text-zinc-600 lg:hidden dark:text-zinc-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 transition hover:text-blue-700 dark:hover:text-blue-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}