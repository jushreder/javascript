"use strict"

//1
let tC = prompt("Введите температуру в градусах по Цельсию");
let tF = (9/5)*tC + 32;

alert(tC + " по цельсию = " + tF + " по Фаренгейту");

// 2
let name = "Василий";
let admin = name; 
console.log(admin);

//3

console.log(10 + 10 + "10");
// 10 прибавляем 10 получаем 20
// 20 конкатинация со строкой "10 " 
// получаем "2010'
console.log(10 + "10" + 10);
// 10 конкатинация со строкой "10"  
// получаем  строку "1010"
// "1010" конкатинация с числом 10
// получаем "101010"
console.log(10 + 10 + +"10");
// 10 прибавляем 10 получаем 20
// 20 прибавляем 10(+"10")
// получаем 30
console.log(10 / -"");
// 10 делим на -0 (-"")
// получаем -infinity
console.log(10 / +"2,5");
// 10 делим на строку "2,5"
// получаем  NaN



//4
/*
Имя переменной должно начинаться с буквы, подчеркивания или знака $.
Потом может следовать любое количество букв, цифр, подчеркиваний и знаков $
*/
let mode = "normal"; //имя переменной корректное
let my_valu3 = 102; //имя переменной корректное
// let 3my_value3 = "102"; имя переменной некорректное т.к. начинается с цифры 3
let __hello__ = "world"; //имя переменной корректное
let $$$ = "money"; //имя переменной корректное
// let !0_world = true; имя переменной некорректное т.к. начинается с знака !