import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  };

  const  handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  }

  return (
    <div className="page">
      <Header/>
      <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
      />
      <Footer/>

      <PopupWithForm name="edit-profile"
                     title="Редактировать профиль"
                     isOpen={isEditProfilePopupOpen}
                     onClose={closeAllPopups}
      >
            <input type="text" className="popup__input popup__input_field_name" name="name" id="name" placeholder="Имя"
                   aria-label="Имя" minLength={2} maxLength={40} required/>
            <span className="popup__input-error" id="name-error"/>
            <input type="text" className="popup__input popup__input_field_job" name="job" id="job"
                   placeholder="Род занатий" aria-label="Род занатий" minLength={2} maxLength={200} required/>
            <span className="popup__input-error" id="job-error"/>
            <input className="button popup__submit-btn popup__save-input-btn popup__submit-btn_inactive" type="submit"
                   defaultValue="Cохранить" name="save"/>
      </PopupWithForm>

      <PopupWithForm name="add-card"
                     title="Новое место"
                     isOpen={isAddPlacePopupOpen}
                     onClose={closeAllPopups}
      >
            <input type="text" className="popup__input popup__input_field_title" name="title" id="title"
                   placeholder="Название" aria-label="Название" minLength={2} maxLength={30} required/>
            <span className="popup__input-error" id="title-error"/>
            <input type="url" className="popup__input popup__input_field_link" name="link" id="link"
                   placeholder="Ссылка на картинку" aria-label="Название" required/>
            <span className="popup__input-error" id="link-error"/>
            <input className="button popup__submit-btn popup__create-btn" type="submit" defaultValue="Создать"
                   name="create"/>
      </PopupWithForm>

      <ImagePopup />

      <PopupWithForm name="delete-confirm"
                     title="Вы уверены?"
      >
            <button className="button popup__submit-btn popup__confirm-btn" type="submit" value="Да" name="confirm">Да
            </button>
      </PopupWithForm>

      <PopupWithForm name="edit-avatar"
                     title="Обновить аватар"
                     isOpen={isEditAvatarPopupOpen}
                     onClose={closeAllPopups}
      >
            <input type="url" className="popup__input popup__input_field_avatar" name="avatar" id="avatar"
                   placeholder="Ссылка на картинку" aria-label="Аватар" required/>
            <span className="popup__input-error" id="avatar-error"/>
            <input className="button popup__submit-btn popup__save-btn" type="submit" defaultValue="Сохранить"
                   name="save"/>
      </PopupWithForm>

      <template className="card-template">
        <li className="element">
          <div className="element__image-container">
            <img className="element__image" alt=""/>
            <button
              className="button element__delete-btn"
              name="delete"
              type="button"
              aria-label="Удалить"
            />
          </div>
          <div className="element__description">
            <h2 className="element__name"/>
            <div className="element__like">
              <button
                className="button element__like-btn"
                aria-label="Нравится"
                name="like"
                type="button"
              />
              <span className="element__like-count"/>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
