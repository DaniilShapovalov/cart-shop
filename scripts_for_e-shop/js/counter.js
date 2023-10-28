//add items

const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector("[data-counter]");

btnMinus.addEventListener("click", function () {
  console.log("Minus click");
  counter.innerText = --counter.innerText;
  if (parseInt(counter.innerText) < 0) {
    counter.innerText = parseInt(counter.innerText) + 1;
  }
});

btnPlus.addEventListener("click", function () {
  console.log("Plus click");
  counter.innerText = ++counter.innerText;
  if (parseInt(counter.innerText) > 30) {
    counter.innerText = parseInt(counter.innerText) - 1;
  }
});

//cart
