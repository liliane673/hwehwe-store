
import {allElectronicsData} from "./list-database.js"
import {setStorage, getStorage} from "./localstorage.js"
import {updateCheckoutPrice} from "./price.js"
import {removeFromCart} from "./cart.js"

export function renderTrolleyCard() {
  let cartArray = getStorage()
  console.log(cartArray, "\n\n\n");

  let cartSummary=document.querySelector(".table-cart");
  // empty all container first before re-rendering cart list
  cartSummary.innerHTML=""

  for (let i = 0; i < cartArray.length; i++) {
      let eachData = cartArray[i];
      let eachId = eachData.name;

      let matchingProduct;
      // console.log(allElectronicsData);
      for (let i = 0; i < allElectronicsData.length; i++) {
        if (allElectronicsData[i].id === eachId) {
            matchingProduct = allElectronicsData[i];
        }
      }
      console.log(matchingProduct, "mprod");
      cartSummary.innerHTML+=
      `
          <tr class="item-container-${matchingProduct.id}">
            <td>
              <div class="cart-info">
                <img
                  src="${matchingProduct.image}"
                  alt=""
                />
                <div>
                  <p>${matchingProduct.title}</p>
                  <small>Price: Rp ${Intl.NumberFormat().format(
                      matchingProduct.price
                      )}</small>
                  <br />
                  <button class="btn1 delete-cart " data-product-id="${matchingProduct.id}">Remove</button>
              </div>
                </div>
              </div>
            </td>

            <td>
              <div class="d-flex">
                <div>
                  <button
                    type="button"
                    data-product-id="${matchingProduct.id}"
                    class="px-2 rounded-start text-white cursor-pointer text-lg button1 button-minus-quantity"
                    onclick=""
                  >
                    -
                  </button>
                  <span id="valueQty-${matchingProduct.id}" class="px-1">${cartArray[i].quantity}</span>
                  <button
                    type="button"
                    data-product-id="${matchingProduct.id}"
                    class="px-1 rounded-end text-white cursor-pointer button1 button-plus-quantity"
                    onclick=""
                  >
                    +
                  </button>
                </div>
              </div>
            </td>
            <td>Rp <span id="each-total-${matchingProduct.id}" data-each-price="${matchingProduct.price}">
            ${Intl.NumberFormat().format(
              matchingProduct.price * cartArray[i].quantity)}
            </span>
            </td>
          </tr>
      `
  }
  
  
  document.querySelectorAll('.delete-cart').forEach(event => {
    event.addEventListener('click',() => {
        let productId= Number(event.dataset.productId);
        console.log(productId, typeof productId);

        removeFromCart(productId);
        renderTrolleyCard()
        updateCheckoutPrice()
    } )
  });
  
  // minus button listener 
  document.querySelectorAll('.button-minus-quantity').forEach(event => {
    event.addEventListener('click',() => {
        let productId= Number(event.dataset.productId);
        updateQuantityStorage('minus', productId);
    } )
  });


  document.querySelectorAll('.button-plus-quantity').forEach(event => {
    event.addEventListener('click',() => {
        let productId= Number(event.dataset.productId);
        updateQuantityStorage('plus', productId);
    } )
  });

}
        
        
function updateQuantityStorage(input, productId){
  console.log("inside update q storage for product id", productId);
  let cartArray = getStorage()
  let eachDataQuantity
      
  for (let i = 0; i < cartArray.length; i++) {
    let eachData = cartArray[i];
    let eachId = eachData.name;
    
    if(eachId === productId){
      console.log(eachId, productId, "comparison");

      if(input==='minus'){
        eachData.quantity--;
        eachDataQuantity=eachData.quantity;
        
        updateButtonNum(productId, eachDataQuantity)
        let eachPrice = document.querySelector(`#each-total-${eachData.name}`).dataset.eachPrice
        updateTotalEach(eachData.name, eachData.quantity, eachPrice)
        setStorage(cartArray)

        if(eachDataQuantity===0){
          removeFromCart(productId);
          let containerItem= document.querySelector(`.item-container-${productId}`)
          containerItem.remove()
        }

      } else{
        eachData.quantity++;
        eachDataQuantity=eachData.quantity;
        
        updateButtonNum(productId, eachDataQuantity)
        let eachPrice = document.querySelector(`#each-total-${eachData.name}`).dataset.eachPrice
        updateTotalEach(eachData.name, eachData.quantity, eachPrice)
        setStorage(cartArray)
      }
      
      console.log(cartArray, "after update quantity <<<<<<<<<");
    }

  }

  updateCheckoutPrice()
}


function updateButtonNum(productId, val) {
  document.querySelector(`#valueQty-${productId}`).innerHTML = val
}

function updateTotalEach(productId, quantity, price){
  document.querySelector(`#each-total-${productId}`).innerText = Intl.NumberFormat().format(quantity * price)
}
