export function setStorage(arr){
    localStorage.setItem('cart', JSON.stringify(arr));
}

export function getStorage() {
    return JSON.parse(localStorage.getItem('cart'))
}