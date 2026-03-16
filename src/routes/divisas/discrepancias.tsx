import {
  DiagramaDiscrepancias,
  DiscrepanciaDivisasMockup,
  HistorialTipoCambioMockup,
} from "@/components/divisas";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/divisas/discrepancias")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <DiscrepanciaDivisasMockup />
      <DiagramaDiscrepancias />
      <HistorialTipoCambioMockup />
    </>
  );
}
