import { useState , lazy ,Suspense } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useLocation } from "react-router-dom";
import {
  IoPlayCircleOutline,
  IoMusicalNotesOutline,
  IoTimeOutline,
  IoPlayOutline,
  IoFlameOutline,
  IoBagOutline,
  IoFilmOutline,
  IoRadioOutline,
  IoGameControllerOutline,
  IoNewspaperOutline,
  IoTrophyOutline,
  IoBulbOutline,
  IoSettingsOutline,
  IoFlagOutline,
  IoVideocamOutline,
  IoLibraryOutline,
} from "react-icons/io5";
import { FaRegUserCircle, FaHistory } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { MdHelpOutline } from "react-icons/md";
import { RiYoutubeLine } from "react-icons/ri";
import { Route, Routes } from "react-router-dom";


const Homepage = lazy(() => import("./pages/Homepage"));
const WatchPage = lazy(() => import("./pages/WatchPage"));
const SearchResultPage = lazy(() => import("./pages/SearchResultPage"));
const FakeRoute = lazy(() => import("./components/FakeRoute"));

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebarOnMobile = () => {
    // Check if the screen width is less than Tailwind's 'sm' breakpoint (640px)
    if (window.innerWidth < 640) {
      // We add a small timeout to ensure navigation happens BEFORE the sidebar closes.
      setTimeout(() => {
        setIsSidebarOpen(false);
      }, 100);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const LoadingFallback = () => {
   return (
      <div className="flex justify-center items-center h-full">
      <p>Loading page...</p>
    </div>
   );
  }

  const location = useLocation();
  const isWatch = location.pathname === "/watch";
  const isResult = location.pathname === "/results";
  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      {/* Header component */}
      <Header onMenuClick={toggleSidebar} />
      <div className="flex">
        {/* Sidebar component */}
        <Sidebar  isOpen={isSidebarOpen} CloseSidebar={closeSidebarOnMobile} />
        <main
          className={`flex-grow p-4 ${
            isSidebarOpen
                ? "sm:ml-56"
              : isWatch || isResult
              ? "ml-0"
              : "sm:ml-20"
          }`}
        >
          <Suspense fallback={<LoadingFallback/>}>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/watch" element={<WatchPage />}></Route>
            <Route path="/results" element={<SearchResultPage />} />

            {/* Main navigation routes */}
            <Route
              path="/shorts"
              element={
                <FakeRoute
                  title="Shorts"
                  icon={IoPlayCircleOutline}
                  description="We're working hard to bring you amazing short videos!"
                />
              }
            />
            <Route
              path="/subscriptions"
              element={
                <FakeRoute
                  title="Subscriptions"
                  icon={IoPlayCircleOutline}
                  description="Your favorite channels will appear here soon!"
                />
              }
            />
            <Route
              path="/music"
              element={
                <FakeRoute
                  title="Music"
                  icon={IoMusicalNotesOutline}
                  description="Get ready for an amazing music experience!"
                />
              }
            />

            {/* You section routes */}
            <Route
              path="/you"
              element={
                <FakeRoute
                  title="Your Channel"
                  icon={FaRegUserCircle}
                  description="Your personal YouTube space is coming soon!"
                />
              }
            />
            <Route
              path="/history"
              element={
                <FakeRoute
                  title="History"
                  icon={FaHistory}
                  description="Your watch history will be available here!"
                />
              }
            />
            <Route
              path="/your-videos"
              element={
                <FakeRoute
                  title="Your Videos"
                  icon={IoVideocamOutline}
                  description="Upload and manage your videos here!"
                />
              }
            />
            <Route
              path="/watch-later"
              element={
                <FakeRoute
                  title="Watch Later"
                  icon={IoTimeOutline}
                  description="Save videos to watch them later!"
                />
              }
            />
            <Route
              path="/liked-videos"
              element={
                <FakeRoute
                  title="Liked Videos"
                  icon={BiLike}
                  description="All your liked videos in one place!"
                />
              }
            />

            {/* Explore section routes */}
            <Route
              path="/trending"
              element={
                <FakeRoute
                  title="Trending"
                  icon={IoFlameOutline}
                  description="See what's trending around the world!"
                />
              }
            />
            <Route
              path="/shopping"
              element={
                <FakeRoute
                  title="Shopping"
                  icon={IoBagOutline}
                  description="Discover and shop for amazing products!"
                />
              }
            />
            <Route
              path="/movies"
              element={
                <FakeRoute
                  title="Movies"
                  icon={IoFilmOutline}
                  description="Watch the latest movies and classics!"
                />
              }
            />
            <Route
              path="/live"
              element={
                <FakeRoute
                  title="Live"
                  icon={IoRadioOutline}
                  description="Experience live streaming content!"
                />
              }
            />
            <Route
              path="/gaming"
              element={
                <FakeRoute
                  title="Gaming"
                  icon={IoGameControllerOutline}
                  description="Level up with gaming content!"
                />
              }
            />
            <Route
              path="/news"
              element={
                <FakeRoute
                  title="News"
                  icon={IoNewspaperOutline}
                  description="Stay updated with the latest news!"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <FakeRoute
                  title="Sports"
                  icon={IoTrophyOutline}
                  description="Catch all the sports action here!"
                />
              }
            />
            <Route
              path="/learning"
              element={
                <FakeRoute
                  title="Learning"
                  icon={IoBulbOutline}
                  description="Expand your knowledge with educational content!"
                />
              }
            />

            {/* YouTube services routes */}
            <Route
              path="/youtube-premium"
              element={
                <FakeRoute
                  title="YouTube Premium"
                  icon={RiYoutubeLine}
                  description="Experience YouTube without ads and more!"
                />
              }
            />
            <Route
              path="/youtube-studio"
              element={
                <FakeRoute
                  title="YouTube Studio"
                  icon={IoPlayOutline}
                  description="Create and manage your content like a pro!"
                />
              }
            />
            <Route
              path="/youtube-music"
              element={
                <FakeRoute
                  title="YouTube Music"
                  icon={IoMusicalNotesOutline}
                  description="Your music, your way, everywhere!"
                />
              }
            />
            <Route
              path="/youtube-kids"
              element={
                <FakeRoute
                  title="YouTube Kids"
                  icon={RiYoutubeLine}
                  description="Safe and fun content for children!"
                />
              }
            />

            {/* Settings and help routes */}
            <Route
              path="/settings"
              element={
                <FakeRoute
                  title="Settings"
                  icon={IoSettingsOutline}
                  description="Customize your YouTube experience!"
                />
              }
            />
            <Route
              path="/report-history"
              element={
                <FakeRoute
                  title="Report History"
                  icon={IoFlagOutline}
                  description="View your reporting activity!"
                />
              }
            />
            <Route
              path="/help"
              element={
                <FakeRoute
                  title="Help"
                  icon={MdHelpOutline}
                  description="We're here to help you!"
                />
              }
            />

            {/* Legacy routes for backward compatibility */}
            <Route
              path="/library"
              element={
                <FakeRoute
                  title="Library"
                  icon={IoLibraryOutline}
                  description="Your personal video library!"
                />
              }
            />
          </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default App;
