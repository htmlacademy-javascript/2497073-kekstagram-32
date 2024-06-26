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

