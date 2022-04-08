import React from "react";

function Card({card}) {
  return(
  <li className="element">
    <div className="element__image-container">
      <img className="element__image"
           alt={card.name}
           src={card.link}
      />
      <button
        className="button element__delete-btn"
        name="delete"
        type="button"
        aria-label="Удалить"
      />
    </div>
    <div className="element__description">
      <h2 className="element__name">{card.name}</h2>
      <div className="element__like">
        <button
          className="button element__like-btn"
          aria-label="Нравится"
          name="like"
          type="button"
        />
        <span className="element__like-count">{card.likes.length}</span>
      </div>
    </div>
  </li>)
}

export default Card
