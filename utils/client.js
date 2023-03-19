import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "esl4o5p3",
  dataset: "production",
  apiVersion: "2023-03-18",
  useCdn: false,
  // token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
