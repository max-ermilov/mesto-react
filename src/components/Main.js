import React, {useEffect, useState} from "react";
import {api} from "../utils/Api";
import Card from "./Card"

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {

    Promise.all([
      api.getProfile()
        .then(({name, about, avatar}) => {
          setUserName(name)
          setUserDescription(about)
          setUserAvatar(avatar)
        }),
      api.getInitialCards()
        .then(res => {
          const data = res.map(item => {
            return {
              name: item.name,
              likes: item.likes,
              link: item.link,
              id: item._id,
              owner: item.owner
            };
          });
          setCards(data);
        })
    ])
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-container">
            <img alt="Фото профиля"
                 className="profile__avatar"
                 src={userAvatar}
            />
            <button className="button profile__avatar-edit-btn"
                    aria-label="Редактировать аватар"
                    type="button"
                    onClick={props.onEditAvatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__name-text">{userName}</h1>
              <button className="button profile__edit-btn"
                      aria-label="Редактировать профиль"
                      type="button"
                      onClick={props.onEditProfile}
              />
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button className="button profile__add-place-btn"
                aria-label="Добавить место"
                type="button"
                onClick={props.onAddPlace}
        />
      </section>
      <section className="elements">
        <ul className="elements__list">
          {
            cards.map(cardInfo => (
              <Card key={cardInfo.id}
                    card={cardInfo}
                    onCardClick={props.onCardClick}
              />
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main
