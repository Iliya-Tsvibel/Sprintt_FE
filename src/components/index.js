import React from "react";
//import Navbar from "./Navbar";
import FeaturedPlaylistsCard from "./FeaturedPlaylistsCard";
import RecentlyPlayedCard from "./RecentlyPlayedCard";
import MoodCard from "./MoodCard";
import "./index.css";
import PlaylistHeader from "./PlaylistHeader";

const Home = () => {
  return (
    <div>
      <div class="sticky">
        <PlaylistHeader />
      </div>
      <div className="playlist">
        <RecentlyPlayedCard />
      </div>
      <div className="playlist">
        <FeaturedPlaylistsCard />
      </div>
      <div className="playlist">
        <MoodCard />
      </div>
    </div>
  );
};

export default Home;
