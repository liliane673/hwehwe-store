
// import { allElectronicsData } from "./list-database.js";


 export function renderType(allElectronicsData) {
    console.log(allElectronicsData);

    if(allElectronicsData!== undefined){
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
  }

export function renderCard(allElectronicsData) {
  if(allElectronicsData!== undefined){
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
                        <span class="harga">${Intl.NumberFormat().format(allElectronicsData[i].price)}</span>
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
                <div 
                data-product-id="${allElectronicsData[i].id}"
                class="keranjang-button cursor-pointer button-cart">
    
                    Tambah Keranjang
    
    
            </div>
            </div>
            `;
    }

  }
    
}


//showCards Function
export function showCards(allElectronicsData) {
  renderType(allElectronicsData);
  renderCard(allElectronicsData);
}



