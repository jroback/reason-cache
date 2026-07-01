"use client";

import { useState } from "react";
import { PromptCard } from "@/components/PromptCard";
import { SearchBox } from "@/components/SearchBox";
import { homeCopy } from "@/copy/home";
import { mockResults } from "@/data/mockResults";


export function SearchExperience() {
  const [query, setQuery] = useState("");
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [selectedResultTitle, setSelectedResultTitle] = useState<string | null>(
  null
);
  const filteredResults = mockResults.filter((result) => {
    const searchableText = `${result.title} ${result.description}`.toLowerCase();
    return searchableText.includes(query.toLowerCase());
});

  return (
    <section className="mx-auto mt-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl">
      <SearchBox value={query} onChange={setQuery} />

      {query.length > 0 && (
        <p className="px-2 py-3 text-sm text-zinc-400">
            {homeCopy.search.activeMessagePrefix}{" "}
            <span className="text-white">“{query}”</span>
            </p>
        )}

      {actionMessage && (
        <p className="px-2 pb-3 text-sm text-emerald-300">
          {actionMessage}
        </p>
      )}

      <div className="space-y-3 text-left">
        {filteredResults.map((result) => (
          <PromptCard
            key={result.id}
            match={result.match}
            title={result.title}
            description={result.description}
            preview={result.preview}
            age={result.metadata.age}
            timesReused={result.trust.timesReused}
            verificationStatus={result.trust.verificationStatus}
            isSelected={selectedResultTitle === result.title}
            onSelect={() =>
              setSelectedResultTitle((currentTitle) =>
                currentTitle === result.title ? null : result.title
              )
            }
            onReuse={() =>
              setActionMessage(`Continuing from "${result.title}"...`)
            }
            onGenerateFresh={() =>
              setActionMessage(`Generating a fresh answer for "${query || result.title}"...`)
            }
          />
        ))}

        {filteredResults.length === 0 && (
            <div className="rounded-xl border border-dashed border-white/10 p-6 text-center text-sm text-zinc-400">
             {homeCopy.search.emptyState}
             </div>
        )}
      </div>
    </section>
  );
}