"use strict";

let a = 1, b = 1, c, d;
// пример 1
c = ++a; // значение переменной "а" сначало увеличивает на 1(инкремент) затем присаваивает значение 2 в переменную "с"
alert(c); // a=2 c=2
// пример 2
d = b++; // значение переменной "b" сначало присваивается "d", затем "b" увеличивается на 1 (инкремент) b=2
alert(d); // d=1 
// пример 3
c = 2 + ++a; //значение переменной "а" сначало увеличивает на 1(инкремент) a=3, затем складывается с 2
alert(c); // c=5 
// пример 4
d = 2 + b++; // 2 складывается и b=2 получатся d=4, затем  "b" увеличивает на 1(инкремент) b=3
alert(d); //d=4

alert(a); //a=3
alert(b); //b=3