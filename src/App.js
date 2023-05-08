import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { VideosListing } from "./pages/VideosListing";
import { LikedVideos } from "./pages/LikedVideos";
import { WatchLaterVideos } from "./pages/WatchLaterVideos";
import { VideoDetails } from "./pages/VideoDetails";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideosListing />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        <Route path="/watch-later-videos" element={<WatchLaterVideos />} />
        <Route path="/videos/:videoId" element={<VideoDetails />} />
      </Routes>
    </div>
  );
}
