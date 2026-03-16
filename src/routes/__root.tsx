import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../index.css";

const RootLayout = () => (
  <>
    <div className="p-2 flex space-x-3">
      <Link to="/" className="[&.active]:font-bold block">
        Home
      </Link>
      <Link to="/about" className="[&.active]:font-bold block">
        About
      </Link>
      <Link to="/recalculo-insumos" className="[&.active]:font-bold block">
        recalculo
      </Link>
    </div>
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
