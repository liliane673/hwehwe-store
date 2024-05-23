import { updateCart, addCartToArray } from "./homeFront.js";

export let cartArray = [
  {
    id: 4,
    quantity: 1,
  },
  {
    id: 10,
    quantity: 5,
  },
  {
    id: 5,
    quantity: 3,
  },
];

export function addToCart() {
  console.log("add to card");

  let productId = product.getAttribute("data-product-id");

  addCartToArray(productId);
  updateCart();
}
