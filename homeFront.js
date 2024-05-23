import {allElectronicsData} from "./list-database.js";
import {addToCart} from "./cart.js"

/*function untuk munculin tipe-tipe barang di header ==> dipakai untuk filter tipe barang */
// function renderType(){
//     let typeObject={};
//     for(let i=0; i<allElectronicsData.length; i++){
//         let eachData=allElectronicsData[i];
//         // console.log(eachData.type);
    
//         if(typeObject[eachData.type]===undefined){
//             typeObject[eachData.type]=0;
//         }
//         typeObject[eachData.type]++;
//     }
//     // console.log(typeObject)

//     let renderType=document.getElementById("render-type");
//     renderType.innerHTML='';

//     for(let type in typeObject){
//         renderType.innerHTML+=
//         `
//         <div class="produk-kategori">
//             ${type}
//         </div>
//         `
//     }
// }
// renderType();

/*function untuk munculin barang di masing2 card */
// function renderCard(){
//     let renderCard=document.getElementById("renderCard");
//     // console.log(renderCard);

//     renderCard.innerHTML='';

    for(let i=0; i<allElectronicsData.length; i++){
        renderCard.innerHTML+=
        // `<img src="${allElectronicsData[i].image}"></img>`
        `
        <div class="card">
            <div class="image-container">
                <img src="${allElectronicsData[i].image}" class="image">
            </div>
            <div class="text-container">
                <div class ="nama-perbarang">
                    ${allElectronicsData[i].title}
                </div>
                <div class="harga-perbarang">
                    <span class="rupiah">Rp</span>
                    <span class="harga">${allElectronicsData[i].price}</span>
                </div>
                <div class="centered-div">
                    <span class="brand-perbarang">
                        ${allElectronicsData[i].brand}
                    </span>
                    <span class="tipe-perbarang">
                        ${allElectronicsData[i].type}
                    </span>
                </div>
            </div>
            <button class="keranjang">Tambah Keranjang</button>
        </div>
        `
    }

}
renderCard();



