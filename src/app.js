import './scss/style.scss';

const title = document.querySelector('.section-resume__title_about');

const hobby = document.querySelector('.input_hobby');
const photo = document.querySelector('.photo');

const isHidden = (selector) => selector.classList.contains('hidden');
const handleHidden = (selector) => selector.classList.toggle('hidden');

const formToogle = () => {
  let isHiddenPhoto = isHidden(photo);

  if (!isHiddenPhoto) {
    handleHidden(photo);
    return;
  }

  setTimeout(() => {
    if (!photo.classList.contains('hidden')) {
      return;
    }
    handleHidden(hobby);
  }, 200);
};

const photoToogle = () => {
  handleHidden(photo);
  if (!isHidden(hobby)) {
    handleHidden(hobby);
  }
};

title.addEventListener('dblclick', photoToogle);
title.addEventListener('click', formToogle);
