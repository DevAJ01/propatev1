import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { ArrowRight, Link2, Search } from "lucide-react";
import { motion } from "motion/react";
import { properties } from "../data/mockData";
import { PropertyAnalysisView } from "./PropertyAnalysisView";

const serif = { fontFamily: "'Playfair Display', Georgia, serif" };

export function PropertyAnalysis() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const q = searchParams.get("q") || "";
  const [loading, setLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setLoadingStep(1), 500);
    const t2 = setTimeout(() => setLoadingStep(2), 1200);
    const t3 = setTimeout(() => setLoadingStep(3), 1800);
    const t4 = setTimeout(() => setLoading(false), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  const property = properties.find((p) => p.postcode.toLowerCase().includes(q.toLowerCase()) || p.address.toLowerCase().includes(q.toLowerCase())) || properties[0];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center max-w-[320px]">
          <div className="w-10 h-10 border-2 border-foreground/10 border-t-foreground rounded-full animate-spin mx-auto mb-8" />
          <p className="text-[20px] tracking-[-0.02em] mb-3" style={{ ...serif, fontWeight: 400 }}>Analysing property</p>
          <div className="space-y-2 mt-6">
            {[{step:1,text:"Fetching property data"},{step:2,text:"Running market comparisons"},{step:3,text:"Calculating renovation costs"}].map((s)=>(<motion.div key={s.step} initial={{opacity:0,x:-8}} animate={loadingStep>=s.step?{opacity:1,x:0}:{}} transition={{duration:0.3}} className="flex items-center gap-2.5 justify-center">{loadingStep>s.step?(<div className="w-3 h-3 rounded-full bg-[#2D6A4F] flex items-center justify-center"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.5 6L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>):loadingStep===s.step?(<div className="w-3 h-3 border border-foreground/20 border-t-foreground rounded-full animate-spin"/>):(<div className="w-3 h-3 rounded-full bg-muted-foreground/10"/>)}<span className="text-[13px]" style={{color:loadingStep>s.step?"#2D6A4F":loadingStep===s.step?"var(--foreground)":"var(--muted-foreground)"}}>{s.text}</span></motion.div>))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="max-w-[1120px] mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <button onClick={() => navigate("/")} className="tracking-[-0.04em] text-[16px] cursor-pointer hover:opacity-70 transition-opacity shrink-0" style={{ fontWeight: 500 }}>propate</button>
          <div className="flex-1 max-w-[400px] hidden md:flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-border/60">
            <Link2 className="w-3.5 h-3.5 text-muted-foreground/30 shrink-0" strokeWidth={1.5} />
            <p className="text-[13px] text-foreground/60 truncate">{q || property.address}</p>
          </div>
          <button onClick={() => navigate(`/my-property/${property.id}`)} className="bg-foreground text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity cursor-pointer text-[13px] flex items-center gap-2 shrink-0" style={{ fontWeight: 500 }}>Create Project<ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} /></button>
        </div>
      </div>
      <div className="max-w-[1120px] mx-auto px-6 py-10"><PropertyAnalysisView property={property} /></div>
    </div>
  );
}
// Alias for route compatibility
export { PropertyAnalysis as QuickAnalysis };