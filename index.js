let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const playGame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    // Generate computer choice
    const  CompChoice=genCompChoice();
    console.log("computer choice = ",CompChoice);

};
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("Choice was clicked",userchoice);

    })
});