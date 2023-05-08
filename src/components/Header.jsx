import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { VideoContext } from "../contexts/VideoContext";

export const Header = () => {
  const { likedVideos, watchLaterVideos } = useContext(VideoContext);
  const getActiveStyle = ({ isActive }) => ({
    fontSize: isActive ? "22px" : "20px",
    textDecoration: isActive ? "underline" : "none"
  });

  return (
    <nav>
      <NavLink to="/" className="nav-link" style={getActiveStyle}>
        Home
      </NavLink>
      <NavLink to="/videos" className="nav-link" style={getActiveStyle}>
        Videos
      </NavLink>
      <NavLink to="/liked-videos" className="nav-link" style={getActiveStyle}>
        Liked Videos({likedVideos.length})
      </NavLink>
      <NavLink
        to="/watch-later-videos"
        className="nav-link"
        style={getActiveStyle}
      >
        Watch Later({watchLaterVideos.length})
      </NavLink>
    </nav>
  );
};
