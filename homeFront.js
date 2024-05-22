

/*function untuk munculin tipe-tipe barang di header ==> dipakai untuk filter tipe barang */
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
    // console.log(typeObject)

    let renderType=document.getElementById("render-type");
    renderType.innerHTML='';

    for(let type in typeObject){
        renderType.innerHTML+=
        `
        <div class="produk-kategori">
            ${type}
        </div>
        `
    }
}
renderType();

/*function untuk munculin barang di masing2 card */
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
            <button class="keranjang add-to-cart" onclick="addToCart(this)" data-product-id= "${allElectronicsData[i].id}">Tambah Keranjang</button>
        </div>
        `
    }
}

renderCard();

let cartArray=[];
function addCartToArray(productId){
    let matching;
    cartArray.forEach(item => {
        if(item.name===productId){
            matching=item;
        }
    });

    if(matching){
       matching.quantity+=1;
    }else{
        cartArray.push({
            name:productId,
            quantity:1,
        });
    };
    console.log(cartArray);
}

function updateCart(){
    let cartQuantity=0;
    cartArray.forEach(item => {
        cartQuantity+=item.quantity;
    })
    console.log('cartQuantity',cartQuantity)
}

function addToCart(product){    
    console.log('add to card');

    let productId=product.getAttribute("data-product-id");

    addCartToArray(productId);
    updateCart();
}




