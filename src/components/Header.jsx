import { useState, useEffect } from "react";
import {
  IoAdd,
  IoNotificationsOutline,
  IoMicOutline,
  IoArrowBack,
} from "react-icons/io5";
import { IoIosSearch, IoIosMenu } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
// tooltip function
function Tooltip({ children, text }) {
  return (
    <div className="relative group flex justify-center">
      {children}
      <span className="absolute bottom-0 mb-[-40px] scale-0 transition-all rounded bg-neutral-700/90 px-2 py-1 text-xs text-white group-hover:scale-100 whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

export default function Header({ onMenuClick }) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/results?search_query=${searchQuery}`);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setShowMobileSearch(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex justify-between items-center p-4 bg-zinc-900 text-white sticky top-0 z-50 flex-grow flex-shrink-0">
      {showMobileSearch ? (
        //  MOBILE SEARCH VIEW
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full gap-4 "
        >
          <Tooltip text="Back">
            <button
              onClick={() => setShowMobileSearch(false)}
              className="p-2 rounded-full hover:bg-neutral-700 focus:outline-none cursor-pointer"
            >
              <IoArrowBack size={26} />
            </button>
          </Tooltip>
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-600 rounded-l-full py-2 px-4 text-white focus:outline-none focus:border-neutral-500"
              autoFocus
            />
            <Tooltip text="Search">
              <button type="submit" className="bg-neutral-700 border border-neutral-600 border-l-0 rounded-r-full px-6 hover:bg-neutral-600 focus:outline-none cursor-pointer">
                <IoIosSearch size={26} />
              </button>
            </Tooltip>
          </div>
          <Tooltip text="Speak">
            <button className="p-2 rounded-full hover:bg-neutral-700 focus:outline-none cursor-pointer">
              <IoMicOutline size={26} />
            </button>
          </Tooltip>
        </form>
      ) : (
        <>
          {/* Left Section */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-full hover:bg-neutral-700 focus:outline-none cursor-pointer"
            >
              <IoIosMenu size={27} />
            </button>
            <Link to="/" className="flex items-center cursor-pointer">
              <img src="/youtube.png" alt="" className="h-9 w-9" />
              <span className="text-lg font-roboto tracking-tight">
                YouTube
              </span>
            </Link>
          </div>

          {/* Center Section (Desktop Search Bar) */}
          <form
            onSubmit={handleSearch}
            className="hidden sm:flex flex-grow items-center justify-center px-4 gap-2"
          >
            <div className="flex flex-grow max-w-xl">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-600 rounded-l-full py-2 px-4 text-white focus:outline-none focus:ring-red-500"
                autoFocus
              />
              <Tooltip text="Search">
                <button type="submit" className="bg-neutral-700 border border-zinc-600 border-l-0 rounded-r-full px-6 hover:bg-neutral-600 flex items-center justify-center cursor-pointer">
                  <IoIosSearch size={26} />
                </button>
              </Tooltip>
            </div>
            <Tooltip text="Voice Search">
              <button className="p-2 bg-neutral-700 hover:bg-neutral-600 rounded-full cursor-pointer">
                <IoMicOutline size={24} />
              </button>
            </Tooltip>
          </form>

          {/* Right Section */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="sm:hidden">
              <Tooltip text="Search">
                <button
                  onClick={() => setShowMobileSearch(true)}
                  className="p-2 rounded-full hover:bg-neutral-700 focus-outline-none cursor-pointer"
                >
                  <IoIosSearch size={26} />
                </button>
              </Tooltip>
            </div>
            <div className="max-[500px]:hidden">
              <Tooltip text="Create">
                <button className="flex px-2 py-[6px] rounded-full hover:bg-neutral-600 focus:outline-none gap-1 items-center bg-neutral-700 cursor-pointer justify-center">
                  <IoAdd size={26} /> Create
                </button>
              </Tooltip>
            </div>
            <Tooltip text="Notifications">
              <button className="p-2 rounded-full hover:bg-neutral-700 focus:outline-none cursor-pointer">
                <IoNotificationsOutline size={24} />
              </button>
            </Tooltip>
            <button className="flex items-center justify-center h-8 w-8 rounded-full bg-sky-400 focus:outline-none text-lg cursor-pointer">
              T
            </button>
          </div>
        </>
      )}
    </header>
  );
}
