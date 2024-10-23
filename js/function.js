/*
// Строка короче 20 символов
имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
имяФункции('проверяемая строка', 10); // false
*/

const checkLength = (text,number) => {
  if(text.length <= number) {
    return true;
  }else {
    return false;
  }
};

checkLength('проверяемая строка',20);


const palindrom = (string) => {
  const charset = string.toUpperCase().replaceAll(' ',''); //тут мы приводим к стандарту вводимую строку
  let reverseCharset = ''; //это переменная для хранения символов, считываемых ниже.тут вопрос про инициализацию переменной
  for (let i = charset.length - 1;i >= 0;i--) {
    reverseCharset += charset[i];
  }
  if (charset === reverseCharset) {
    return true;
  } else {
    return false;
  }
};

palindrom('топот');
