import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

 function App() {

  const genreAndMusic = {
    pop: [
      { name: "Shape of You", rating: 4.5 },
      { name: "Uptown Funk", rating: 4 },
      { name: "Sugar", rating: 3 }
    ],
    classical: [
      { name: "Bhajan", rating: 4.3 },
      { name: "Rainbow Light", rating: 4 },
      { name: "Frozen Lake", rating: 3 }
    ],
    Jazz: [
      { name: "Take Five", rating: 4.8 },
      { name: "So What", rating: 4 },
      { name: "Take The A Train", rating: 3 }
    ]
  };

  const [favMusic, setFavMusic] = useState(genreAndMusic.pop);


  let genres = Object.keys(genreAndMusic);

  function showMusic(genre) {
    setFavMusic(genreAndMusic[genre]);
  }

  return (
    <div className="App">
      <div class="musicContainer">
        <h1>Good Music</h1>

        <small>
          Checkout my favorite Musics. Select a genre to get started
        </small>

        <ul className="genreList">
          {genres.map((genre) => (
            <li
              key={genre}
              className="genreButton"
              onClick={() => showMusic(genre)}
            >
              {genre}
            </li>
          ))}
        </ul>

        <hr />

        {favMusic.map((music) => (
          <div class="container">
            <div class="musicName">{music.name}</div>
            <div>{music.rating}/5</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
