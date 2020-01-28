"use strict";

let score = {
  productIn: document.querySelector(".products"),
  showBasket: document.querySelector(".basket-img"),
  showModWindow: document.querySelector(".modWindow"),
  closeModWindow: document.querySelector("span"),

  run() {
    for (let i = 0; i < products.length; i++) {
      let productHTML = `<div id="${products[i].id}" class="product"><div class="name">${products[i].name}</div><div class="img"><img src="${products[i].image}" alt=""></div><div class="discript"><div class="price">${products[i].price}</div><div class="disсriptProduct">${products[i].discript}</div><div class="addBasket"><img class = "addProduct" data-id="${products[i].id}" data-name="${products[i].name}" data-price="${products[i].price}" src="images/shopcartadd_128x128.png" alt=""></div></div></div>`;
      this.productIn.insertAdjacentHTML("beforeend", productHTML);
    }
    score.showBasketUser(this.showBasket);
    this.closeModWindow.addEventListener("click", function() {
      score.showModWindow.classList.add("hide");
      // summaBasket();
    });

    const addProductInBasket = document.querySelectorAll(".addBasket > img");
    addProductInBasket.forEach(function(btnAdd) {
      btnAdd.addEventListener("click", function(event) {
        score.productInBasket(event);
      });
    });
  },
  delBasket() {
    let delProduct = document.querySelectorAll(".linkdel");
    delProduct.forEach(function(btnDel) {
      btnDel.addEventListener("click", function() {
        let rowDel = this.parentElement;
        delete basket[rowDel.dataset.id];
        rowDel.parentElement.remove();
        score.summaBasket();
      });
    });
  },
  productInBasket(event) {
    let id = "rowProduct" + event.srcElement.dataset.id;
    let name = event.srcElement.dataset.name;
    let price = event.srcElement.dataset.price;
    if (basket[id] == undefined) {
      basket[id] = { name: name, price: price, count: 1 };
    } else {
      basket[id].count++;
    }

    score.productInDom(id, basket[id]);
  },
  productInDom(id, addBasket) {
    let productAdd = document.querySelector(`.${id}`);
    if (productAdd) {
      productAdd.cells[1].textContent++;
    } else {
      let productRow = `
       <tr class="rowSumma ${id}">
            <td class="row cellProduct">${addBasket.name}</td>
            <td class="row cellCount">${addBasket.count}</td>
            <td class="row cellPrice">${addBasket.price}</td>
            <td class="row rowdel" data-id=${id}><a class="linkdel s1" href="#">&times</a></td>
          </tr>
       `;
      let tbody = document.querySelector("tbody");
      tbody.insertAdjacentHTML("beforeend", productRow);
      score.delBasket();
    }
    score.summaBasket();
  },
  showBasketUser(showBasket) {
    showBasket.addEventListener("click", function() {
      score.showModWindow.classList.remove("hide");
      score.summaBasket();
    });
  },
  summaBasket() {
    let productBasket = document.querySelectorAll(".rowSumma");
    let itog = 0;
    productBasket.forEach(function(tr_prod) {
      itog +=
        parseInt(tr_prod.children[1].textContent) *
        parseInt(tr_prod.children[2].textContent);
    });
    let totalBasket = document.querySelector(".total");
    totalBasket.innerText = itog;
    let basketImg = document.querySelector(".basket-img");
    if (itog) {
      basketImg.src = "images/shopcartdown_128x128.png";
    } else {
      basketImg.src = "images/shopcart_128x128.png";
    }
  }
};

score.run();
