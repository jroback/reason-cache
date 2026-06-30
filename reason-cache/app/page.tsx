import { Hero } from "@/components/Hero";
import { SearchExperience } from "@/components/SearchExperience";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <Hero />
      <SearchExperience />
    </main>
  );
}
