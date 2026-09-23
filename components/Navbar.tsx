export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-white"
        >
          Martin Brown
        </a>

        <div className="hidden items-center gap-6 text-sm text-zinc-600 md:flex dark:text-zinc-300">
          <a
            href="#projects"
            className="transition hover:text-zinc-950 dark:hover:text-white"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="transition hover:text-zinc-950 dark:hover:text-white"
          >
            Experience
          </a>

          <a
            href="#education"
            className="transition hover:text-zinc-950 dark:hover:text-white"
          >
            Education
          </a>

          <a
            href="#lab"
            className="transition hover:text-zinc-950 dark:hover:text-white"
          >
            Project Lab
          </a>

          <a
            href="#research"
            className="transition hover:text-zinc-950 dark:hover:text-white"
          >
            Research
          </a>

          <a
            href="#contact"
            className="transition hover:text-zinc-950 dark:hover:text-white"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}