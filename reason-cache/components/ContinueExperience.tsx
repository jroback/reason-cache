import type { SearchResult } from "@/types/search";
import { getVerificationLabel } from "@/lib/display";

type ContinueExperienceProps = {
  result: SearchResult;
  onBack: () => void;
};

export function ContinueExperience({
    result,
    onBack,
}: ContinueExperienceProps) {
  return (
    <section className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-zinc-900/60 p-8">

    <div className="mb-8">
        <button
            onClick={onBack}
            className="text-sm text-zinc-400 transition hover:text-white"
        >
            ← Back to search
        </button>
    </div>
      <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
        Pick up from
      </p>

      <h1 className="mt-2 text-3xl font-semibold text-white">
        {result.title}
      </h1>

      <div className="mt-4 flex gap-2">
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
          {getVerificationLabel(result.trust.verificationStatus)}
        </span>

        <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-400">
          {result.trust.timesReused.toLocaleString()} Reuses
        </span>
      </div>

      <div className="mt-10 rounded-xl border border-white/10 bg-black/20 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Reasoning Checkpoint
        </p>

        <ul className="mt-5 space-y-3 text-zinc-300">
          <li>✓ Negotiation framework established</li>
          <li>✓ Market salary benchmarks collected</li>
          <li>✓ Counter-offer strategy prepared</li>
          <li>✓ Risk / reward tradeoffs evaluated</li>
        </ul>
      </div>

      <div className="mt-8">
        <label className="text-sm font-medium text-zinc-300">
          What's different this time?
        </label>

        <textarea
          rows={5}
          className="mt-3 w-full rounded-xl border border-white/10 bg-black/20 p-4 text-zinc-200 outline-none placeholder:text-zinc-500"
          placeholder="Example: I'm negotiating for a Staff Product Manager role at Google. Help me tailor this strategy."
        />
      </div>

      <button className="mt-8 rounded-full bg-emerald-400 px-6 py-3 font-medium text-zinc-950">
        Continue →
      </button>

    </section>
  );
}