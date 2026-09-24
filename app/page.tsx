import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { portfolio } from "@/data/portfolio";

const technicalStudies = [
  {
    category: "Algorithms · Graph Theory",
    title: "Exam Timetabling with Greedy Graph Coloring",
    description:
      "Constructed an exam-conflict graph from 33,996 enrollment records covering 7,896 students and 800 exams, then applied largest-first greedy graph coloring to produce a feasible 18-timeslot schedule.",
    tags: ["Python", "NetworkX", "Graph Theory", "Scheduling"],
  },
  {
    category: "Statistical Modeling",
    title: "Hierarchical and Longitudinal Modeling in R",
    description:
      "Applied two- and three-level mixed-effects models to educational and longitudinal datasets, including random effects, ICC estimation, growth modeling, cross-level interactions, and variance decomposition.",
    tags: ["R", "lme4", "Mixed Effects", "Longitudinal Analysis"],
  },
  {
    category: "Bayesian Statistics",
    title: "Bayesian Probit and Finite-Mixture Modeling",
    description:
      "Applied MCMC-based latent-variable models including binary and ordered probit regression and finite-mixture regression, with posterior estimation, credible intervals, latent classes, and model comparison.",
    tags: ["Python", "Bayesian Statistics", "MCMC", "Mixture Models"],
  },
];

export default function Home() {
  const featuredProjects = portfolio.featuredProjects.filter(
    (project) =>
      project.name !== "Technical Studies" && project.name !== "Teaching",
  );

  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-blue-50/70 via-white to-teal-50/60 dark:border-zinc-800 dark:from-blue-950/30 dark:via-zinc-950 dark:to-teal-950/20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-32">
          <div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {portfolio.name}
            </h1>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300 lg:whitespace-nowrap">
              {portfolio.title}
            </p>

            <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-700 dark:text-zinc-300">
              {portfolio.hero}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
              >
                View Projects
              </a>

              <a
                href="#experience"
                className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
              >
                Experience
              </a>

              <a
                href="#contact"
                className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-xl ring-1 ring-zinc-200 dark:border-zinc-950 dark:ring-zinc-800 sm:h-72 sm:w-72">
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

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
      >
        <div className="rounded-3xl border border-zinc-200 bg-blue-50/60 p-8 dark:border-zinc-800 dark:bg-blue-950/20 sm:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            About Me
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold text-zinc-950 dark:text-white">
              Hi there! I&apos;m Martin.
            </span>{" "}
            {portfolio.about}
          </p>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-b border-zinc-200 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-900/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <SectionHeader
            label="Experience"
            title="Industry, Research, and Academic Experience."
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

                    <p className="mt-1 font-medium text-blue-700 dark:text-blue-300">
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
              className="text-sm font-medium text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
            >
              View full experience on LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
      >
        <SectionHeader
          label="Featured Projects"
          title="Products I’m Building."
        />

        <p className="mb-10 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-300">
          A growing collection of AI, machine learning, data, and software
          products designed to demonstrate end-to-end technical development.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
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

      {/* Research & Applied Work */}
      <section
        id="research"
        className="border-y border-zinc-200 bg-gradient-to-br from-blue-50/50 via-zinc-50 to-teal-50/40 dark:border-zinc-800 dark:from-blue-950/20 dark:via-zinc-900/50 dark:to-teal-950/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <SectionHeader
            label="Research & Applied Work"
            title="Research, Publications, and Applied Technical Work."
          />

          <p className="mb-10 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-300">
            Selected research and applied work spanning machine learning, natural
            language processing, statistical modeling, and data-driven problem
            solving.
          </p>

          {/* Applied Research Projects */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Selected Applied Work
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {portfolio.researchProjects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-3xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {project.name}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Academic Work and Publications */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                Graduate Research
              </p>

              <div className="space-y-4">
                {portfolio.academicWork.map((work) => (
                  <a
                    key={work.title}
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                      {work.type} · {work.institution} · {work.year}
                    </p>

                    <h3 className="mt-3 font-semibold leading-6">
                      {work.title}
                    </h3>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                Publications
              </p>

              <div className="space-y-4">
                {portfolio.publications.map((publication) => (
                  <a
                    key={publication.title}
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-zinc-200 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
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
        </div>
      </section>

      {/* Technical Studies */}
      <section
        id="technical-studies"
        className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
      >
        <SectionHeader
          label="Technical Studies"
          title="Selected Academic and Technical Studies."
        />

        <p className="mb-10 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-300">
          Selected work from my academic training highlighting statistical
          computing, machine learning, mathematical modeling, algorithms, and
          analytical problem solving.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {technicalStudies.map((study) => (
            <article
              key={study.title}
              className="rounded-3xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
                {study.category}
              </p>

              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                {study.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
                {study.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/technical-studies"
            className="text-sm font-medium text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
          >
            View all Technical Studies →
          </Link>
        </div>
      </section>

      {/* Teaching */}
      <section
        id="teaching"
        className="border-y border-zinc-200 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-900/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <SectionHeader
            label="Teaching"
            title="Teaching Computer Science, AI, and Data Science."
          />

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950 sm:p-10">
            <p className="max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Selected teaching work includes course development, lectures,
              assignments, projects, and instructional material created for
              undergraduate and graduate computer science courses.
            </p>

            <div className="mt-8">
              <Link
                href="/teaching"
                className="text-sm font-medium text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
              >
                View Teaching →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
      >
        <SectionHeader label="Education" title="Academic Background." />

        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.education.map((item) => (
            <article
              key={`${item.degree}-${item.institution}`}
              className="rounded-3xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
            >
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {item.dates}
              </p>

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

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 pb-24 sm:px-8"
      >
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-blue-50 via-white to-teal-50 px-8 py-12 dark:border-zinc-800 dark:from-blue-950/30 dark:via-zinc-950 dark:to-teal-950/20 sm:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s Connect.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">
            I am interested in opportunities across data science, machine
            learning, AI engineering, applied AI, applied science, statistical
            modeling, and related technical roles. You can connect with me on
            LinkedIn or reach out directly.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              LinkedIn
            </a>

            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        Designed &amp; Developed by Martin Brown · © 2026
      </footer>
    </main>
  );
}