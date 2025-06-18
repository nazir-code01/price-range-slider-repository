const priceText = document.querySelector(".price-text");
const slider = document.querySelector(".slider");
priceText.innerHTML = slider.value;
slider.oninput = function(){
    priceText.innerHTML = this.value;
}