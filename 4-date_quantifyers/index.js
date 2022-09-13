"use strict";

const TIME_TITLES = {
  sec: ['секунда', 'секунды', 'секунд'],
  min: ['минута', 'минуты', 'минут'],
  hour: ['час', 'часа', 'часов'],
  day: ['день', 'дня', 'дней'],
  week: ['неделя', 'недели', 'недель'],
  month: ['месяц', 'месяца', 'месяцев'],
  year: ['год', 'года', 'лет'],
};

const printTimeTitle = (number, obj, key) => {
  number = Math.abs(number);

  let rest10 = number % 10;
  let rest100 = number % 100;
  let result;

  if (5 <= number && number <= 19 || (11 <= rest100 && rest100 <= 19) || (5 <= rest10 && rest10 <= 9) || number === 0 || rest10 === 0) {
    result = obj[key][2];
  } else if (number === 1 || (rest10 === 1)) {
    result = obj[key][0];
  } else if((2 <= number && number <= 4) || (2 <= rest10 && rest10 <= 4)) {
    result = obj[key][1];
  } else {
    result = 'error';
  }
  return result;
}

let num = 10100;
let word = printTimeTitle(num, TIME_TITLES, 'sec')

console.log(num, word);
