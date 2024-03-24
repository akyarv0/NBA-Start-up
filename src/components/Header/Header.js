import React from "react";
import nbaLogo from "../../assets/nba-logo.png"; // Resmin dosya yolunu import etmek
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={nbaLogo} alt="nba-logo" />
      <h1>NBA Legends</h1>
    </div>
  );
};

export default Header;
