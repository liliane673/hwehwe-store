import {updateCart, addCartToArray} from './homeFront.js';

export let cartArray = JSON.parse(localStorage.getItem('cart'));

if(!cartArray || cartArray.length===0){
    cartArray=[
        {
            id:4,
            quantity:1
        },
        {
            id:10,
            quantity:5
        },
        {
            id:5,
            quantity:10
        }
    ];
}

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cartArray));
}

export function addToCart(productId){    
    console.log('add to card');

    // let productId=product.getAttribute("data-product-id");

    addCartToArray(productId);
    updateCart();

    saveToStorage();
}

export function removeFromCart(productId){
    // console.log('remove')
    let newCartArray=[];

    cartArray.forEach((eachCart) =>{
        if(Number(eachCart.id)!==Number(productId)){
            newCartArray.push(eachCart);
        }
    });
    // console.log('newCartArray', newCartArray)

    cartArray=newCartArray;

    saveToStorage();
}


