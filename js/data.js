import { getRandomInteger, getRandomArrayElement, getRandomId } from './util';

const PICTURE_COUNT = 25;
const LIKE_MIN_COUN = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_MIN_COUNT = 0;
const COMMENT_MAX_COUNT = 30;
const AVATAR_MIN_COUNT = 1;
const AVATAR_MAX_COUNT = 6;
const MESSAGE_MIN_COUNT = 1;
const MESSAGE_MAX_COUNT = 2;
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Игорь',
  'Николай',
  'Никита',
  'Михаил',
];
const DESCRIPTION = [
  'Отличный пост! Автор проделал отличную работу, рекомендую всем ознакомиться.',
  'Очень интересно, продолжайте в том же духе!',
  'Согласна с мнением автора, это действительно важно.',
  'Отличная статья, спасибо за информацию!',
  'Интересный подход, я бы тоже так сделал(а).',
  'Не могу не согласиться, автор поднял важную тему.',
  'Очень познавательно, спасибо за статью!',
  'Отличная работа, автор заслуживает уважения.',
  'Интересный взгляд на проблему, стоит задуматься.',
  'Спасибо за статью, она заставила меня задуматься.',
];
const TEXT_COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const generatorId = getRandomId();

const generatorMessage = () => Array.from(
  {
    length: getRandomInteger(MESSAGE_MIN_COUNT, MESSAGE_MAX_COUNT)
  },
  () => getRandomArrayElement(TEXT_COMMENT),
);

const createComments = () => ({
  id: generatorId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
  message: generatorMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKE_MIN_COUN, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT) },
    createComments
  ),
});

const getPhotosGenerator = () => Array.from(
  { length: PICTURE_COUNT },
  (_, index) => createPicture(index + 1)
);

export { getPhotosGenerator };
