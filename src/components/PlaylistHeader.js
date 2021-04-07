import React, { useState, useEffect } from "react";
import "./PlayListCard.css";

const PlaylistHeader = () => {
  const [Playlist, setPlaylist] = useState([]);
  useEffect(() => {
    let url = "https://api.sprintt.co/spotify/featured_playlists?limit=10";
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
    <div className="container">
      <p className="topic">Playlist Header</p>
      {Playlist.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          {Playlist.map((current) => (
            <div className="out" key={current.playlist_id}>
              <div className="card-image">
                <img src={current.image_url} alt="cover" />
                <div className="card-body">
                  <div className="card_title">
                    <p>{current.name}</p>
                  </div>
                  <div className="description">
                    <p>{current.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaylistHeader;
