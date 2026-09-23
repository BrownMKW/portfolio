import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_35%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-32">
          <div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {portfolio.name}
            </h1>

            <p className="mt-5 text-sm font-medium uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400 lg:whitespace-nowrap">
              Data Science and Analytics · Machine Learning · Artificial
              Intelligence
            </p>

            <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-600 dark:text-zinc-300">
              I build data-driven and AI systems that connect modeling,
              software engineering, experimentation, and real-world problem
              solving.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                View Projects
              </a>

              <a
                href="#experience"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Experience
              </a>

              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                LinkedIn
              </a>

              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-zinc-200 shadow-xl dark:border-zinc-800 sm:h-72 sm:w-72">
              <Image
                src="/headshot.png"
                alt="Martin Brown"
                fill
                sizes="(max-width: 640px) 256px, 288px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
      >
        <SectionHeader
          label="Featured Work"
          title="Building real AI/ML products."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.featuredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              status={project.status}
              tags={project.tags}
            />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <SectionHeader
            label="Experience"
            title="Industry, research, and academic experience."
          />

          <div className="space-y-5">
            {portfolio.experience.map((item) => (
              <article
                key={`${item.role}-${item.organization}`}
                className="rounded-3xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>

                    <p className="mt-1 text-zinc-600 dark:text-zinc-300">
                      {item.organization}
                    </p>
                  </div>

                  <p className="shrink-0 text-sm text-zinc-500">
                    {item.dates}
                  </p>
                </div>

                <p className="mt-5 max-w-4xl leading-7 text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition hover:opacity-60"
            >
              View full experience on LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
      >
        <SectionHeader
          label="Education"
          title="Academic background."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.education.map((item) => (
            <article
              key={`${item.degree}-${item.institution}`}
              className="rounded-3xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
            >
              <p className="text-sm text-zinc-500">{item.dates}</p>

              <h3 className="mt-3 text-xl font-semibold">{item.degree}</h3>

              <p className="mt-2 font-medium text-zinc-700 dark:text-zinc-200">
                {item.field}
              </p>

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
                {item.institution}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Project Lab + Research */}
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-24 sm:px-8 lg:grid-cols-2">
          <div
            id="lab"
            className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Project Lab
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Experiments, coursework, and smaller builds.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-zinc-600 dark:text-zinc-300">
              A separate space for technical exercises, prototypes, academic
              projects, model experiments, applications, and hands-on learning
              that support the larger portfolio.
            </p>
          </div>

          <div
            id="research"
            className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Research & Publications
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Applied AI research and published work.
            </h2>

            <div className="mt-8 space-y-4">
              {portfolio.publications.map((publication) => (
                <a
                  key={publication.title}
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-zinc-200 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-700"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                    {publication.authorship} · {publication.venue} ·{" "}
                    {publication.year}
                  </p>

                  <h3 className="mt-2 font-semibold leading-6">
                    {publication.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
      >
        <div className="rounded-3xl bg-zinc-950 px-8 py-12 text-white dark:bg-white dark:text-zinc-950 sm:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-60">
            Contact
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Interested in data science and analytics, machine learning, or AI
            engineering positions.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 opacity-70">
            Connect with me through LinkedIn. Additional professional contact
            options will be added as the portfolio develops.
          </p>

          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-800"
          >
            LinkedIn
          </a>

          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-block rounded-full border border-white/30 px-6 py-3 text-sm font-medium transition hover:bg-white/10 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © 2026 Martin Brown
      </footer>
    </main>
  );
}