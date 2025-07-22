type Role = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: Role;
  content: string;
  timestamp: Date;
  screenshotUrl?: string;
}
