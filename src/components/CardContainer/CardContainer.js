import React, { useState } from "react";
import { data } from "../../helper/data";
import "./CardContainer.scss";

const CardContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");// searchTerm, kullanıcı tarafından girilen metni içerecek ve setSearchTerm fonksiyonu ise searchTerm state'ini güncellemek için kullanılacak.

 

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
          name=""
          id=""
          placeholder="Search Player..."
          value={searchTerm} //  input alanının value'su her değiştiğinde searchTerm state'i de güncellenir.
          onChange={searchChange}
        />
      </div>
      <div className="cards">
        {filteredData.map((player) => (  // yukarıda aradığımız metin ile bulunan oyuncunun bilgilerini burada yaklayıp gösteriyoruz. 
          <div className="card" key={player.name}>
            <div className="player-img">
              <img src={player.img} alt="player-img" />
              <h3>{player.name}</h3>
            </div>
            <ul className="stats"  >
              {player.statistics.map((statistic, index) => (
                <li key={index}>{statistic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
