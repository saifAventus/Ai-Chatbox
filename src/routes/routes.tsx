/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

type TAvailableRoutes = {
  path: string;
  name: string;
  element: React.ReactNode;
};
const Home = lazy(() => import("../pages/home/home"));
const Chat = lazy(() => import("../pages/chat/chat"));
const Favorite = lazy(() => import("../pages/favorite/favorite"));

export const availableRoutes: TAvailableRoutes[] = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/chat",
    name: "Chat",
    element: <Chat />,
  },
  {
    path: "/favorite",
    name: "Favorite",
    element: <Favorite />,
  },
];
