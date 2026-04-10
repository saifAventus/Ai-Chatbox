import { Link, useLocation } from "react-router-dom";
import { availableRoutes } from "../routes/routes";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="p-2 py-3 flex items-center ">
      <div className="flex-1">
        <div className="border border-gray-400 flex gap-4 w-fit p-1 rounded-full text-sm">
          {availableRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={`
    px-2 py-1 rounded-full
    hover:bg-gray-200
    ${location.pathname === route.path ? "text-black font-bold" : ""}
  `}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src="https://dev.roddandgunn.com/on/demandware.static/Sites-rodd-au-Site/-/default/dw53c2c400/images/RG-Logo-NZ.svg"
          alt="logo"
          className="h-10"
        />
      </div>

      <div className="flex-1 flex justify-end">
        <button className="border border-gray-400 rounded-full px-2 py-1 text-sm">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
