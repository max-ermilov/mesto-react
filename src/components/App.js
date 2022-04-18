import React, {useState, useEffect} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import {api} from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {

    api.getProfile()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


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
    api.editProfile(userInfo)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header/>
        <Main onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleOnCardClick}
        />
        <Footer/>

        <EditProfilePopup isOpen={isEditProfilePopupOpen}
                          onClose={closeAllPopups}
                          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm name="add-card"
                       title="Новое место"
                       isOpen={isAddPlacePopupOpen}
                       onClose={closeAllPopups}
        >
          <input type="text"
                 className="popup__input popup__input_field_title"
                 name="title" id="title"
                 placeholder="Название"
                 aria-label="Название"
                 minLength={2}
                 maxLength={30}
                 required
          />
          <span className="popup__input-error"
                id="title-error"
          />
          <input type="url"
                 className="popup__input popup__input_field_link"
                 name="link"
                 id="link"
                 placeholder="Ссылка на картинку"
                 aria-label="Название"
                 required
          />
          <span className="popup__input-error"
                id="link-error"
          />
          <input className="button popup__submit-btn popup__create-btn"
                 type="submit"
                 defaultValue="Создать"
                 name="create"
          />
        </PopupWithForm>

        <PopupWithForm name="delete-confirm"
                       title="Вы уверены?"
        >
          <button className="button popup__submit-btn popup__confirm-btn"
                  type="submit"
                  value="Да"
                  name="confirm">
            Да
          </button>
        </PopupWithForm>

        <PopupWithForm name="edit-avatar"
                       title="Обновить аватар"
                       isOpen={isEditAvatarPopupOpen}
                       onClose={closeAllPopups}
        >
          <input type="url"
                 className="popup__input popup__input_field_avatar"
                 name="avatar" id="avatar"
                 placeholder="Ссылка на картинку"
                 aria-label="Аватар"
                 required
          />
          <span className="popup__input-error"
                id="avatar-error"
          />
          <input className="button popup__submit-btn popup__save-btn"
                 type="submit"
                 defaultValue="Сохранить"
                 name="save"
          />
        </PopupWithForm>

        <ImagePopup card={selectedCard}
                    onClose={closeAllPopups}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
