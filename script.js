//for basic section billing
// plus button
let costBasic = 199;
let roomCount = 1;
let addBasic = document.querySelector("#addBasic");
addBasic.onclick = () => {
    let bill = document.querySelector("#billBasic");
    let roomNum = document.querySelector("#roomNum");
    console.log(costBasic);
    costBasic += 199;
    roomCount += 1;
    bill.innerText = `$ ${costBasic}`;
    roomNum.innerText = `${roomCount} room`;
}

//minus button
let minusBasic = document.querySelector("#minusBasic");
minusBasic.onclick = () => {
    let bill = document.querySelector("#billBasic");
    console.log(costBasic);
    if (roomCount > 1) {
        costBasic -= 199;
        roomCount -= 1;
    }
    bill.innerText = `$ ${costBasic}`;
    roomNum.innerText = `${roomCount} room`;
}


//for pro section billing
// Plus button
let costPro = 249;
let roomCountp = 1;
let addPro = document.querySelector("#addPro");
addPro.onclick = () => {
    let bill = document.querySelector("#billPro");
    let roomNum = document.querySelector("#roomNumP");
    console.log(costPro);
    costPro += 249;
    roomCountp += 1;
    bill.innerText = `$ ${costPro}`;
    roomNum.innerText = `${roomCountp} room`;
}

//Minus button 

let minusPro = document.querySelector("#minusPro");
minusPro.onclick = () => {
    let bill = document.querySelector("#billPro");
    let roomNum = document.querySelector("#roomNumP");
    console.log(costPro);
    if (roomCountp > 1) {
        costPro -= 249;
        roomCountp -= 1;
    }
    bill.innerText = `$ ${costPro}`;
    roomNum.innerText = `${roomCountp} room`;
}

//Thank you message after signup
//for basic section

let signupBasic = document.querySelector("#signupBasic");
signupBasic.onclick = () => {
    console.log("hi")
    let thanksBasic = document.querySelector("#thanksBasic");
    thanksBasic.innerText = `Thank you for choosing ${roomCount} room`;
}

//for pro section

let signupPro = document.querySelector("#signupPro");
signupPro.onclick = () => {
    console.log("hi");
    let thanksPro = document.querySelector("#thanksPro");
    thanksPro.innerText = `Thank you for choosing ${roomCountp} room`;
} 