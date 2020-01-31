"use strict";

function play() {
  setting.createPlayingField();
  setting.move = Math.floor(Math.random() * Math.floor(setting.players.length));
  setting.cells = document.querySelectorAll("td");
  setting.cells.forEach(function(item) {
    item.addEventListener("click", clickCell);
  });
}

function clickCell() {
  event.target.insertAdjacentHTML("afterbegin", signRecord());
  event.target.removeEventListener("click", clickCell);
  event.target.classList.add(setting.players[setting.move].name);

  if (check(event.target)) {
    setting.cells.forEach(function(item) {
      item.removeEventListener("click", clickCell);
    });

    let button = document.querySelector("button");

    button.style.display = "block";
    button.addEventListener("click", newGame);
  }
}
function newGame() {
  let removeField = document.querySelector("tbody");
  removeField.parentNode.removeChild(removeField);

  play();
}
function signRecord() {
  let sign = setting.players[setting.move].sign;
  setting.move = +!setting.move;
  return sign;
}

function check(item) {
  let listControl = [];
  listControl.push(document.querySelectorAll(`[data-x ="${item.dataset.x}"]`));
  listControl.push(document.querySelectorAll(`[data-y ="${item.dataset.y}"]`));
  let diag1 = [];
  let diag2 = [];
  diag1.push(document.querySelectorAll("td[data-xy='00']")[0]);
  diag1.push(document.querySelectorAll("td[data-xy='11']")[0]);
  diag1.push(document.querySelectorAll("td[data-xy='22']")[0]);
  diag2.push(document.querySelectorAll("td[data-xy='02']")[0]);
  diag2.push(document.querySelectorAll("td[data-xy='11']")[0]);
  diag2.push(document.querySelectorAll("td[data-xy='20']")[0]);
  listControl.push(diag1);
  listControl.push(diag2);

  for (let cell of listControl) {
    if (control(cell, item.classList[0]) > 2) {
      cell.forEach(function(insertClass) {
        insertClass.classList.add("victory");
      });
      return true;
    }
  }
}

function control(cells, item) {
  let controlX = 0;
  cells.forEach(function(cell) {
    if (cell.classList[0] == item) {
      controlX++;
    }
  });
  return controlX;
}

play();
