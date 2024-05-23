export function setStorage(arr){
    localStorage.setItem('cart', JSON.stringify(arr));
}

export function getStorage() {
    return JSON.parse(localStorage.getItem('cart'))
}

export function setUserStorage(obj){
    localStorage.setItem('user', JSON.stringify(obj));
}

export function getUserStorage() {
    return JSON.parse(localStorage.getItem('user'))
}