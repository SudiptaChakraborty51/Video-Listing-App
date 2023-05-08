import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../fakeFetch";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videosList, setVideosList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchVideos = async () => {
    try {
      setIsLoading(true);
      const {
        status,
        data: { videos }
      } = await fakeFetch("https://example.com/api/videos");
      setIsLoading(false);
      if (status === 200) {
        setVideosList(videos);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const addToLiked = (selectedVideo) => {
    setVideosList((videosList) =>
      videosList?.map((video) =>
        video.id === selectedVideo.id ? { ...video, liked: true } : video
      )
    );
  };

  const likedVideos = videosList?.filter(({ liked }) => liked);

  const addToWatchLater = (selectedVideo) => {
    setVideosList((videosList) =>
      videosList?.map((video) =>
        video.id === selectedVideo.id ? { ...video, watchLater: true } : video
      )
    );
  };

  const watchLaterVideos = videosList?.filter(({ watchLater }) => watchLater);

  return (
    <VideoContext.Provider
      value={{
        isLoading,
        videosList,
        addToLiked,
        likedVideos,
        addToWatchLater,
        watchLaterVideos
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
