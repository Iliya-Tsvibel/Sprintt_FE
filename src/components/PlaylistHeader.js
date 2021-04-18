import React, { useState, useEffect } from "react";
import "./PlaylistHeader.css";

const PlaylistHeader = () => {
  const [Playlist, setPlaylist] = useState([]);
  useEffect(() => {
    let url = "https://api.sprintt.co/spotify/featured_playlists?limit=1";
    let token = "fa7af26c-3740-4bcb-b01d-16fff6fe520c";
    fetch(url, {
      method: "GET",
      headers: {
        "user-access-token": token,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data");
        setPlaylist(data.playlists);
      })
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div className="header_container">
      {Playlist.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          {Playlist.map((current) => (
            <>
              <div className="header_card-image" key={current.playlist_id}>
                <img src={current.image_url} alt="cover" />
              </div>
              <div className="headerText">
                <div className="header_card_title">
                  <div>{current.name}</div>
                </div>
                <div className="header_description">
                  <div>{current.description}</div>
                </div>
                <div className="song_count">
                  <div>count</div>
                </div>
                <div className="song_duraction">
                  <div>duraction</div>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaylistHeader;
