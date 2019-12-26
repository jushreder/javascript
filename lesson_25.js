"use strict";

let int_1 = +prompt("введите первое  целое число");
let int_2 = +prompt("введите второе  целое число");
let oper = prompt("введите оператор");

/**
 * Фунция получает два числа и возвращает сумму чисел
 * @param {number} int_1 
 * @param {number} int_2 
 */
let sum = (int_1, int_2) => int_1 + int_2;
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

/**
 * Фунция получает два числа и знак математической операции.
 * @param {number} int_1 
 * @param {number} int_2 
 * @param {string} operation  + | - | * | /
 */
function mathOperation(int_1, int_2, operation) {
  if (String(int_1) == String(NaN)) {
    return "первое число введено не верно";
  } else if (String(int_2) == String(NaN)) {
    return "второе число введено не верно";
  } else if (
    operation == "+" ||
    operation == "-" ||
    operation == "*" ||
    operation == "/"
  ) {
    switch (operation) {
      case "+":
        return sum(int_1, int_2);
      case "-":
        return diff(int_1, int_2);
      case "*":
        return multip(int_1, int_2);
      case "/":
        return division(int_1, int_2);

    }
  } else {
    return "оператор введен не верно";
  }
}

alert(mathOperation(int_1, int_2, oper));
