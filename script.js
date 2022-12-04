let player_choice;
let computer_choice;
let player_wins = 0;
let computer_wins = 0;

function random_choice() {
    number=Math.floor(Math.random()*3+1)
    if(number == 1){
        return("rock")
    } else if(number == 2){
        return("paper")
    } else{
        return("scissors")
    }
}

console.log("Today you will play a game of rock-paper-scissors. It will consist of five rounds, and the most wins wins overall.")

for(i=0; i<5; i++){
    player_choice = prompt("Choose rock, paper, or scissors:");
    computer_choice = random_choice();

    do {
        if(player_choice.toLowerCase()==computer_choice){
            console.log("Tie game!")
            i--;
            break
        }
    
        if(player_choice.toLowerCase()=="rock"){
            if(computer_choice=="paper"){
                console.log("You lose!")
                computer_wins++;
            } else {
                console.log("You win!")
                player_wins++;
            }
        } else if(player_choice.toLowerCase()=="paper"){
            if(computer_choice=="scissors"){
                console.log("You lose!")
                computer_wins++;
            } else {
                console.log("You win!")
                player_wins++;
            }
        } else if(player_choice.toLowerCase()=="scissors"){
            if(computer_choice=="rock"){
                console.log("You lose!")
                computer_wins++;
            } else{
                console.log("You win!")
                player_wins++;
            }
        } else{
            player_choice = prompt("You did not select one of the viable choices: rock, paper, or scissors. Please choose one of these.");
        }
    } while(!(player_choice.toLowerCase()=="rock" || player_choice.toLowerCase()=="paper") || player_choice.toLowerCase()=="scissors");

    console.log("You: " + player_wins)
    console.log("You: " + computer_wins)
}

if(player_wins > computer_wins){
    console.log("Congragulations, you have won!")
} else{
    console.log("Unfortunately, you lost. Better luck next time!")
}