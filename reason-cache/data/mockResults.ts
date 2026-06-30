import type { SearchResult } from "@/types/search";

export const mockResults: SearchResult[] = [
  {
    id: "salary-negotiation",
    match: 96,
    title: "How to negotiate a salary offer",
    description:
      "A structured negotiation plan with scripts, counter-offer logic, and risk framing.",
    preview:
      "Start by anchoring the conversation around mutual fit, then frame your counter as a thoughtful calibration based on market data, scope, and the value you expect to create.",
    concepts: ["Negotiation", "Salary", "Scripts", "Career"],
    qualityScore: 91,
    upvotes: 184,
    previousUses: 1204,
    creator: {
      name: "CareerStrategyPro",
      reputationScore: 98,
    },
    price: "$0.03",
    savings: "$0.14",
    sourceModel: "gpt",
    outputType: "text",
    verificationStatus: "community_verified",
    createdAt: "2026-06-30",
    age: "Generated 3 hours ago",
    country: "US",
    license: "Reusable with attribution",
  },
  {
    id: "google-gtm-cover-letter",
    match: 94,
    title: "Google GTM cover letter",
    description:
      "A concise cover letter tailored to a Product Go-to-Market role at Google.",
    preview:
      "The strongest angle is to position yourself as someone who understands what advertisers need and can translate complex product capabilities into clear customer value.",
    concepts: ["Google", "GTM", "Cover Letter", "Advertising"],
    qualityScore: 88,
    upvotes: 96,
    previousUses: 642,
    creator: {
      name: "ApplicantOps",
      reputationScore: 94,
    },
    price: "$0.02",
    savings: "$0.07",
    sourceModel: "claude",
    outputType: "document",
    verificationStatus: "user_accepted",
    createdAt: "2026-06-29",
    age: "Generated yesterday",
    country: "US",
    license: "Reusable",
  },
  {
    id: "unity-physical-ai-thesis",
    match: 92,
    title: "Unity Physical AI investment thesis",
    description:
      "A bull-case analysis for Unity as infrastructure for robotics and simulation.",
    preview:
      "The bull case depends on Unity evolving from a game engine into a simulation layer for embodied AI, digital twins, robotics training, and synthetic data generation.",
    concepts: ["Unity", "Physical AI", "Robotics", "Simulation"],
    qualityScore: 85,
    upvotes: 73,
    previousUses: 411,
    creator: {
      name: "MarketMemo",
      reputationScore: 89,
    },
    price: "$0.04",
    savings: "$0.11",
    sourceModel: "gpt",
    outputType: "document",
    verificationStatus: "community_verified",
    createdAt: "2026-06-28",
    age: "Generated 2 days ago",
    country: "US",
    license: "Reusable",
  },
];