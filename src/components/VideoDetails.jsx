import { useGetChannelDetailsQuery } from '../store/youtubeApi';
import { LuThumbsUp, LuThumbsDown, LuShare2, LuDownload } from "react-icons/lu";

// Helper Function to format numbers
const formatNumber = (num) => {
  if (!num) return '0';
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
  return num.toString();
};

const VideoDetails = ({ video }) => {
  // --- Data Extraction with Safety Checks ---
  const channelId = video?.snippet?.channelId;
  const title = video?.snippet?.title;
  // Use the channel title from the video data first, as it's immediately available.
  const channelTitle = video?.snippet?.channelTitle; 
  const viewCount = video?.statistics?.viewCount;
  const likeCount = video?.statistics?.likeCount;
  const publishedAt = video?.snippet?.publishedAt;
  const description = video?.snippet?.description;

  // Fetch channel-specific details (like subscriber count and thumbnail) in the background.
  const { data: channelData } = useGetChannelDetailsQuery(channelId, {
    skip: !channelId,
  });

  // Safely get the details from the separate channel API call.
  const channel = channelData?.items?.[0];
  const subscriberCount = channel?.statistics?.subscriberCount;
  const channelThumbnail = channel?.snippet?.thumbnails?.default?.url;

  return (
    <div className='mt-4'>
      <h1 className='text-xl font-bold'>{title}</h1>
      
      <div className='flex flex-wrap items-center justify-between mt-4 gap-y-4'>
        
        {/* Channel Info */}
        <div className='flex items-center gap-3'>
          {/* Render the channel thumbnail only when it has loaded */}
          {channelThumbnail && (
            <img src={channelThumbnail} alt={channelTitle} className='w-10 h-10 rounded-full cursor-pointer'/>
          )}
          <div className='cursor-pointer'>
            <p className='font-semibold'>{channelTitle}</p>
            {/* Render the subscriber count only when it has loaded */}
            {subscriberCount && (
              <p className='text-sm text-neutral-400'>{formatNumber(subscriberCount)} subscribers</p>
            )}
          </div>
          <button className="ml-4 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-neutral-200 cursor-pointer">
            Subscribe
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2">
          <div className="flex items-center bg-neutral-800 rounded-full flex-shrink-0">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-700 rounded-l-full cursor-pointer">
              <LuThumbsUp size={20} />
              <span>{formatNumber(likeCount)}</span>
            </button>
            <div className="w-px h-6 bg-neutral-600"></div>
            <button className="px-4 py-[10px] hover:bg-neutral-700 rounded-r-full cursor-pointer">
              <LuThumbsDown size={20} />
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-full hover:bg-neutral-700 cursor-pointer flex-shrink-0">
            <LuShare2 size={20} />
            <span className="max-sm:hidden">Share</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-full hover:bg-neutral-700 cursor-pointer flex-shrink-0">
            <LuDownload size={20} />
            <span className="max-sm:hidden">Download</span>
          </button>
        </div>
      </div>

      {/* Video Description */}
      <div className="mt-4 p-3 bg-neutral-800 rounded-xl whitespace-pre-wrap">
        <div className="flex gap-4 font-semibold">
          <p>{formatNumber(viewCount)} views</p>
          {/* This check prevents a crash if publishedAt is missing */}
          {publishedAt && <p>{new Date(publishedAt).toLocaleDateString()}</p>}
        </div>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
