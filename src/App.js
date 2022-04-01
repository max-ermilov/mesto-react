import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className="header page__header">
        <a href="./index.html" className="header__logo" />
      </header>
      <main className="content page__content">
        <section className="profile">
          <div className="profile__content">
            <div className="profile__avatar-container">
              <img alt="Фото профиля" className="profile__avatar" />
              <button className="button profile__avatar-edit-btn" aria-label="Редактировать аватар" type="button" />
            </div>
            <div className="profile__info">
              <div className="profile__name">
                <h1 className="profile__name-text" />
                <button className="button profile__edit-btn" aria-label="Редактировать профиль" type="button" />
              </div>
              <p className="profile__job" />
            </div>
          </div>
          <button className="button profile__add-btn" aria-label="Добавить профиль" />
        </section>
        <section className="elements">
          <ul className="elements__list" />
        </section>
      </main>
      <footer className="footer page__footer">
        <p className="footer__copyright">© 2020 Mesto Russia</p>
      </footer>
      <div className="popup popup_type_edit">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="edit-profile" noValidate>
            <input type="text" className="popup__input popup__input_field_name" name="name" id="name" placeholder="Имя" aria-label="Имя" minLength={2} maxLength={40} required />
            <span className="popup__input-error" id="name-error" />
            <input type="text" className="popup__input popup__input_field_job" name="job" id="job" placeholder="Род занатий" aria-label="Род занатий" minLength={2} maxLength={200} required />
            <span className="popup__input-error" id="job-error" />
            <input className="button popup__submit-btn popup__save-input-btn popup__submit-btn_inactive" type="submit" defaultValue="Cохранить" name="save" />
          </form>
          <button className="button popup__close-btn" type="button" name="close" />
        </div>
      </div>
      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="new-place" noValidate>
            <input type="text" className="popup__input popup__input_field_title" name="title" id="title" placeholder="Название" aria-label="Название" minLength={2} maxLength={30} required />
            <span className="popup__input-error" id="title-error" />
            <input type="url" className="popup__input popup__input_field_link" name="link" id="link" placeholder="Ссылка на картинку" aria-label="Название" required />
            <span className="popup__input-error" id="link-error" />
            <input className="button popup__submit-btn popup__create-btn" type="submit" defaultValue="Создать" name="create" />
          </form>
          <button className="button popup__close-btn" type="button" name="close" />
        </div>
      </div>
      <div className="popup popup_type_image">
        <figure className="popup__image-container">
          <img className="popup__image" alt="" />
          <figcaption><h2 className="popup__image-name" /></figcaption>
          <button className="button popup__close-btn" type="button" name="close" />
        </figure>
      </div>
      <div className="popup popup_type_delete-confirm">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form" name="confirm" noValidate>
            <button className="button popup__submit-btn popup__confirm-btn" type="submit" value="Да" name="confirm">Да</button>
          </form>
          <button className="button popup__close-btn" type="button" name="close" />
        </div>
      </div>
      <div className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="edit-avatar" noValidate>
            <input type="url" className="popup__input popup__input_field_avatar" name="avatar" id="avatar" placeholder="Ссылка на картинку" aria-label="Аватар" required />
            <span className="popup__input-error" id="avatar-error" />
            <input className="button popup__submit-btn popup__save-btn" type="submit" defaultValue="Сохранить" name="save" />
          </form>
          <button className="button popup__close-btn" type="button" name="close" />
        </div>
      </div>
      <template className="card-template" />
    </div>

  );
}

export default App;
