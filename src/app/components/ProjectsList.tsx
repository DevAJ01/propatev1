import { useNavigate } from "react-router";
import { ArrowRight, FlaskConical, Hammer, Plus, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { properties } from "../data/mockData";
import { renovationProjects } from "../data/projectData";

const fmt = (n: number) => "£" + n.toLocaleString("en-GB");
const serif = { fontFamily: "'Playfair Display', Georgia, serif" };

export function ProjectsList() {
  const navigate = useNavigate();
  const activeProjects = Object.keys(renovationProjects).map((id) => {
    const property = properties.find((p) => p.id === id);
    const project = renovationProjects[id];
    return property && project ? { property, project } : null;
  }).filter(Boolean) as any[];
  activeProjects.sort((a, b) => a.project.mode === "build" && b.project.mode === "research" ? -1 : a.project.mode === "research" && b.project.mode === "build" ? 1 : 0);
  function handleProjectClick(id: string, mode: string) {
    navigate(mode === "build" ? `/build/${id}` : `/research/${id}`);
  }
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-10">
        <div>
          <p className="text-muted-foreground text-[11px] tracking-[0.1em] uppercase mb-2">Projects</p>
          <h1 className="text-[clamp(24px,3vw,34px)] tracking-[-0.03em] leading-[1.2] mb-2" style={{ ...serif, fontWeight: 400 }}>My Projects</h1>
          <p className="text-muted-foreground text-[14px]">{activeProjects.length} active project{activeProjects.length !== 1 ? "s" : ""}</p>
        </div>
        <button onClick={() => navigate("/find-deals")} className="flex items-center gap-2 bg-foreground text-primary-foreground px-4 py-2.5 rounded-xl text-[13px] hover:opacity-90 transition-opacity cursor-pointer" style={{ fontWeight: 500 }}><Plus className="w-4 h-4" strokeWidth={1.5} />New Project</button>
      </motion.div>
      <div className="space-y-3">
        {activeProjects.map(({ property, project }: any, i: number) => {
          const isBuild = project.mode === "build";
          return (
            <motion.button key={property.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.06 }} onClick={() => handleProjectClick(property.id, project.mode)} className="w-full text-left bg-white rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-5 hover:shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all cursor-pointer group" style={{ border: "1px solid var(--border)" }}>
              <img src={property.image} alt={property.shortAddress} className="w-full sm:w-[100px] h-[64px] rounded-lg object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 mb-1">
                  <p className="text-[15px] text-foreground/90 truncate" style={{ fontWeight: 500 }}>{property.shortAddress}</p>
                  <span className="text-[10px] tracking-[0.06em] uppercase px-2 py-0.5 rounded-md flex items-center gap-1 shrink-0" style={{ color: isBuild ? "#2D6A4F" : "var(--muted-foreground)", backgroundColor: isBuild ? "rgba(45,106,79,0.08)" : "var(--secondary)", fontWeight: 500 }}>
                    {isBuild ? <Hammer className="w-3 h-3" strokeWidth={1.5} /> : <FlaskConical className="w-3 h-3" strokeWidth={1.5} />}
                    Stage {isBuild ? "3 · Build" : "2 · Research"}
                  </span>
                </div>
                <p className="text-[13px] text-muted-foreground">{isBuild ? `${project.progressPercent}% complete · ${fmt(project.budgetUsed)} spent` : `${property.type} · ${property.beds} bed · ${fmt(property.price)}`}</p>
                {isBuild && <div className="h-1 w-32 bg-secondary rounded-full overflow-hidden mt-2"><div className="h-full bg-[#2D6A4F] rounded-full" style={{ width: `${project.progressPercent}%` }} /></div>}
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right hidden md:block">
                  <p className="text-[11px] text-muted-foreground/50 uppercase tracking-[0.06em] mb-0.5">Est. Profit</p>
                  <p className="text-[16px] tabular-nums" style={{ color: "#2D6A4F", fontWeight: 500 }}>{fmt(project.projectedProfit)}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-muted-foreground/50 transition-colors shrink-0" strokeWidth={1.5} />
              </div>
            </motion.button>
          );
        })}
        {activeProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-[15px] mb-1">No active projects yet.</p>
            <button onClick={() => navigate("/find-deals")} className="text-[13px] bg-foreground text-white px-5 py-2.5 rounded-xl cursor-pointer hover:opacity-90" style={{ fontWeight: 500 }}>Find deals</button>
          </div>
        )}
      </div>
    </div>
  );
}