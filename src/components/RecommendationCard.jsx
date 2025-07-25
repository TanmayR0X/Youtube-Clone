// src/components/RecommendationCard.jsx
import { Link } from "react-router-dom";

// We can reuse the same helper functions
const formatUploadDate = (dateString) => {
  if (!dateString) return '';
  const now = new Date();
  const publishedDate = new Date(dateString);
  const seconds = Math.floor((now - publishedDate) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return `${Math.floor(interval)} years ago`;
  interval = seconds / 2592000;
  if (interval > 1) return `${Math.floor(interval)} months ago`;
  // ... add other intervals if needed (days, hours)
  return `recently`;
};

export default function RecommendationCard({ video }) {
  // The data structure for 'search' results is slightly different
  const videoId = video?.id?.videoId;
  const title = video?.snippet?.title;
  const channelTitle = video?.snippet?.channelTitle;
  const publishedAt = video?.snippet?.publishedAt;
  const thumbnailUrl = video?.snippet?.thumbnails?.medium?.url;

  // Don't render the card if we don't have the necessary info
  if (!videoId || !thumbnailUrl) {
    return null;
  }

  return (
    <Link to={`/watch?v=${videoId}`} className="flex gap-2 cursor-pointer">
      {/* Thumbnail */}
      <div className="w-40 flex-shrink-0">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* --- THIS IS THE UPDATED PART --- */}
      {/* By adding w-0 and flex-grow, we tell this container to take up
          all available space without overflowing its parent. */}
      <div className="flex flex-col w-0 flex-grow">
        <h4 className="font-semibold text-sm line-clamp-2">{title}</h4>
        <p className="text-xs text-neutral-400 mt-1">{channelTitle}</p>
        <div className="text-xs text-neutral-400 flex items-center gap-1">
          <span>{formatUploadDate(publishedAt)}</span>
        </div>
      </div>
    </Link>
  );
}
