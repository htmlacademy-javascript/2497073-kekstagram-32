function checkingLengthString(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

checkingLengthString('проверяемая строка', 20); // true

checkingLengthString('проверяемая строка', 18); // true

checkingLengthString('проверяемая строка', 10); // false

checkingLengthString('MG', 1); // false

////////
/// Вторая функция проверка на палиндром

function isStringPalindrome(string) {
  string = string.replaceAll(' ', '').toLowerCase();

  const normalizedString = string;
  let emptyString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    emptyString += normalizedString[i];
  }
  return emptyString === normalizedString;
}

// Строка является палиндромом
isStringPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isStringPalindrome('ДовОд'); // true
// Это не палиндром
isStringPalindrome('Кекс'); // false
// Это палиндром
isStringPalindrome('Лёша на полке клопа нашёл '); // true
// Это не палиндром
isStringPalindrome('aiR bOok'); // false

//////////
/// Третья функция ДОП

function returnsNumber(string) {

  let numbers = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) {
      numbers += string[i];
    }
  }
  numbers = numbers.replaceAll(' ', '');
  numbers = parseInt(numbers, 10);
  return numbers;
}

returnsNumber('2023 год');            // 2023
returnsNumber('ECMAScript 2022');     // 2022
returnsNumber('1 кефир, 0.5 батона'); // 105
returnsNumber('агент 007');           // 7
returnsNumber('а я томат');           // NaN
returnsNumber('q1w2e3r4t5');           // 12345

