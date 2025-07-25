// src/pages/HomePage.jsx
import VideoGrid from "../components/VideoGrid";
import SkeletonCard from "../components/SkeletonCard";
import { useGetPopularVideosQuery } from "../store/youtubeApi";

export default function HomePage() {
  const { data, isLoading, isError, error } = useGetPopularVideosQuery();

  // Handling the loading state 
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(12)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  // Handling the error state
  if (isError) {
    return <div className="text-red-500 text-center">Error: {error.message}</div>;
  }

  // Handling the case where data exists but the items array is empty
  if (data && (!data.items || data.items.length === 0)) {
    return (
      <div className="text-center text-neutral-400">
        <p>No videos found. The API returned an empty list.</p>
        <p className="mt-4">Here is the raw API response:</p>
        <pre className="mt-2 p-4 bg-zinc-800 rounded-md text-left text-xs whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    );
  }

  // 4. If everything is perfect, render the videos
  if (data && data.items) {
    return <VideoGrid videos={data.items} />;
  }

  // Fallback for any other unexpected case
  return <div className="text-center text-neutral-400">Something went wrong.</div>;
}