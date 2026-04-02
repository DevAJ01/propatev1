import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { QuickAnalysis } from "./components/QuickAnalysis";
import { ResearchProject } from "./components/ResearchProject";
import { BuildProject } from "./components/BuildProject";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { FindDeals } from "./components/FindDeals";
import { PropertyDetail } from "./components/PropertyDetail";
import { ProjectsList } from "./components/ProjectsList";
import { ProjectStageRedirect } from "./components/ProjectStageRedirect";
import { AlertsPage } from "./components/AlertsPage";
import { AlertMatchesPage } from "./components/AlertMatchesPage";
import { SavedPage } from "./components/SavedPage";
import { AnalyticsPage } from "./components/AnalyticsPage";
import { SettingsPage } from "./components/SettingsPage";
import { MarketplacePage } from "./components/MarketplacePage";
import { ContractorDetail } from "./components/ContractorDetail";
import { PostJobPage } from "./components/PostJobPage";
import { SignInPage, SignUpPage } from "./components/AuthPage";
import { JobsInbox } from "./components/JobsInbox";

export const router = createBrowserRouter([
  // Standalone pages (no sidebar layout)
  { path: "/", Component: LandingPage },
  { path: "/analyse", Component: QuickAnalysis },
  { path: "/signin", Component: SignInPage },
  { path: "/signup", Component: SignUpPage },

  // App shell with sidebar
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "dashboard", Component: Dashboard },
      { path: "find-deals", Component: FindDeals },
      { path: "property/:id", Component: PropertyDetail },
      { path: "saved", Component: SavedPage },
      { path: "projects", Component: ProjectsList },
      { path: "research/:id", Component: ResearchProject },
      { path: "build/:id", Component: BuildProject },
      { path: "my-property/:id", Component: ProjectStageRedirect },
      { path: "marketplace", Component: MarketplacePage },
      { path: "marketplace/post-job", Component: PostJobPage },
      { path: "marketplace/:id", Component: ContractorDetail },
      { path: "jobs", Component: JobsInbox },
      { path: "alerts", Component: AlertsPage },
      { path: "alerts/:id/matches", Component: AlertMatchesPage },
      { path: "analytics", Component: AnalyticsPage },
      { path: "settings", Component: SettingsPage },
    ],
  },
]);