const inputAngle = document.querySelectorAll(".inputAngle");
const button = document.querySelector("#submitBtn");
const formTriangle = document.querySelector("#formTriangle");
const output = document.querySelector("#isTriangle");

var angles=[];

button.addEventListener('click', ()=>{
    for(i=0;i<inputAngle.length;i++){
    angles[i] = Number(inputAngle[i].value);
    }

    let sum = 0;

    angles.map((angle)=>{
        sum = sum + angle;
    })

    if(sum==180){
        output.innerText = "Yess! these angles can make a triangle";
    }

    else{
        output.innerText = "Noo! these angles cannot make a triangle. Please try another set.."
    }
})


