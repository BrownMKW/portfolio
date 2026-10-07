import Link from "next/link";
import type { ReactNode } from "react";

import Navbar from "@/components/Navbar";

// ------------------------------------------------------------
// STYLING
// ------------------------------------------------------------

const prose =
  "text-[17px] leading-[1.72] text-zinc-700 dark:text-zinc-300";

const sectionStyle =
  "border-b border-zinc-200 py-9 dark:border-zinc-800 sm:py-10";

const headingStyle =
  "text-2xl font-semibold tracking-tight sm:text-3xl";

const subheadingStyle =
  "mt-8 text-xl font-semibold tracking-tight";

// ------------------------------------------------------------
// REUSABLE COMPONENTS
// ------------------------------------------------------------

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={sectionStyle}>
      <h2 className={headingStyle}>{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Paragraph({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`${prose} ${className}`}>{children}</p>;
}

function Equation({
  children,
  description,
}: {
  children: ReactNode;
  description: string;
}) {
  return (
    <div
      role="math"
      aria-label={description}
      className="my-6 overflow-x-auto py-2 text-center font-serif text-xl leading-relaxed text-zinc-950 dark:text-zinc-100 sm:text-2xl"
    >
      <div className="inline-block min-w-max px-3">{children}</div>
    </div>
  );
}

function Fraction({
  numerator,
  denominator,
}: {
  numerator: ReactNode;
  denominator: ReactNode;
}) {
  return (
    <span className="inline-flex flex-col items-center align-middle">
      <span className="w-full border-b border-current px-3 pb-1">
        {numerator}
      </span>

      <span className="px-3 pt-1">{denominator}</span>
    </span>
  );
}

// ------------------------------------------------------------
// VERIFIED RESULTS
// ------------------------------------------------------------

const studyResults = [
  {
    study: "Mathematics achievement",
    structure: "Students within schools",
    sample: ["7,185 students", "160 schools"],
    results: ["ICC: 0.1804", "18.04% between-school variance"],
  },
  {
    study: "Antisocial behavior",
    structure: "Repeated observations within individuals",
    sample: ["1,362 observations", "405 individuals"],
    results: [
      "ICC: 0.4787",
      "Age coefficient: 0.0754",
      "Age × sex interaction: p = 0.7152",
    ],
  },
  {
    study: "Reading development",
    structure: "Repeated observations within children and schools",
    sample: ["13,160 observations", "3,321 children", "254 schools"],
    results: [
      "Monthly growth: 1.6757",
      "Within-child variance: 81.34%",
      "Between-child variance: 8.91%",
      "Between-school variance: 9.75%",
    ],
  },
];

function ResultsTable() {
  return (
    <div className="my-7 overflow-x-auto border-y border-zinc-200 dark:border-zinc-800">
      <table className="w-full min-w-[680px] border-collapse text-left text-sm">
        <caption className="py-4 text-left text-base font-semibold text-zinc-900 dark:text-zinc-100">
          Summary of the three statistical analyses
        </caption>

        <thead>
          <tr className="border-b border-zinc-200 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            <th className="py-3 pr-5">Analysis</th>
            <th className="py-3 pr-5">Data structure</th>
            <th className="py-3 pr-5">Sample</th>
            <th className="py-3">Principal results</th>
          </tr>
        </thead>

        <tbody className="text-zinc-700 dark:text-zinc-300">
          {studyResults.map((study) => (
            <tr
              key={study.study}
              className="border-b border-zinc-200 align-top last:border-b-0 dark:border-zinc-800"
            >
              <td className="py-4 pr-5 font-semibold text-zinc-900 dark:text-zinc-100">
                {study.study}
              </td>

              <td className="py-4 pr-5">{study.structure}</td>

              <td className="py-4 pr-5">
                {study.sample.map((item) => (
                  <span key={item} className="block">
                    {item}
                  </span>
                ))}
              </td>

              <td className="py-4">
                {study.results.map((result) => (
                  <span key={result} className="block">
                    {result}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="pb-4 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
        Results are associated with their respective fitted models. Variance
        percentages describe estimated variance components, not percentages of
        variation explained by predictors.
      </p>
    </div>
  );
}

// ------------------------------------------------------------
// VARIANCE VISUALIZATION
// ------------------------------------------------------------

type VarianceSegment = {
  label: string;
  value: number;
  color: string;
};

function VarianceBar({
  title,
  segments,
  description,
}: {
  title: string;
  segments: VarianceSegment[];
  description: string;
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h4>

      <div
        role="img"
        aria-label={description}
        className="flex h-5 w-full overflow-hidden rounded-sm"
      >
        {segments.map((segment) => (
          <div
            key={segment.label}
            className={segment.color}
            style={{ width: `${segment.value}%` }}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3">
        {segments.map((segment) => (
          <div key={segment.label} className="flex items-start gap-2">
            <span
              className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-sm ${segment.color}`}
            />

            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {segment.value.toFixed(2)}%
              </p>

              <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                {segment.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ICCComparison() {
  return (
    <figure className="my-8 border-y border-zinc-200 py-6 dark:border-zinc-800">
      <figcaption>
        <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          Intraclass correlation across two applications
        </p>

        <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Estimated between-group and within-group variance proportions from
          the two-level random-intercept models.
        </p>
      </figcaption>

      <div className="mt-7 space-y-8">
        <VarianceBar
          title="Mathematics achievement"
          description="18.04 percent between schools and 81.96 percent within schools"
          segments={[
            {
              label: "Between schools",
              value: 18.04,
              color: "bg-blue-600",
            },
            {
              label: "Within schools",
              value: 81.96,
              color: "bg-slate-300 dark:bg-slate-600",
            },
          ]}
        />

        <VarianceBar
          title="Antisocial behavior"
          description="47.87 percent between individuals and 52.13 percent within individuals"
          segments={[
            {
              label: "Between individuals",
              value: 47.87,
              color: "bg-blue-600",
            },
            {
              label: "Within individuals",
              value: 52.13,
              color: "bg-slate-300 dark:bg-slate-600",
            },
          ]}
        />
      </div>
    </figure>
  );
}

// ------------------------------------------------------------
// IMPROVED RANDOM-EFFECTS VISUALIZATION
// ------------------------------------------------------------

function RandomEffectsIllustration() {
  const individuals = [
    {
      name: "Individual A",
      color: "#2563eb",
    },
    {
      name: "Individual B",
      color: "#0d9488",
    },
    {
      name: "Individual C",
      color: "#d97706",
    },
  ];

  const panels = [
    {
      title: "Random intercepts",
      subtitle: "Different starting levels · Shared slope",
      description:
        "Three illustrative individuals have different baseline outcomes but the same rate of change over time.",
      explanation:
        "Each individual has a different intercept, while the common slope produces parallel trajectories. The vertical separation remains constant over time.",
      paths: [
        "M70 180 L460 135",
        "M70 140 L460 95",
        "M70 100 L460 55",
      ],
      endpoints: [
        { x: 460, y: 135 },
        { x: 460, y: 95 },
        { x: 460, y: 55 },
      ],
    },
    {
      title: "Random intercepts and slopes",
      subtitle: "Different starting levels · Different slopes",
      description:
        "Three illustrative individuals have different baseline outcomes and different rates of change, allowing their trajectories to converge or cross.",
      explanation:
        "Individual trajectories vary in both intercept and slope. Differences in growth rates can change their relative positions over time.",
      paths: [
        "M70 180 L460 76",
        "M70 140 L460 114",
        "M70 100 L460 44",
      ],
      endpoints: [
        { x: 460, y: 76 },
        { x: 460, y: 114 },
        { x: 460, y: 44 },
      ],
    },
  ];

  return (
    <figure className="my-8 border-y border-zinc-200 py-6 dark:border-zinc-800">
      <figcaption>
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          How Random Effects Shape Individual Trajectories
        </h3>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Comparing random-intercept and random-slope specifications shows how
          mixed-effects models represent differences between individuals. The
          trajectories are conceptual illustrations, not fitted participant
          data.
        </p>
      </figcaption>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        {individuals.map((individual) => (
          <div key={individual.name} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: individual.color,
              }}
            />

            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
              {individual.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-8 lg:grid-cols-2">
        {panels.map((panel) => (
          <div key={panel.title} className="min-w-0">
            <div className="border-t border-zinc-200 pt-4 dark:border-zinc-800">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {panel.title}
              </h4>

              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {panel.subtitle}
              </p>
            </div>

            <svg
              viewBox="0 0 520 270"
              role="img"
              aria-label={panel.description}
              className="mt-4 h-auto w-full"
            >
              {[55, 95, 135, 175].map((y) => (
                <line
                  key={y}
                  x1="70"
                  y1={y}
                  x2="475"
                  y2={y}
                  className="stroke-zinc-200 dark:stroke-zinc-800"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />
              ))}

              {[70, 167.5, 265, 362.5, 460].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1="30"
                  x2={x}
                  y2="215"
                  className="stroke-zinc-100 dark:stroke-zinc-800/60"
                  strokeWidth="1"
                />
              ))}

              <line
                x1="70"
                y1="215"
                x2="475"
                y2="215"
                className="stroke-zinc-500 dark:stroke-zinc-400"
                strokeWidth="1.2"
              />

              <line
                x1="70"
                y1="215"
                x2="70"
                y2="30"
                className="stroke-zinc-500 dark:stroke-zinc-400"
                strokeWidth="1.2"
              />

              {individuals.map((individual, index) => (
                <g key={individual.name}>
                  <path
                    d={panel.paths[index]}
                    fill="none"
                    stroke={individual.color}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle
                    cx="70"
                    cy={
                      index === 0
                        ? 180
                        : index === 1
                          ? 140
                          : 100
                    }
                    r="4"
                    fill={individual.color}
                    stroke="currentColor"
                    strokeOpacity="0.15"
                    strokeWidth="1"
                  />

                  <circle
                    cx={panel.endpoints[index].x}
                    cy={panel.endpoints[index].y}
                    r="4"
                    fill={individual.color}
                    stroke="currentColor"
                    strokeOpacity="0.15"
                    strokeWidth="1"
                  />
                </g>
              ))}

              <text
                x="70"
                y="235"
                textAnchor="middle"
                fontSize="12"
                className="fill-zinc-500 dark:fill-zinc-400"
              >
                Start
              </text>

              <text
                x="460"
                y="235"
                textAnchor="middle"
                fontSize="12"
                className="fill-zinc-500 dark:fill-zinc-400"
              >
                Later
              </text>

              <text
                x="265"
                y="258"
                textAnchor="middle"
                fontSize="13"
                fontWeight="500"
                className="fill-zinc-700 dark:fill-zinc-300"
              >
                Time
              </text>

              <text
                x="22"
                y="125"
                textAnchor="middle"
                fontSize="13"
                fontWeight="500"
                transform="rotate(-90 22 125)"
                className="fill-zinc-700 dark:fill-zinc-300"
              >
                Outcome level
              </text>
            </svg>

            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {panel.explanation}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6 max-w-4xl border-t border-zinc-200 pt-5 text-sm leading-7 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        In a random-intercept model, individual trajectories share the
        population-level slope while varying in their intercepts. Adding random
        slopes allows each individual&apos;s rate of change to differ from the
        population average. This distinction affects both predicted trajectories
        and the covariance structure of repeated measurements.
      </p>
    </figure>
  );
}

// ------------------------------------------------------------
// READING GROWTH VISUALIZATION
// ------------------------------------------------------------

const monthlyGrowth = 1.6757;

function ReadingGrowthFigure() {
  const months = Array.from({ length: 7 }, (_, i) => i);

  const xPosition = (month: number) => 78 + month * 80;

  const yPosition = (change: number) =>
    218 - (change / 12) * 170;

  const points = months
    .map((month) => {
      const change = month * monthlyGrowth;
      return `${xPosition(month)},${yPosition(change)}`;
    })
    .join(" ");

  return (
    <figure className="my-8 border-y border-zinc-200 py-6 dark:border-zinc-800">
      <figcaption>
        <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          Model-implied reading development
        </p>

        <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Estimated population-average change relative to baseline, calculated
          from the monthly growth coefficient of 1.6757.
        </p>
      </figcaption>

      <div className="mx-auto mt-5 max-w-[750px]">
        <svg
          viewBox="0 0 650 280"
          role="img"
          aria-label="Predicted reading-score change increases linearly from zero at baseline to approximately 10.05 points after six months"
          className="h-auto w-full"
        >
          {[0, 5, 10].map((value) => (
            <g key={value}>
              <line
                x1="78"
                y1={yPosition(value)}
                x2="570"
                y2={yPosition(value)}
                className="stroke-zinc-200 dark:stroke-zinc-700"
                strokeWidth="1"
              />

              <text
                x="65"
                y={yPosition(value) + 5}
                fill="currentColor"
                fontSize="13"
                textAnchor="end"
              >
                {value}
              </text>
            </g>
          ))}

          <line
            x1="78"
            y1="218"
            x2="570"
            y2="218"
            stroke="currentColor"
            strokeOpacity="0.65"
          />

          <line
            x1="78"
            y1="35"
            x2="78"
            y2="218"
            stroke="currentColor"
            strokeOpacity="0.65"
          />

          {[0, 2, 4, 6].map((month) => (
            <text
              key={month}
              x={xPosition(month)}
              y="240"
              fill="currentColor"
              fontSize="13"
              textAnchor="middle"
            >
              {month}
            </text>
          ))}

          <polyline
            points={points}
            fill="none"
            stroke="#2563eb"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {months.map((month) => (
            <circle
              key={month}
              cx={xPosition(month)}
              cy={yPosition(month * monthlyGrowth)}
              r="4"
              fill="#2563eb"
            />
          ))}

          <text
            x={xPosition(6) - 4}
            y={yPosition(6 * monthlyGrowth) - 15}
            fontSize="14"
            fontWeight="600"
            textAnchor="end"
            className="fill-blue-700 dark:fill-blue-300"
          >
            +10.05
          </text>

          <text
            x="324"
            y="269"
            fill="currentColor"
            fontSize="14"
            textAnchor="middle"
          >
            Months since baseline
          </text>

          <text
            x="20"
            y="125"
            fill="currentColor"
            fontSize="14"
            textAnchor="middle"
            transform="rotate(-90 20 125)"
          >
            Predicted score change
          </text>
        </svg>
      </div>

      <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
        The figure shows the fixed linear time effect over an illustrative
        six-month interval. It does not display observed reading scores or
        fitted individual trajectories.
      </p>
    </figure>
  );
}

// ------------------------------------------------------------
// MAIN CASE STUDY
// ------------------------------------------------------------

export default function HierarchicalLongitudinalCaseStudy() {
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
            Hierarchical and Longitudinal Modeling
          </h1>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.11em] text-zinc-500 dark:text-zinc-400">
            Statistics · Mixed-Effects Models · Longitudinal Analysis
          </p>

          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Graduate coursework in Data Science and Analytics · Kennesaw State
            University
          </p>

          <div className="mt-8 max-w-4xl border-l-2 border-blue-500 pl-5 dark:border-blue-400 sm:pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Abstract
            </p>

            <p className="mt-3 text-[18px] leading-[1.72] text-zinc-700 dark:text-zinc-300 sm:text-[19px]">
              Hierarchical and longitudinal datasets contain observations that
              are related through shared individuals, institutions, or repeated
              measurements. I investigated mixed-effects regression across three
              applications: mathematics achievement among students attending
              different schools, repeated observations of antisocial behavior,
              and reading development among children nested within schools. The
              analyses examine population-level relationships alongside
              differences between individuals and groups through fixed and
              random effects, intraclass correlation, variance decomposition,
              and longitudinal growth modeling. Together, these applications
              demonstrate how statistical models account for the dependency
              structures found in educational and behavioral data.
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
                R · Python · pandas · NumPy · statsmodels · Matplotlib
              </dd>

              <dt className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Methods &amp; Skills
              </dt>

              <dd className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Hierarchical Linear Modeling · Mixed-Effects Regression ·
                Longitudinal Analysis · Fixed &amp; Random Effects ·
                Random-Intercept Models · Random-Slope Models · Intraclass
                Correlation · Variance Decomposition · Interaction Effects ·
                Statistical Inference · Model Estimation &amp; Diagnostics ·
                Data Visualization · Reproducible Analysis
              </dd>
            </dl>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-x-7 gap-y-5 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:grid-cols-4">
            {[
              ["3", "Statistical applications"],
              ["2–3", "Hierarchical levels"],
              ["10", "Converged model fits"],
              ["1.68", "Monthly reading growth"],
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
        <Section title="Problem & Objective">
          <Paragraph>
            Conventional regression models generally assume that observations
            are conditionally independent after accounting for the explanatory
            variables. This assumption can be inappropriate when datasets
            contain natural groupings or repeated measurements. Students
            attending the same school may share educational conditions,
            measurements from the same person may reflect persistent individual
            characteristics, and reading outcomes may depend on both the child
            and the school. These relationships influence the covariance
            structure of the data and can affect coefficient uncertainty,
            statistical inference, and interpretation.
          </Paragraph>

          <Paragraph className="mt-3">
            The objective was to investigate mixed-effects models capable of
            representing these dependencies while estimating population-level
            relationships and variation across groups. The three datasets
            provided distinct structures: students nested within schools,
            repeated observations nested within individuals, and longitudinal
            measurements nested within children who were themselves nested
            within schools. The analyses therefore examine two-level and
            three-level models, variance components, individual trajectories,
            and the interpretation of fixed and random effects.
          </Paragraph>

          <ResultsTable />
        </Section>

        <Section title="Mixed-Effects Model Formulation">
          <Paragraph>
            A mixed-effects model combines fixed effects and random effects
            within a single regression framework. Fixed effects describe
            estimated relationships across the population, such as an average
            association between age and a behavioral outcome. Random effects
            represent variation associated with particular groups or individuals
            after accounting for those population-level relationships.
            Observations within a cluster can therefore share an unobserved
            component of their expected outcome, allowing the model to represent
            dependence between measurements.
          </Paragraph>

          <Paragraph className="mt-3">
            A two-level random-intercept model provides a starting point:
          </Paragraph>

          <Equation description="Outcome y i j equals beta zero plus beta one times x i j plus group random intercept u zero j plus residual epsilon i j">
            <i>y</i>
            <sub>ij</sub>
            {" = "}
            β<sub>0</sub>
            {" + "}
            β<sub>1</sub>
            <i>x</i>
            <sub>ij</sub>
            {" + "}
            <i>u</i>
            <sub>0j</sub>
            {" + "}
            ε<sub>ij</sub>
          </Equation>

          <Paragraph>
            The outcome <i>y</i>
            <sub>ij</sub> is measured for observation <i>i</i> in group{" "}
            <i>j</i>. The parameter β₀ represents the population intercept,
            while β₁ estimates the association between explanatory variable{" "}
            <i>x</i>
            <sub>ij</sub> and the outcome. The group-specific random intercept{" "}
            <i>u</i>
            <sub>0j</sub> allows groups to have different expected outcome
            levels. The residual ε<sub>ij</sub> represents variation between
            observations within groups. Under the conventional specification,
            the random effects and residuals have mean zero and separate
            variance parameters.
          </Paragraph>

          <Paragraph className="mt-3">
            This formulation separates variation associated with observed
            explanatory variables from persistent differences between groups.
            Random effects are generally modeled as draws from a common
            distribution, allowing information to be shared across groups during
            estimation. The resulting model provides population-level regression
            coefficients while accounting for the correlation induced by group
            membership.
          </Paragraph>
        </Section>

        <Section title="Intraclass Correlation and Variance Components">
          <Paragraph>
            The intraclass correlation coefficient (ICC) measures the proportion
            of modeled outcome variance associated with grouping. In a two-level
            random-intercept model, total variance consists of a between-group
            component and a within-group residual component. The ICC is
            calculated as:
          </Paragraph>

          <Equation description="Intraclass correlation equals between-group variance divided by the sum of between-group variance and residual variance">
            ICC
            {" = "}
            <Fraction
              numerator={
                <>
                  τ<sup>2</sup>
                </>
              }
              denominator={
                <>
                  τ<sup>2</sup>
                  {" + "}
                  σ<sup>2</sup>
                </>
              }
            />
          </Equation>

          <Paragraph>
            The parameter τ² denotes between-group variance, while σ² denotes
            within-group residual variance. A larger ICC indicates stronger
            clustering under the fitted model. Under standard random-intercept
            assumptions, it also represents the correlation between two
            observations from the same group. The statistic is model-dependent:
            adding explanatory variables can change the estimated variance
            components and therefore the ICC.
          </Paragraph>

          <ICCComparison />

          <Paragraph>
            The mathematics analysis attributed approximately 18% of its modeled
            variation to differences between schools, while the
            antisocial-behavior analysis attributed nearly 48% to differences
            between individuals. These results demonstrate different degrees of
            clustering across the applications. The ICC describes the relative
            magnitude of group-level variation; it does not establish the cause
            of those differences.
          </Paragraph>
        </Section>

        <Section title="Mathematics Achievement Across Schools">
          <Paragraph>
            The mathematics achievement analysis examined 7,185 students
            attending 160 schools. Students were nested within institutions,
            creating a two-level hierarchy in which achievement outcomes could
            reflect both individual characteristics and differences between
            schools. A random-intercept model allows school-specific baseline
            achievement levels while estimating common population relationships
            with explanatory variables.
          </Paragraph>

          <Paragraph className="mt-3">
            The variance decomposition indicates meaningful variation between
            schools. Accounting for this structure is important because students
            within the same institution may have correlated outcomes. If that
            dependence is ignored, regression standard errors may be
            inappropriate under the assumed independent-error model. A
            hierarchical specification represents the shared school component
            directly and supports investigation of student-level and school-level
            predictors.
          </Paragraph>

          <Paragraph className="mt-3">
            The between-school variance component should be interpreted as
            statistical heterogeneity, not as evidence that school membership
            directly causes achievement differences. Unobserved student
            characteristics, differences in educational environments, and other
            omitted factors may contribute to the variation captured by the
            model.
          </Paragraph>
        </Section>

        <Section title="Longitudinal Modeling of Antisocial Behavior">
          <Paragraph>
            The antisocial-behavior analysis contained 1,362 observations from
            405 individuals. Measurements were repeated within participants,
            creating a two-level longitudinal structure. Observations from one
            individual may reflect persistent personal characteristics while
            also changing over time. Random intercepts account for differences
            in baseline levels, while random slopes allow rates of change to
            vary between individuals.
          </Paragraph>

          <RandomEffectsIllustration />

          <h3 className={subheadingStyle}>
            Random-Intercept and Random-Slope Models
          </h3>

          <Paragraph className="mt-4">
            A longitudinal model containing both random intercepts and slopes can
            be expressed as:
          </Paragraph>

          <Equation description="y i j equals beta zero plus beta one times time i j plus individual random intercept plus individual random slope times time plus residual">
            <i>y</i>
            <sub>ij</sub>
            {" = "}
            β<sub>0</sub>
            {" + "}
            β<sub>1</sub>
            <i>t</i>
            <sub>ij</sub>
            {" + "}
            <i>u</i>
            <sub>0j</sub>
            {" + "}
            <i>u</i>
            <sub>1j</sub>
            <i>t</i>
            <sub>ij</sub>
            {" + "}
            ε<sub>ij</sub>
          </Equation>

          <Paragraph>
            Here <i>t</i>
            <sub>ij</sub> represents the age or time associated with observation{" "}
            <i>i</i> from individual <i>j</i>. The coefficient β₁ estimates the
            population-average rate of change. The random intercept{" "}
            <i>u</i>
            <sub>0j</sub> allows participants to have different starting levels,
            while <i>u</i>
            <sub>1j</sub> represents individual differences in their slopes.
            Random slopes therefore describe variability in longitudinal
            trajectories beyond the common population trend.
          </Paragraph>

          <Paragraph className="mt-3">
            The random intercept and slope may also be correlated. Their
            covariance describes whether individuals with higher baseline values
            tend to change more rapidly or more slowly. Consequently, the
            variance contributed by the random effects can change with time:
          </Paragraph>

          <Equation description="Random effect variance at time t equals random intercept variance plus two t times intercept slope covariance plus t squared times random slope variance">
            Var(<i>u</i>
            <sub>0j</sub>
            {" + "}
            <i>u</i>
            <sub>1j</sub>
            <i>t</i>)
            {" = "}
            τ<sub>00</sub>
            {" + "}
            2<i>t</i>τ<sub>01</sub>
            {" + "}
            <i>t</i>
            <sup>2</sup>τ<sub>11</sub>
          </Equation>

          <Paragraph>
            The parameter τ₀₀ is the random-intercept variance, τ₁₁ is the
            random-slope variance, and τ₀₁ is their covariance. This relationship
            explains why a model containing random slopes may have a
            time-dependent covariance structure. The simpler ICC expression
            introduced earlier applies directly to the random-intercept model.
          </Paragraph>

          <h3 className={subheadingStyle}>Age and Antisocial Behavior</h3>

          <Paragraph className="mt-4">
            The random-intercept results demonstrated substantial between-person
            variability, supporting a model that accounts for repeated
            measurements within individuals. The estimated age coefficient was
            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
              {" "}
              0.0754
            </strong>
            . Conditional on the other modeled terms, a one-unit increase in the
            age predictor was associated with an estimated 0.0754-unit increase
            in the behavioral outcome. The substantive interpretation depends on
            the measurement scales.
          </Paragraph>

          <h3 className={subheadingStyle}>Age-by-Sex Interaction</h3>

          <Paragraph className="mt-4">
            The analysis also examined whether the relationship between age and
            antisocial behavior differed by sex. This was addressed through an
            interaction between age and a binary sex indicator. The fixed-effects
            portion of the model can be represented as:
          </Paragraph>

          <Equation description="Expected outcome equals beta zero plus beta one times age plus beta two times sex plus beta three times age times sex">
            E(<i>y</i>)
            {" = "}
            β<sub>0</sub>
            {" + "}
            β<sub>1</sub>
            <i>t</i>
            {" + "}
            β<sub>2</sub>
            <i>s</i>
            {" + "}
            β<sub>3</sub>
            <i>t</i>
            <i>s</i>
          </Equation>

          <Paragraph>
            The variable <i>t</i> represents age, and <i>s</i> represents the sex
            indicator. For the reference category (<i>s</i> = 0), the estimated
            age slope is β₁. For the comparison category (<i>s</i> = 1), the
            slope becomes β₁ + β₃. The interaction coefficient β₃ therefore
            represents the difference in slopes. Testing β₃ = 0 evaluates
            whether the fitted model provides evidence of different age
            relationships between the categories.
          </Paragraph>

          <Paragraph className="mt-3">
            The interaction test produced a p-value of
            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
              {" "}
              0.7152
            </strong>
            . At the conventional significance level of 0.05, the analysis did
            not provide sufficient evidence that the age slopes differed. The
            result does not establish that the population slopes are identical.
            It indicates that the observed evidence was insufficient to reject
            the equal-slope hypothesis under the fitted model.
          </Paragraph>
        </Section>

        <Section title="Reading Development Across Children and Schools">
          <Paragraph>
            The reading development analysis contained 13,160 observations from
            3,321 children attending 254 schools. The dataset has three
            hierarchical levels: repeated measurements at Level 1, children at
            Level 2, and schools at Level 3. This structure separates changes
            within children over time from persistent differences between
            children and variation associated with schools.
          </Paragraph>

          <h3 className={subheadingStyle}>Three-Level Growth Model</h3>

          <Paragraph className="mt-4">
            A three-level random-intercept growth model can be expressed as:
          </Paragraph>

          <Equation description="Reading score equals population intercept plus monthly growth coefficient times month plus school random intercept plus child random intercept plus residual">
            <i>y</i>
            <sub>tij</sub>
            {" = "}
            β<sub>0</sub>
            {" + "}
            β<sub>1</sub>
            <i>m</i>
            <sub>tij</sub>
            {" + "}
            <i>u</i>
            <sub>0j</sub>
            {" + "}
            <i>v</i>
            <sub>0ij</sub>
            {" + "}
            ε<sub>tij</sub>
          </Equation>

          <Paragraph>
            The index <i>t</i> represents a measurement occasion, <i>i</i>{" "}
            identifies the child, and <i>j</i> identifies the school. The
            variable <i>m</i>
            <sub>tij</sub> represents measurement time in months. The fixed
            coefficient β₁ estimates average reading-score change per month. The
            school random intercept <i>u</i>
            <sub>0j</sub> represents between-school variation, while <i>v</i>
            <sub>0ij</sub> represents persistent differences between children
            within schools. The residual captures remaining variation within
            children.
          </Paragraph>

          <Paragraph className="mt-3">
            Random-slope extensions can additionally allow children to have
            different rates of reading development. The random-intercept
            specification provides a direct variance decomposition across the
            three levels, while a growth model estimates the average longitudinal
            relationship.
          </Paragraph>

          <h3 className={subheadingStyle}>Three-Level Variance Decomposition</h3>

          <Paragraph className="mt-4">
            In the random-intercept formulation, total outcome variance is
            partitioned into school-level, child-level, and measurement-level
            components:
          </Paragraph>

          <Equation description="Total variance equals school variance plus child variance plus observation residual variance">
            Var(<i>y</i>)
            {" = "}
            τ<sup>2</sup>
            <sub>school</sub>
            {" + "}
            τ<sup>2</sup>
            <sub>child</sub>
            {" + "}
            σ<sup>2</sup>
          </Equation>

          <figure className="my-8 border-y border-zinc-200 py-6 dark:border-zinc-800">
            <figcaption>
              <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Distribution of reading-score variance
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                Estimated variance proportions from the three-level
                random-intercept analysis.
              </p>
            </figcaption>

            <div className="mt-6">
              <VarianceBar
                title="Reading development"
                description="81.34 percent within children, 8.91 percent between children within schools, and 9.75 percent between schools"
                segments={[
                  {
                    label: "Within children over time",
                    value: 81.34,
                    color: "bg-blue-600",
                  },
                  {
                    label: "Between children within schools",
                    value: 8.91,
                    color: "bg-teal-500",
                  },
                  {
                    label: "Between schools",
                    value: 9.75,
                    color: "bg-amber-500",
                  },
                ]}
              />
            </div>
          </figure>

          <Paragraph>
            Most of the estimated variation occurred within children over
            repeated observations, while smaller components represented
            differences between children and schools. The school-level component
            accounted for 9.75% of total modeled variance, and differences
            between children attending the same school accounted for a further
            8.91%. These proportions provide information about the structure of
            the outcome variance, without attributing causal explanations to
            individual levels.
          </Paragraph>

          <h3 className={subheadingStyle}>
            Correlation Within Schools and Children
          </h3>

          <Paragraph className="mt-4">
            The variance components also provide implied correlations between
            observations. Under the three-level random-intercept model,
            measurements from different children attending the same school share
            the school-level component. Their correlation is therefore:
          </Paragraph>

          <Equation description="School intraclass correlation equals school variance divided by total variance">
            ρ<sub>school</sub>
            {" = "}
            <Fraction
              numerator={
                <>
                  τ<sup>2</sup>
                  <sub>school</sub>
                </>
              }
              denominator={
                <>
                  τ<sup>2</sup>
                  <sub>school</sub>
                  {" + "}
                  τ<sup>2</sup>
                  <sub>child</sub>
                  {" + "}
                  σ<sup>2</sup>
                </>
              }
            />
          </Equation>

          <Paragraph>
            This corresponds to an implied correlation of approximately 0.0975
            between observations from different children within the same school.
            Measurements from the same child additionally share the child-level
            component, producing an implied correlation of approximately 0.1866.
            These relationships apply to the stated random-intercept covariance
            structure. Random slopes can produce correlations that vary with
            measurement time.
          </Paragraph>

          <h3 className={subheadingStyle}>Estimated Reading Growth</h3>

          <Paragraph className="mt-4">
            The estimated population-average monthly growth coefficient was
            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
              {" "}
              1.6757
            </strong>
            . Holding other modeled predictors constant, this corresponds to
            approximately 1.68 additional reading-score units per month. The
            coefficient describes an average longitudinal relationship;
            individual children may follow different trajectories.
          </Paragraph>

          <ReadingGrowthFigure />

          <Paragraph>
            Applying the coefficient over the illustrated six-month interval
            produces a model-implied increase of approximately 10.05
            reading-score units. This calculation demonstrates the interpretation
            of the linear growth coefficient, while the multilevel model accounts
            for differences between children and schools.
          </Paragraph>
        </Section>

        <Section title="Estimation, Inference, and Model Evaluation">
          <Paragraph>
            Linear mixed-effects models estimate regression coefficients
            alongside variance and covariance parameters describing the random
            effects. Maximum likelihood (ML) and restricted maximum likelihood
            (REML) are common estimation methods. Maximum likelihood maximizes
            the likelihood of the observed data under the model, while restricted
            maximum likelihood accounts for the estimation of fixed effects when
            estimating variance components. Their distinction is important when
            comparing statistical specifications, particularly models with
            different fixed-effect structures.
          </Paragraph>

          <Paragraph className="mt-3">
            Statistical inference requires considering effect estimates
            alongside their uncertainty. Regression coefficients describe the
            magnitude and direction of estimated relationships. Standard errors
            describe estimation uncertainty, confidence intervals provide
            interval estimates, and hypothesis tests evaluate evidence
            concerning particular parameter values. The antisocial-behavior
            analysis illustrates these distinctions through its age coefficient
            and age-by-sex interaction.
          </Paragraph>

          <Paragraph className="mt-3">
            The completed analyses included ten model fits that converged.
            Convergence indicates that the numerical estimation procedure
            reached its specified stopping criteria, but it does not
            independently establish that the model is appropriate. Residual
            behavior, influential observations, random-effects distributions,
            covariance assumptions, and nonlinear relationships remain important
            considerations when evaluating mixed-effects models.
          </Paragraph>
        </Section>

        <Section title="Discussion & Limitations">
          <Paragraph>
            The analyses demonstrate how multilevel regression adapts to
            different dependency structures. Mathematics achievement emphasizes
            clustering within schools, antisocial behavior introduces repeated
            measurements and individual-specific trajectories, and reading
            development combines longitudinal measurements with a three-level
            educational hierarchy. Together, the results illustrate how fixed
            effects, random effects, and variance components provide
            complementary information about structured data.
          </Paragraph>

          <Paragraph className="mt-3">
            Fixed effects estimate population relationships, while random
            effects represent variation across individuals and groups.
            Intraclass correlation quantifies clustering under a specified
            model, and interaction terms evaluate whether relationships differ
            across defined groups. Longitudinal random slopes provide further
            flexibility by allowing rates of change to differ between
            individuals.
          </Paragraph>

          <Paragraph className="mt-3">
            The interpretation of these results depends on the selected model
            structure and statistical assumptions. Linear mixed-effects models
            require appropriate functional relationships, suitable distributional
            assumptions for random effects and residuals, and a correctly
            specified dependence structure. Omitted predictors, influential
            observations, or unmodeled nonlinear growth can affect estimates and
            their uncertainty. Because the datasets are observational, the
            estimated relationships should not automatically be interpreted as
            causal effects.
          </Paragraph>
        </Section>

        <section className="py-9 sm:py-10">
          <h2 className={headingStyle}>My Contribution</h2>

          <Paragraph className="mt-5">
            I conducted hierarchical and longitudinal statistical analyses
            across three educational and behavioral datasets, developing
            mixed-effects regression specifications suited to the structure of
            each application. My work included preparing the data, identifying
            nested observation levels, specifying fixed and random effects,
            estimating variance components, and interpreting regression
            coefficients, interaction effects, and intraclass correlation. I
            investigated group-level variation, examined longitudinal
            relationships, evaluated model convergence, and developed
            quantitative and visual interpretations of the results. The project
            demonstrates my ability to formulate multilevel statistical models,
            interpret their estimates, and communicate the implications and
            limitations of statistical findings.
          </Paragraph>
        </section>
      </article>

      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        Designed &amp; Developed by Martin Brown · © 2026
      </footer>
    </main>
  );
}