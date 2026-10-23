/** @format */

import type { Agent } from "../../types/agent";
import StatusChip from "./statuschip";

type Props = { agents: Agent[] };

export default function AgentsCard({ agents }: Props) {
  return (
    <div className="card overflow-x-auto">
      <table className="w-full min-w-130">
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Status</th>
            <th>Runs</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.name}>
              <td className="font-semibold">{agent.name}</td>
              <td>{agent.model}</td>
              <td>
                <StatusChip status={agent.status} />
              </td>
              <td>{agent.runs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
