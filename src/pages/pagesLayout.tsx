import { Route, Routes } from "react-router-dom";
import Navbar from "../component/navbar";
import { availableRoutes } from "../routes/routes";
const PagesLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col">
        <Routes>
          {availableRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default PagesLayout;
