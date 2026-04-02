# Propate v1

UK Property Investment SaaS Platform - AI-powered deal analysis with Research OS and Build OS workspaces.

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS v4 + custom design tokens
- **Routing:** React Router v7 (Data mode)
- **Charts:** Recharts
- **Animation:** Motion (Framer Motion)
- **Icons:** Lucide React
- **UI Components:** Radix UI primitives

## Design System

- **Background:** Warm cream (#F7F5F2)
- **Typography:** Deep black/charcoal (#111111)
- **Accent:** Forest green (#2D6A4F)
- **Body Font:** Inter
- **Editorial Headings:** Playfair Display

## Product Lifecycle

1. **Quick Analysis** (`/analyse`) - Paste a property link for instant AI deal breakdown
2. **Research Project** (`/research/:id`) - Deep research workspace with 8 tabs
3. **Build Project** (`/build/:id`) - Renovation management workspace with 8 tabs

## Pages

- `/` - Landing page
- `/signin`, `/signup` - Authentication
- `/dashboard` - Command Centre
- `/find-deals` - Property discovery with filters
- `/saved` - Saved properties collection
- `/projects` - Active projects list
- `/research/:id` - Research OS workspace
- `/build/:id` - Build OS workspace
- `/marketplace` - Contractor discovery
- `/marketplace/:id` - Contractor detail
- `/marketplace/post-job` - Post a job
- `/jobs` - Jobs inbox messaging
- `/alerts` - Deal alert system
- `/analytics` - Portfolio analytics
- `/settings` - Account settings

## Getting Started

```bash
pnpm install
pnpm dev
```

## Next Steps

- [ ] Backend API (Supabase / Node.js)
- [ ] AI integration (OpenAI / Anthropic)
- [ ] Property data scraping (Rightmove/Zoopla)
- [ ] User authentication
- [ ] Database persistence
- [ ] Payment integration (Stripe)
