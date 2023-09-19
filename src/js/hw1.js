export default function checkName(name) {
  const regNotIncludesSymbols = /[^a-zA-Z0-9-_]+/;
  const regNotBeginningEnd = /^[\d_-]|[\d_-]$/;
  const regNotThreeDigits = /\d{3,}/;
  if (name.search(regNotIncludesSymbols) !== -1) {
    throw new Error('Имя не подходит');
  }
  if (name.search(regNotBeginningEnd) !== -1) {
    throw new Error('Имя содержит цифры или _ или - в начале или в конце имени');
  }
  if (name.search(regNotThreeDigits) !== -1) {
    throw new Error('Имя содержит три или более цифр подряд');
  }
  return name;
}
