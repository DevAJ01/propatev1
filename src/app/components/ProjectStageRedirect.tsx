import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { renovationProjects, getProjectForProperty } from "../data/projectData";
import { properties } from "../data/mockData";

export function ProjectStageRedirect() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const project = id ? renovationProjects[id] : null;
    const property = properties.find(p => p.id === id);

    if (!id || !property) {
      navigate("/projects", { replace: true });
      return;
    }

    const mode = project?.mode ?? getProjectForProperty(property).mode;

    if (mode === "build") {
      navigate(`/build/${id}`, { replace: true });
    } else {
      navigate(`/research/${id}`, { replace: true });
    }
  }, [id, navigate]);

  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <div className="w-6 h-6 border-2 border-foreground/10 border-t-foreground rounded-full animate-spin" />
    </div>
  );
}