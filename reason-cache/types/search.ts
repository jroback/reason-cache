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

  trust: {
    qualityScore: number;
    upvotes: number;
    timesReused: number;
    verificationStatus: VerificationStatus;
  };

  creator: {
    name: string;
    reputationScore: number;
  };

  economics: {
    price: string;
    savings: string;
  };

  metadata: {
    sourceModel: SourceModel;
    outputType: OutputType;
    createdAt: string;
    age: string;
    country?: string;
    license?: string;
  };
};