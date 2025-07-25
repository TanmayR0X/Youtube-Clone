import { Link, useLocation } from "react-router-dom";
import {
  IoHomeOutline,
  IoHome,
  IoPlayCircleOutline,
  IoPlayCircle,
  IoMusicalNotesOutline,
  IoTimeOutline,
  IoPlayOutline,
  IoFlameOutline,
  IoFlame,
  IoBagOutline,
  IoFilmOutline,
  IoRadioOutline,
  IoGameControllerOutline,
  IoNewspaperOutline,
  IoTrophyOutline,
  IoBulbOutline,
  IoSettingsOutline,
  IoFlagOutline,
} from "react-icons/io5";
import {
  MdLibraryMusic,
  MdOutlineLibraryMusic,
  MdHelpOutline,
} from "react-icons/md";
import { FaRegUserCircle, FaUserCircle,FaHistory } from "react-icons/fa";
import { BiLike } from "react-icons/bi";


// Reusable sidebar expanded component
function FullSidebarItem({ icon, text, to, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer ${
        isActive ? "bg-neutral-700" : "hover:bg-neutral-700"
      }`}
    >
      {icon}
      <span className="text-sm whitespace-nowrap font-poppins">{text}</span>
    </Link>
  );
}

// Reusable sidebar collapsed component
function MiniSidebarItem({ OutlineIcon, FilledIcon, text, to }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className="flex flex-col items-center gap-1 py-3 rounded-lg cursor-pointer transition-all duration-500 hover:scale-110"
    >
      {isActive ? <FilledIcon size={22} /> : <OutlineIcon size={22} />}
      <span className={`text-[10px]`}>{text}</span>
    </Link>
  );
}

export default function Sidebar({ isOpen, CloseSidebar }) {
    const location = useLocation();
    const isWatch = location.pathname === '/watch';
    const isResult = location.pathname === '/results';
  return (
    <aside
      className={`custom-scrollbar bg-zinc-900 text-white ease-in-out overflow-x-hidden fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-y-auto py-2 
      ${isOpen ? "w-56" : isWatch || isResult?"w-0": "w-20"}`}
    >
      {isOpen ? (
        //  EXPANDED SIDEBAR VIEW 
        <nav className="flex flex-col gap-1 p-2">
          <FullSidebarItem
            icon={<IoHomeOutline size={20} />}
            text="Home"
            to="/"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<IoFlameOutline size={20} />}
            text="Shorts"
            to="/shorts"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<IoPlayCircleOutline size={20} />}
            text="Subscriptions"
            to="/subscriptions"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<MdOutlineLibraryMusic size={20} />}
            text="Youtube Music"
            to="/music"
            onClick={CloseSidebar}
          />
          <hr className="my-2 border-zinc-700" />
          <h2 className="px-3 py-2 text-md font-semibold text-zinc-300 ">
            You
          </h2>
          <FullSidebarItem
            icon={<FaRegUserCircle size={20} />}
            text="Your Channel"
            to="/you"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<FaHistory size={20} />}
            text="History"
            to="/history"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<IoPlayOutline size={20} />}
            text="Your Videos"
            to="/your-videos"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<IoTimeOutline size={20} />}
            text="Watch Later"
            to="/watch-later"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<BiLike size={20} />}
            text="Liked Videos"
            to="/liked-videos"
            onClick={CloseSidebar}
          />
          <hr className="my-2 border-zinc-700" />
          <h2 className="px-3 py-2 text-md font-semibold text-zinc-300 ">
            Explore
          </h2>
          <FullSidebarItem
            icon={<IoFlameOutline size={20} />}
            text="Trending"
            to="/trending"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<IoBagOutline size={20} />}
            text="Shopping"
            to="/shopping"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<IoMusicalNotesOutline size={20} />}
            text="Music"
            to="/music"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<IoFilmOutline size={20} />}
            text="Movies"
            to="/movies"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<IoRadioOutline size={20} />}
            text="Live"
            to="/live"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<IoGameControllerOutline size={20} />}
            text="Gaming"
            to="/gaming"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<IoNewspaperOutline size={20} />}
            text="News"
            to="/news"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<IoTrophyOutline size={20} />}
            text="Sports"
            to="/sports"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<IoBulbOutline size={20} />}
            text="Learning"
            to="/learning"
            onClick={CloseSidebar}
          />
          <hr className="my-2 border-zinc-700" />
          <h2 className="px-3 py-2 text-md font-semibold text-zinc-300">
            More From Youtube
          </h2>
          <FullSidebarItem
            icon={
              <div
                style={{
                  width: 24,
                  height: 24,
                  display: "block",
                  fill: "currentcolor",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  enableBackground="new 0 0 24 24"
                  xmlSpace="preserve"
                  focusable={false}
                  aria-hidden={true}
                  style={{
                    pointerEvents: "none",
                    display: "inherit",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <g>
                    <path
                      fill="#FF0033"
                      d="M21.58,7.19c-0.23-0.86-0.91-1.54-1.77-1.77C18.25,5,12,5,12,5S5.75,5,4.19,5.42   C3.33,5.65,2.65,6.33,2.42,7.19C2,8.75,2,12,2,12s0,3.25,0.42,4.81c0.23,0.86,0.91,1.54,1.77,1.77C5.75,19,12,19,12,19   s6.25,0,7.81-0.42c0.86-0.23,1.54-0.91,1.77-1.77C22,15.25,22,12,22,12S22,8.75,21.58,7.19z"
                    ></path>
                    <polygon
                      fill="#FFFFFF"
                      points="10,15 15,12 10,9  "
                    ></polygon>
                  </g>
                </svg>
              </div>
            }
            text="Youtube Premium"
            to="/youtube-premium"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={
              <div
                style={{
                  width: 24,
                  height: 24,
                  display: "block",
                  fill: "currentcolor",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  enableBackground="new 0 0 24 24"
                  xmlSpace="preserve"
                  focusable={false}
                  aria-hidden={true}
                  style={{
                    pointerEvents: "none",
                    display: "inherit",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <g>
                    <path
                      fill="#FF0033"
                      d="M11.13,1.21c0.48-0.28,1.26-0.28,1.74,0l8.01,4.64c0.48,0.28,0.87,0.97,0.87,1.53v9.24    c0,0.56-0.39,1.25-0.87,1.53l-8.01,4.64c-0.48,0.28-1.26,0.28-1.74,0l-8.01-4.64c-0.48-0.28-0.87-0.97-0.87-1.53V7.38    c0-0.56,0.39-1.25,0.87-1.53L11.13,1.21z"
                    ></path>
                    <polygon
                      fill="#FFFFFF"
                      points="10,15 15,12 10,9  "
                    ></polygon>
                    <path
                      fill="#FFFFFF"
                      d="M12,6c0.11,0,0.19,0.03,0.21,0.04l4.89,2.82c0.05,0.03,0.14,0.2,0.14,0.37v5.67c0,0.17-0.09,0.34-0.14,0.37    l-4.9,2.83c-0.03,0.01-0.1,0.04-0.21,0.04c-0.11,0-0.19-0.03-0.21-0.04l-4.9-2.83c-0.05-0.03-0.15-0.2-0.15-0.37V9.24    c0-0.17,0.1-0.34,0.14-0.37l4.9-2.83C11.82,6.03,11.89,6,12,6 M12,5c-0.25,0-0.51,0.06-0.71,0.18L6.39,8    C5.99,8.23,5.75,8.77,5.75,9.24v5.67c0,0.47,0.24,1,0.64,1.24l4.9,2.83c0.2,0.12,0.46,0.18,0.71,0.18c0.25,0,0.51-0.06,0.71-0.18    l4.9-2.83c0.41-0.24,0.64-0.77,0.64-1.24V9.24c0-0.47-0.23-1-0.64-1.24l-4.9-2.82C12.51,5.06,12.26,5,12,5L12,5z"
                    ></path>
                  </g>
                </svg>
              </div>
            }
            text="Youtube Studio"
            to="/youtube-studio"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={
              <div
                style={{
                  width: 24,
                  height: 24,
                  display: "block",
                  fill: "currentcolor",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  enableBackground="new 0 0 24 24"
                  xmlSpace="preserve"
                  focusable={false}
                  aria-hidden={true}
                  style={{
                    pointerEvents: "none",
                    display: "inherit",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <g>
                    <circle
                      id="XMLID_4814__yt105"
                      fill="#FF0033"
                      cx="12"
                      cy="12"
                      r="11"
                    ></circle>
                    <path
                      fill="#FFFFFF"
                      d="M12,6.25c3.17,0,5.75,2.58,5.75,5.75s-2.58,5.75-5.75,5.75S6.25,15.17,6.25,12S8.83,6.25,12,6.25 M12,5.25    c-3.73,0-6.75,3.02-6.75,6.75s3.02,6.75,6.75,6.75s6.75-3.02,6.75-6.75S15.73,5.25,12,5.25L12,5.25z"
                    ></path>
                    <polygon
                      fill="#FFFFFF"
                      points="10,15 15,12 10,9  "
                    ></polygon>
                  </g>
                </svg>
              </div>
            }
            text="Youtube Music"
            to="/youtube-music"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={
              <div
                style={{
                  width: 24,
                  height: 24,
                  display: "block",
                  fill: "currentcolor",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  enableBackground="new 0 0 24 24"
                  xmlSpace="preserve"
                  focusable={false}
                  aria-hidden={true}
                  style={{
                    pointerEvents: "none",
                    display: "inherit",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <g>
                    <g>
                      <path
                        fill="#FF0033"
                        d="M22.64,13.2c-0.01-1.04-0.62-5.98-0.9-6.74c-0.19-0.5-0.58-1.4-1.31-1.95c-0.94-0.7-1.7-0.83-2.68-0.85     C17.06,3.64,6.12,5.03,4.79,5.51C3.8,5.88,3.03,6.35,2.42,6.95c-0.99,0.98-1.18,1.93-1.02,3.6c0.14,1.52,0.85,6.55,1.21,7.59     c0.39,1.15,1.11,2.03,2.3,2.16c3.62,0.39,4.48-1.6,12.9-1.58c2.55,0.01,3.82-1.11,4.35-2.08C22.77,15.49,22.65,13.99,22.64,13.2z"
                      ></path>
                      <path
                        fill="#212121"
                        d="M17.47,4.04C17.47,4.04,17.48,4.04,17.47,4.04c0.94,0.02,1.67,0.14,2.56,0.81     c0.7,0.53,1.08,1.39,1.25,1.86c0.28,0.73,0.85,5.44,0.86,6.43c0.01,0.76,0.12,2.19-0.47,3.28c-0.5,0.92-1.71,1.98-4.13,1.98     c-0.01,0-0.01,0-0.02,0c-0.04,0-0.07,0-0.11,0c-7.23,0-8.55,1.56-11.33,1.56c-0.27,0-0.56-0.02-0.87-0.05     c-1.13-0.12-1.82-0.96-2.19-2.06c-0.34-0.99-1.01-5.79-1.15-7.24c-0.15-1.6,0.03-2.51,0.98-3.44c0.58-0.57,1.32-1.02,2.27-1.37     C6.38,5.35,16.73,4.04,17.47,4.04 M17.47,3.2c-0.47,0-3.53,0.37-6.09,0.72C8.82,4.27,5.6,4.75,4.84,5.03     c-1.06,0.39-1.9,0.9-2.56,1.56C1.05,7.8,0.9,9.06,1.05,10.7c0.12,1.27,0.8,6.28,1.19,7.43c0.53,1.55,1.55,2.48,2.89,2.62     c0.33,0.04,0.64,0.05,0.96,0.05c1.17,0,2.1-0.25,3.18-0.54c1.69-0.45,3.8-1.02,8.15-1.02l0.11,0l0.02,0     c1.07,0,3.68-0.24,4.86-2.42c0.63-1.17,0.6-2.59,0.58-3.43c0-0.09,0-0.18-0.01-0.26c-0.01-1.01-0.59-5.85-0.92-6.72     c-0.38-1-0.89-1.75-1.53-2.23c-1.05-0.79-1.94-0.96-3.04-0.98l-0.01,0L17.47,3.2L17.47,3.2z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#FFFFFF"
                        d="M15.28,11.85c-0.03,0.02-0.05,0.03-0.08,0.05c-0.21,0.14-0.42,0.28-0.63,0.43     c-0.49,0.33-3.33,2.26-3.33,2.26c-0.24,0.18-0.7,0.47-0.87,0.38c-0.17-0.09-0.23-0.72-0.27-1.02l-0.01-0.07     c-0.05-0.36-0.46-3.83-0.51-4.21C9.56,9.56,9.5,9.17,9.62,9.08c0.13-0.1,0.47,0.01,0.58,0.05c0.66,0.21,3.93,1.35,4.95,1.86     c0.03,0.02,0.06,0.03,0.1,0.04c0.15,0.06,0.35,0.15,0.35,0.39C15.6,11.65,15.42,11.76,15.28,11.85z"
                      ></path>
                      <path
                        fill="#212121"
                        d="M10.04,9.59c1.14,0.38,3.77,1.32,5.01,1.87c-0.15,0.1-0.3,0.2-0.45,0.3c-0.58,0.39-3.94,2.68-3.94,2.68     l-0.02,0.01l-0.02,0.01c0,0,0,0,0,0c0-0.03-0.01-0.05-0.01-0.07l-0.02-0.13l-0.01-0.08c-0.04-0.31-0.31-2.58-0.48-3.94     C10.08,9.98,10.06,9.76,10.04,9.59 M9.4,8.56c-0.07,0-0.14,0.01-0.18,0.05c-0.15,0.11-0.07,0.58-0.05,0.7     c0.05,0.45,0.54,4.56,0.6,4.99l0.01,0.08c0.05,0.36,0.12,1.1,0.33,1.21c0.03,0.01,0.06,0.02,0.1,0.02c0.25,0,0.68-0.28,0.93-0.47     c0,0,3.36-2.29,3.94-2.68c0.25-0.17,0.5-0.34,0.75-0.51c0.03-0.02,0.06-0.04,0.1-0.06c0.17-0.1,0.38-0.23,0.38-0.5     c-0.01-0.29-0.24-0.39-0.41-0.46c-0.04-0.02-0.08-0.03-0.11-0.05c-1.21-0.61-5.09-1.96-5.87-2.21C9.8,8.63,9.58,8.56,9.4,8.56     L9.4,8.56z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            }
            text="Youtube Kids"
            to="/youtube-kids"
            onClick={CloseSidebar}
          />

          <hr className="my-2 border-zinc-700" />
          <FullSidebarItem
            icon={<IoSettingsOutline size={20} />}
            text="Settings"
            to="/settings"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<IoFlagOutline size={20} />}
            text="Report history"
            to="/report-history"
            onClick={CloseSidebar}
          />
          <FullSidebarItem
            icon={<MdHelpOutline size={20} />}
            text="Help"
            to="/help"
            onClick={CloseSidebar}
          />
        </nav>
      ) : !isWatch && (
        //  COLLAPSED (MINI) SIDEBAR  
        <nav className="flex flex-col gap-1 p-2 items-center">
          <MiniSidebarItem
            OutlineIcon={IoHomeOutline}
            FilledIcon={IoHome}
            text="Home"
            to="/"
          />
          <MiniSidebarItem
            OutlineIcon={IoFlameOutline}
            FilledIcon={IoFlame}
            text="Shorts"
            to="/shorts"
          />
          <MiniSidebarItem
            OutlineIcon={IoPlayCircleOutline}
            FilledIcon={IoPlayCircle}
            text="Subscriptions"
            to="/subscriptions"
          />
          <MiniSidebarItem
            OutlineIcon={MdOutlineLibraryMusic}
            FilledIcon={MdLibraryMusic}
            text="Music"
            to="/music"
          />
          {/* Step 3: Fixed the swapped icons for the "You" item */}
          <MiniSidebarItem
            OutlineIcon={FaRegUserCircle}
            FilledIcon={FaUserCircle}
            text="You"
            to="/you"
          />
        </nav>
      )}
    </aside>
  );
}
