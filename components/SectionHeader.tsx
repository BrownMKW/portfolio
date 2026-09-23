type SectionHeaderProps = {
  label: string;
  title: string;
};

export default function SectionHeader({
  label,
  title,
}: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}