import React from "react";


function Card(props) {
  return (
    <div className="card--container">
      <div className="image--container">
        <img src={props.img} alt="Leno" />
      </div>

      <div className="card-content">
        <div className="card-title">{props.name}</div>

        <div className="card-subtitle">
          {props.position} {props.country}
        </div>

        <div className="card-details">
         {props.bio}
        </div>
      </div>
      <div className="btn">
        <button>
          <a href="https://en.wikipedia.org/wiki/Bernd_Leno" target="_blank">Learn More</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
