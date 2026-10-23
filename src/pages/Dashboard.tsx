/** @format */

import { ChevronDown, Plus } from "lucide-react";
import StatsCard from "../components/ui/statscard";
import AgentsCard from "../components/ui/agentscard";
 
import type { Agent } from "../types/agent";

function Dashboard() {
  const statsData = [
    { heading: "Total Agents", count: 10, title: "+2 this week" },
    { heading: "Active Now", count: 7, title: "4 idle" },
    {
      heading: "Runs today",
      count: 193,
      title: "+12% vs yesterday",
    },
    { heading: "Success Rate", count: "96.4%", title: "-0.8% vs yesterday" },
  ];


const agentsData: Agent[] = [
  { name: "Agent 1", model: "GPT-4", status: "Active", runs: 25 },
  { name: "Agent 2", model: "GPT-3.5", status: "Idle", runs: 15 },
  { name: "Agent 3", model: "GPT-4", status: "Paused", runs: 30 },
  { name: "Agent 4", model: "GPT-3.5", status: "Idle", runs: 10 },
  { name: "Agent 5", model: "GPT-4", status: "Error", runs: 20 },
];
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className=" flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl text-ink">Dashboard</h2>
            <p className="text-muted-foreground">
              Monitor and manage your AI agents
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <input
                type="text"
                placeholder="Search agents..."
                className="border border-page bg-white rounded-lg px-4 py-2 h-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <button className="bg-accent  text-white px-4 py-2 rounded-lg hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                <Plus className="inline-block mr-2" />
                Add Agent
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData?.map((stat, index) => (
            <StatsCard
              key={index}
              heading={stat.heading}
              count={stat.count}
              title={stat.title}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg">Agents</h2>
              <button className="btn-secondary">All status <ChevronDown className="inline-block ml-1"/></button>
            </div>
            <AgentsCard agents={agentsData} />
          </div>
          <div className="card w-full max-w-80 p-5 flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-lg">Recent Activity</h2>
              <div className="flex flex-col">
                <p><span className="font-bold">Agent 1</span> started a new run</p>
                <p>2 min ago</p>
              </div>
              <div className="flex flex-col">
                <p><span className="font-bold">Agent 2</span> completed a run</p>
                <p>5 min ago</p>
              </div>
              <div className="flex flex-col">
                <p><span className="font-bold">Agent 3</span> paused a run</p>
                <p>10 min ago</p>
              </div>
              <div className="flex flex-col">
                <p><span className="font-bold">Agent 4</span> resumed a run</p>
                <p>15 min ago</p>
              </div>
             
               
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
