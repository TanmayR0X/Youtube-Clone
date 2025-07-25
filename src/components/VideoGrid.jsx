import VideoCard from "./VideoCard"


const VideoGrid = ({videos}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video}/>
      ))}
    </div>
  )
}

export default VideoGrid