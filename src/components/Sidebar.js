import React from "react";
import "./Sidebar.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import spotify_logo from "../assets/logo.png";
import HomeIcon from "../assets/home_icon.png";
import BrowseIcon from "../assets/browse_icon.png";
import LikedSongsIcon from "../assets/liked_songs_icon.png";

const buttonIcons = {
  Home: <img src={HomeIcon} alt="homeIcon" />,
  Browse: <img src={BrowseIcon} alt="browseIcon" />,
  LikedSongs: <img src={LikedSongsIcon} alt="likedsongsIcon" />,
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="frame_logo">
        <img className="spotify_logo" src={spotify_logo} alt="Spotify Logo" />
      </div>
      {/* <Button Icon={buttonIcons.Browse} title="Browse"/> */}
      <NavLink to="/">
        <Button Icon={buttonIcons.Home} title="Home" />
      </NavLink>
      <NavLink to="/browse">
        <Button Icon={buttonIcons.Browse} title="Browse" />
      </NavLink>
      <NavLink to="/likedSongs">
        <Button Icon={buttonIcons.LikedSongs} title="Liked songs" />
      </NavLink>
    </div>
  );
};

export default Sidebar;
