const inputSide = document.querySelectorAll(".inputSide");
const submitBtn = document.querySelector("#submitBtn");
const output = document.querySelector(".output");

var sides=[];
var tempSide;

submitBtn.addEventListener('click',()=>{
    for(i=0;i<inputSide.length;i++){
        sides[i]= Number(inputSide[i].value);
    }

    if(sides[0] == sides[1] && sides[1] == sides[2]){
        output.innerText = "These sides make an Equilateral Triangle"
    }

    else if(sides[0] == sides[1] || sides[1] == sides[2] || sides[2] == sides[0]){
        output.innerText = "These sides make an Isosceles Triangle"
    }

    else{
        output.innerText = "These sides make an Scalene Triangle"
    }

   
})