"use strict";
let num_1 = parseInt(prompt("введите первое  целое число"));
let num_2 = parseInt(prompt("введите второе  целое число"));

/**
 * Фунция получает два числа
 * @param {number} num_1 
 * @param {number} num_2 
 */
function operation(num_1, num_2) {
  if (String(num_1) == String(NaN)) {
    return "первое число введено не верно";
  } else if (String(num_2) == String(NaN)) {
    return "второе число введено не верно";
  } else if (num_1 >= 0 && num_2 >= 0) {
    return num_1 - num_2;
  } else if (num_1 < 0 && num_2 < 0) {
    return num_1 * num_2;
  } else if (Math.sign(num_1) != Math.sign(num_2)) {
    return num_1 + num_2;
  }
}

alert(operation(num_1, num_2));
