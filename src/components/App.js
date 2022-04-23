import React, {useState, useEffect, useCallback} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import {api} from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setPageIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([profileData, initialCards]) => {
        setCurrentUser(profileData);
        setCards(initialCards);
        setPageIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setPageIsLoading(false);
      })
  }, [])

  const handleCardLike = card => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const cardsAfterLike = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(cardsAfterLike);
      })
      .catch(err => console.log(err));
  };

  const handleCardDelete = card => {
    setIsLoading(true);
    api.deleteCard(card._id)
      .then(() => {
        const cardsAfterDelete = cards.filter(item => item._id !== card._id);
        setCards(cardsAfterDelete);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      })
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const handleOnCardClick = (card) => {
    setSelectedCard(card)
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({})
  }

  const handleUpdateUser = (userInfo) => {
    setIsLoading(true);
    api.editProfile(userInfo)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      })
  }

  const handleUpdateAvatar = (avatar) => {
    //default avatar ==> https://live.staticflickr.com/3931/15229354939_7c28a19c66_q.jpg
    setIsLoading(true);
    api.editAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      })
  }
  const handleAddPlaceSubmit = (card) => {
    setIsLoading(true);
    api.addCard(card)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      })
  }

  const keydownHandler = useCallback((e) => {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  }, [keydownHandler]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header/>
        <Main onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleOnCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              isPageLoading={isPageLoading}
        />
        <Footer/>

        <EditProfilePopup isOpen={isEditProfilePopupOpen}
                          isLoading={isLoading}
                          onClose={closeAllPopups}
                          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
                         isLoading={isLoading}
                         onClose={closeAllPopups}
                         onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup isOpen={isAddPlacePopupOpen}
                       isLoading={isLoading}
                       onClose={closeAllPopups}
                       onAddPlace={handleAddPlaceSubmit}
        />

        <PopupWithForm name="delete-confirm"
                       title="Вы уверены?"
        >
          <button className="button popup__submit-btn"
                  type="submit"
                  value="Да"
                  name="confirm">
            Да
          </button>
        </PopupWithForm>

        <ImagePopup card={selectedCard}
                    onClose={closeAllPopups}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
