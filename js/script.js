// !id holder
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// travers
const cardBtns = document.getElementsByClassName("cart-btn");
for (let cardBtn of cardBtns) {
  cardBtn.addEventListener("click", function () {
    const cartProductImg =
      cardBtn.parentNode.parentNode.children[0].children[0].src;
    const cartProductTitle =
      cardBtn.parentNode.parentNode.children[1].children[1].innerText;

    //!price calculate
    const cartProductprice =
      cardBtn.parentNode.parentNode.children[1].children[2].children[0]
        .innerText;

    const totalPrice = getElement("total-price").innerText;

    const currentTotal = Number(totalPrice) + Number(cartProductprice);

    getElement("total-price").innerText = currentTotal;

    // !------------------------
    const cartConProduct = getElement("cart-con-products");
    // making div
    const newCart = document.createElement("div");
    newCart.innerHTML = `
              <div class=" p-3 mb-3 bg-gray-200 flex  justify-between items-center rounded-lg">
                  <img class="w-16" src="${cartProductImg}" alt="" />
                  <div class="px-3">
                    <h2 class="font-bold">${cartProductTitle}</h2>
                    <p> ${cartProductprice} tk</p>
              </div>
  `;
    cartConProduct.append(newCart);
  });
}

// !shared function

// getElement("card-btn1").addEventListener("click", function () {
//   const productTitle = getElement("card-item-title1").innerText;
//   const productPrice = getElement("card-price1").innerText;
//   // cart er totoal
//   const totalPrice = getElement("total-price").innerText;
//   // calculate price
//   const currentTotal = Number(totalPrice) + Number(productPrice);

//   getElement("total-price").innerText = currentTotal.toFixed(2);
//   // total item
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
