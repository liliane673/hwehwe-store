import { allElectronicsData } from "./list-database.js";

//showCards Function
function showCards(allElectronicsData) {
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
    // console.log(typeObject)

    let renderType = document.getElementById("render-type");
  }
  renderType();

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
                <div class="keranjang-button cursor-pointer">
    
                    Tambah Keranjang
    
    
            </div>
            </div>
            `;
    }
  }
  renderCard();
}

showCards(allElectronicsData);

//Ngasih liat kategori yang dipiilih
let filteredElectronicsData = [];
let iskategoriClicked = `false`;

let kategori = document.getElementsByClassName("produk-kategori");
let chosenKategori = 4;
for (let i = 0; i < kategori.length; i++) {
  kategori[i].addEventListener("click", () => {
    for (let j = 0; j < kategori.length; j++) {
      kategori[j].style = "";
    }
    if (iskategoriClicked == `false` || iskategoriClicked != i) {
      kategori[i].style =
        "color: #f27c05; font-weight:500; border-bottom: 4px solid #f27c05;";
      iskategoriClicked = i;
      chosenKategori = i;
      console.log(chosenKategori);
    } else if (iskategoriClicked == i) {
      kategori[i].style = "";
      iskategoriClicked = `false`;
      chosenKategori = 4;
    }

    //filtering
    let typeKategori = [`Handphone`, `Laptop`, `TV`, `SmartWatch`];
    console.log(typeKategori[chosenKategori]);

    filteredElectronicsData = [];
    for (let i = 0; i < allElectronicsData.length; i++) {
      if (typeKategori[chosenKategori] === allElectronicsData[i].type) {
        filteredElectronicsData.push(allElectronicsData[i]);
      }
    }

    if (typeKategori[chosenKategori] === undefined) {
      showCards(allElectronicsData);
    } else {
      showCards(filteredElectronicsData);
    }
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

//SEARCH FUNCTION
function getWordsFromSentence(title) {
  let hasilWords = [];
  let temp = "";
  for (let i = 0; i <= title.length; i++) {
    if (title[i] == " " || title[i] === undefined) {
      hasilWords.push(temp);
      temp = "";
    } else temp += title[i];
  }
  return hasilWords;
}

function dekonstruksiData(allElectronicsData) {
  let hasil = {};
  for (let i = 0; i < allElectronicsData.length; i++) {
    hasil[allElectronicsData[i].id] = [];
    hasil[allElectronicsData[i].id].push(allElectronicsData[i].brand);
    hasil[allElectronicsData[i].id].push(allElectronicsData[i].type);
    let hasilPemisahanTitle = getWordsFromSentence(allElectronicsData[i].title);
    for (let j = 0; j < hasilPemisahanTitle.length; j++) {
      hasil[allElectronicsData[i].id].push(hasilPemisahanTitle[j]);
    }
  }
  return hasil;
}

function hasilSearch(input) {
  let data = dekonstruksiData(allElectronicsData);
  let hasilFilterSearch = [];
  for (let key in data) {
    for (let i = 0; i < data[key].length; i++) {
      if (input == data[key][i]) {
        for (let j = 0; j < allElectronicsData.length; j++) {
          if (allElectronicsData[j].id == key) {
            hasilFilterSearch.push(allElectronicsData[j]);
          }
        }
      }
    }
  }
  return hasilFilterSearch;
}

let searchButton = document.getElementsByClassName("search-button")[0];
searchButton.addEventListener("click", () => {
  let input = document.getElementsByClassName("search-bar")[0].value;
  let dataHasilSearch = hasilSearch(input);
  showCards(dataHasilSearch);
});

