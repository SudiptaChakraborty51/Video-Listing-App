import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext";
import { VideoCard } from "../components/VideoCard";

export const LikedVideos = () => {
  const { isLoading, likedVideos } = useContext(VideoContext);

  return (
    <>
      <h2 className="heading-p">Liked Videos</h2>
      {isLoading ? (
        <p className="heading-p">Loading Videos...</p>
      ) : likedVideos.length === 0 ? (
        <p className="heading-p">No Liked videos found!</p>
      ) : (
        <ul>
          {likedVideos?.map((video) => (
            <VideoCard videoData={video} key={video.id} likedVideo />
          ))}
        </ul>
      )}
    </>
  );
};
