document.querySelectorAll('.dropdown').forEach(function (dropdownWrapper) {
  const dropdownBtn = dropdownWrapper.querySelector('.dropdown__button');
  const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
  const dropdownItems = dropdownList.querySelectorAll('.dropdown__list-item');
  const dropdownInput = dropdownWrapper.querySelector(
    '.dropdown__input--hidden'
  );

  dropdownBtn.addEventListener('click', function () {
    dropdownList.classList.toggle('dropdown__list--visible');
    this.classList.toggle('dropdown__button--active');
  });

  dropdownItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      dropdownItems.forEach(function (el) {
        el.classList.remove('dropdown__list-item--active');
      });
      e.target.classList.add('dropdown__list-item--active');
      dropdownBtn.innerText = this.innerText;
      dropdownInput.value = this.dataset.value;
      dropdownList.classList.remove('dropdown__list--visible');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropdownBtn) {
      dropdownBtn.classList.remove('dropdown__button--active');
      dropdownList.classList.remove('dropdown__list--visible');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropdownBtn.classList.remove('dropdown__button--active');
      dropdownList.classList.remove('dropdown__list--visible');
    }
  });
});

document
  .querySelectorAll('.dropdown_with-chk')
  .forEach(function (dropdownWrapper) {
    const dropdownBtn = dropdownWrapper.querySelector(
      '.dropdown_with-chk__button'
    );
    const dropdownList = dropdownWrapper.querySelector(
      '.dropdown_with-chk__list'
    );
    const dropdownItems = dropdownList.querySelectorAll(
      '.dropdown_with-chk__list-item'
    );

    dropdownBtn.addEventListener('click', function () {
      dropdownList.classList.toggle('dropdown_with-chk__list--visible');
      this.classList.toggle('dropdown_with-chk__button--active');
    });

    dropdownItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
        e.target.classList.toggle('dropdown_with-chk__list-item--active');
      });
    });

    document.addEventListener('click', function (e) {
      if (
        e.target !== dropdownBtn &&
        e.target !== dropdownItems &&
        !e.target.classList.contains('dropdown_with-chk__list-item') &&
        !e.target.classList.contains('dropdown_with-chk__list-item_label')
      ) {
        dropdownBtn.classList.remove('dropdown_with-chk__button--active');
        dropdownList.classList.remove('dropdown_with-chk__list--visible');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropdownBtn.classList.remove('dropdown_with-chk__button--active');
        dropdownList.classList.remove('dropdown_with-chk__list--visible');
      }
    });
  });
