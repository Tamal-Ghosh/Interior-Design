/* ========================================
   INTERIOR DESIGN PRICING CALCULATOR
   Interactive JavaScript for Basic & Pro Packages
======================================== */

// ========================================
// BASIC PACKAGE FUNCTIONALITY
// ========================================

// Basic package variables
let costBasic = 199;
let roomCount = 1;

// Plus button for basic package
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

// Minus button for basic package
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

// ========================================
// PRO PACKAGE FUNCTIONALITY
// ========================================

// Pro package variables
let costPro = 249;
let roomCountp = 1;

// Plus button for pro package
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

// Minus button for pro package
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

// ========================================
// SIGNUP FUNCTIONALITY & THANK YOU MESSAGES
// ========================================

// Thank you message for basic package signup
let signupBasic = document.querySelector("#signupBasic");
signupBasic.onclick = () => {
    console.log("hi")
    let thanksBasic = document.querySelector("#thanksBasic");
    thanksBasic.innerText = `Thank you for choosing ${roomCount} room`;
}

// Thank you message for pro package signup
let signupPro = document.querySelector("#signupPro");
signupPro.onclick = () => {
    console.log("hi");
    let thanksPro = document.querySelector("#thanksPro");
    thanksPro.innerText = `Thank you for choosing ${roomCountp} room`;
} 