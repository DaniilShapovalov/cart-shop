window.addEventListener("click", function (event) {
  let counter;

  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    //находим обертку счетчика
    const counterWrapper = event.target.closest(".counter-wrapper");
    //блок с цифрой
    counter = counterWrapper.querySelector("[data-counter]");
  }

  //check that is the correct button +
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === "minus") {
    const counterWrapper = event.target.closest(".counter-wrapper");
    const counter = counterWrapper.querySelector("[data-counter]");
    
    

    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
        
        event.target.closest('.cart-item').remove();
        toggleCartStatus();
    //run a calc function for totalPrice
        calcCartPriceAndDelivery();
    }
  }

  //+ and - in cart
  if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
    calcCartPriceAndDelivery();
  }
});
