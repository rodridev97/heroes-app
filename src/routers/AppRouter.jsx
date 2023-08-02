import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { MarvelPage } from "../components/marvel/MarvelPage";
import { DcPage } from "../components/dc/DcPage";
import { HeroPage } from "../components/hero/HeroPage";
import { SearchPage } from "../components/search/SearchPage";
import { PublicRoutes } from "./PublicRouter";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoutes />,
        children: [
          {
            index: true,
            element: <MarvelPage />
          },
          {
            path: "marvel",
            element: <MarvelPage />,
          },
          {
            path: "dc",
            element: <DcPage />,
          },
          {
            path: "search",
            element: <SearchPage />
          },
          {
            path: "hero/:id",
            element: <HeroPage />,
          }
        ]
    },
    {
        path: "/login",
        element: <PublicRoutes />
    }
]);


export const AppRouter = () => {
  return (
      <RouterProvider router={ appRouter } />
  )
}
