"use strict";
let config = {
  rows: [1, 2, 3, 4, 5, 6, 7, 8].reverse(), // список строк
  column: ["A", "B", "C", "D", "E", "F", "G", "H"], // список столбцов
  // список фигур
  figures: [
    { name: "king_white", poz: ["E1"], src: "image/king_white.png" },
    { name: "gueen_white", poz: ["D1"], src: "image/queen_white.png" },
    { name: "bishop_white", poz: ["C1", "F1"], src: "image/bishop_white.png" },
    { name: "knight_white", poz: ["B1", "G1"], src: "image/knight_white.png" },
    { name: "rook_white", poz: ["A1", "H1"], src: "image/rook_white.png" },
    { name: "king_black", poz: ["E8"], src: "image/king_black.png" },
    { name: "gueen_black", poz: ["D8"], src: "image/queen_black.png" },
    { name: "bishop_black", poz: ["C8", "F8"], src: "image/bishop_black.png" },
    { name: "knight_black", poz: ["B8", "G8"], src: "image/knight_black.png" },
    { name: "rook_black", poz: ["A8", "H8"], src: "image/rook_black.png" },
    {
      name: "pawn_white",
      poz: ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
      src: "image/pawn_white.png"
    },
    {
      name: "pawn_black",
      poz: ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"],
      src: "image/pawn_black.png"
    }
  ],
  chess() {
    // генерируем шахматную доску
    document.body.insertAdjacentHTML("afterbegin", this.getHTMLboard());
    // раставляем фигуры на доске
    this.insertFigures();
  },
  getHTMLboard() {
    let board = "";
    let cellColor = true; // true - белое поле, false- черное поле
    for (let i = 0; i < config.rows.length; i++) {
      board += `<tr><td class ='board_rows'>${config.rows[i]}</td>`;
      for (let j = 0; j < config.column.length; j++) {
        if (cellColor) {
          board += `<td class="board board_wait" data-poz="${config.column[j]}${config.rows[i]}"></td>`;
          cellColor = false;
        } else {
          board += `<td class="board board_black" data-poz="${config.column[j]}${config.rows[i]}"></td>`;
          cellColor = true;
        }
      }
      board += "</tr>";
      if (cellColor) {
        cellColor = false;
      } else {
        cellColor = true;
      }
    }
    board += "<tr><td class ='board_angle'></td>";
    for (let i = 0; i < config.column.length; i++) {
      board += `<td class ='board_rows'>${config.column[i]}</td>`;
    }
    board += "</tr>";
    board = `<table><tbody>${board}</tbody</table>`;
    return board;
  },
  insertFigures() {
    for (let i = 0; i < config.figures.length; i++) {
      for (let j = 0; j < config.figures[i].poz.length; j++) {
        let img = document.createElement("img");
        img.src = config.figures[i].src;
        img.style = "width: 60px;";
        let cell = document.querySelector(
          `[data-poz= ${config.figures[i].poz[j]}]`
        );
        cell.insertAdjacentElement("afterbegin", img);
      }
    }
  }
};

config.chess();
