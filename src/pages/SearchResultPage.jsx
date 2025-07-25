import { useSearchParams } from "react-router-dom";
import {useSearchVideosQuery} from '../store/youtubeApi';
import SearchResultCard  from '../components/SearchResultCard';

import React from 'react'

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const {data, isLoading, isError} = useSearchVideosQuery(query ,{
    skip:!query // Don't run the query if there's no search term
  })

  if(isLoading) {
    return <div>Loading Search Result...</div>
  }
    if (isError) {
    return <div className="text-red-500">Error loading search results.</div>;
  }

  const videos = data?.items;
  return (
     <div className="flex flex-col gap-6 p-4">
      <h2 className="text-xl font-bold">{query.toUpperCase()} Related Videos :</h2>
      {videos?.map((video) => (
        <SearchResultCard key={video.id.videoId} video={video} />
      ))}
    </div>
  )
}

export default SearchResultPage