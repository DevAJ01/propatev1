import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { BottomNav } from "./BottomNav";

export function Layout() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen lg:ml-[240px]">
        <TopBar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-10 pb-24 lg:pb-10">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  );
}