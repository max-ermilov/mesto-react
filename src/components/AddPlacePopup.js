import PopupWithForm from "./PopupWithForm";
import React, {useEffect, useState} from "react";


export default function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [formData, setFormData] = useState({name: '', link: ''});

  const handleInputChange = (e) => {
    const newFormData = {...formData, [e.target.name]: e.target.value}
    setFormData(newFormData)
  }

  useEffect(() => {
    setFormData({
      name: '',
      link: ''
    })
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name: formData.name,
      link: formData.link,
    })
  }

  return (
    <PopupWithForm name="add-card"
                   title="Новое место"
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}
    >
      <input type="text"
             className="popup__input popup__input_field_title"
             name="name"
             onChange={handleInputChange}
             value={formData.name || ''}
             id="title"
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
             onChange={handleInputChange}
             value={formData.link || ''}
             id="link"
             placeholder="Ссылка на картинку"
             aria-label="Название"
             required
      />
      <span className="popup__input-error"
            id="link-error"
      />
      <button className="button popup__submit-btn popup__create-btn"
              type="submit"
              defaultValue="Создать"
              name="create"
      >Создать
      </button>
    </PopupWithForm>
  )
}
