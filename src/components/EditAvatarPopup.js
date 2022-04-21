import PopupWithForm from "./PopupWithForm";
import React, {useContext, useRef, useEffect} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const currentUser = useContext(CurrentUserContext);
  const linkInput = useRef(null);

  useEffect(() => {
    linkInput.current.value = linkInput.current.defaultValue
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: linkInput.current.value
    })
  }

  return (
    <PopupWithForm name="edit-avatar"
                   title="Обновить аватар"
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}
    >
      <input type="url"
             className="popup__input popup__input_field_avatar"
             name="avatar"
             ref={linkInput}
             defaultValue={currentUser.avatar}
             id="avatar"
             placeholder="Ссылка на картинку"
             aria-label="Аватар"
             required
      />
      <span className="popup__input-error"
            id="avatar-error"
      />
      <button className="button popup__submit-btn popup__save-btn"
              type="submit"
              defaultValue="Сохранить"
              name="save"
      >Сохранить
      </button>
    </PopupWithForm>
  )
}
