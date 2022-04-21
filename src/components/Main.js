import React, {useContext} from "react";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({onAddPlace, onCardClick, onEditAvatar, onEditProfile, cards, onCardLike, onCardDelete}) {
  const {
    name: userName,
    about: userAbout,
    avatar: userAvatar
  } = useContext(CurrentUserContext);

  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-container">
            <img alt={`Аватар ${userName}`}
                 className="profile__avatar"
                 src={userAvatar}
            />
            <button className="button profile__avatar-edit-btn"
                    aria-label="Редактировать аватар"
                    type="button"
                    onClick={onEditAvatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__name-text">{userName}</h1>
              <button className="button profile__edit-btn"
                      aria-label="Редактировать профиль"
                      type="button"
                      onClick={onEditProfile}
              />
            </div>
            <p className="profile__job">{userAbout}</p>
          </div>
        </div>
        <button className="button profile__add-place-btn"
                aria-label="Добавить место"
                type="button"
                onClick={onAddPlace}
        />
      </section>
      <section className="elements">
        <ul className="elements__list">
          {
            cards.map(cardInfo => (
              <Card key={cardInfo._id}
                    card={cardInfo}
                    onCardLike={onCardLike}
                    onCardClick={onCardClick}
                    onCardDelete={onCardDelete}
              />
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main
