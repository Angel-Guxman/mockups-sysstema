import { createFileRoute } from "@tanstack/react-router";
import { RecalculoInsumosModal } from "../components/cuantificaciones";

export const Route = createFileRoute("/recalculo-insumos")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RecalculoInsumosModal />;
}
