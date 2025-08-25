const buyButtons = document.getElementsByClassName("buy-but");
for (const buyBut of buyButtons) {
  buyBut.addEventListener("click", function () {
    const images = document.getElementsByTagName("img");
    for (let img of images) {
      img.src = "";
    }
  });
}




 <div class=" p-3 mb-3 bg-gray-200 flex justify-between items-center rounded-lg">
                  <img class="w-16" src="./assets/kitchen-1.png" alt="" />
                  <div class="px-3">
                    <h2>Name</h2>
                    <p><span id="">320</span>tk</p>
                  </div>
                </div>






<!-- ! cart add remove -->
getElement("card-btn1").addEventListener("click", function () {
  const productTitle = getElement("card-item-title1").innerText;
  const productPrice = getElement("card-price1").innerText;

  // cart total
  const totalPriceElement = getElement("total-price");
  const totalPrice = Number(totalPriceElement.innerText);

  // calculate new total
  const currentTotal = totalPrice + Number(productPrice);
  totalPriceElement.innerText = currentTotal.toFixed(2);

  // cart container
  const cartConProduct = getElement("cart-con-products");

  // create cart item
  const newCart = document.createElement("div");
  newCart.innerHTML = `
    <div class="p-3 mb-3 bg-gray-200 flex justify-between items-center rounded-lg cursor-pointer">
      <img class="w-16" src="./assets/kitchen-1.png" alt="" />
      <div class="px-3">
        <h2>${productTitle}</h2>
        <p><span class="product-price">${productPrice}</span>tk</p>
      </div>
    </div>
  `;

  // append to cart
  cartConProduct.append(newCart);

  // remove on click
  newCart.addEventListener("click", function () {
    const priceText = newCart.querySelector(".product-price").innerText;
    const itemPrice = Number(priceText);

    // remove item
    newCart.remove();

    // update total
    const updatedTotal = Number(totalPriceElement.innerText) - itemPrice;
    totalPriceElement.innerText = updatedTotal.toFixed(2);
  });
});






//   const cartConProduct = getElement("cart-con-products");
//   // making div
//   const newCart = document.createElement("div");
//   newCart.innerHTML = `
//               <div class=" p-3 mb-3 bg-gray-200 flex  justify-between items-center rounded-lg">
//                   <img class="w-16" src="./assets/kitchen-1.png" alt="" />
//                   <div class="px-3">
//                     <h2 class="font-bold">${productTitle}</h2>
//                     <p>${productPrice} tk</p>
//               </div>
//   `;
//   cartConProduct.append(newCart);
// });