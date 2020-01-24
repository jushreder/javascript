"use strict";
let productDescript = {
  text1:
    "Product1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolorum dicta quibusdam consequatur fugiat voluptatibus expedita vel, magnam commodi asperiores nostrum eligendi illum sequi, veniam cumque a necessitatibus nulla eosmagnam commodi asperiores nostrum eligendi illum sequi,",
  text2:
    "Product2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolorum dicta quibusdam consequatur fugiat voluptatibus expedita vel, veniam cumque a necessitatibus nulla eos.",
  text3:
    "Product3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolorum dicta quibusdam consequatur fugiat voluptatibus expedita vel, magnam commodi asperiores nostrum eligendi illum sequi, veniam cumque a necessitatibus nulla eos."
};

let DescriptProduct= {
  run(){
    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(event) {
        DescriptProduct.btnClick(event);
      });
    };
  },
  btnClick(clickButton) {
    const product = clickButton.target.parentNode;
    const card = {
      wrap: product,
      img: product.querySelector("img"),
      productName: product.querySelector(".productName"),
      button: product.querySelector("button"),
      descrip: product.dataset.descrip
    };
    const textOnButton = card.button.innerText;
    if (textOnButton === "подробно") {
      // Вопрос: Родителем showText(card) и hideText(card) является  объект DescriptProduct{...}
      //  почему не срабатывает this.showText(card), а только DescriptProduct.showText(card)?
      DescriptProduct.showText(card);
    } else if (textOnButton === "отмена") {
      DescriptProduct.hideText(card);
    };
  },
  hideText(card) {
    card.img.style.display = "block";
    card.wrap.querySelector(".desc").remove();
    card.button.innerText = "подробно";
  },
  showText(card) {
    card.img.style.display = "none";
    const text = productDescript[`${card.descrip}`];
    card.productName.insertAdjacentHTML(
      "afterend",
      `<div class="desc">${text}</div>`
    );
    card.button.innerText = "отмена";
  }
};
DescriptProduct.run();