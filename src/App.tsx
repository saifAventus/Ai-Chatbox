import "./index.css";
import { Route, Routes } from "react-router-dom";
import PagesLayout from "./pages/pagesLayout";
import { useEffect } from "react";
import { getSession, setSession } from "./utils/session";
import { genSessionID } from "./utils/gen-id";

function App() {
  useEffect(() => {
    const currentSessionID = getSession();

    if (!currentSessionID) {
      const sessionID = genSessionID();
      setSession(sessionID);
    }
  }, []);
  return (
    <Routes>
      <Route path="/*" element={<PagesLayout />} />
    </Routes>
  );
}

export default App;
