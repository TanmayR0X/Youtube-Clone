// src/components/Comments.jsx
import { useGetCommentsQuery } from "../store/youtubeApi";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";

// Helper function to format the date
const formatUploadDate = (dateString) => {
    if (!dateString) return '';
    const now = new Date();
    const publishedDate = new Date(dateString);
    const seconds = Math.floor((now - publishedDate) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return `${Math.floor(interval)} years ago`;
    interval = seconds / 2592000;
    if (interval > 1) return `${Math.floor(interval)} months ago`;
    interval = seconds / 86400;
    if (interval > 1) return `${Math.floor(interval)} days ago`;
    return `recently`;
};

// A component for displaying a single comment
function Comment({ comment }) {
  // The comment data is nested, so we destructure it here
  const {
    authorProfileImageUrl,
    authorDisplayName,
    publishedAt,
    textDisplay,
    likeCount,
  } = comment.snippet.topLevelComment.snippet;

  return (
    <div className="flex gap-3 ">
      <img src={authorProfileImageUrl} alt={authorDisplayName} className="w-10 h-10 rounded-full" />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-sm">{authorDisplayName}</p>
          <p className="text-xs text-neutral-400">{formatUploadDate(publishedAt)}</p>
        </div>
        {/* dangerouslySetInnerHTML is used because the API provides HTML for bold/italic text */}
        <p className="text-sm mt-1" dangerouslySetInnerHTML={{ __html: textDisplay }}></p>
        <div className="flex items-center gap-4 mt-2">
          <button className="flex items-center gap-1 text-neutral-400 hover:text-white">
            <LuThumbsUp size={16} />
            <span className="text-xs">{likeCount > 0 ? likeCount : ''}</span>
          </button>
          <button className="text-neutral-400 hover:text-white">
            <LuThumbsDown size={16} />
          </button>
          <button className="text-xs font-semibold hover:bg-neutral-700 px-2 py-1 rounded-full">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}

// The main component that fetches and displays the list of comments
export default function Comments({ videoId, commentCount }) {
  const { data: commentsData, isLoading, isError } = useGetCommentsQuery(videoId);

  if (isLoading) return <div>Loading comments...</div>;
  if (isError) return <div>Error loading comments.</div>;

  const comments = commentsData?.items;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">{commentCount} Comments</h2>
      <div className="flex flex-col gap-6">
        {comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
