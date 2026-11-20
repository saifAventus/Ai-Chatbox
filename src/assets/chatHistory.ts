import type { SearchObject } from "./dummyserachObject";
type TSuggestion = {
  id: string;
  name: string;
};
export type ChatHistory = {
  id: string;
  search: string;
  description: string;
  suggestions: TSuggestion[];
  timestamp: number;
  data: SearchObject[];
};

export const chatHistory: ChatHistory[] = [];
