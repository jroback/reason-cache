"use client";

import { useState } from "react";
import { PromptCard } from "@/components/PromptCard";
import { SearchBox } from "@/components/SearchBox";

const mockResults = [
  {
    match: 96,
    title: "How to negotiate a salary offer",
    description:
      "A structured negotiation plan with scripts, counter-offer logic, and risk framing.",
    savings: "$0.14",
    age: "Generated 3 hours ago",
  },
  {
    match: 94,
    title: "Google GTM cover letter",
    description:
      "A concise cover letter tailored to a Product Go-to-Market role at Google.",
    savings: "$0.07",
    age: "Generated yesterday",
  },
  {
    match: 92,
    title: "Unity Physical AI investment thesis",
    description:
      "A bull-case analysis for Unity as infrastructure for robotics and simulation.",
    savings: "$0.11",
    age: "Generated 2 days ago",
  },
];

export function SearchExperience() {
  const [query, setQuery] = useState("");

  return (
    <section className="mx-auto mt-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl">
      <SearchBox value={query} onChange={setQuery} />

      {query.length > 0 && (
        <p className="px-2 py-3 text-sm text-zinc-400">
          Searching reclaimed answers for{" "}
          <span className="text-white">“{query}”</span>
        </p>
      )}

      <div className="space-y-3 text-left">
        {mockResults.map((result) => (
          <PromptCard
            key={result.title}
            match={result.match}
            title={result.title}
            description={result.description}
            savings={result.savings}
            age={result.age}
          />
        ))}
      </div>
    </section>
  );
}