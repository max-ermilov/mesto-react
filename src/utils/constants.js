export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error',
};

export const cardTemplateSelector = '.card-template';

//  Modals
const modalEditProfile = document.querySelector('.popup_type_edit');
const modalAddCard = document.querySelector('.popup_type_add-card');
const modalEditAvatar = document.querySelector('.popup_type_edit-avatar');

//  Forms
export const formEditProfile = modalEditProfile.querySelector('.popup__form');
export const formAddCard = modalAddCard.querySelector('.popup__form');
export const formEditAvatar = modalEditAvatar.querySelector('.popup__form');

//  Inputs
export const inputName = formEditProfile.querySelector(
  '.popup__input_field_name'
);
export const inputDescription = formEditProfile.querySelector(
  '.popup__input_field_job'
);
export const inputAvatar = formEditAvatar.querySelector(
  '.popup__input_field_avatar'
);

//  Buttons
export const profileEditButton = document.querySelector('.profile__edit-btn');
export const cardAddButton = document.querySelector('.profile__add-btn');
export const avatarEditButton = document.querySelector('.profile__avatar-edit-btn');
