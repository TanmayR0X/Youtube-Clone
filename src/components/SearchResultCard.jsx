import { Link } from "react-router-dom";

import React from 'react'

const SearchResultCard = ({video}) => {
  const videoId = video?.id?.videoId;
  const title = video?.snippet?.title;
  const channelTitle = video?.snippet?.channelTitle;
  const description = video?.snippet?.description;
  const thumbnailUrl = video?.snippet?.thumbnails?.medium?.url;
  if(!videoId) return null;
  return (
       <Link to={`/watch?v=${videoId}`} className="flex flex-col sm:flex-row gap-4 cursor-pointer">
      {/* Thumbnail */}
      <div className=" sm:w-64 md:w-80 w-fit">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      {/* Details */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-neutral-400 mt-2">{channelTitle}</p>
        <p className="hidden md:block text-sm text-neutral-400 mt-2 line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  )
}

export default SearchResultCard