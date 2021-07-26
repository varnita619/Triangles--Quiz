var inputSide = document.querySelectorAll(".inputSide");
let lengthA, lengthB;
var output = document.querySelector(".hypShowHere");
var submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener('click', ()=>{
    lengthA = Number(inputSide[0].value);
    lengthB = Number(inputSide[0].value);

    output.innerText = Math.sqrt((lengthA*lengthA) + (lengthB*lengthB));
})
