import React from "react";
import "./card.scss";
export default function Card(props) {
  return (
    <div className="card__container">
      <p className="card__quote" id="my-node">
        {props.quote}
      </p>
      <h4 className="card__author">{props.authorName}</h4>
    </div>
  );
}
