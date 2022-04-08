import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
        </form>
        <button className="button popup__close-btn"
                type="button"
                name="close"
                onClick={props.onClose}
        />
      </div>
    </div>
  )
}

export default PopupWithForm
