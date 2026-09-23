import Image from "next/image";
import Navbar from "@/components/Navbar";
import { portfolio } from "@/data/portfolio";

const featuredProjects = [
  {
    name: "ATLAS",
    description:
      "A personal AI operating system focused on knowledge retrieval, memory, tools, and intelligent workflows.",
    status: "In Development",
    tags: ["AI", "RAG", "LLMs", "Full Stack"],
  },
  {
    name: "FoodFlow",
    description:
      "An intelligent food platform combining recommendations, inventory awareness, personalization, and forecasting.",
    status: "Planned",
    tags: ["Recommenders", "ML", "Forecasting"],
  },
  {
    name: "SignalTrack",
    description:
      "Predictive trend intelligence for changing markets, prices, and career data over time.",
    status: "Planned",
    tags: ["Data Engineering", "NLP", "Time Series"],
  },
  {
    name: "RoamPlan",
    description:
      "An intelligent planning system combining recommendations, routing, constraints, and real-world discovery.",
    status: "Planned",
    tags: ["Optimization", "Graphs", "AI"],
  },
  {
    name: "SkillForge",
    description:
      "An adaptive learning engine designed to estimate mastery, identify weaknesses, and choose what to teach next.",
    status: "Planned",
    tags: ["Adaptive Learning", "ML", "AI"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_35%)]" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:py-32">
          {/* Left side */}
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Data Science and Analytics · Machine Learning · Artificial
              Intelligence
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {portfolio.name}
            </h1>

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
                href="#contact"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right side: headshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-zinc-200 shadow-xl dark:border-zinc-800 sm:h-72 sm:w-72">
              <Image
                src="/headshot.png"
                alt="Martin Brown"
                fill
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
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Featured Work
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Building real AI/ML products.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className="group rounded-3xl border border-zinc-200 bg-zinc-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold">{project.name}</h3>

                <span className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                  {project.status}
                </span>
              </div>

              <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-sm font-medium">
                Case study coming as the project develops →
              </p>
            </article>
          ))}
        </div>
      </section>

{/* Experience */}
<section
  id="experience"
  className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
>
  <div className="mb-12">
    <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
      Experience
    </p>

    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
      Industry and applied AI experience.
    </h2>
  </div>

  <div className="space-y-6">
    <article className="rounded-3xl border border-zinc-200 p-7 dark:border-zinc-800">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
        <div>
          <h3 className="text-xl font-semibold">
            Data Scientist
          </h3>

          <p className="mt-1 text-zinc-600 dark:text-zinc-300">
            Equifax · Atlanta, Georgia
          </p>
        </div>

        <p className="text-sm text-zinc-500">
          2022 – 2024
        </p>
      </div>

      <p className="mt-5 max-w-4xl leading-7 text-zinc-600 dark:text-zinc-300">
        Developed statistical and machine learning solutions for large-scale
        credit-risk data, including time-series modeling, SQL-based data
        pipelines, model evaluation, and cloud-based implementation.
      </p>
    </article>

    <article className="rounded-3xl border border-zinc-200 p-7 dark:border-zinc-800">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
        <div>
          <h3 className="text-xl font-semibold">
            Data Science Researcher
          </h3>

          <p className="mt-1 text-zinc-600 dark:text-zinc-300">
            Kennesaw State University
          </p>
        </div>

        <p className="text-sm text-zinc-500">
          Applied AI Research
        </p>
      </div>

      <p className="mt-5 max-w-4xl leading-7 text-zinc-600 dark:text-zinc-300">
        Conducted applied AI and NLP research focused on behavioral-health
        detection from public-safety narratives, human-in-the-loop learning,
        attention-based neural models, and collaboration with domain experts.
      </p>
    </article>
  </div>
</section>

      {/* Project Lab + Background */}
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 lg:grid-cols-2">
          <div id="lab">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Project Lab
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Experiments, coursework, and smaller builds.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-zinc-600 dark:text-zinc-300">
              A separate space for technical exercises, prototypes, academic
              projects, model experiments, and hands-on learning that support
              the larger portfolio.
            </p>
          </div>

          <div id="background">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Research & Experience
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Applied work beyond the portfolio.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-zinc-600 dark:text-zinc-300">
              Industry data science, applied AI research, publications, and
              academic work will live here alongside the product portfolio.
            </p>
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
            engineering?
          </h2>

          <p className="mt-5 max-w-2xl leading-7 opacity-70">
            Resume, GitHub, LinkedIn, publications, and direct contact
            information will be added here.
          </p>
        </div>
      </section>

      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © 2026 Martin Brown
      </footer>
    </main>
  );
}