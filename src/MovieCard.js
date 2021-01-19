import React from "react";

function MovieCard(props) {
  return (
    <div className="card" key={props.key}>
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.imagePath}`}
        alt={props.title + " poster"}
      />
      <div className="card--content">
        <h3 className="card--title">{props.title}</h3>
        <p>
          <small>RELEASE DATE: {props.releaseDate}</small>
        </p>
        <p>
          <small>RATING: {props.rating}</small>
        </p>
        <p className="card--desc">{props.brief}</p>
      </div>
    </div>
  );
}

export default MovieCard;
