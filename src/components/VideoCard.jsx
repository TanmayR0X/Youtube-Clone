import { Link } from "react-router-dom";

// helper function - to format number of views (10000 = 10k)

const formatViewCount = (count) => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M views`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(0)}K views`;
  }
  return `${count} views`;
};

// helper function - to format the date

const formatUploadDate = (dateString) => {
  const now = new Date();
  const publishedDate = new Date(dateString);
  const seconds = Math.floor((now - publishedDate) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) return `${Math.floor(interval)} years ago`;
  interval = seconds / 2592000;
  if (interval > 1) return `${Math.floor(interval)} months ago`;
  interval = seconds / 86400;
  if (interval > 1) return `${Math.floor(interval)} days ago`;
  interval = seconds / 3600;
  if (interval > 1) return `${Math.floor(interval)} hours ago`;
  interval = seconds / 60;
  if (interval > 1) return `${Math.floor(interval)} minutes ago`;
  return `${Math.floor(seconds)} seconds ago`;
};

const VideoCard = ({ video }) => {
  const { id, snippet, statistics } = video;
  const { title, channelTitle, publishedAt, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <Link to={`watch?v=${id}`} className="flex flex-col gap-2 cursor-pointer font-roboto">
      {/* Video Thumbnail */}
       <div className="relative w-full overflow-hidden rounded-xl aspect-video bg-neutral-800">
        <img
          src={thumbnails.high.url}
          alt={title}
          // 2. The image is now set to fill the height and width of the container.
          //    'object-cover' ensures it covers the area without stretching.
          className="w-full h-full object-cover"
        />
      </div>

      {/* Video Details */}
      <div className="flex gap-3">
        {/* adding channel avatar later here */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-white text-md line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-neutral-400 mt-1">{channelTitle}</p>
          <div className="text-sm text-neutral-400 flex items-center gap-2">
            <span>{formatViewCount(viewCount)}</span>
            <span>.</span>
            <span>{formatUploadDate(publishedAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
