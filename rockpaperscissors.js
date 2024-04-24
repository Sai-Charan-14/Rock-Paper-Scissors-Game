 let Userscore = 0;
 let Computerscore = 0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userscorepara = document.querySelector("#user-score");
 const compscorepara = document.querySelector("#computer-score");

const genComputerchoice = () => {
    const options = ["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
 }

 const drawgame = () => {
    msg.innerText= "Game Was Draw! Play Again.";
    msg.style.backgroundColor = "#081b31";
 };

 const showWinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        Userscore++;
        userscorepara.innerText = Userscore;
        msg.innerText= `You Win :) Your ${userchoice} Beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else{
        Computerscore++;
        compscorepara.innerText = Computerscore;
        msg.innerText= `You Lose :( ${compchoice} Beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
 }

 const playgame = (userchoice) => {
    //generates computer choice
    const compchoice = genComputerchoice();
    
    if (userchoice === compchoice) {
        //Draw Game
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "Rock"){
            //Scissors,Paper
            userwin = compchoice === "Paper" ? false : true;
        } else if (userchoice === "Paper"){
            //Rock,Scissors
            userwin = compchoice === "Scissors" ? false : true;
        } else {
            //Rock,paper
            userwin = compchoice === "Rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
   }
 };

 choices.forEach ((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
        
    })
 })