import Link from "next/link";

type ProjectCardProps = {
  name: string;
  description: string;
  status: string;
  tags: string[];
  href?: string;
};

export default function ProjectCard({
  name,
  description,
  status,
  tags,
  href,
}: ProjectCardProps) {
  const isActive =
    status === "In Development" || status === "Growing";

  const statusClasses = isActive
    ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/70 dark:bg-blue-950/50 dark:text-blue-300"
    : "border-zinc-200 bg-white text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300";

  const card = (
    <article className="group relative h-full overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold tracking-tight">{name}</h3>

        <span
          className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${statusClasses}`}
        >
          {status}
        </span>
      </div>

      <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-300">
        {description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-50 px-3 py-1 text-xs text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-8 text-sm font-medium text-blue-700 transition group-hover:translate-x-1 dark:text-blue-300">
        {name === "Technical Studies"
          ? "Explore Technical Studies →"
          : "Case study coming as the project develops →"}
      </p>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}