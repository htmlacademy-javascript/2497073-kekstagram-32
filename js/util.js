const getRandomInteger = (a, b) => {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (element) => element[getRandomInteger(0, element.length - 1)];

const getRandomId = () => {
  let randomId = 0;

  return () => {
    randomId += 1;
    return randomId;
  };
};

export { getRandomInteger, getRandomArrayElement, getRandomId };
