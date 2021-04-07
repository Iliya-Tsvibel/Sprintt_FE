import React, { useState, useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/PlayListCard.css";
import Slider from "react-slick";

const MoodCard = () => {
  const [Playlist, setPlaylist] = useState([]);
  useEffect(() => {
    let url = "https://api.sprintt.co/spotify/mood_playlists?limit=10";
    let token = "fa7af26c-3740-4bcb-b01d-16fff6fe520c";
    fetch(url, {
      method: "GET",
      headers: {
        "user-access-token": token
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data");
        setPlaylist(data.playlists);
      })
      .catch((err) => console.log("err", err));
  }, []);

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className="container">
      <p className="topic">Mood</p>
      {Playlist.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Slider {...settings}>
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
        </Slider>
      )}
    </div>
  );
};
export default MoodCard;
