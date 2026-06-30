export function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <p className="mb-4 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
        Marketplace for thrifted AI answers
      </p>

      <h1 className="max-w-2xl text-5xl font-semibold tracking-tight sm:text-6xl">
        Find the AI answer someone already paid for.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
        ThriftToken helps light AI users discover similar prompts that have
        already been solved, reuse useful answers, and avoid spending full-price
        compute on work that already exists.
      </p>
    </section>
  );
}