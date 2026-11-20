import { Search } from "lucide-react";
import React, { useState } from "react";

type TSearchbar = {
  handleSearch: (search: string) => void;
  loading: boolean;
};

function Searchbar({ handleSearch, loading }: TSearchbar) {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<boolean>(false);

  const handleSubmit = () => {
    handleSearch(search);
  };
  return (
    <div
      className={`
        fixed z-[1000] left-1/2 -translate-x-1/2 
        transition-all duration-300 ease-in-out rounded-full
        ${active ? "bottom-16 w-[90%] max-w-xl" : "bottom-10"}
      `}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setActive(false);
        }
      }}
    >
      <div
        className={`
          gradient-border
          transition-all duration-300
          ${active ? "w-full shadow-lg" : "w-fit"}
        `}
      >
        <div className="bg-white rounded-full px-4 py-4 flex items-center gap-2">
          <input
            disabled={loading}
            type="text"
            placeholder="Search...."
            className="focus:outline-none flex-1 bg-white text-black min-w-0"
            value={search}
            onFocus={() => setActive(true)}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center justify-center w-6 h-6 text-black"
          >
            {loading ? <span className="rainbow-spinner" /> : <Search />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
