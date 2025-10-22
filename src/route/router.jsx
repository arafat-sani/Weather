import { createBrowserRouter } from "react-router";
import { Layout } from "../layout/Layout";

const router = createBrowserRouter([
  { path: "/",
     Component: Layout 
    },
     
]);
export default router;