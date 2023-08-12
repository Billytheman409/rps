//function
function rps() {
//create variable and use random function to generate/set an answer for the computer
//create variable and use an input to capture the user's answer
    let userAns = prompt('Enter your choice of Rock, Paper or Scissors');
//if cancelled, send this message; if not, continue as planned
        if(userAns == null) {
            alert('Thank you for playing. You are welcome to play again at any time.');
            return
        }
        else{
            userAns = userAns.toUpperCase()
            console.log(userAns)
        };
//create variables to keep track of wins ties and losses
    var wins = 0;
    var ties = 0;
    var losses = 0;
//begin loop to manage a 5 game set
    for (let i=1; i<6; i++) {
//establish list of acceptable answers
    let ansArray = ['ROCK', 'PAPER', 'SCISSORS'];
    let pcAns = ansArray[Math.floor(Math.random() * ansArray.length)];
    console.log(pcAns);

//compare answers
        if(userAns == pcAns) {
            ties == ties++
            var response =('Tie.\nYou chose ' + userAns + ' and the computer chose ' + pcAns + '.\nYou have:\n  Won ' + wins + '\n  Lost ' + losses + '\n  Tied ' + ties)
        }
//else if pc answer equals "rock" and user answer equals "paper", create message that says "You win!"
        else if(pcAns == 'ROCK' && userAns == 'PAPER') {
            wins == wins++
            var response =('You win!\nYou chose ' + userAns + ' and the computer chose ' + pcAns + '.\nYou have:\n  Won ' + wins + '\n  Lost ' + losses + '\n  Tied ' + ties)
        }
//else if pc answer equals "rock" and use answer equals "scissors", create message that says "You lose. Play again."
        else if(pcAns == 'ROCK' && userAns == 'SCISSORS') {
            losses == losses++
            var response =('You lose.\nYou chose ' + userAns + ' and the computer chose ' + pcAns + '.\nYou have:\n  Won ' + wins + '\n  Lost ' + losses + '\n  Tied ' + ties)
        }
//else if pc answer equals "paper" and user answer equals "scissors", create message that says "You win!"
        else if(pcAns == 'PAPER' && userAns == 'SCISSORS') {
            wins == wins++
            var response =('You win!\nYou chose ' + userAns + ' and the computer chose ' + pcAns + '.\nYou have:\n  Won ' + wins + '\n  Lost ' + losses + '\n  Tied ' + ties)
        }
//else if pc answer equals "paper" and use answer equals "rock", create message that says "You lose. Play again."
        else if(pcAns == 'PAPER' && userAns == 'ROCK') {
            losses == losses++
            var response =('You lose.\nYou chose ' + userAns + ' and the computer chose ' + pcAns + '.\nYou have:\n  Won ' + wins + '\n  Lost ' + losses + '\n  Tied ' + ties)
        }
//else if pc answer equals "scissors" and user answer equals "rock", create message that says "You win!"
        else if(pcAns == 'SCISSORS' && userAns == 'ROCK') {
            wins == wins++
            var response =('You win!\nYou chose ' + userAns + ' and the computer chose ' + pcAns + '.\nYou have:\n  Won ' + wins + '\n  Lost ' + losses + '\n  Tied ' + ties)
        }
//else if pc answer equals "scissors" and use answer equals "paper", create message that says "You lose. Play again."
        else if(pcAns == 'SCISSORS' && userAns == 'PAPER') {
            losses == losses++
            var response =('You lose.\nYou chose ' + userAns + ' and the computer chose ' + pcAns + '.\nYou have:\n  Won ' + wins + '\n  Lost ' + losses + '\n  Tied ' + ties)
        } 
//if subsequent answer does not equal "rock" or "paper" or "scissors" create message "Please select 'Rock', 'Paper' or 'Scissors'
        else if(userAns !='ROCK' && userAns!='PAPER' && userAns!='SCISSORS') {
            var response =('Please enter a choice of "Rock" or "Paper" or "Scissors"');
//offset game iteration for a non-qualifying answer (still play 5 games with legitimate answers)
            i=i-1;
        }    
        else{
            var response =('You lose.\nYou chose ' + userAns + ' and the computer chose ' + pcAns + '.\n\rYou have:\n  Won ' + wins + '\n  Lost ' + losses + '\n  Tied ' + ties)
        };

//loop for 5 games
        if(i<5) {
            userAns = prompt(response + '\n\rEnter selection to play again.');
//message for user's cancellation
            if(userAns == null) {
                alert('Thank you for playing. You are welcome to play again at any time.');
                return;
            }
            else{
                userAns = userAns.toUpperCase();
            };
        }
        else{
            alert('Here are the results of your 5-rounds:\nFor your last game you chose ' + userAns + ' and the computer chose ' + pcAns + '\nYou:\n  Won ' + wins + '\n  Lost ' + losses + '\n  Tied ' + ties)
        }
    };
};
//initiate game function
rps();