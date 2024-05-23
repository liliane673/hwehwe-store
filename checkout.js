import {cartArray } from "./cart.js";
import {allElectronicsData} from "./list-database.js"


function renderTrolleyCard(){
    let cartSummary='';

    let totalPrice=0;

    for(let i=0; i<cartArray.length; i++){
        let eachData=cartArray[i];
        let eachId=eachData.id;
        
        let matchingProduct;
        for(let i=0; i<allElectronicsData.length; i++){
            if(allElectronicsData[i].id===eachId){
                matchingProduct=allElectronicsData[i];
            }
        }
        totalPrice+=matchingProduct.price * cartArray[i].quantity
        // console.log(totalPrice);
        // console.log(matchingProduct);

        cartSummary+=
        `
        <tr class="table-cart">
            <td>
            <div class="cart-info">
                <img
                src="${matchingProduct.image}
                alt=""
                />
                <div>
                <p>${matchingProduct.title}</p>
                <small>Price: Rp ${Intl.NumberFormat().format(matchingProduct.price)}</small>
                <br />
                <!-- <a href="" class="btn1" onclick="">Remove</a> -->
                <button class="btn1" onclick="">Remove</button>
                </div>
            </div>
            </td>

            <td>
            <div class="d-flex">
                <div>
                <button
                    type="button"
                    class="px-2 rounded-start text-white cursor-pointer text-lg hover"
                    style="font-size: 18px; background-color: #1ec88a"
                    onclick=""
                >
                    -
                </button>
                <span id="valueQty" class="px-1">${cartArray[i].quantity}</span>
                <button
                    type="button"
                    class="px-1 rounded-end text-white cursor-pointer"
                    style="font-size: 18px; background-color: #1ec88a"
                    onclick=""
                >
                    +
                </button>
                </div>
            </div>
            </td>
            <td>Rp ${Intl.NumberFormat().format(matchingProduct.price * cartArray[i].quantity)}</td>
        </tr>
        `;
        
    }
    document.querySelector('.table-cart').innerHTML=cartSummary;
    // console.log(cartSummary);

    document.querySelector('.total-all-price').innerHTML=`Rp ${Intl.NumberFormat().format(totalPrice)}`;
}
renderTrolleyCard();