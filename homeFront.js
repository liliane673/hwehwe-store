//Ngasih liat kategori yang dipiilih
let kategori = document.getElementsByClassName("produk-kategori");
for (let i = 0; i < kategori.length; i++) {
  kategori[i].addEventListener("click", () => {
    for (let j = 0; j < kategori.length; j++) {
      kategori[j].style = "";
    }
    kategori[i].style =
      "color: #f27c05; font-weight:500; border-bottom: 4px solid #f27c05;";
  });
}

//Sticky Header
window.onscroll = function () {
  myFunction();
};
var header = document.getElementsByClassName("header")[0];
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// let keranjangButton = document.getElementsByClassName(`keranjang-button`)
// for(let i = 0; i < keranjangButton.length; i++){
//     keranjangButton[i].addEventListener("mousedown",() =>{
//         keranjangButton[i].style = "background-color: #ffc56e"
//     })
//     keranjangButton[i].addEventListener("mouseup",() =>{
//         keranjangButton[i].style = "background-color: #f27c05"
//     })
//     keranjangButton[i].addEventListener('mouseleave', () => {
//         if (!keranjangButton[i].matches(':hover')) {
//             keranjangButton[i].style.backgroundColor = '#f27c05';
//         }
//     });
// }

//-------------------FRONTEND----------------------------
//--------------------BACKEND----------------------------

import { allElectronicsData } from "./list-database.js";

console.log(`BackEnd masuk`);

// console.log(allElectronicsData);

function renderType() {
  let typeObject = {};
  for (let i = 0; i < allElectronicsData.length; i++) {
    let eachData = allElectronicsData[i];
    // console.log(eachData.type);

    if (typeObject[eachData.type] === undefined) {
      typeObject[eachData.type] = 0;
    }
    typeObject[eachData.type]++;
  }
  console.log(typeObject);

  let renderType = document.getElementById("render-type");
}
renderType();

console.log(`renderType() masuk`);

function renderCard() {
  let renderCard = document.getElementById("renderCard");
  // console.log(renderCard);

  renderCard.innerHTML = "";

  for (let i = 0; i < allElectronicsData.length; i++) {
    renderCard.innerHTML +=
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
            <div class="keranjang-button">

                Tambah Keranjang


        </div>
        </div>
        `;
  }
}
renderCard();
