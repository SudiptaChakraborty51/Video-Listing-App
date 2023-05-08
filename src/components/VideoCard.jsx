import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { VideoContext } from "../contexts/VideoContext";

export const VideoCard = ({
  videoData,
  likedVideo,
  watchLaterVideo,
  videoDetails
}) => {
  const {
    id,
    title,
    description,
    url,
    thumbnail,
    duration,
    liked,
    watchLater
  } = videoData;
  const { addToLiked, addToWatchLater } = useContext(VideoContext);
  return (
    <>
      <li key={id}>
        <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>
          <NavLink to={`/videos/${id}`} className="watch-video">
            Watch Here
          </NavLink>
        </p>
        {videoDetails && (
          <div>
            <p>
              <strong>Description: {description}</strong>
            </p>
            <p>Duration: {duration}</p>
            <p>
              <NavLink to={url}>Watch on Youtube</NavLink>
            </p>
          </div>
        )}
        <div className="btns">
          {!likedVideo && (
            <button
              onClick={() => addToLiked(videoData)}
              disabled={liked}
              style={{
                backgroundColor: liked && "transparent",
                cursor: liked && "not-allowed"
              }}
              className="like-btn"
            >
              {liked ? "Liked" : "Like"}
            </button>
          )}
          {!watchLaterVideo && (
            <button
              onClick={() => addToWatchLater(videoData)}
              disabled={watchLater}
              style={{
                backgroundColor: watchLater && "transparent",
                cursor: watchLater && "not-allowed"
              }}
              className="watchlater-btn"
            >
              {watchLater ? "Added To Watch Later" : "Add to Watch Later"}
            </button>
          )}
        </div>
      </li>
    </>
  );
};
