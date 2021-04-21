import React from "react";
import "./Article.scss";

function Article({ img, title, description }) {
  return (
    <section className="article">
      <div className="article__item">
        <div className="article__img-container">
          <img className="article__img" src={img} alt="" />
        </div>
        <h2 className="article__header">{title}</h2>
        <p className="article__desc">{description}</p>
        <button className="article__btn">Read more</button>
      </div>
    </section>
  );
}

export default Article;
