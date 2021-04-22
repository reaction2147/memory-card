import React from "react";
import "../styles/card.css"

const card = ({ id, name, src, onClick }) => {
  return (
    <div className="card-container" onClick={onClick}>
      <img className="char-image" src={src} id={id} alt={name}></img>
      <p className="char-name">{name}</p>
    </div>
  );
};

export default card