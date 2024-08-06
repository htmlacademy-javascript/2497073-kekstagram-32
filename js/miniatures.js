const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const createMiniature = (picture) => {
  const miniature = templatePicture.cloneNode(true);

  miniature.id = picture.id;
  miniature.querySelector('.picture__img').src = picture.url;
  miniature.querySelector('.picture__img').alt = picture.description;
  miniature.querySelector('.picture__likes').textContent = picture.likes;
  miniature.querySelector('.picture__comments').textContent = picture.comments.length;

  return miniature;
};

const generatorMiniatures = (miniatures, container) => {
  const fragment = document.createDocumentFragment();
  miniatures.forEach((element) => {
    const miniature = createMiniature(element);
    fragment.append(miniature);
  });

  container.append(fragment);
};

export { generatorMiniatures };
