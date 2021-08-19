
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
     //document.write("Computer Choice")
     computerChoice = Math.floor(Math.random()*3);
     //document.write(computerChoice + " " )
     if(computerChoice === 0){
         computerChoice = "R"

     };
     if(computerChoice === 1){
         computerChoice = "P"

     };
     if(computerChoice === 2){
         computerChoice = "S"

     };
     document.write("Computer choice is: " + "  " + computerChoice +"<br>")
     checkWinner();
 }


 function checkWinner(){
  document.write("You Chose:  " + "  " +  userChoice +"<br>");
 if (userChoice === computerChoice){
     
    document.write(" Its a tie" +"<br>");

 }
 if (userChoice === "R" &&  computerChoice === "P"){
     
    document.write(" Computer Wins");

 }
 if (userChoice === "R" &&  computerChoice === "S"){
     
    document.write(" You win");

 }
 if (userChoice === "P" &&  computerChoice === "R"){
     
    document.write(" You win");

 }
 if (userChoice === "S" &&  computerChoice === "R"){
     
    document.write(" Computer Wins");

 }
 if (userChoice === "P" &&  computerChoice === "S"){
     
    document.write(" Computer Wins");

 }
 if (userChoice === "S" &&  computerChoice === "P"){
     
    document.write(" You Wins");

 }
}

//eventlisteners
btn.addEventListener("click", playGame);



   
