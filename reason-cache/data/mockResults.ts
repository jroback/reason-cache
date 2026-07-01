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
  trust: {
    qualityScore: 91,
    upvotes: 184,
    timesReused: 1204,
    verificationStatus: "community_verified",
  },
  creator: {
    name: "CareerStrategyPro",
    reputationScore: 98,
  },
  economics: {
    price: "$0.03",
    savings: "$0.14",
  },
  metadata: {
    sourceModel: "gpt",
    outputType: "text",
    createdAt: "2026-06-30",
    age: "Generated 3 hours ago",
    country: "US",
    license: "Reusable with attribution",
  },
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
  trust: {
    qualityScore: 88,
    upvotes: 96,
    timesReused: 642,
    verificationStatus: "community_verified",
  },
  creator: {
    name: "CareerStrategyPro",
    reputationScore: 98,
  },
  economics: {
    price: "$0.03",
    savings: "$0.14",
  },
  metadata: {
    sourceModel: "gpt",
    outputType: "text",
    createdAt: "2026-06-30",
    age: "Generated 8 hours ago",
    country: "US",
    license: "Reusable with attribution",
  },
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
  trust: {
    qualityScore: 85,
    upvotes: 73,
    timesReused: 862,
    verificationStatus: "community_verified",
  },
  creator: {
    name: "CareerStrategyPro",
    reputationScore: 98,
  },
  economics: {
    price: "$0.03",
    savings: "$0.14",
  },
  metadata: {
    sourceModel: "gpt",
    outputType: "text",
    createdAt: "2026-06-30",
    age: "Generated 8 hours ago",
    country: "US",
    license: "Reusable",
  },
}
];