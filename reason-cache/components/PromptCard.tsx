type PromptCardProps = {
  match: number;
  title: string;
  description: string;
  savings: string;
  age: string;
};

export function PromptCard({
  match,
  title,
  description,
  savings,
  age,
}: PromptCardProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-zinc-900/80 p-5 transition hover:border-white/20 hover:bg-zinc-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 text-sm font-medium text-emerald-400">
            {match}% match
          </div>

          <h2 className="text-lg font-semibold text-white">{title}</h2>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {description}
          </p>
        </div>

        <div className="shrink-0 rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
          Save {savings}
        </div>
      </div>

      <p className="mt-4 text-xs text-zinc-500">{age}</p>
    </article>
  );
}