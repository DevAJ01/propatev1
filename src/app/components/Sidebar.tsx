import { NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  Search,
  Bookmark,
  FolderOpen,
  Bell,
  BarChart3,
  Settings,
  Hammer,
  Inbox,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
  { label: "Find Deals", icon: Search, to: "/find-deals" },
  { label: "Saved", icon: Bookmark, to: "/saved" },
  { label: "Projects", icon: FolderOpen, to: "/projects" },
  { label: "Marketplace", icon: Hammer, to: "/marketplace" },
  { label: "My Jobs", icon: Inbox, to: "/jobs" },
  { label: "Alerts", icon: Bell, to: "/alerts" },
  { label: "Analytics", icon: BarChart3, to: "/analytics" },
];

export function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[240px] bg-white flex-col z-40"
      style={{ borderRight: "1px solid var(--border)" }}
    >
      <div className="px-7 h-16 flex items-center">
        <button
          onClick={() => navigate("/")}
          className="tracking-[-0.04em] text-[17px] cursor-pointer hover:opacity-70 transition-opacity"
          style={{ fontWeight: 600 }}
        >
          propate
        </button>
      </div>

      <nav className="flex-1 px-4 pt-4">
        <div className="space-y-0.5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] transition-all ${
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`
              }
              style={({ isActive }) => ({
                fontWeight: isActive ? 500 : 400,
              })}
            >
              <item.icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="px-4 pb-6">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] transition-all ${
              isActive
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`
          }
        >
          <Settings className="w-[18px] h-[18px]" strokeWidth={1.5} />
          Settings
        </NavLink>

        <div className="mt-4 mx-3 p-4 rounded-lg bg-background">
          <p className="text-[12px] text-muted-foreground mb-2">Free plan</p>
          <p className="text-[13px]" style={{ fontWeight: 500 }}>
            Upgrade to Pro
          </p>
          <p className="text-[12px] text-muted-foreground mt-1">
            Unlock offer strategies & unlimited analyses.
          </p>
        </div>
      </div>
    </aside>
  );
}