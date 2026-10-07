import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import HierarchicalLongitudinalCaseStudy from "@/components/HierarchicalLongitudinalCaseStudy";
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

  if (study.slug === "exam-timetabling") {
    return <ExamTimetablingCaseStudy />;
  }

  if (study.slug === "hierarchical-longitudinal-modeling") {
    return <HierarchicalLongitudinalCaseStudy />;
  }

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
              {study.summary}
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
        <section className="border-b border-zinc-200 pb-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Problem &amp; Objective
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-600 dark:text-zinc-300">
            {study.problem}
          </p>
        </section>

        <section className="border-b border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Approach
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-600 dark:text-zinc-300">
            {study.overview.join(" ")}
          </p>
        </section>

        <section className="border-b border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            My Contribution
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-600 dark:text-zinc-300">
            {study.contribution.join(" ")}
          </p>
        </section>

        <section className="border-b border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Methodology
          </h2>

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
        </section>

        <section className="border-b border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Results
          </h2>

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
        </section>

        <section className="border-b border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Discussion
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-600 dark:text-zinc-300">
            {study.discussion?.join(" ") ??
              "The analysis demonstrates how the selected methods can be applied to a structured analytical problem while identifying the assumptions that affect interpretation."}
          </p>
        </section>

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

// ------------------------------------------------------------
// EXAM TIMETABLING CASE STUDY
// ------------------------------------------------------------

const prose =
  "text-[17px] leading-[1.72] text-zinc-700 dark:text-zinc-300";

const section =
  "border-b border-zinc-200 py-9 dark:border-zinc-800 sm:py-10";

const heading =
  "text-2xl font-semibold tracking-tight sm:text-3xl";

type StudyFigureProps = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  className?: string;
  imageClassName?: string;
  enhanceEdges?: boolean;
  width?: number;
  height?: number;
};

function StudyFigure({
  src,
  alt,
  title,
  caption,
  className = "",
  imageClassName = "",
  enhanceEdges = false,
  width = 1800,
  height = 1350,
}: StudyFigureProps) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white p-2.5 dark:border-zinc-800 sm:p-3">
        <div className="relative isolate">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 800px"
            className={`h-auto w-full ${imageClassName}`}
          />

          {enhanceEdges &&
            [1, 2, 3].map((layer) => (
              <Image
                key={layer}
                src={src}
                alt=""
                aria-hidden="true"
                width={width}
                height={height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 800px"
                className="pointer-events-none absolute inset-0 h-full w-full mix-blend-multiply"
              />
            ))}
        </div>
      </div>

      <figcaption className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
        <span className="font-medium text-zinc-700 dark:text-zinc-300">
          {title}
        </span>{" "}
        {caption}
      </figcaption>
    </figure>
  );
}

function ExamTimetablingCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />

      <header className="border-b border-zinc-200 bg-gradient-to-br from-blue-50/60 via-white to-teal-50/40 dark:border-zinc-800 dark:from-blue-950/30 dark:via-zinc-950 dark:to-teal-950/20">
        <div className="mx-auto max-w-6xl px-6 pb-10 pt-12 sm:px-8 sm:pb-12 sm:pt-14">
          <Link
            href="/technical-studies"
            className="text-sm font-medium text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
          >
            ← Back to Technical Studies
          </Link>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
            Technical Study
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Exam Timetabling with Greedy Graph Coloring
          </h1>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.11em] text-zinc-500 dark:text-zinc-400">
            Algorithms · Graph Theory · Optimization
          </p>

          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Graduate coursework in Data Science and Analytics · Kennesaw
            State University
          </p>

          <div className="mt-8 max-w-4xl border-l-2 border-blue-500 pl-5 dark:border-blue-400 sm:pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Abstract
            </p>

            <p className="mt-3 text-[18px] leading-[1.72] text-zinc-700 dark:text-zinc-300 sm:text-[19px]">
              University examination timetabling requires assigning
              examinations to periods while satisfying overlapping
              student-enrollment constraints. I investigated graph coloring
              as a method for constructing a feasible timetable, representing
              examinations as vertices and shared-student conflicts as edges.
              Using a largest-first greedy coloring heuristic, I assigned 800
              examinations to 18 timeslots within a 24-period limit.
              Validation confirmed that the assignment contained zero
              shared-student conflicts. The study demonstrates graph
              construction, structural analysis, heuristic optimization, and
              computational verification on a large scheduling dataset.
            </p>
          </div>

          <div className="mt-7 max-w-5xl border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Tools &amp; Skills
            </h2>

            <dl className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-[145px_minmax(0,1fr)]">
              <dt className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Technology
              </dt>

              <dd className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Python · pandas · NumPy · NetworkX · Matplotlib
              </dd>

              <dt className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Methods &amp; Skills
              </dt>

              <dd className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Data Cleaning &amp; Validation · Graph Theory · Network
                Analysis · Sparse Graph Construction · Largest-First Greedy
                Coloring · Heuristic Optimization · Scheduling Constraint
                Modeling · Algorithm Verification · Data Visualization ·
                Reproducibility
              </dd>
            </dl>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-x-7 gap-y-5 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:grid-cols-4">
            {[
              ["800", "Examinations"],
              ["10,113", "Conflict edges"],
              ["18", "Timeslots used"],
              ["0", "Conflicts remaining"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-semibold tracking-tight sm:text-[28px]">
                  {value}
                </p>

                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 sm:px-8">
        <section className={section}>
          <h2 className={heading}>Problem &amp; Objective</h2>

          <p className={`${prose} mt-5`}>
            University examination scheduling involves assigning courses to
            examination periods while accounting for students enrolled in
            multiple courses. Two exams taken by the same student cannot occur
            simultaneously. Although this constraint is straightforward,
            applying it across hundreds of examinations creates a combinatorial
            scheduling problem in which individual assignments interact through
            shared enrollments. The analysis used a Nottingham examination
            dataset containing 33,997 student–exam enrollment records,
            representing 7,896 students and 800 distinct examinations. The
            objective was to construct a conflict-free schedule within a
            reference limit of 24 available timeslots.
          </p>

          <p className={`${prose} mt-3`}>
            The problem requires both accurate identification of conflicting
            examination pairs and an effective method for assigning compatible
            examinations to the same period. Every omitted conflict creates the
            possibility of an invalid timetable, making data processing and
            graph construction essential parts of the optimization workflow.
            Once the conflicts are represented mathematically, graph-coloring
            algorithms can be applied to produce and evaluate candidate
            schedules.
          </p>
        </section>

        <section className={section}>
          <h2 className={heading}>
            Representing Scheduling Conflicts as a Graph
          </h2>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.04fr_0.96fr]">
            <div>
              <p className={prose}>
                The examination timetable can be represented as an undirected
                graph in which each vertex corresponds to an examination and
                each edge represents a scheduling conflict. An edge connects
                two examinations whenever at least one student is enrolled in
                both. Because the scheduling incompatibility applies in either
                direction, the resulting graph is undirected. A single shared
                student is sufficient to establish a conflict, regardless of
                how many additional students share those examinations.
              </p>

              <div
                role="math"
                aria-label="G equals the graph with vertex set V and edge set E"
                className="my-5 text-center font-serif text-2xl text-zinc-900 dark:text-zinc-100"
              >
                <i>G</i> = (<i>V</i>, <i>E</i>)
              </div>

              <p className={prose}>
                Here <span className="font-serif italic">V</span> is the set of
                800 examinations and{" "}
                <span className="font-serif italic">E</span> contains the
                incompatible examination pairs. The degree of a vertex, denoted{" "}
                <span className="font-serif italic">d(v)</span>, measures the
                number of examinations with which it conflicts. Higher-degree
                examinations impose more scheduling restrictions because they
                cannot share a timeslot with a larger number of neighboring
                vertices.
              </p>
            </div>

            <StudyFigure
              src="/technical-studies/exam-timetabling/explanatory_conflict_graph_publication.png"
              alt="Example conflict graph showing examinations as vertices and shared-student conflicts as edges."
              title="From enrollment overlap to scheduling constraints."
              caption="Connected examinations must receive different colors, with each color representing a timeslot."
              width={1600}
              height={1200}
            />
          </div>
        </section>

        <section className={section}>
          <h2 className={heading}>Constructing and Examining the Network</h2>

          <p className={`${prose} mt-5`}>
            I processed the enrollment dataset as a two-column table containing
            student and examination identifiers. Records were grouped by
            student, and each distinct pair of examinations within a
            student&apos;s enrollment list generated a potential conflict edge.
            Duplicate edges were consolidated to produce a simple, undirected
            NetworkX graph. This approach constructs the conflict network
            directly from enrollment relationships and avoids unnecessary
            comparisons between unrelated examinations. Consistent vertex
            ordering was used to make the subsequent coloring procedure
            reproducible.
          </p>

          <p className={`${prose} mt-3`}>
            The completed network contains 800 vertices and 10,113 unique
            conflict edges. Its density is approximately 3.16%, meaning that
            relatively few of the possible examination pairs are directly
            incompatible. The visualization reveals a substantial connected
            network containing several identifiable communities. These
            communities describe structural relationships among examinations
            and help explain how enrollment patterns organize the scheduling
            problem.
          </p>

          <StudyFigure
            className="mx-auto mt-7 max-w-[680px]"
            enhanceEdges
            src="/technical-studies/exam-timetabling/full_network_forceatlas2_communities.png"
            alt="Complete examination-conflict network with vertices colored by detected graph community."
            title="Complete examination-conflict network."
            caption="The visualization contains all 800 examinations and 10,113 conflict edges. Colors represent network communities rather than assigned timeslots."
            width={2200}
            height={1700}
          />

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[0.94fr_1.06fr]">
            <StudyFigure
              src="/technical-studies/exam-timetabling/degree_distribution_histogram.png"
              alt="Histogram showing the distribution of examination-conflict degrees."
              title="Distribution of examination conflicts."
              caption="Most examinations have relatively few conflicts, while a smaller number are connected to substantially more examinations."
              width={1800}
              height={1350}
            />

            <div>
              <p className={prose}>
                The average vertex degree is 25.28, while the median is 19. The
                highest-degree examination conflicts with 203 other exams,
                demonstrating considerable variation in scheduling restrictions.
                The network contains five connected components, with 789
                examinations belonging to the largest component and two
                examinations having no conflicts at all.
              </p>

              <p className={`${prose} mt-3`}>
                This degree distribution provides an important motivation for
                the coloring strategy. Highly connected examinations are more
                restrictive because they cannot share a period with many other
                exams. Scheduling these vertices early can reduce difficulties
                later in the assignment process. The graph&apos;s degree
                distribution therefore provides useful structural information
                for selecting a heuristic.
              </p>
            </div>
          </div>
        </section>

        <section className={section}>
          <h2 className={heading}>Largest-First Greedy Coloring</h2>

          <p className={`${prose} mt-5`}>
            Graph coloring assigns a color to each vertex while requiring
            adjacent vertices to receive different colors. For examination
            timetabling, each color corresponds to an available examination
            period. The mathematical formulation therefore defines a coloring
            function that maps examinations to timeslots while enforcing the
            incompatibility constraint for every conflict edge.
          </p>

          <div className="my-6 space-y-3 text-center font-serif text-xl text-zinc-900 dark:text-zinc-100 sm:text-2xl">
            <div
              role="math"
              aria-label="c maps vertices V to colors 1 through k"
            >
              <i>c</i> : <i>V</i> → {"{1, 2, …, k}"}
            </div>

            <div
              role="math"
              aria-label="For every edge u v in E, the color of u must differ from the color of v"
            >
              ∀ {"{"}
              <i>u</i>, <i>v</i>
              {"}"} ∈ <i>E</i>, <i>c</i>(<i>u</i>) ≠ <i>c</i>(<i>v</i>)
            </div>
          </div>

          <p className={prose}>
            The function assigns one of{" "}
            <span className="font-serif italic">k</span> available colors to
            every vertex. The constraint requires different colors for the
            endpoints of every conflict edge. A valid coloring consequently
            produces a schedule in which no student has two examinations
            assigned to the same period.
          </p>

          <p className={`${prose} mt-3`}>
            I implemented the largest-first greedy coloring heuristic, which
            begins by sorting examinations in descending order of vertex
            degree. The algorithm then processes the examinations in that
            order, assigning each the lowest-numbered color that has not already
            been assigned to one of its colored neighbors. This first-fit
            procedure prioritizes highly constrained examinations and constructs
            a feasible solution incrementally. Its computational efficiency
            makes it practical for relatively large graphs, although the number
            of colors produced depends on the ordering and structure of the
            network.
          </p>

          <div className="mt-7 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <StudyFigure
              src="/technical-studies/exam-timetabling/exams_per_timeslot_publication.png"
              alt="Bar chart showing the number of examinations assigned to each of the 18 timeslots."
              title="Examinations assigned to each timeslot."
              caption="The greedy algorithm assigned all 800 examinations across 18 periods, with earlier colors generally accommodating more examinations."
              width={1800}
              height={1350}
            />

            <div>
              <p className={prose}>
                The algorithm successfully assigned all 800 examinations using
                18 colors, remaining within the 24-period limit. The
                distribution across timeslots is uneven: the first period
                contains 126 examinations, whereas the eighteenth contains only
                two. This pattern reflects the first-fit behavior of greedy
                coloring, which repeatedly attempts to reuse existing colors
                before introducing additional ones.
              </p>

              <p className={`${prose} mt-3`}>
                The resulting assignment demonstrates that the conflict network
                can be colored using fewer periods than the available limit.
                These groups satisfy the modeled examination conflicts, although
                their operational use would still depend on additional
                scheduling requirements.
              </p>
            </div>
          </div>
        </section>

        <section className={section}>
          <h2 className={heading}>Results and Verification</h2>

          <p className={`${prose} mt-5`}>
            The final schedule was evaluated against the original conflict
            network to establish that every examination received a timeslot and
            that no conflicting pair received the same assignment. The
            verification procedure examined all 10,113 graph edges and compared
            the colors assigned to their endpoints. All 800 examinations were
            assigned successfully, and the validation identified zero scheduling
            conflicts. The recorded execution time for data loading, graph
            construction, coloring, and verification was approximately 0.669
            seconds, excluding visualization generation.
          </p>

          <p className={`${prose} mt-3`}>
            These findings connect the network structure to the final
            optimization result. Although individual examinations may conflict
            with dozens or even hundreds of others, the overall graph is
            sufficiently sparse to permit many examinations to share a period.
            The largest-first heuristic takes advantage of that compatibility
            while processing highly constrained examinations early. The
            completed assignment is therefore supported by both the structural
            characteristics of the network and explicit computational
            verification.
          </p>

          <div className="mt-7 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className={prose}>
                The timeslot-ordered adjacency matrix provides an additional
                visual representation of the assignment. Examinations are
                grouped according to their assigned colors, producing diagonal
                blocks corresponding to examinations scheduled in the same
                period. Because the coloring is valid, these blocks contain no
                conflict edges. Conflict marks outside the diagonal blocks
                represent examinations scheduled in different periods.
              </p>

              <p className={`${prose} mt-3`}>
                The theoretical minimum number of colors needed to color a graph
                is known as its chromatic number, denoted{" "}
                <span className="font-serif italic">χ(G)</span>. The 18-color
                solution establishes an upper bound on this unknown optimum:
              </p>

              <div
                role="math"
                aria-label="The chromatic number of G is less than or equal to 18"
                className="my-5 text-center font-serif text-2xl text-zinc-900 dark:text-zinc-100"
              >
                χ(<i>G</i>) ≤ 18
              </div>

              <p className={prose}>
                This inequality confirms that a valid coloring exists using at
                most 18 timeslots. The greedy heuristic establishes feasibility;
                determining whether fewer timeslots are possible requires
                additional optimization or theoretical analysis.
              </p>
            </div>

            <StudyFigure
              src="/technical-studies/exam-timetabling/adjacency_matrix_timeslot_order.png"
              alt="Adjacency matrix ordered by examination timeslot, showing empty diagonal conflict blocks."
              title="Timeslot-ordered adjacency matrix."
              caption="The absence of conflict edges within each diagonal block agrees with the edge-by-edge validation of the schedule."
              width={1800}
              height={1800}
            />
          </div>
        </section>

        <section className={section}>
          <h2 className={heading}>Discussion &amp; Limitations</h2>

          <p className={`${prose} mt-5`}>
            The analysis demonstrates how examination scheduling can be
            formulated as a graph-coloring problem with explicit mathematical
            constraints. Graph construction captures the relationships between
            examinations, structural analysis identifies highly constrained
            vertices, and greedy coloring produces an efficient assignment. The
            final solution satisfies every modeled shared-student conflict and
            requires only 18 of the 24 available timeslots. Its relatively low
            computational cost makes the approach suitable for constructing an
            initial feasible examination timetable.
          </p>

          <p className={`${prose} mt-3`}>
            The principal limitation is that largest-first greedy coloring does
            not guarantee an optimal solution. Different vertex orderings or
            more advanced coloring algorithms may produce assignments using
            fewer timeslots. The scheduling model also focuses specifically on
            student-enrollment conflicts and excludes additional operational
            constraints, including room capacity, examination duration, faculty
            availability, invigilation requirements, and preferences concerning
            consecutive examinations. The resulting timetable should therefore
            be interpreted as a validated conflict-free assignment under the
            modeled constraints.
          </p>
        </section>

        <section className="py-9 sm:py-10">
          <h2 className={heading}>My Contribution</h2>

          <p className={`${prose} mt-5`}>
            I developed the examination-timetabling analysis from data
            processing through algorithm implementation and validation. This
            included preparing the student-enrollment records, constructing the
            undirected conflict graph, analyzing degree distributions and
            network connectivity, and implementing largest-first greedy graph
            coloring in Python. I evaluated the resulting timeslot assignments,
            verified that every conflicting examination pair received different
            colors, and produced the visualizations used to examine the graph
            structure and scheduling results. I also refined the implementation
            to support efficient graph construction, reproducible execution, and
            systematic verification. The project demonstrates my ability to
            translate a practical scheduling problem into a mathematical model,
            implement an optimization heuristic, and evaluate its results
            against clearly defined constraints.
          </p>
        </section>
      </article>

      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        Designed &amp; Developed by Martin Brown · © 2026
      </footer>
    </main>
  );
}