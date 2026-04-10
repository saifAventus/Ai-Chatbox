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
        transition-all duration-300 ease-in-out bg-white rounded-full
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
          gradient-border px-4 py-2 flex items-center gap-2
          transition-all duration-300
          ${active ? "w-full shadow-lg" : "w-fit"}
        `}
      >
        <input
          disabled={loading}
          type="text"
          placeholder="Search...."
          className="focus:outline-none flex-1"
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
          className="flex items-center justify-center w-6 h-6"
        >
          {loading ? <span className="rainbow-spinner" /> : <Search />}
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
