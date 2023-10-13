//add event listener to Choose Your Weapon buttons
//store button selected in variable

ties = 0;
wins = 0;
losses = 0;

document.querySelectorAll('.weaponPics button').forEach(image => {
    image.addEventListener('click', () => {
        initUserAns = image.getAttribute('type');
        initUserTieAns = image.getAttribute('id')
        gameReset = document.querySelectorAll('.movePics button').forEach(image => {
                image.style.visibility = 'hidden'
        })
        rps() 
    })
})

function rps() {
//generate selection for pc
    //use array to establish list of acceptable answers. use all caps to standardize for comparison
    let pcArray = ['ROCK', 'PAPER', 'SCISSORS'];
//create variable and use random function to generate/set an answer for the computer
    let pcAns = pcArray[Math.floor(Math.random() * pcArray.length)];
//compare answers
//convert user answer from global to local
    let userAns = initUserAns
    let userTieAns = initUserTieAns
    if(userAns == pcAns) {
        ties == ties++
        rsltMsg = 'You selected ' + userAns + ' the pc also selected ' + pcAns + '. The result is a tie.'
        userAns = document.getElementById(parseInt(userTieAns,10) + 5)
        userAns.style.visibility = 'visible'
        pcAns = document.getElementById(parseInt(userTieAns,10) + 8)
        pcAns.style.visibility = 'visible'
    }
    else if(userAns == 'ROCK' && pcAns == 'SCISSORS') {
        wins == wins++
        rsltMsg =('You win!\nRock smashes Scissors')
        userAns = document.getElementById('5')
        userAns.style.visibility = 'visible'
        pcAns = document.getElementById('10')
        pcAns.style.visibility = 'visible'
    }    
    else if(userAns == 'PAPER' && pcAns == 'ROCK') {
        wins == wins++
        rsltMsg =('You win!\nPaper covers Rock')
        userAns = document.getElementById('6')
        userAns.style.visibility = 'visible'
        pcAns = document.getElementById('8')
        pcAns.style.visibility = 'visible'
    }
    else if(userAns == 'SCISSORS' && pcAns == 'PAPER') {
        wins == wins++
        rsltMsg =('You win!\nScissors cut Paper')
        userAns = document.getElementById('7')
        userAns.style.visibility = 'visible'
        pcAns = document.getElementById('9')
        pcAns.style.visibility = 'visible'
    }
    else if(userAns == 'ROCK' && pcAns == 'PAPER') {
        losses == losses++
        rsltMsg =('You lose!\nPaper covers Rock')
        userAns = document.getElementById('5')
        userAns.style.visibility = 'visible'
        pcAns = document.getElementById('9')
        pcAns.style.visibility = 'visible'
    }    
    else if(userAns == 'PAPER' && pcAns == 'SCISSORS') {
        losses == losses++
        rsltMsg =('You lose!\nScissors cut Paper')
        userAns = document.getElementById('6')
        userAns.style.visibility = 'visible'
        pcAns = document.getElementById('10')
        pcAns.style.visibility = 'visible'
    }    
    else if(userAns == 'SCISSORS' && pcAns == 'ROCK') {
        losses == losses++
        rsltMsg =('You lose!\nRock smashes Scissors')
        userAns = document.getElementById('7')
        userAns.style.visibility = 'visible'
        pcAns = document.getElementById('8')
        pcAns.style.visibility = 'visible'
    }    
    console.log(rsltMsg)
};