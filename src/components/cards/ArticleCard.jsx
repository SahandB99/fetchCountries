import React from "react";

import "./ArticleCard.styles.css";

const ArticleCard = ({ name, continents, flags }) => {
  return (
    <article className="card">
      <figure>
        <img src={flags.png} alt="image" />
      </figure>
      <div className="content">
        <h1>{name.common}</h1>
        <p>{continents}</p>
      </div>
      <div className="read-more">
        <a href="#">Read more</a>
      </div>
    </article>
  );
};

export default ArticleCard;
