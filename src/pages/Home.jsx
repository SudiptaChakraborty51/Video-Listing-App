import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Video Library</h1>
      <h2>
        To browse all videos, click the below button or go to the videos page.
      </h2>
      <button className="home-btn">
        <NavLink to="/videos" className="nav-link">
          Explore Videos
        </NavLink>
      </button>
    </div>
  );
};
