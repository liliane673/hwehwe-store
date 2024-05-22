// let kategori = document.getElementsByClassName("produk-kategori")
// console.log(kategori.length)
// for(let i = 0; i < kategori.length; i++){
//     kategori[i].addEventListener("click", () =>{
//         for(let j = 0; j < kategori.length; j++){
//             kategori[j].style = ""
//         }
//         kategori[i].style = "color: #f27c05; font-weight:500; border-bottom: 4px solid #f27c05;";
//     })
// }


// console.log(allElectronicsData);

function renderType(){
    let typeObject={};
    for(let i=0; i<allElectronicsData.length; i++){
        let eachData=allElectronicsData[i];
        // console.log(eachData.type);
    
        if(typeObject[eachData.type]===undefined){
            typeObject[eachData.type]=0;
        }
        typeObject[eachData.type]++;
    }
    console.log(typeObject)

    let renderType=document.getElementById("render-type");
}
renderType();


function renderCard(){
    let renderCard=document.getElementById("renderCard");
    // console.log(renderCard);

    renderCard.innerHTML='';

    for(let i=0; i<allElectronicsData.length; i++){
        renderCard.innerHTML+=
        // `<img src="${allElectronicsData[i].image}"></img>`
        `
        <div class="card">
            <div class="image-container">
                <img src="${allElectronicsData[i].image}"></img>
            </div>
            <div class="text-container">
                <div class ="nama-perbarang">
                    ${allElectronicsData[i].title}
                </div>
                <div class="harga-perbarang">
                    ${allElectronicsData[i].price}
                </div>
                <div class="brand-perbarang">
                    ${allElectronicsData[i].brand}
                </div>
                <div class="tipe-perbarang">
                    ${allElectronicsData[i].type}
                </div>
            </div>
            <button class="keranjang">Tambah Keranjang</button>
        </div>
        `
    }

}
renderCard();



