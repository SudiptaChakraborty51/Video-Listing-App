import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext";
import { VideoCard } from "../components/VideoCard";

export const VideosListing = () => {
  const { isLoading, videosList } = useContext(VideoContext);

  return (
    <div>
      <h2 className="heading-p">All Videos</h2>
      {isLoading ? (
        <p className="heading-p">Loading Videos...</p>
      ) : (
        <ul>
          {videosList?.map((video) => (
            <VideoCard videoData={video} key={video.id} />
          ))}
        </ul>
      )}
    </div>
  );
};
