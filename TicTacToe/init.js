"use strict";

const setting = {
  createPlayingField() {
    let fieldHTML = "";
    for (let i = 0; i < 3; i++) {
      fieldHTML += "<tr>";
      for (let j = 0; j < 3; j++) {
        fieldHTML += `<td data-x ="${i}" data-y="${j}" data-xy="${i}${j}"></td>`;
      }
      fieldHTML += "</tr>";
    }
    let table = document.querySelector("table");
    table.insertAdjacentHTML("afterbegin", fieldHTML);
  },
  players: [
    { name: "circle", sign: '<i class="fa fa-times"></i>' },
    { name: "cross", sign: '<i class="fa fa-circle-o "></i>' }
  ],
  move: 0
};
