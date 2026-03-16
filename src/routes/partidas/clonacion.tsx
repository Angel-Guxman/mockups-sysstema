import { createFileRoute } from "@tanstack/react-router";
import ClonacionPartidasMockup from "@/components/partidas/PartidasClonacion";

export const Route = createFileRoute("/partidas/clonacion")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ClonacionPartidasMockup />;
}
