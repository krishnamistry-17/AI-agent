/** @format */

import type { AgentStatus } from "../../types/agent";

const styles: Record<AgentStatus, string> = {
  Active: "chip-ok",
  Idle: "chip-idle",
  Paused: "chip-warn",
  Error: "chip-bad",
};

export default function StatusChip({ status }: { status: AgentStatus }) {
  return <span className={`chip ${styles[status]}`}>{status}</span>;
}
