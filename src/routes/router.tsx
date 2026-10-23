/** @format */

import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      // { path: "agents", element: <Agents /> },
      // { path: "agents/new", element: <CreateAgent /> },
      // { path: "agents/:id", element: <AgentDetail /> },
      // { path: "runs", element: <Runs /> },
      // { path: "*", element: <NotFound /> },
    ],
  },
]);
