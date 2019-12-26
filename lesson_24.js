"use strict";
let int_1 = +prompt("введите первое  целое число");
let int_2 = +prompt("введите второе  целое число");

/**
 * Фунция получает два числа и возвращает сумму чисел
 * @param {number} int_1
 * @param {number} int_2
 */
function sum(int_1, int_2) {
  return int_1 + int_2;
}
/**
 * Фунция получает два числа и возвращает разность чисел
 * @param {number} int_1
 * @param {number} int_2
 */
let diff = (int_1, int_2) => int_1 - int_2;
/**
 * Фунция получает два числа и возвращает умножение чисел
 * @param {number} int_1
 * @param {number} int_2
 */
let multip = (int_1, int_2) => int_1 * int_2;
/**
 * Фунция получает два числа и возвращает деление чисел
 * @param {number} int_1
 * @param {number} int_2
 */
let division = (int_1, int_2) => int_1 / int_2;

alert(
  `Сумма  ${int_1} и ${int_2} равна: ` +
    sum(int_1, int_2) +
    `\n Разность ${int_1} и ${int_2} равна: ` +
    diff(int_1, int_2) +
    `\n Умножение ${int_1} на ${int_2} равно: ` +
    multip(int_1, int_2) +
    `\n Деление ${int_1} на ${int_2} равно: ` +
    division(int_1, int_2)
);
