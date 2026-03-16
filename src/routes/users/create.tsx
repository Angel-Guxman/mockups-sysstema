import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/users/create"!</div>;
}
