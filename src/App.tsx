import { useRoutes } from "hookrouter-react";

import { BaseLayout } from "@layouts/base.layouts";
import { routes } from "./router";

function App() {
  const routeResult = useRoutes(routes);

  return (
    <>
      <BaseLayout>{routeResult}</BaseLayout>
    </>
  );
}

export default App;
