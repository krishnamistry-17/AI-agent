export type AgentStatus = "Active" | "Idle" | "Paused" | "Error";

export type Agent = {
  name: string;
  model: string;
  status: AgentStatus;
  runs: number;
};