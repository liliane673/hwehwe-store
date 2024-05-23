import {setStorage, getStorage} from "./localstorage.js"
import {allElectronicsData} from "./list-database.js"

export function updateCheckoutPrice() {
    let totalPrice=0;
    let cartArray = getStorage() || []
    console.log(cartArray, "<<<< inside total ceheckout");
    for (let i = 0; i < cartArray.length; i++) {
        let eachData = cartArray[i];
        let eachId = eachData.name;
        // console.log(eachData, "<< checkout price total");

        let matchingProduct;
        for (let i = 0; i < allElectronicsData.length; i++) {
            if (allElectronicsData[i].id === +eachId) {
                matchingProduct = allElectronicsData[i];
                // console.log(matchingProduct);
            }
        }
        totalPrice += Number(matchingProduct.price) * Number(cartArray[i].quantity);

    }
    document.querySelector('.total-all-price').innerHTML=`Rp ${Intl.NumberFormat().format(totalPrice)}`;
}