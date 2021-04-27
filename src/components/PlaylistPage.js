import React from "react";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistTab from "./PlaylistTab";
import "./PlaylistPage.css";

const PlaylistPage = () => {
  return (
    <>
      <div class="sticky">
        <PlaylistHeader />
      </div>
      <div className="playlisttab">
        <PlaylistTab />
      </div>
    </>
  );
};

export default PlaylistPage;
