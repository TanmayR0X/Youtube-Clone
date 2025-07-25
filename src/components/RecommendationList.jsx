import RecommendationCard from "./RecommendationCard";

export default function RecommendationList({ videos }) {
  return (
    <div className="flex flex-col gap-4">
      {videos?.map((video) => (
        // The search result item has a nested id object
        <RecommendationCard key={video.id.videoId} video={video} />
      ))}
    </div>
  );
}