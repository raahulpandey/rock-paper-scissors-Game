let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const cmptscorepara = document.querySelector("#computerscore");

const getComputerchoice = () => {
    const option=["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

//draw function
const drawgame = () => {
    msg.innerText="Game Draw! Play again";
    msg.style.backgroundColor = "#081b31";
}

//showWinnerfunction
const shoWinner = (userwin, userchoice, computerchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerscore++;
        cmptscorepara.innerText=computerscore; 
        msg.innerText = `You Lose! ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);

    //togeneratecomputerchoice
    const computerchoice = getComputerchoice();
    console.log("computer choice = ",computerchoice);

    if(userchoice === computerchoice) {
        //draw
        drawgame(); 
    } else {
        let userwin = true;
        if(userchoice === "rock") {
            //paper , scissor
            userwin = computerchoice === "paper" ? false : true;
        } else if(userchoice === "paper") {
            //scissor , rock
            userwin = computerchoice === "scissors" ? false : true;
        } else {
            //paper , rock
            userwin = computerchoice === "rock" ? false : true;
        }
        shoWinner(userwin,userchoice,computerchoice);
    }

}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})