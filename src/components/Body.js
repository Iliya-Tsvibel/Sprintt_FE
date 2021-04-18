import React from "react";
import "./Body.css";
import { Route, Switch } from "react-router-dom";
import Home from "./index";
import Browse from "./Browse";
import Favorite from "./Favorite";
import PlaylistPage from "./PlaylistPage";

function Body() {
  return (
    <div className="body">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/browse" component={Browse} />
        <Route path="/likedSongs" component={Favorite} />
        <Route path="/playlist" component={PlaylistPage} />
      </Switch>
    </div>
  );
}

export default Body;
