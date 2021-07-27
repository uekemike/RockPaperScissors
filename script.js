
//global variables;
var btn = document.getElementById("startGame");
var userChoice ="";
var computerChoice ="";

//playgames function;

function playGame() {
    //prompt user for choice of rock papper or scissors (R, P, S)
    userChoice = prompt("Enter R, P, or S");
    userChoice = userChoice.toUpperCase();
    generateComputerChoice();
}

//create fuction to generate the computer choices
 function generateComputerChoice(){
     //console.log("Computer Choice")
     computerChoice = Math.floor(Math.random()*3);
     console.log(computerChoice)
     if(computerChoice === 0){
         computerChoice = "R"

     };
     if(computerChoice === 1){
         computerChoice = "P"

     };
     if(computerChoice === 2){
         computerChoice = "S"

     };
     console.log("computer choice " + '' + computerChoice)
     checkWinner();
 }


 function checkWinner(){
  console.log("user choice " + '' + userChoice);
 if (userChoice === computerChoice){
     
    console.log("Its a tie");

 }
 if (userChoice === "R" &&  computerChoice === "P"){
     
    console.log("Computer Wins");

 }
 if (userChoice === "R" &&  computerChoice === "S"){
     
    console.log("You win");

 }
 if (userChoice === "P" &&  computerChoice === "R"){
     
    console.log("You win");

 }
 if (userChoice === "S" &&  computerChoice === "R"){
     
    console.log("Computer Wins");

 }
 if (userChoice === "P" &&  computerChoice === "S"){
     
    console.log("Computer Wins");

 }
 if (userChoice === "S" &&  computerChoice === "P"){
     
    console.log("You Wins");

 }
}

//eventlisteners
btn.addEventListener("click", playGame);



   
