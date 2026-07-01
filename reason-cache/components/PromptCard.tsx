type PromptCardProps = {
  match: number;
  title: string;
  description: string;
  preview: string;
  age: string;
  timesReused: number;
  verificationStatus: string;
  isSelected: boolean;
  onSelect: () => void;
  onReuse: () => void;
  onGenerateFresh: () => void;
};

export function PromptCard({
  match,
  title,
  description,
  preview,
  age,
  isSelected,
  timesReused,
  verificationStatus,
  onSelect,
  onReuse,
  onGenerateFresh,
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
          <h2 className="text-lg font-semibold text-white">{title}</h2>

          <div
            className={`mt-2 text-sm font-medium ${
              isSelected ? "text-emerald-300" : "text-emerald-400"
            }`}
          >
            {match}% regenerative match
          </div>

          <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2 text-xs">
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 font-medium text-emerald-300">
            ✓ Verified
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-zinc-400">
            {timesReused.toLocaleString()} Reuses
          </span>
        </div>
      </div>

      {isSelected && (
        <div className="mt-5 rounded-lg border border-white/10 bg-black/20 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Preview
          </p>

          <p className="mt-2 text-sm leading-6 text-zinc-300">{preview}</p>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button
              onClick={(event) => {
                event.stopPropagation();
                onReuse();
              }}
              className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-zinc-950"
            >
              Reuse answer
            </button>

            <button
              onClick={(event) => {
                event.stopPropagation();
                onGenerateFresh();
              }}
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300"
            >
              Generate fresh
            </button>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs text-zinc-500">{age}</p>
    </article>
  );
}