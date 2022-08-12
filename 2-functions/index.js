"use strict";

const getPositiveInt = function (num) {
  return Math.trunc(Math.abs(num));
};
// 1. Функция, возвращающая случайное целое положительное число из переданного диапазона включительно.
const getRandomInt = function (num1, num2) {
  let max = Math.max(getPositiveInt(num1), getPositiveInt(num2));
  let min = Math.min(getPositiveInt(num1), getPositiveInt(num2));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// let y = getRandomInt(-5, 11);
// console.log(y);

// 2. Функция, возвращающая случайное целое четное число из переданного диапазона включительно.
const getRandomOdd = function (num1, num2) {
  let max = Math.ceil(Math.max(num1, num2));
  let min = Math.floor(Math.min(num1, num2));
  let randomInt = Math.floor(Math.random() * (max - min + 1) + min);
  if (randomInt % 2 === 0) {
    randomInt += 1;
  }
  if (randomInt > max) {
    randomInt -= 2;
  }
  return randomInt;
};
// let x = getRandomOdd(-10, 11);
// console.log(x);

// 3. Функция, возвращающая случайное положительное число с плавающей точкой из переданного диапазона включительно.
const getRandomNumber = function (num1, num2, scope) {
  let max = Math.max(Math.abs(num1), Math.abs(num2));
  let min = Math.min(Math.abs(num1), Math.abs(num2));
  return (Math.random() * (max - min) + min).toFixed(scope);
};
// let c = getRandomNumber(0, 0.1, 2);
// console.log(c);

// 4. Функция для проверки максимальной длины строки.
const isStringLength = function(str, length) {
  return (str.length <= length) ? true : false;
}
// console.log(isStringLength ('Функция для проверки максимальной длины строки', 40));
