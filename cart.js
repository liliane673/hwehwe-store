
import {setStorage, getStorage} from "./localstorage.js"


export function addCartToArray(productId){
    let cartArray = getStorage() || []
    let isQuantityAdded = false

    if (cartArray.length > 0) {
        cartArray.map(cartItem => {
            if(cartItem['name'] == productId){;
                cartItem['quantity']+=1
                isQuantityAdded = true
            }
            return cartArray
        });
    }

    if (!isQuantityAdded) {
        cartArray.push({
            name:productId,
            quantity:1,
        });
    }
    setStorage(cartArray);
}

export function updateCart(){
    let cartArray = getStorage() || []
    let cartQuantity=0;
    cartArray.forEach(item => {
        cartQuantity+=item.quantity;
    })

    document.querySelector('.cart-number').innerHTML=cartQuantity;

    console.log('cartQuantity',cartQuantity)

}

export function addToCart(productId) {
  console.log("add to card");

    addCartToArray(productId);
    updateCart();
}

export function removeFromCart(productId){
    let cartArray = getStorage() || []
    let newCartArray=[];

    cartArray.forEach((eachCart) =>{
        if(Number(eachCart.name)!==Number(productId)){
            newCartArray.push(eachCart);
        }
    });
    console.log(newCartArray, "<<<< new cart")
    setStorage(newCartArray);
}

