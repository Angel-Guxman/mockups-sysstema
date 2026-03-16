import { VinculacionPartidasMockup } from "@/components/partidas";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/partidas/vinculacion")({
  component: RouteComponent,
});

function RouteComponent() {
  return <VinculacionPartidasMockup />;
}
