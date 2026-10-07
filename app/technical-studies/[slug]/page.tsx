import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import { technicalStudies } from "@/data/technicalStudies";

type TechnicalStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return technicalStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function TechnicalStudyPage({
  params,
}: TechnicalStudyPageProps) {
  const { slug } = await params;

  const study = technicalStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const isExamTimetabling = study.slug === "exam-timetabling";

  const toolsAndSkills =
    study.toolsAndSkills && study.toolsAndSkills.length > 0
      ? study.toolsAndSkills
      : Array.from(new Set([...study.tools, ...study.tags]));

  const methodsAndSkills = toolsAndSkills.filter(
    (item) => !study.tools.includes(item),
  );

  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-zinc-200 bg-gradient-to-br from-blue-50/60 via-white to-teal-50/40 dark:border-zinc-800 dark:from-blue-950/30 dark:via-zinc-950 dark:to-teal-950/20">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-16">
          <Link
            href="/technical-studies"
            className="text-sm font-medium text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
          >
            ← Back to Technical Studies
          </Link>

          <p className="mt-9 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Technical Study
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {study.title}
          </h1>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
            {study.category}
          </p>

          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            {study.context}
          </p>

          <div className="mt-9 max-w-5xl border-l-2 border-blue-500 pl-6 dark:border-blue-400">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Abstract
            </p>

            <p className="mt-3 text-lg leading-8 text-zinc-700 dark:text-zinc-300 sm:text-xl sm:leading-9">
              {isExamTimetabling
                ? "I modeled a large exam-scheduling problem as a graph-coloring task, transforming student-enrollment relationships into a complete conflict network and applying a largest-first greedy coloring heuristic. The resulting schedule used 18 of the 24 available timeslots and contained zero same-timeslot conflicts."
                : study.summary}
            </p>
          </div>

          <div className="mt-9 max-w-5xl border-t border-zinc-200 pt-7 dark:border-zinc-800">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Tools &amp; Skills
            </p>

            <div className="mt-5 space-y-4">
              <div className="grid gap-2 sm:grid-cols-[150px_1fr]">
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  Technology
                </p>

                <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  {study.tools.join(" · ")}
                </p>
              </div>

              {methodsAndSkills.length > 0 && (
                <div className="grid gap-2 sm:grid-cols-[150px_1fr]">
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    Methods &amp; Skills
                  </p>

                  <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    {methodsAndSkills.join(" · ")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
        {/* Problem */}
        <section className="border-b border-zinc-200 pb-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Problem &amp; Objective
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-600 dark:text-zinc-300">
            {isExamTimetabling
              ? "The objective was to assign 800 exams to no more than 24 available timeslots while ensuring that no student was scheduled to take two exams simultaneously. Because overlapping student enrollments create incompatibilities between exams, the problem required identifying every conflicting exam pair across the full dataset and finding a schedule that respected all of those constraints."
              : study.problem}
          </p>
        </section>

        {/* Approach */}
        <section className="border-b border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Approach
          </h2>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <p className="text-lg leading-9 text-zinc-600 dark:text-zinc-300">
              {isExamTimetabling
                ? "I represented the scheduling problem as an undirected graph in which each vertex corresponded to an exam and an edge connected two exams whenever at least one student was enrolled in both. After constructing the complete conflict graph, I analyzed vertex degree, ordered exams from highest to lowest degree, and applied largest-first greedy graph coloring. Each color represented a timeslot, and the completed assignment was checked directly against the graph for remaining conflicts."
                : study.overview.join(" ")}
            </p>

            {isExamTimetabling && (
              <figure>
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
                  <Image
                    src="/technical-studies/exam-timetabling/explanatory_conflict_graph_publication.png"
                    alt="Example conflict graph showing exams as vertices and shared-student conflicts as edges."
                    width={1600}
                    height={1200}
                    className="h-auto w-full"
                  />
                </div>

                <figcaption className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">
                    Conflict-graph formulation.
                  </span>{" "}
                  Connected exams cannot share the same timeslot.
                </figcaption>
              </figure>
            )}
          </div>
        </section>

        {/* Contribution */}
        <section className="border-b border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            My Contribution
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-600 dark:text-zinc-300">
            {isExamTimetabling
              ? "I processed and validated the enrollment data, transformed student-exam relationships into the complete exam-conflict graph, analyzed graph structure and vertex degree, implemented the largest-first greedy coloring workflow, and independently verified the resulting schedule for conflicts. I also produced the analysis and visualizations used to interpret the network structure and final scheduling result."
              : study.contribution.join(" ")}
          </p>
        </section>

        {/* Methodology */}
        <section className="border-b border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Methodology
          </h2>

          {isExamTimetabling && (
            <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-600 dark:text-zinc-300">
              The workflow moved from enrollment processing to graph
              construction, structural analysis, greedy optimization, and
              explicit validation of the final schedule.
            </p>
          )}

          <ul className="mt-8 grid max-w-4xl gap-x-12 gap-y-4 sm:grid-cols-2">
            {study.methods.map((method) => (
              <li
                key={method}
                className="flex gap-3 text-base leading-7 text-zinc-600 dark:text-zinc-300"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-300" />
                <span>{method}</span>
              </li>
            ))}
          </ul>

          {isExamTimetabling && (
            <figure className="mt-12">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <Image
                  src="/technical-studies/exam-timetabling/full_network_forceatlas2_communities.png"
                  alt="Complete 800-exam conflict network colored by network community."
                  width={2200}
                  height={1700}
                  className="h-auto w-full"
                />
              </div>

              <figcaption className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  Complete exam-conflict network.
                </span>{" "}
                The graph contains all 800 exams and 10,113 conflict edges.
                Community encoding highlights densely connected groups within
                the overall scheduling structure.
              </figcaption>
            </figure>
          )}
        </section>

        {/* Structural Analysis */}
        {isExamTimetabling && (
          <section className="border-b border-zinc-200 py-16 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Structural Analysis
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-600 dark:text-zinc-300">
              Ordering the adjacency matrix by assigned timeslot provides a
              direct visual check of the final coloring. Each diagonal block
              corresponds to exams assigned to the same period. The absence of
              conflict marks within those blocks agrees with the independent
              validation result that no conflicting exam pair shares a
              timeslot.
            </p>

            <figure className="mt-10">
              <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
                <Image
                  src="/technical-studies/exam-timetabling/adjacency_matrix_timeslot_order.png"
                  alt="Adjacency matrix of the exam-conflict graph ordered by assigned timeslot."
                  width={1800}
                  height={1800}
                  className="h-auto w-full"
                />
              </div>

              <figcaption className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  Timeslot-ordered adjacency matrix.
                </span>{" "}
                Empty diagonal blocks indicate that no conflicts occur within
                an assigned timeslot.
              </figcaption>
            </figure>
          </section>
        )}

        {/* Results */}
        <section className="border-b border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Results
          </h2>

          {isExamTimetabling ? (
            <>
              <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-600 dark:text-zinc-300">
                The complete graph contained 800 exams and 10,113 conflict
                edges derived from 33,997 enrollment records across 7,896
                students. Largest-first greedy coloring produced a feasible
                assignment using 18 of the 24 available timeslots, and
                validation confirmed that no conflicting exam pair was assigned
                to the same period.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                  <p className="text-3xl font-semibold tracking-tight">800</p>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    Exams
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                  <p className="text-3xl font-semibold tracking-tight">
                    10,113
                  </p>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    Conflict edges
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                  <p className="text-3xl font-semibold tracking-tight">18</p>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    Feasible timeslots
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                  <p className="text-3xl font-semibold tracking-tight">0</p>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    Same-timeslot conflicts
                  </p>
                </div>
              </div>

              <div className="mt-12 grid gap-10 lg:grid-cols-2">
                <figure>
                  <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
                    <Image
                      src="/technical-studies/exam-timetabling/degree_distribution_histogram.png"
                      alt="Distribution of exam conflict degree."
                      width={1800}
                      height={1350}
                      className="h-auto w-full"
                    />
                  </div>

                  <figcaption className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">
                      Conflict-degree distribution.
                    </span>{" "}
                    Most exams have moderate conflict degree, while a smaller
                    number are substantially more constrained.
                  </figcaption>
                </figure>

                <figure>
                  <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
                    <Image
                      src="/technical-studies/exam-timetabling/exams_per_timeslot_publication.png"
                      alt="Number of exams assigned to each of the 18 greedy timeslots."
                      width={1800}
                      height={1350}
                      className="h-auto w-full"
                    />
                  </div>

                  <figcaption className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">
                      Exams per timeslot.
                    </span>{" "}
                    The final greedy solution uses 18 of the 24 available
                    periods.
                  </figcaption>
                </figure>
              </div>
            </>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {study.results.map((result) => (
                <p
                  key={result}
                  className="border-t border-zinc-300 pt-4 text-base leading-7 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
                >
                  {result}
                </p>
              ))}
            </div>
          )}
        </section>

        {/* Discussion */}
        <section className="border-b border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Discussion
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-600 dark:text-zinc-300">
            {isExamTimetabling
              ? "Representing the scheduling problem as a graph makes the conflict structure explicit and allows standard graph algorithms to be applied directly. The largest-first strategy prioritizes exams with the greatest number of conflicts so that highly constrained exams are handled earlier in the coloring process. The resulting schedule demonstrates that the complete examination set can be accommodated within the available 24-period limit while satisfying every modeled student conflict."
              : study.discussion?.join(" ") ??
                "The study demonstrates how the selected methods can be applied to a structured analytical problem while highlighting the assumptions that affect interpretation of the results."}
          </p>

          {isExamTimetabling && (
            <div className="mt-8 max-w-4xl border-l-2 border-blue-500 bg-blue-50/50 px-6 py-5 dark:border-blue-400 dark:bg-blue-950/20">
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold">Interpretation:</span> Eighteen
                timeslots are sufficient for this conflict graph under the
                modeled constraints. The greedy result does not prove that 18
                is the mathematically minimum possible number of timeslots.
              </p>
            </div>
          )}
        </section>

        {/* Limitations */}
        <section className="py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Limitations
          </h2>

          <ul className="mt-7 max-w-4xl space-y-5">
            {study.limitations.map((limitation) => (
              <li
                key={limitation}
                className="flex gap-3 text-base leading-8 text-zinc-600 dark:text-zinc-300"
              >
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                <span>{limitation}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        Designed &amp; Developed by Martin Brown · © 2026
      </footer>
    </main>
  );
}