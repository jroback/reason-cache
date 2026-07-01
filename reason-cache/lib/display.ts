import { VerificationStatus } from "@/types/search";

export function getVerificationLabel(
  status: VerificationStatus
): string {
  switch (status) {
    case "community_verified":
      return "Community Verified";

    case "expert_verified":
      return "Expert Verified";

    case "user_accepted":
      return "User Accepted";

    case "unverified":
    default:
      return "Unverified";
  }
}