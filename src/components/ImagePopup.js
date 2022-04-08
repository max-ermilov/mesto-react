import React from "react";

function ImagePopup() {
  return(
    <div className="popup popup_type_image">
      <figure className="popup__image-container">
        <img className="popup__image" alt=""/>
        <figcaption><h2 className="popup__image-name"></h2></figcaption>
        <button className="button popup__close-btn" type="button" name="close"/>
      </figure>
    </div>
  )
}

export default ImagePopup
