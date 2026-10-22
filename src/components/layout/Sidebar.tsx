/** @format */

import { useState } from "react";
import logo from "../../assets/pngs/logo.png";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const menuItems = [
    { id: 1, name: "Dashboard", link: "/dashboard" },
    { id: 2, name: "Agents", link: "/agents" },
    { id: 3, name: "Runs", link: "/runs" },
    { id: 4, name: "Analytics", link: "/analytics" },
    { id: 5, name: "Settings", link: "/settings" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed top-4 left-4 z-50 md:hidden
                   rounded-md bg-card border border-page
                   px-3 py-2 text-foreground"
        aria-label="Toggle sidebar">
        {showSidebar ? "✕" : "☰"}
      </button>

      {/* Overlay for mobile */}
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40
          w-[232px] h-screen bg-card border-r border-page p-5
          transform transition-transform duration-300 ease-in-out
          md:static md:translate-x-0 md:shrink-0
          ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-5">
              <img src={logo} alt="Logo" className="w-8 h-8" />
              <p className="text-base font-bold text-ink">AgentHub</p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={() => setShowSidebar(false)}
                  className="text-sm font-medium text-foreground
                    hover:text-primary hover:bg-accent-soft
                    p-2 rounded-sm">
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* User profile */}
          <div className="pb-5 mt-auto border-t border-page pt-5">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full bg-accent/20
                  flex items-center justify-center text-base font-medium">
                KM
              </div>

              <div className="flex flex-col">
                <p className="text-sm font-medium text-foreground">
                  Krishna M.
                </p>
                <p className="text-xs font-normal text-ink">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
