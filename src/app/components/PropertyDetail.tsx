import { useParams, useNavigate } from "react-router";
import { properties } from "../data/mockData";
import { PropertyAnalysisView } from "./PropertyAnalysisView";

export function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted-foreground text-[15px]">Property not found.</p>
        <button
          onClick={() => navigate("/find-deals")}
          className="mt-4 text-foreground underline cursor-pointer text-[14px]"
        >
          Browse deals
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1080px] mx-auto">
      <PropertyAnalysisView
        property={property}
        showBackButton
        onBack={() => navigate(-1)}
      />
    </div>
  );
}