import { isEscapeKey } from './util.js';

const UPLOAD_MORE_COMMENTS = 5;

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const clouseBigPicture = bigPicture.querySelector('.big-picture__cancel');
const socialCommentsList = document.querySelector('.social__comments');
const commentShownCount = bigPicture.querySelector('.social__comment-shown-count');
const commentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentElement = document.querySelector('#comment').content.querySelector('.social__comment');

let commentsShown = 0;
let comments = [];

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

const showComments = () => {
  commentsShown += UPLOAD_MORE_COMMENTS;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  socialCommentsList.innerHTML = '';
  socialCommentsList.append(fragment);
  commentShownCount.textContent = commentsShown;
  commentTotalCount.textContent = comments.length;
};

const onCommentsLoaderClick = () => showComments();

const getShowBigPicture = (element) => {
  const bigImg = bigPicture.querySelector('.big-picture__img img');

  bigImg.src = element.url;
  bigImg.alt = element.description;
  bigPicture.querySelector('.likes-count').textContent = element.likes;
  bigPicture.querySelector('.social__caption').textContent = element.description;

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsShown = 0;

  closeUserModal();

  comments = element.comments;
  if (comments.length > 0) {
    showComments();
  }
};

commentsLoader.addEventListener('click', onCommentsLoaderClick);

export { getShowBigPicture };
