"use strict";
let item = prompt("введите сумму вклада:");

/**
 * Функция получает размер вклада и возвращает "рубль" в нужном падеже
 * @param {String} con
 * @returns{String}
 */
function currency(con) {
  let last = item.charAt(item.length - 2) + item.charAt(item.length - 1);
  if (+last>10 && +last<15){
    return "рублей";
  }
  let lastSign = con.charAt(con.length - 1);
  switch (lastSign) {
    case "1":
      return "рубль";
    case "2":
    case "3":
    case "4":
      return "рубля";
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      return "рублей";
  }
}

alert(`Ваша сумма в ${item} ${currency(item)} успешно зачислена.`);


