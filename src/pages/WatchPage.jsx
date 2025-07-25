import { useSearchParams } from "react-router-dom";
import { useGetVideoDetailsQuery, useGetRelatedVideosQuery } from "../store/youtubeApi";
import VideoPlayer from "../components/VideoPlayer";
import VideoDetails from "../components/VideoDetails";
import RecommendationList from "../components/RecommendationList";
import Comments from "../components/Comments";
export default function WatchPage() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const { 
    data: videoData, 
    isLoading: isVideoLoading, 
    isError: isVideoError 
  } = useGetVideoDetailsQuery(videoId, { skip: !videoId });
  const channelId = videoData?.items?.[0]?.snippet?.channelId;


  const { 
    data: relatedVideosData, 
    isLoading: areRelatedLoading,
    isError: areRelatedError
  } = useGetRelatedVideosQuery(channelId, { skip: !channelId });

  if (isVideoLoading || areRelatedLoading) {
    return <div>Loading...</div>;
  }

  if (isVideoError || areRelatedError) {
    return <div className="text-red-500">Error loading video data.</div>;
  }

  const video = videoData?.items?.[0];
  const relatedVideos = relatedVideosData?.items;
  const commentCount = video?.statistics?.commentCount;

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      <div className="flex-grow">
        <VideoPlayer videoId={videoId}/>
        {video && <VideoDetails video={video}/>}
        {videoId && <Comments videoId={videoId} commentCount={commentCount} />}
      </div>
      <div className="w-full lg:w-96 flex-shrink-0">
         {relatedVideos && <RecommendationList videos={relatedVideos} />}
      </div>
    </div>
  );
}