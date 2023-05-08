import { useContext } from "react";
import { useParams } from "react-router-dom";
import { VideoContext } from "../contexts/VideoContext";
import { VideoCard } from "../components/VideoCard";

export const VideoDetails = () => {
  const { videoId } = useParams();
  const { isLoading, videosList } = useContext(VideoContext);

  const selectedVideo = videosList?.find(({ id }) => id === Number(videoId));

  return (
    <>
      {isLoading && <p className="heading-p">Loading Video...</p>}
      <h2 className="heading-p">{selectedVideo?.title}</h2>
      <ul>
        <VideoCard videoData={selectedVideo} videoDetails />
      </ul>
    </>
  );
};
