var question = document.querySelectorAll(".diff")
var begginersQuizForm = document.forms[0];
var totalScore = document.querySelector(".score");
var submitBtn = document.querySelector("#submit");

var correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3" ];

let score = 0;

begginersQuizForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("sbdj")
    var data = new FormData(begginersQuizForm);
    console.log("sjdj")

    let index = 0;

    for(let entry of data){
        if(entry[1] == correctAns[index]){
            question[index].style.backgroundColor = "lightgreen";
            score++;
        }

        else{
            question[index].style.backgroundColor = "red";
    
        }

        index++;
    }

    totalScore.innerText = score;

    submitBtn.style.display = "none";

})
