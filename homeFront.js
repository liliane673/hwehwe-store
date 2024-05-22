let kategori = document.getElementsByClassName("produk-kategori")
console.log(kategori.length)
for(let i = 0; i < kategori.length; i++){
    kategori[i].addEventListener("click", () =>{
        for(let j = 0; j < kategori.length; j++){
            kategori[j].style = ""
        }
        kategori[i].style = "color: #f27c05; font-weight:500; border-bottom: 4px solid #f27c05;";
    })
}


