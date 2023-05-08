import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext";
import { VideoCard } from "../components/VideoCard";

export const WatchLaterVideos = () => {
  const { isLoading, watchLaterVideos } = useContext(VideoContext);

  return (
    <>
      <h2 className="heading-p">Watch Later Videos</h2>
      {isLoading ? (
        <p className="heading-p">Loading Videos...</p>
      ) : watchLaterVideos.length === 0 ? (
        <p className="heading-p">No videos in watch later!</p>
      ) : (
        <ul>
          {watchLaterVideos?.map((video, index) => (
            <VideoCard videoData={video} key={index} watchLaterVideo />
          ))}
        </ul>
      )}
    </>
  );
};
