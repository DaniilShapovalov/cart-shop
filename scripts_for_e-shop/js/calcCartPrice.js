function calcCartPriceAndDelivery(){
    const deliveryCost = document.querySelector('.delivery-cost');
    const deliveryCart = document.querySelector('[data-cart-delivery]')
    const cartItems = document.querySelectorAll('.cart-item');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');

    let totalPrice = 0;

    cartItems.forEach(function (item) {
        const amountEl = item.querySelector('[data-counter]')
        const priceEl = item.querySelector('.price__currency')

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice; 
    })
    console.log(totalPrice);


    
    totalPriceEl.innerText = totalPrice;


    if(totalPrice > 0){
        deliveryCart.classList.remove('none');
    }else{
        deliveryCart.classList.add('none')
    }
    if (totalPrice >= 50){

        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'free';
    }else{
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '5$';

    }
}