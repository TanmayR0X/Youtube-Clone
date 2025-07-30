import React from "react";

const VideoPlayer = ({ videoId }) => {
  if (!videoId) {
    <div className="aspect-video bg-neutral-800 flex items-center justify-center">
      <p className="text-neutral-400">No video selected.</p>
    </div>;
  }
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  return  (
    <div className="aspect-video ">
      <iframe 
      src={embedUrl}
      title="Youtube Video Player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-xl w-full h-full"
      ></iframe>
    </div>
  )
};

export default VideoPlayer;
