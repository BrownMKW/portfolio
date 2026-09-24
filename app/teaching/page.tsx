import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function TeachingPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />

      <section className="border-b border-zinc-200 bg-gradient-to-br from-blue-50/70 via-white to-teal-50/60 dark:border-zinc-800 dark:from-blue-950/30 dark:via-zinc-950 dark:to-teal-950/20">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
          <Link
            href="/#experience"
            className="text-sm font-medium text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
          >
            ← Back to Experience
          </Link>

          <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Teaching
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Computer Science and AI Education
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            A closer look at the courses I have taught, the technical topics
            covered, and the assignments and projects used to connect theory
            with implementation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
              Courses
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Course Coverage
            </h2>

            <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
              Undergraduate and graduate courses across artificial
              intelligence, machine learning, information retrieval, robotics,
              NLP, deep learning, big data, and related areas.
            </p>
          </article>

          <article className="rounded-3xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
              Topics
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Technical Breadth
            </h2>

            <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
              Each course page will outline the major concepts, algorithms,
              tools, and technical themes covered throughout the semester.
            </p>
          </article>

          <article className="rounded-3xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
              Assignments
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Applied Learning
            </h2>

            <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
              Selected programming assignments, projects, and exercises will
              demonstrate how course concepts were translated into hands-on
              work.
            </p>
          </article>

          <article className="rounded-3xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
              Materials
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Course Organization
            </h2>

            <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
              Syllabi and course materials will help organize each course by
              topic, level, assignments, and technical coverage.
            </p>
          </article>
        </div>
      </section>

      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        Designed &amp; Developed by Martin Brown · © 2026
      </footer>
    </main>
  );
}