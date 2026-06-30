type PromptCardProps = {
  match: number;
  title: string;
  description: string;
  preview: string;
  savings: string;
  age: string;
  isSelected: boolean;
  onSelect: () => void;
};

export function PromptCard({
  match,
  title,
  description,
  preview,
  savings,
  age,
  isSelected,
  onSelect,
}: PromptCardProps) {
  return (
    <article
      onClick={onSelect}
      className={`cursor-pointer rounded-xl border p-5 transition ${
        isSelected
          ? "border-emerald-400/40 bg-zinc-900"
          : "border-white/10 bg-zinc-900/80 hover:border-white/20 hover:bg-zinc-900"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div
            className={`mb-2 text-sm font-medium ${
              isSelected ? "text-emerald-300" : "text-emerald-400"
            }`}
          >
            {match}% regenerative match
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

      {isSelected && (
        <div className="mt-5 rounded-lg border border-white/10 bg-black/20 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Preview
          </p>

          <p className="mt-2 text-sm leading-6 text-zinc-300">{preview}</p>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-zinc-950">
              Reuse answer
            </button>

            <button className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300">
              Generate fresh
            </button>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs text-zinc-500">{age}</p>
    </article>
  );
}