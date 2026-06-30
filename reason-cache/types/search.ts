export type OutputType =
  | "text"
  | "image"
  | "list"
  | "code"
  | "document"
  | "canvas"
  | "data";

export type SourceModel = "gpt" | "claude" | "gemini" | "other";

export type VerificationStatus =
  | "unverified"
  | "user_accepted"
  | "community_verified"
  | "expert_verified";

export type SearchResult = {
  id: string;
  title: string;
  description: string;
  preview: string;
  concepts: string[];

  match: number;
  qualityScore: number;
  upvotes: number;
  previousUses: number;

  creator: {
    name: string;
    reputationScore: number;
  };

  price: string;
  savings: string;

  sourceModel: SourceModel;
  outputType: OutputType;
  verificationStatus: VerificationStatus;

  createdAt: string;
  age: string;

  country?: string;
  license?: string;
};