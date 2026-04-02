import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Search,
  FolderOpen,
  Hammer,
  Inbox,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
  { label: "Find", icon: Search, to: "/find-deals" },
  { label: "Projects", icon: FolderOpen, to: "/projects" },
  { label: "Trades", icon: Hammer, to: "/marketplace" },
  { label: "Jobs", icon: Inbox, to: "/jobs" },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md lg:hidden"
      style={{ borderTop: "1px solid var(--border)", paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center py-2.5 gap-1 transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground/50"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className="w-[20px] h-[20px]"
                  strokeWidth={isActive ? 2 : 1.5}
                />
                <span
                  className="text-[10px] tracking-[0.03em]"
                  style={{ fontWeight: isActive ? 600 : 400 }}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}