import React, { useState, useEffect } from "react";
import axios from "axios";

const UpcomingMatches = () => {
    const [games, setGames] = useState([]);
    // 2 cree un estado para recibir la respuesta del endpoint de marvel
  
    useEffect(() => {
        const fetchGames = async () => {
          try {
            const resp = await axios.get('https://betplay-365.herokuapp.com/api/v1/matches/');
            console.log(resp);
            setGames(resp.data);
          } catch (error) {
            
          }
        }
        fetchGames();
      }, []);
  
  
    console.log(games);
  
    return (
      <div className="App">
        <h1>Marvel</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            games.map((game) => (
              <div
                className="col mt-5"
                key={game._id}
              >
                <div
                 className="card align-items-center"
                 style={{ width:"18rem", height: "18rem" }}
                >
                  <img
                   src={`${game.urlImgTeam1}`}
                   className="card-img-top"
                   style={{ width:"auto", height: "auto" }}
                  />
                  <img
                   src={`${game.urlImgTeam2}`}
                   className="card-img-top"
                   style={{ width:"auto", height: "auto" }}
                  />
                  <div
                    className="card-body"
                  >
                    <h4>{game.team1} vs {game.team2}</h4>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

export default UpcomingMatches;