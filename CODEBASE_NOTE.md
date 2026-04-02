# Propate v1 - Source Code

This repository contains the complete Propate v1 frontend codebase.

The full source code is maintained in Figma Make and will be synced here.

## File Structure

```
src/
├── app/
│   ├── App.tsx                    # Router provider entry
│   ├── routes.tsx                 # All route definitions
│   ├── components/
│   │   ├── LandingPage.tsx        # Marketing landing page
│   │   ├── QuickAnalysis.tsx      # /analyse flow
│   │   ├── PropertyAnalysis.tsx   # Analysis loading + view
│   │   ├── PropertyAnalysisView.tsx # Full analysis display
│   │   ├── PropertyDetail.tsx     # /property/:id wrapper
│   │   ├── ResearchProject.tsx    # Research OS (8 workspace tabs)
│   │   ├── BuildProject.tsx       # Build OS (8 workspace tabs)
│   │   ├── Layout.tsx             # App shell with sidebar
│   │   ├── Sidebar.tsx            # Desktop navigation
│   │   ├── TopBar.tsx             # Top search bar
│   │   ├── BottomNav.tsx          # Mobile bottom navigation
│   │   ├── Dashboard.tsx          # Command Centre
│   │   ├── FindDeals.tsx          # Deal discovery + comparison
│   │   ├── SavedPage.tsx          # Saved properties collection
│   │   ├── ProjectsList.tsx       # Active projects list
│   │   ├── ProjectStageRedirect.tsx # Stage-based routing
│   │   ├── ProjectWorkspace.tsx   # Legacy workspace component
│   │   ├── MyProperty.tsx         # Legacy property management
│   │   ├── AlertsPage.tsx         # Deal alert system
│   │   ├── AlertMatchesPage.tsx   # Alert match results
│   │   ├── AnalyticsPage.tsx      # Portfolio analytics
│   │   ├── SettingsPage.tsx       # Account settings (5 tabs)
│   │   ├── MarketplacePage.tsx    # Contractor discovery
│   │   ├── ContractorDetail.tsx   # Contractor profile
│   │   ├── PostJobPage.tsx        # Post a job wizard
│   │   ├── JobsInbox.tsx          # Two-panel messaging system
│   │   ├── AuthPage.tsx           # Sign In + Sign Up pages
│   │   ├── OfferStrategy.tsx      # AI offer strategy display
│   │   ├── PlaceholderPage.tsx    # Coming soon placeholder
│   │   ├── project/
│   │   │   ├── BuildMode.tsx      # Build mode tab contents
│   │   │   └── ResearchMode.tsx   # Research mode with financial engine
│   │   └── ui/                    # shadcn/ui components
│   └── data/
│       ├── mockData.ts            # Property mock data (6 properties)
│       ├── contractorData.ts      # Contractor mock data (6 contractors)
│       ├── jobsData.ts            # Jobs inbox mock data
│       └── projectData.ts         # Project/renovation mock data
├── styles/
│   ├── fonts.css                  # Google Fonts imports
│   ├── index.css                  # Style entry point
│   ├── tailwind.css               # Tailwind v4 config
│   └── theme.css                  # Design tokens & base styles
└── main.tsx                       # React DOM entry
```
