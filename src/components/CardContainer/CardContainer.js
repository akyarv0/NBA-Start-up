import React, { useState } from "react";
import { data } from "../../helper/data";
import "./CardContainer.scss";

const CardContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activePlayer, setActivePlayer] = useState(null); // Yeni state, etkin oyuncunun adını tutar.
  
  const toggleStats = (playerName) => {
    setActivePlayer(activePlayer === playerName ? null : playerName); // Eğer aynı oyuncuysa kapat, değilse etkin oyuncuyu güncelle.
  };

  const searchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="Search Player..."
          value={searchTerm}
          onChange={searchChange}
        />
      </div>
      <div className="cards">
        {filteredData.map((player) => (
          <div className="card" key={player.name} onClick={() => toggleStats(player.name)}>
            {activePlayer === player.name ?
              <div className="stats"><ul>
                {player.statistics.map((statistic, index) => (
                  <li key={index}>{statistic}</li>
                ))}
              </ul></div>
              :
              <div className="player-img">
                <img src={player.img} alt="player-img" />
                <h3>{player.name}</h3>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
