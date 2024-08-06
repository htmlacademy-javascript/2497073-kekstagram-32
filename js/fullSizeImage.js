import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const clouseBigPicture = bigPicture.querySelector('.big-picture__cancel');
const socialCommentsList = document.querySelector('.social__comments');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentElement = document.querySelector('#comment').content.querySelector('.social__comment');

// const closeBigImg = () => {
//   bigPicture.classList.add('hidden');
//   body.classList.remove('modal-open');
//   removeCloseUserModal();
// };


const closeEscapeKey = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigImg();
  }
};

const closeUserModal = () => {
  document.addEventListener('keydown', closeEscapeKey);
  clouseBigPicture.addEventListener('click', closeBigImg);
};

const removeCloseUserModal = () => {
  document.removeEventListener('keydown', closeEscapeKey);
  clouseBigPicture.removeEventListener('click', closeBigImg);
};

function closeBigImg() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  removeCloseUserModal();
}

const createComment = (item) => {
  const comment = socialCommentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = item.avatar;
  comment.querySelector('.social__picture').alt = item.name;
  comment.querySelector('.social__text').textContent = item.message;

  return comment;
};

const showComments = (comments) => {
  socialCommentsList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((element) => {
    const comment = createComment(element);
    fragment.append(comment);
  });

  socialCommentsList.append(fragment);
};

const getShowBigPicture = (element) => {
  const bigImg = bigPicture.querySelector('.big-picture__img img');

  bigImg.src = element.url;
  bigImg.alt = element.description;
  bigPicture.querySelector('.likes-count').textContent = element.likes;
  bigPicture.querySelector('.social__caption').textContent = element.description;
  // bigPicture.querySelector('.social__comment-total-count').textContent = element.comments.length;

  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');

  closeUserModal();

  showComments(element.comments);
};

export { getShowBigPicture };
