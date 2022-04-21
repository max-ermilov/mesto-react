import React from "react";

function PopupWithForm({children, isOpen, name, onClose, onSubmit, title}) { // name, title, isOpen, onClose, handleOnFormChange, onSubmit
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form"
              onSubmit={onSubmit}
              name={name}
              noValidate>
          {children}
        </form>
        <button className="button popup__close-btn"
                type="button"
                name="close"
                onClick={onClose}
        />
      </div>
    </div>
  )
}

export default PopupWithForm
