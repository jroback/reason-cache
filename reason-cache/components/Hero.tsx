import { homeCopy } from "@/copy/home";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <p className="mb-4 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
        {homeCopy.hero.badge}
      </p>

      <h1 className="max-w-2xl text-5xl font-semibold tracking-tight sm:text-6xl">
        {homeCopy.hero.headline}
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
        {homeCopy.hero.subheadline}
      </p>
    </section>
  );
}