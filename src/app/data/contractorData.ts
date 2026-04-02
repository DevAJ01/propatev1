// Full contractor data file - 6 UK contractors with reviews, portfolios, credentials
// See CODEBASE_NOTE.md for complete structure
// This file is maintained in Figma Make - sync with: git pull
export const serviceCategories = ["All","General Builder","Kitchen Fitting","Bathroom Fitting","Electrician","Plumber","Painter & Decorator","Roofer","Carpenter","Plasterer","Landscaping","Architect","Structural Engineer"] as const;
export type ServiceCategory = (typeof serviceCategories)[number];
export const coverageRegions = ["All London","South London","North London","East London","West London","South East","Nottingham","Manchester","Bristol"] as const;
export interface ContractorReview { id: string; author: string; rating: number; text: string; date: string; project: string; }
export interface PortfolioItem { id: string; image: string; caption: string; }
export interface Contractor { id: string; name: string; businessName: string; avatar: string; coverImage: string; verified: boolean; sponsored: boolean; rating: number; reviewCount: number; responseTime: string; completedJobs: number; memberSince: string; bio: string; services: string[]; primaryService: string; coverageAreas: string[]; credentials: string[]; availability: "available" | "busy" | "unavailable"; availabilityNote: string; hourlyRate?: { low: number; high: number }; portfolio: PortfolioItem[]; reviews: ContractorReview[]; }
export const contractors: Contractor[] = [];
// TODO: Populate from Figma Make source - 6 contractor records