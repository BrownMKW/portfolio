import Link from "next/link";

import Navbar from "@/components/Navbar";
import { technicalStudies } from "@/data/technicalStudies";

export default function TechnicalStudiesPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-zinc-200 bg-gradient-to-br from-blue-50/70 via-white to-teal-50/60 dark:border-zinc-800 dark:from-blue-950/30 dark:via-zinc-950 dark:to-teal-950/20">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
          <Link
            href="/#technical-studies"
            className="text-sm font-medium text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
          >
            ← Back to Portfolio
          </Link>

          <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Technical Studies
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Selected Studies in Statistical Computing, Machine Learning, and
            Algorithms
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            A curated collection of technical work from my academic training,
            highlighting statistical modeling, Bayesian computation, machine
            learning, algorithms, and analytical problem solving.
          </p>
        </div>
      </section>

      {/* Studies */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Selected Work
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Technical Studies
          </h2>

          <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
            These studies highlight selected technical work with an emphasis on
            methods, implementation, statistical reasoning, and analytical
            problem solving.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {technicalStudies.map((study, index) => (
            <Link
              key={study.slug}
              href={`/technical-studies/${study.slug}`}
              className="group block rounded-3xl border border-zinc-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-900 dark:hover:shadow-black/20"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
                  {study.category}
                </p>

                <span className="text-sm font-medium text-zinc-400 dark:text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {study.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
                {study.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        Designed &amp; Developed by Martin Brown · © 2026
      </footer>
    </main>
  );
}