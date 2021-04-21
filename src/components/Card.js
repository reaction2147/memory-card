import React from "react";

const card = ({ id, name, src, onClick }) => {
  return (
    <div className="card-container" onClick={onClick}>
      <img className="char-img" src={src} id={id} alt={name}></img>
      <p className="char-name">{name}</p>
    </div>
  );
};

export default card