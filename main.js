const buttons = document.querySelectorAll(".order__btn");
const productCard = document.querySelector(".product__basket");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const parent = e.target.closest(".shoes__item");
    const title = parent.querySelector(".shoes__title").innerText;
    const imgSrc = parent.querySelector(".shoes__img").src;

    addToBasket(title, imgSrc);
  });
});

function addToBasket(title, imgSrc) {
  const basketItem = document.createElement("div");
  basketItem.classList.add("basket__wrapper");
  basketItem.innerHTML = `
    <div class="basket__container">
      <img src="${imgSrc}" alt="${title}" class="basket__img">
      <div class="basket-text__container">
        <p class="basket__title">${title}</p>
        <p class="basket__price">40,50$</p>
      </div>
    </div>
    <button class="basket-remove__btn">Remove</button>
  `;
  basketItem
    .querySelector(".basket-remove__btn")
    .addEventListener("click", () => {
      basketItem.remove();
    });

  productCard.appendChild(basketItem);
}
