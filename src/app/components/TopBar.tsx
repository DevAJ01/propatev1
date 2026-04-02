import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, Bell, X } from "lucide-react";

export function TopBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/analyse?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-md h-14 flex items-center px-4 sm:px-6 lg:px-10 justify-between gap-3">
      <span
        className="lg:hidden tracking-[-0.04em] text-[16px] shrink-0 cursor-pointer"
        style={{ fontWeight: 500 }}
        onClick={() => navigate("/")}
      >
        propate
      </span>

      <div className="relative hidden sm:flex max-w-[360px] flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-muted-foreground/50" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search properties..."
          className="w-full pl-9 pr-3 py-2 bg-white rounded-lg text-[13px] placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/10 transition-all"
          style={{ border: "1px solid var(--border)" }}
        />
      </div>

      <div className="flex items-center gap-2">
        <button
          className="sm:hidden w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white transition-colors cursor-pointer"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          {searchOpen ? (
            <X className="w-[17px] h-[17px]" strokeWidth={1.5} />
          ) : (
            <Search className="w-[17px] h-[17px]" strokeWidth={1.5} />
          )}
        </button>

        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded-lg hover:bg-white">
          <Bell className="w-[18px] h-[18px]" strokeWidth={1.5} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-green rounded-full" />
        </button>

        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          <span className="text-[12px] text-muted-foreground" style={{ fontWeight: 500 }}>JW</span>
        </div>
      </div>

      {searchOpen && (
        <div className="sm:hidden absolute top-14 left-0 right-0 bg-white px-4 py-3 z-50"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-muted-foreground/50" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search properties or postcodes..."
              className="w-full pl-9 pr-3 py-2.5 bg-[#F8F6F2] rounded-xl text-[14px] placeholder:text-muted-foreground/40 focus:outline-none"
            />
          </div>
          <button
            onClick={handleSearch}
            className="w-full mt-2 py-2.5 rounded-xl bg-foreground text-white text-[13px] cursor-pointer"
            style={{ fontWeight: 500 }}
          >
            Analyse Property
          </button>
        </div>
      )}
    </header>
  );
}