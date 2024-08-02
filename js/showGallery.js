import { generatorMiniatures } from './miniatures.js';
import { getShowBigPicture } from './fullSizeImage.js';

const containerPicture = document.querySelector('.pictures');

const showGallery = (miniatures) => {
  containerPicture.addEventListener('click', (evt) => {
    const pictureId = evt.target.closest('.picture').id;

    // if (!pictureId) {
    //   return;
    // }
    // evt.preventDefault();    для чего это всё?

    const desiredMiniature = miniatures.find(
      (item) => item.id === +pictureId
    );
    getShowBigPicture(desiredMiniature);
  });

  generatorMiniatures(miniatures, containerPicture);
};

export { showGallery };
