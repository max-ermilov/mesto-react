function Main() {
  return(
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
  )
}

export default Main
