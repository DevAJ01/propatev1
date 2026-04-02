// NOTE: Full file content available in Figma Make source
// This is a placeholder - see CODEBASE_NOTE.md for structure
export interface Property {
  id: string;
  address: string;
  shortAddress: string;
  postcode: string;
  price: number;
  image: string;
  beds: number;
  baths: number;
  type: string;
  tags: string[];
  dealScore: number;
  refurb: { basic: number; moderate: number; premium: number };
  areaAvgPrice: number;
  estimatedARV: number;
  estimatedProfit: number;
  suggestedOfferLow: number;
  suggestedOfferHigh: number;
  confidence: number;
  rentalEstimate: number;
  yield: number;
  schoolRating: string;
  transportLinks: string;
  priceTrend: string;
  images: string[];
  renovationScopes: { basic: string; moderate: string; premium: string };
  workBreakdown: { item: string; cost: number; priority: "High" | "Medium" | "Low" }[];
}

export const properties: Property[] = [
  {
    id: "1",
    address: "47 Victoria Road, Brixton, London SW9 6DT",
    shortAddress: "47 Victoria Road, Brixton",
    postcode: "SW9 6DT",
    price: 285000,
    image: "https://images.unsplash.com/photo-1635106768840-ae433112fc5a?w=1080",
    beds: 3, baths: 1, type: "Terraced",
    tags: ["Fixer Upper", "Undervalued", "High Potential"],
    dealScore: 87,
    refurb: { basic: 22000, moderate: 38000, premium: 65000 },
    areaAvgPrice: 425000, estimatedARV: 410000, estimatedProfit: 87000,
    suggestedOfferLow: 255000, suggestedOfferHigh: 275000, confidence: 82,
    rentalEstimate: 1850, yield: 7.8,
    schoolRating: "Good (Ofsted)", transportLinks: "Brixton Tube - 0.3mi",
    priceTrend: "+4.2% YoY",
    images: [
      "https://images.unsplash.com/photo-1635106768840-ae433112fc5a?w=1080",
      "https://images.unsplash.com/photo-1676956914737-768394c92992?w=1080",
      "https://images.unsplash.com/photo-1642044596334-ef6294b35157?w=1080",
      "https://images.unsplash.com/photo-1768548273807-275b0e16fff3?w=1080",
    ],
    renovationScopes: {
      basic: "Cosmetic refresh: repaint throughout, new carpets, update fixtures, clean exterior.",
      moderate: "New kitchen, modernise bathroom, rewire electrics, new flooring, replaster walls.",
      premium: "Full renovation: extension, high-spec kitchen, luxury bathroom, loft conversion, landscaping.",
    },
    workBreakdown: [
      { item: "Kitchen", cost: 8500, priority: "High" },
      { item: "Bathroom", cost: 4200, priority: "High" },
      { item: "Flooring", cost: 3800, priority: "Medium" },
      { item: "Walls & Paint", cost: 2500, priority: "Medium" },
      { item: "Electrics", cost: 4500, priority: "High" },
      { item: "Plumbing", cost: 3200, priority: "Medium" },
    ],
  },
  {
    id: "2", address: "12 Elm Grove, Peckham, London SE15 4QS", shortAddress: "12 Elm Grove, Peckham",
    postcode: "SE15 4QS", price: 195000,
    image: "https://images.unsplash.com/photo-1676956914737-768394c92992?w=1080",
    beds: 2, baths: 1, type: "Flat", tags: ["Fixer Upper", "Auction"], dealScore: 74,
    refurb: { basic: 15000, moderate: 28000, premium: 48000 },
    areaAvgPrice: 320000, estimatedARV: 295000, estimatedProfit: 72000,
    suggestedOfferLow: 175000, suggestedOfferHigh: 190000, confidence: 71,
    rentalEstimate: 1450, yield: 8.9,
    schoolRating: "Requires Improvement", transportLinks: "Peckham Rye - 0.5mi", priceTrend: "+5.1% YoY",
    images: ["https://images.unsplash.com/photo-1676956914737-768394c92992?w=1080","https://images.unsplash.com/photo-1770825492554-826f824aec93?w=1080","https://images.unsplash.com/photo-1774438663714-7f9150fb36a4?w=1080","https://images.unsplash.com/photo-1772845365242-4978ac6c3fe1?w=1080"],
    renovationScopes: { basic: "Repaint, new flooring, update kitchen fronts.", moderate: "New kitchen, bathroom refit, rewiring.", premium: "Full gut renovation, open-plan layout." },
    workBreakdown: [{item:"Kitchen",cost:6000,priority:"High"},{item:"Bathroom",cost:3500,priority:"High"},{item:"Flooring",cost:2800,priority:"Medium"},{item:"Walls & Paint",cost:1800,priority:"Low"},{item:"Electrics",cost:3500,priority:"High"},{item:"Plumbing",cost:2400,priority:"Medium"}],
  },
  {
    id: "3", address: "8 Oakfield Road, Croydon CR0 2UD", shortAddress: "8 Oakfield Road, Croydon",
    postcode: "CR0 2UD", price: 340000,
    image: "https://images.unsplash.com/photo-1714307066623-4e7c318782ca?w=1080",
    beds: 4, baths: 2, type: "Semi-detached", tags: ["Fixer Upper", "Undervalued"], dealScore: 91,
    refurb: { basic: 30000, moderate: 52000, premium: 85000 },
    areaAvgPrice: 520000, estimatedARV: 495000, estimatedProfit: 103000,
    suggestedOfferLow: 310000, suggestedOfferHigh: 330000, confidence: 88,
    rentalEstimate: 2200, yield: 7.8,
    schoolRating: "Outstanding (Ofsted)", transportLinks: "East Croydon - 0.8mi", priceTrend: "+3.8% YoY",
    images: ["https://images.unsplash.com/photo-1714307066623-4e7c318782ca?w=1080","https://images.unsplash.com/photo-1740409283994-4bcd7a5c8775?w=1080","https://images.unsplash.com/photo-1642044596334-ef6294b35157?w=1080","https://images.unsplash.com/photo-1767522248570-713dbe026b71?w=1080"],
    renovationScopes: { basic: "Cosmetic update.", moderate: "New kitchen & bathrooms, rewire, new boiler.", premium: "Full refurb with rear extension, loft conversion." },
    workBreakdown: [{item:"Kitchen",cost:12000,priority:"High"},{item:"Bathroom",cost:6500,priority:"High"},{item:"Flooring",cost:5200,priority:"Medium"},{item:"Walls & Paint",cost:3800,priority:"Low"},{item:"Electrics",cost:6000,priority:"High"},{item:"Plumbing",cost:4500,priority:"Medium"}],
  },
  {
    id: "4", address: "29 Chapel Street, Islington, London N1 8EH", shortAddress: "29 Chapel Street, Islington",
    postcode: "N1 8EH", price: 425000,
    image: "https://images.unsplash.com/photo-1770825492554-826f824aec93?w=1080",
    beds: 2, baths: 1, type: "Flat", tags: ["Undervalued", "High Potential"], dealScore: 68,
    refurb: { basic: 18000, moderate: 32000, premium: 55000 },
    areaAvgPrice: 580000, estimatedARV: 540000, estimatedProfit: 83000,
    suggestedOfferLow: 395000, suggestedOfferHigh: 415000, confidence: 65,
    rentalEstimate: 2100, yield: 5.9,
    schoolRating: "Good (Ofsted)", transportLinks: "Angel Tube - 0.2mi", priceTrend: "+2.9% YoY",
    images: ["https://images.unsplash.com/photo-1770825492554-826f824aec93?w=1080","https://images.unsplash.com/photo-1635106768840-ae433112fc5a?w=1080","https://images.unsplash.com/photo-1772845365242-4978ac6c3fe1?w=1080","https://images.unsplash.com/photo-1768548273807-275b0e16fff3?w=1080"],
    renovationScopes: { basic: "Paint refresh, new flooring.", moderate: "Kitchen replacement, bathroom refit.", premium: "Full redesign with premium materials." },
    workBreakdown: [{item:"Kitchen",cost:7500,priority:"High"},{item:"Bathroom",cost:4000,priority:"High"},{item:"Flooring",cost:3200,priority:"Medium"},{item:"Walls & Paint",cost:2000,priority:"Low"},{item:"Electrics",cost:3800,priority:"Medium"},{item:"Plumbing",cost:2800,priority:"Medium"}],
  },
  {
    id: "5", address: "15 Rose Lane, Lewisham, London SE13 5AG", shortAddress: "15 Rose Lane, Lewisham",
    postcode: "SE13 5AG", price: 310000,
    image: "https://images.unsplash.com/photo-1767464952478-b1a7feee866a?w=1080",
    beds: 3, baths: 2, type: "Terraced", tags: ["Fixer Upper", "Auction", "High Potential"], dealScore: 82,
    refurb: { basic: 25000, moderate: 42000, premium: 70000 },
    areaAvgPrice: 465000, estimatedARV: 440000, estimatedProfit: 88000,
    suggestedOfferLow: 280000, suggestedOfferHigh: 300000, confidence: 77,
    rentalEstimate: 1950, yield: 7.5,
    schoolRating: "Good (Ofsted)", transportLinks: "Lewisham DLR - 0.4mi", priceTrend: "+4.7% YoY",
    images: ["https://images.unsplash.com/photo-1767464952478-b1a7feee866a?w=1080","https://images.unsplash.com/photo-1740409283994-4bcd7a5c8775?w=1080","https://images.unsplash.com/photo-1774438663714-7f9150fb36a4?w=1080","https://images.unsplash.com/photo-1767522248570-713dbe026b71?w=1080"],
    renovationScopes: { basic: "Cosmetic refresh.", moderate: "New kitchen & bathroom, rewire.", premium: "Complete renovation with side return extension." },
    workBreakdown: [{item:"Kitchen",cost:9500,priority:"High"},{item:"Bathroom",cost:5200,priority:"High"},{item:"Flooring",cost:4100,priority:"Medium"},{item:"Walls & Paint",cost:2800,priority:"Low"},{item:"Electrics",cost:5500,priority:"High"},{item:"Plumbing",cost:3900,priority:"Medium"}],
  },
  {
    id: "6", address: "3 Birch Close, Bromley BR1 3PL", shortAddress: "3 Birch Close, Bromley",
    postcode: "BR1 3PL", price: 375000,
    image: "https://images.unsplash.com/photo-1740409283994-4bcd7a5c8775?w=1080",
    beds: 4, baths: 1, type: "Detached", tags: ["Fixer Upper", "Undervalued"], dealScore: 79,
    refurb: { basic: 28000, moderate: 48000, premium: 78000 },
    areaAvgPrice: 550000, estimatedARV: 520000, estimatedProfit: 97000,
    suggestedOfferLow: 345000, suggestedOfferHigh: 365000, confidence: 74,
    rentalEstimate: 2400, yield: 7.7,
    schoolRating: "Outstanding (Ofsted)", transportLinks: "Bromley South - 0.6mi", priceTrend: "+3.5% YoY",
    images: ["https://images.unsplash.com/photo-1740409283994-4bcd7a5c8775?w=1080","https://images.unsplash.com/photo-1767464952478-b1a7feee866a?w=1080","https://images.unsplash.com/photo-1642044596334-ef6294b35157?w=1080","https://images.unsplash.com/photo-1772845365242-4978ac6c3fe1?w=1080"],
    renovationScopes: { basic: "Repaint, new carpets.", moderate: "Full kitchen & bathroom renovation, rewire.", premium: "Complete renovation with extension." },
    workBreakdown: [{item:"Kitchen",cost:11000,priority:"High"},{item:"Bathroom",cost:5800,priority:"High"},{item:"Flooring",cost:4800,priority:"Medium"},{item:"Walls & Paint",cost:3200,priority:"Low"},{item:"Electrics",cost:5500,priority:"High"},{item:"Plumbing",cost:4200,priority:"Medium"}],
  },
];