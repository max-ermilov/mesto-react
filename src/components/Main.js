import React, {useEffect, useState, useContext} from "react";
import {api} from "../utils/api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({onAddPlace, onCardClick, onEditAvatar, onEditProfile}) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);
  const {
    name: userName,
    about: userAbout,
    avatar: userAvatar
  } = currentUser;

  useEffect(() => {
    api.getInitialCards()
      .then(res => setCards(res))
      .catch(err => console.log(err))
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
       const cardsAfterLike = cards.map((c) => c._id === card._id ? newCard : c);
       setCards(cardsAfterLike);
    })
      .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    console.log('handleCardDelete  ==> ',  );
    api.deleteCard(card._id)
      .then(() => {
        const cardsAfterDelete = cards.filter(item => item._id !== card._id);
        setCards(cardsAfterDelete);
      })
      .catch(err => console.log(err))
  }

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
                    onCardLike={handleCardLike}
                    onCardClick={onCardClick}
                    onCardDelete={handleCardDelete}
              />
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main
